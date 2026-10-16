import { useState } from "react";
import type { TodoItemProps } from "../types";

/**
 * One row of the todo list. Has two visual modes, controlled by the parent
 * via `editing`: the normal "view" mode and the inline edit input.
 *
 * TODO: implement.
 *
 * The tricky parts (this is the most interesting component in the app):
 *  - The edit field is a *controlled* input backed by local state
 *    (`editText`), separate from `props.todo.title`. It only becomes the real
 *    title when the user commits.
 *  - Commit on Enter *and* on blur. Escape cancels and restores the original
 *    title. An empty title on commit destroys the todo instead of saving it.
 *  - When the row enters edit mode, the input must be focused with the caret
 *    at the end. That needs a `useRef<HTMLInputElement>(null)` plus a
 *    `useEffect` keyed on `editing`, and `setSelectionRange`.
 *  - The <li> takes the classes `completed` and/or `editing`. You don't need
 *    the `classnames` package for this — a template literal or a small
 *    array + `.filter(Boolean).join(' ')` is plenty.
 *  - Keyboard events: prefer `event.key === 'Enter' | 'Escape'` over the
 *    deprecated `keyCode` the original example used.
 *
 * Bonus: wrap the export in `React.memo` and confirm with the React DevTools
 * profiler that typing in one row no longer re-renders the others.
 */
export function TodoItem(props: TodoItemProps) {

	const [ complete ,setComplete] = useState(false)
	// TODO: implement
	return (
		<li className= { complete ? "completed" : ''}>
			<div className="view">
				<input className="toggle" type="checkbox" onChange={(e)=> {
					setComplete(e.currentTarget.checked)
				}}></input>
				<label>{props.todo.title}</label>
				<button className="destroy"></button>
			</div>
			<input className="edit" value="kjh"></input>
		</li>
	);
}
