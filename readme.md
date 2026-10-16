# TodoMVC — TypeScript + React (practice scaffold)

Build TodoMVC yourself in modern TypeScript React. The HTML shell, the CSS,
the build tooling, and the type vocabulary are done. Every component and hook
is a stub with a TODO.

- **React 19** function components + hooks (no classes)
- **TypeScript 5**, `strict` plus `noUncheckedIndexedAccess` and
  `exactOptionalPropertyTypes`
- **Vite** dev server with HMR

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Open the printed URL. You'll see a "Nothing here yet" placeholder — that's
your starting line.

Type-check without running the app:

```bash
npm run typecheck
```

## What's given vs. what you write

| File | State |
| --- | --- |
| `index.html`, `src/main.tsx` | Done — mount point and CSS imports |
| `src/types.ts` | Done — read this first, it describes the whole app |
| `src/constants.ts` | Done |
| `src/utils.ts` | **Stubs** — pluralize, uuid, localStorage load/save |
| `src/hooks/useTodos.ts` | **Stub** — the model: state + mutators + persistence |
| `src/hooks/useHashFilter.ts` | **Stub** — read the filter from the URL hash |
| `src/components/TodoApp.tsx` | **Stub** — header, list, wiring |
| `src/components/TodoItem.tsx` | **Stub** — one row, incl. inline editing |
| `src/components/TodoFooter.tsx` | **Stub** — count, filters, clear completed |

## Suggested order

1. `utils.ts` — pure functions, no React. Easy warm-up.
2. `useTodos` — get `todos` + `addTodo` working, ignore the rest.
3. `TodoApp` — the header and the `<ul>`, rendering titles as plain `<li>`s.
4. `TodoItem` — view mode first (toggle, destroy), editing second.
5. `TodoFooter` + `useHashFilter` — counts and filtering.
6. Persistence, then `useCallback`/`useMemo`/`memo` polish.

## Markup contract

The CSS (`todomvc-app-css`) and the repo's Cypress suite both key off these
class names, so the DOM you render has to match:

```
section.todoapp                     ← already in index.html, React mounts here
├── header.header
│   ├── h1                          "todos"
│   └── input.new-todo              placeholder "What needs to be done?"
├── section.main                    omit entirely when there are no todos
│   ├── input.toggle-all[type=checkbox][id=toggle-all]
│   ├── label[for=toggle-all]
│   └── ul.todo-list
│       └── li(.completed)(.editing)
│           ├── div.view
│           │   ├── input.toggle[type=checkbox]
│           │   ├── label            the title; double-click starts editing
│           │   └── button.destroy
│           └── input.edit
└── footer.footer                   omit when there are no todos
    ├── span.todo-count             <strong>N</strong> item/items left
    ├── ul.filters                  li > a[href="#/"|"#/active"|"#/completed"], .selected on the active one
    └── button.clear-completed      only when completedCount > 0
```

Two `li` classes do the work: `completed` strikes the title through,
`editing` swaps the row for the edit input.

## Behaviour checklist

- [ ] Enter in the new-todo input adds a todo; the title is trimmed; empty input is ignored; the field clears
- [ ] Clicking `.toggle` flips one todo; `.toggle-all` sets them all to its own checked state
- [ ] `.toggle-all` is checked exactly when every todo is completed
- [ ] Double-clicking a label enters edit mode, focused, caret at the end
- [ ] Enter or blur commits the edit (trimmed); Escape cancels; an empty title deletes the todo
- [ ] `.destroy` removes a todo
- [ ] Footer shows the active count with correct pluralisation
- [ ] `#/`, `#/active`, `#/completed` filter the list, and the matching filter link has `.selected`
- [ ] Navigating with browser back/forward updates the filter
- [ ] "Clear completed" appears only when something is completed, and removes exactly those
- [ ] `.main` and `.footer` disappear when the list is empty
- [ ] Todos survive a page reload

## Checking your work against the real test suite

This repo ships the official TodoMVC Cypress suite, and it's been pointed at
this folder. Build first, then run it from the **repo root**:

```bash
npm --prefix examples/typescript-react-practice run build
```

```bash
npx start-server-and-test server http://localhost:8000 "cypress run --env framework=typescript-react-practice"
```

Watch them run interactively instead:

```bash
npx cypress open --env framework=typescript-react-practice
```

## If you get stuck

`examples/typescript-react/js/` is the original implementation of this same
app — React 16 class components, a `TodoModel` class, and the `director`
router. It solves every problem you'll hit here, just in an older idiom. Use
it as a hint of last resort; translating its `setState` calls into hooks is
most of the exercise.
