// Shared constants. Complete — nothing to do here.
import type { Filter } from './types';

export const ALL_TODOS = 'all' satisfies Filter;
export const ACTIVE_TODOS = 'active' satisfies Filter;
export const COMPLETED_TODOS = 'completed' satisfies Filter;

/** localStorage key. Keep this stable so your todos survive a reload. */
export const STORAGE_KEY = 'todos-typescript-react';
