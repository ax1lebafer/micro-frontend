import { App } from '@/components/App';
import { Suspense } from 'react';
import { AdminPage } from '@/pages/AdminPage';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/admin',
        element: (
          <Suspense fallback="Loading...">
            <AdminPage />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
export default routes;
