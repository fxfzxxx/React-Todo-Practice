// The type vocabulary for the app. These are given to you so the components
// below have contracts to code against — read them first, they describe the
// whole app.

/** A single todo. Treat todos as immutable: never mutate one in place. */
export interface Todo {
  readonly id: string;
  readonly title: string;
  readonly completed: boolean;
}

/** Which todos the list is currently showing. Driven by the URL hash. */
export type Filter = 'all' | 'active' | 'completed';

/**
 * Everything the UI needs from the todo "model". Your `useTodos` hook returns
 * this shape; `TodoApp` consumes it. Splitting it out like this means you can
 * change the storage strategy later without touching a single component.
 */
export interface TodoStore {
  readonly todos: readonly Todo[];
  addTodo(title: string): void;
  toggle(id: string): void;
  toggleAll(completed: boolean): void;
  save(id: string, title: string): void;
  destroy(id: string): void;
  clearCompleted(): void;
}

export interface TodoItemProps {
  todo: Todo;
  /** True when this row is the one being edited. */
  editing: boolean;
  onToggle: () => void;
  onDestroy: () => void;
  /** Fired on double-click: ask the parent to put this row into edit mode. */
  onEdit: () => void;
  /** Fired on Enter / blur with a non-empty title. */
  onSave: (title: string) => void;
  /** Fired on Escape: abandon the edit, keep the old title. */
  onCancel: () => void;
}

export interface TodoFooterProps {
  /** Number of *active* (not completed) todos. */
  count: number;
  completedCount: number;
  nowShowing: Filter;
  onClearCompleted: () => void;
}
