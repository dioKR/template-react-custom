import RootLayout from '@/pages/layout';
import Hello from '@/pages/helllo';
import ErrorPage from '@/pages/error-page';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'hello',
        element: <Hello />,
      },
    ],
  },
];
