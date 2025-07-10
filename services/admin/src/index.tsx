import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import { Shop } from '@/pages/Shop';
import { Suspense } from 'react';
const root = document.getElementById('root');

if (!root) {
  throw new Error('error');
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/shop',
        element: (
          <Suspense fallback="Loading...">
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

const container = createRoot(root);
container.render(<RouterProvider router={router} />);
