import { chromium } from 'playwright-core';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const projectsDir = 'src/content/projects';
const viewport = { width: 1200, height: 900 };

function frontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  return Object.fromEntries(
    match[1]
      .split('\n')
      .map((line) => line.match(/^([^:#]+):\s*(.*)$/))
      .filter(Boolean)
      .map(([, key, value]) => [key.trim(), value.trim().replace(/^['"]|['"]$/g, '')])
  );
}

function setFrontmatterValue(markdown, key, value) {
  if (new RegExp(`^${key}:`, 'm').test(markdown)) {
    return markdown.replace(new RegExp(`^${key}:.*$`, 'm'), `${key}: ${value}`);
  }
  return markdown.replace(/^---\n/, `---\n${key}: ${value}\n`);
}

async function maybeDismissOverlays(page) {
  const labels = ['Got it!', 'Got it', 'Accept', 'Accept all', 'Close', 'No thanks'];
  for (const label of labels) {
    const locators = [
      page.getByRole('button', { name: label }).first(),
      page.getByText(label, { exact: true }).first(),
    ];

    for (const locator of locators) {
      try {
        if (await locator.isVisible({ timeout: 1000 })) {
          await locator.click({ timeout: 2000 });
          await page.waitForTimeout(500);
        }
      } catch {
        // Ignore missing/non-clickable generic overlay controls.
      }
    }
  }
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
});

const context = await browser.newContext({
  viewport,
  deviceScaleFactor: 1,
  colorScheme: 'light',
});

for (const slug of await readdir(projectsDir)) {
  const markdownPath = join(projectsDir, slug, 'index.md');
  let markdown;
  try {
    markdown = await readFile(markdownPath, 'utf8');
  } catch {
    continue;
  }

  const data = frontmatter(markdown);
  if (!data.url) continue;

  const image = data.image || `./${slug}.png`;
  const imagePath = join(projectsDir, slug, image.replace(/^\.\//, ''));
  const page = await context.newPage();

  try {
    console.log(`Capturing ${data.title || slug}: ${data.url}`);
    const response = await page.goto(data.url, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    if (response && response.status() >= 400) {
      throw new Error(`HTTP ${response.status()}`);
    }
    await page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
    await page.waitForTimeout(1500);
    await maybeDismissOverlays(page);
    await page.screenshot({ path: imagePath, fullPage: false });

    if (!data.image) {
      await writeFile(markdownPath, setFrontmatterValue(markdown, 'image', image), 'utf8');
    }
  } catch (error) {
    console.warn(`Skipping ${slug}: ${error.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
