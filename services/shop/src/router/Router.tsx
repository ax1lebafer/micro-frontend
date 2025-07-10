import { App } from '@/components/App';
import { Suspense } from 'react';
import { ShopPage } from '@/pages/ShopPage';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/shop',
        element: (
          <Suspense fallback="Loading...">
            <ShopPage />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
export default routes;
