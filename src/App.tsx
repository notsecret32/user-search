import { router } from '@/routes';
import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import './index.css';

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
