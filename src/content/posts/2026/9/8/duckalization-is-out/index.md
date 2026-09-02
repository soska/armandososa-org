---
path: 2026/9/8/duckalization-is-out
date: "2026-09-08T00:00:00.000Z"
title: Duckalization is out
subtitle: Localization that's almost free.
tags: [Open Source, Duckalization, i18n, JavaScript, TypeScript, React]
---

Most apps never get translated. Not because nobody cares — because i18n is a second job. You invent keys, keep a catalog in sync, rename `cta.submit_v2`, send a spreadsheet somewhere, wait, merge, miss a string, do it again. So the app ships in English and stays that way.

Duckalization is a localization library for TypeScript apps that makes most of that go away. You write the English in your code. That string is the message. No keys. An agent does the translation.

```tsx
__('Sign in')
__('Welcome back, {name}', { name })
__('Book', { context: 'verb' })
__({ one: '{count} item', other: '{count} items' }, { count })
```

The name comes from the call shape. Squint at `__('')` and it looks like a duck face.

```bash
pnpm add @duckalization/react
pnpm add -D @duckalization/cli
```

Wrap copy as you write it. `duckalize extract` builds the catalog from those strings. `duckalize translate brief` writes a work order for whatever is still missing. Hand that JSON to an agent. The agent returns translations. `apply` checks them before they touch your catalog.

The CLI never calls a model. It writes the brief, validates the result, and stays out of the way. The thing you point the agent at is [`llms.txt`](https://github.com/soska/duckalization/blob/main/llms.txt): how to write `__()` calls, how to extract, how to translate a brief, how to wire a new app. That's the contract.

Missing translations fall back to the inline English, so a partial catalog is still shippable. You can ship the Spanish you have today and let an agent fill the gaps later.

That's the 99%. The 1% is wrapping the strings and glancing at what the agent wrote.

The package is at [github.com/soska/duckalization](https://github.com/soska/duckalization). Start with [`llms.txt`](https://github.com/soska/duckalization/blob/main/llms.txt) if you're an agent. Start with the README if you're not.
