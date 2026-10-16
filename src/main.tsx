// Entry point. This file is complete — you shouldn't need to change it.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import { TodoApp } from './components/TodoApp';

const container = document.querySelector<HTMLElement>('.todoapp');

if (!container) {
  throw new Error('Could not find the .todoapp mount point in index.html');
}

createRoot(container).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
);
