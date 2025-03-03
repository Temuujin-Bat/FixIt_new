import { lazy } from "react";

// Third party
import { useRoutes } from "react-router-dom";

// Components
import { AnimationWrapper } from "../layout/wrapper";
import { MainLayout } from "../layout/main";

// Pages
const LazyDashboard = lazy(() => import("../pages/DashboardPage"));
const LazyProfile = lazy(() => import("../pages/Profile/ProfilePage"));
const LazyAppointments = lazy(() => import("../pages/Profile/AppointmentPage"));
const LazyFavourites = lazy(() => import("../pages/Profile/FavouritesPage"));

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
          path: "/",
          element: (
            <AnimationWrapper>
              <LazyDashboard />
            </AnimationWrapper>
          ),
        },
        {
          path: "/profile",
          element: (
            <AnimationWrapper>
              <LazyProfile />
            </AnimationWrapper>
          ),
          children: [
            {
              path: "appointments",
              element: (
                <AnimationWrapper>
                  <LazyAppointments />
                </AnimationWrapper>
              ),
            },
            {
              path: "favourites",
              element: (
                <AnimationWrapper>
                  <LazyFavourites />
                </AnimationWrapper>
              ),
            },
          ],
        },
        {
          path: "/appointments",
          element: (
            <AnimationWrapper>
              <LazyAppointments />
            </AnimationWrapper>
          ),
        },
      ],
    },
  ]);

export { InitRoutes };
