import type { TodoFooterProps } from '../types';

/**
 * The bar under the list: the remaining-items count, the three filter links,
 * and the "Clear completed" button.
 *
 * TODO: implement.
 *
 * Notes:
 *  - "N items left" — the count is of *active* todos, and the word is
 *    singular at 1. That's what `pluralize` in utils.ts is for.
 *  - The filters are ordinary anchors: `#/`, `#/active`, `#/completed`. The
 *    one matching `nowShowing` gets `className="selected"`. No router needed.
 *  - "Clear completed" only renders when `completedCount > 0`.
 */
export function TodoFooter(props: TodoFooterProps) {
  // TODO: implement
  return null;
}
