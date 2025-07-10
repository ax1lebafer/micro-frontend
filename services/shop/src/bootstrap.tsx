import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { router } from '@/router/Router';
const root = document.getElementById('root');

if (!root) {
  throw new Error('error');
}

const container = createRoot(root);
container.render(<RouterProvider router={router} />);
