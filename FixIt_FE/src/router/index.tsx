import { lazy } from 'react';

// Third party
import { useRoutes } from 'react-router-dom';

// Components
import { AnimationWrapper } from '../layout/wrapper';
import { MainLayout } from '../layout/main';

// Pages
const LazyDashboard = lazy(() => import('../pages/DashboardPage'));
const LazyProfile = lazy(() => import('../pages/ProfilePage'));

const InitRoutes = () =>
  useRoutes([
    {
      element: (
        <>
          <MainLayout />
        </>
      ),
      children: [
        {
          path: '/',
          element: (
            <AnimationWrapper>
              <LazyDashboard />
            </AnimationWrapper>
          ),
        },
        {
          path: '/profile',
          element: (
            <AnimationWrapper>
              <LazyProfile />
            </AnimationWrapper>
          ),
        },
      ],
    },
  ]);

export { InitRoutes };

