import type { Todo, TodoStore } from '../types';

/**
 * The "model" of the app, as a hook. This replaces the TodoModel class from
 * the original TodoMVC example: state lives in `useState`, and every mutator
 * produces a *new* array rather than editing the old one.
 *
 * TODO: implement all of it.
 *
 * Suggested order:
 *  1. `useState` seeded from `loadTodos(STORAGE_KEY)` — pass the *function*
 *     to useState so the read happens once, not on every render.
 *  2. `addTodo` / `toggle` / `destroy` — use map/filter/concat, not push.
 *  3. Persist with a `useEffect` that runs whenever `todos` changes.
 *  4. Wrap the mutators in `useCallback` and the returned object in `useMemo`
 *     once the rest works, so `TodoItem` can benefit from `memo`.
 *
 * Watch out for:
 *  - `todos` is `readonly Todo[]` in the returned type. That's deliberate:
 *    the compiler will stop you calling `.push()` on it from a component.
 *  - `addTodo` should ignore an empty/whitespace-only title.
 */
export function useTodos(): TodoStore {
  const todos: readonly Todo[] = []
  const addTodo = (title:string) => {
    
  }
  // TODO: implement
  throw new Error('useTodos is not implemented yet — start here.');
}
