const fs = require('node:fs/promises');
const path = require('node:path');

const postsPath = path.resolve(__dirname, 'src/content/posts');

function kebabCase(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getPostPath(postName) {
  const date = new Date();
  const parts = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    kebabCase(postName),
  ];

  return parts.join('/');
}

function postTemplate(postName, postPath) {
  return [
    '---',
    `path: ${postPath}`,
    `date: ${JSON.stringify(new Date())}`,
    `title: ${postName}`,
    'tags: []',
    '---',
    '',
    'Lorem ipsum dolor sit amet',
    '',
  ].join('\n');
}

async function createPost(postName) {
  if (!postName) {
    throw new Error('Please provide a post title, for example: npm run write "My New Post"');
  }

  const postPath = getPostPath(postName);
  const fullPath = path.join(postsPath, postPath);

  await fs.mkdir(fullPath, { recursive: true });
  await fs.writeFile(path.join(fullPath, 'index.md'), postTemplate(postName, postPath), 'utf8');

  return fullPath;
}

async function main() {
  const title = process.argv.slice(2).join(' ').trim();
  const fullPath = await createPost(title);
  console.log(`\n---\nNew post created at:\n${fullPath}\n---`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
