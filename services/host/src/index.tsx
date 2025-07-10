import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
const root = document.getElementById('root');

if (!root) {
  throw new Error('error');
}

const router = createBrowserRouter([{ path: '/', element: <App /> }]);

const container = createRoot(root);
container.render(<RouterProvider router={router} />);
