import { useState } from "react";
import { STORAGE_KEY } from "../constants";
import type { Todo } from "../types";
import { loadTodos, uuid } from "../utils";
import { TodoItem } from "./TodoItem";

/**
 * The root component. It owns:
 *  - the todo store (`useTodos`)
 *  - the active filter (`useHashFilter`)
 *  - which row is currently being edited (a `useState<string | null>`)
 *
 * and renders <header>, <TodoItem> rows, and <TodoFooter>.
 *
 * TODO: replace the placeholder below with the real app.
 *
 * Structure to build (see readme.md for the exact class names the CSS and
 * the Cypress suite expect):
 *
 *   <header class="header">      h1 + the "new todo" input
 *   <section class="main">       toggle-all checkbox + <ul class="todo-list">
 *   <TodoFooter />               only when there is at least one todo
 *
 * Behaviour notes:
 *  - The new-todo input commits on Enter, trims whitespace, ignores empty
 *    input, and clears itself afterwards.
 *  - `main` and the footer are both hidden entirely when there are no todos.
 *  - Filtering happens here, at render time — don't store a filtered copy in
 *    state, derive it. Deriving beats syncing.
 *  - `toggle-all` is checked when every todo is completed.
 */
export function TodoApp() {
	const [todos, setTodos] = useState<Todo[]>(() => loadTodos(STORAGE_KEY));
	const [newTitle, setTitle] = useState("");

	const createTodo = (title: string): Todo => ({
		title,
		id: uuid(),
		completed: false,
	});
	return (
		<>
			<header className="header">
				<h1>todos</h1>
				<input
					className="new-todo"
					placeholder="What needs to be done?"
					value={newTitle}
					onChange={(e) => setTitle(e.currentTarget.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							const value = newTitle.trim();
							if (value) {
								setTodos([...todos, createTodo(value)]);
							}
							setTitle('');
						}
					}}
				></input>
			</header>
			<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox"></input>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{todos.map((e) => (
						<TodoItem key={e.id} todo={e}></TodoItem>
					))}

				</ul>
			</section>
		</>
	);
}
