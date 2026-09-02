---
path: 2026/9/2/keyboardist-3-is-out
date: "2026-09-02T00:00:00.000Z"
title: Keyboardist 3.0 is out
subtitle: A tiny library for keyboard shortcuts. Now with layers.
tags: [Open Source, Keyboardist, React, JavaScript, TypeScript]
---

Keyboardist is a tiny, dependency-free library for adding keyboard shortcuts to browser apps. I extracted it from a work dashboard in 2018. Version 3.0 is the first real rewrite, and it's on npm:

```bash
npm install keyboardist
```

The original idea still holds. You subscribe to keys by name, and unsubscribe when you're done:

```ts
import { createListener } from "keyboardist";

const listener = createListener();
const subscription = listener.subscribe("Slash", focusSearch);

subscription.unsubscribe();
```

That is enough until the UI gets complicated. `/` focuses search. `?` opens help. `j` and `k` move through a list. Then there is a player, a modal, a command menu, and a nested modal inside that modal. The question is no longer "what does this key do?" but "what does this key do _right now_?"

That's what 3.0 is for. Shortcuts live in named layers you can stack. Unmatched keys fall through, so global shortcuts keep working under more specific UI. An exclusive layer can take over the whole keyboard, which is what you want for a modal.

React support now ships in the same package. There is no separate `react-keyboardist` anymore:

```tsx
import { KeyboardLayer, useKeyBindings } from "keyboardist/react";
```

In React, layers follow the component tree. The most specific mounted context wins, without inventing priority numbers.

I rebuilt the docs at [keyboardist.io](https://www.keyboardist.io). Live examples, React demos, and the code on the page is the code that's running. That's the better place to learn how it works. Go there.
