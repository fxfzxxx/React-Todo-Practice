import type { Filter } from '../types';

/**
 * The original example pulled in the `director` router for this. You don't
 * need a router: the footer links are plain `#/`, `#/active`, `#/completed`
 * anchors, so all this hook has to do is read `window.location.hash` and
 * re-render when it changes.
 *
 * TODO: implement.
 *
 * Suggested approach:
 *  - `useState` holding the current Filter, seeded from the hash.
 *  - `useEffect` subscribing to the window's `hashchange` event. Return the
 *    cleanup function that removes the listener — under StrictMode in dev,
 *    React mounts effects twice on purpose to catch exactly that bug.
 *  - A small parse helper: an unrecognised hash should fall back to 'all'.
 *    Note that a `string` is not a `Filter`; you'll need to narrow it.
 *
 * Bonus once it works: `useSyncExternalStore` is the modern, purpose-built
 * hook for subscribing to a browser API like this. Try rewriting it that way.
 */
export function useHashFilter(): Filter {
  // TODO: implement
  return 'all';
}
