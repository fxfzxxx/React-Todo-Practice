import type { Todo } from "./types";

/**
 * TODO: return "item" for a count of 1 and "items" otherwise.
 * Used by the footer: "1 item left" / "3 items left".
 */
export function pluralize(count: number, word: string): string {
	return count === 1 ? word : word + "s";
}

/**
 * TODO: return a unique id for a new todo.
 * `crypto.randomUUID()` is available in every browser Vite targets — but
 * writing your own from Math.random() is fine practice too.
 */
export function uuid(): string {
	return crypto.randomUUID();
}

/**
 * TODO: read the todo list out of localStorage.
 * isTodo guard.
 */
export function loadTodos(key: string): Todo[] {
	const todos = localStorage.getItem(key);
	if(todos) return JSON.parse(todos);
	return [];
}

/** TODO: persist the todo list to localStorage under `key`. */
export function saveTodos(key: string, todos: readonly Todo[]): void {
	localStorage.setItem(key, JSON.stringify(todos));
}
