import { lazy } from "react";

// Third party
import { Navigate, useRoutes } from "react-router-dom";

// Components
import AuthRedirect from "./AuthRedirect";
import AnimationWrapper from "../layouts/wrapper/AnimationWrapper";
import { ScrollToTop } from "../components/scroll/index";

// Layout
import { MainLayout } from "../layouts";
import DynamicEditEvent from "../pages/events/dynamicEditEvent";
import DynamicEventDetails from "../pages/events/dynamicEventDetails";
// import { MarketplaceLayout } from "../layouts/marketplace-add/MarketplaceLayout";

// Lazy load ProtectedRoute
const LazyProtectedRoute = lazy(() => import("./ProtectedRoute"));

// Pages
const LazyStores = lazy(() => import("../pages/storesPage"));
const LazyStoreDetails = lazy(
  () => import("../features/stores/components/Details")
);
const LazyArenaStoreDetails = lazy(() => import("../pages/ArenaStorePage"));
const LazyArenas = lazy(() => import("../pages/arenasPage"));
const LazyArenaDetails = lazy(
  () => import("../features/arenas/components/Details")
);
const LazyTechnicians = lazy(() => import("../pages/techniciansPage"));
const LazyRentals = lazy(() => import("../pages/rentalsPage"));
const LazyFaq = lazy(() => import("../pages/faqPage"));
const LazyGameTypes = lazy(() => import("../pages/GameTypesPage"));
const LazyContactUs = lazy(() => import("../pages/contactUsPage"));
const LazyEvents = lazy(() => import("../pages/events/eventsPage"));
const LazyAddEvent = lazy(
  () => import("../features/add-event/components/AddEventPage")
);
const LazyUserEvents = lazy(
  () => import("../features/events/components/UserEventsPage")
);
// const LazyMarketplace = lazy(() => import("../pages/marketPlacePage"));
// const LazyAddMarketplace = lazy(
//   () => import("../features/add-marketplace/components/MarketplacePage")
// );
// const LazyAddMarketplaceAirsoftReplicas = lazy(
//   () => import("../features/add-marketplace/components/AirsoftReplicas")
// );
// const LazyAddMarketplacePartsAndAccessories = lazy(
//   () => import("../features/add-marketplace/components/PartsAndAccessories")
// );
// const LazyAddMarketplaceTacticalEquipment = lazy(
//   () => import("../features/add-marketplace/components/TacticalEquipment")
// );
const LazyProfile = lazy(() => import("../pages/profilePage"));
const LazyProfileUpdatePassword = lazy(
  () => import("../features/profile/components/ChangePasswordForm")
);
const LazyLogin = lazy(() => import("../pages/welcome/loginPage"));
const LazyRegister = lazy(() => import("../pages/welcome/registerPage"));
const LazyResetPassword = lazy(() => import("../pages/welcome/resetPage"));
const LazySetPassword = lazy(
  () => import("../features/reset-password/components/SetPasswordPage")
);
const LazyCartPage = lazy(() => import("../pages/checkout/CartPage"));
const LazyProductPage = lazy(() => import("../pages/ProductPage"));
const LazyPaymentPage = lazy(() => import("../pages/checkout/PaymentPage"));
const LazyOrderCompletedPage = lazy(
  () => import("../pages/checkout/OrderCompletedPage")
);
const LazyPrivacyPage = lazy(
  () => import("../pages/PrivacyPage")
);
const LazyBitPage = lazy(
  () => import("../pages/payments/BitPage")
);
const LazyNotFound = lazy(() => import("../pages/notFoundPage"));

const InitRoutes = () =>
  useRoutes([
    {
      element: (
        <>
          <ScrollToTop />
          <MainLayout />
        </>
      ),
      children: [
        {
          path: "/",
          element: (
            <AnimationWrapper>
              <Navigate to="/events" />
              {/* change later */}
            </AnimationWrapper>
          ),
        },
        {
          path: "/stores",
          element: (
            <AnimationWrapper>
              <LazyStores />
            </AnimationWrapper>
          ),
          children: [
            {
              path: "airsoft4u",
              element: (
                <AnimationWrapper>
                  <LazyArenaStoreDetails />
                </AnimationWrapper>
              ),
            },
            {
              path: ":name",
              element: (
                <AnimationWrapper>
                  <LazyStoreDetails />
                </AnimationWrapper>
              ),
            },
          ],
        },
        {
          path: "/privacy",
          element: (
            <AnimationWrapper>
              <LazyPrivacyPage />
            </AnimationWrapper>
          ),
        },
        {
          path: "/arenas",
          element: (
            <AnimationWrapper>
              <LazyArenas />
            </AnimationWrapper>
          ),
          children: [
            {
              path: ":name",
              element: (
                <AnimationWrapper>
                  <LazyArenaDetails />
                </AnimationWrapper>
              ),
            },
          ],
        },
        {
          path: "/technicians",
          element: (
            <AnimationWrapper>
              <LazyTechnicians />
            </AnimationWrapper>
          ),
        },
        {
          path: "/rentals",
          element: (
            <AnimationWrapper>
              <LazyRentals />
            </AnimationWrapper>
          ),
        },
        {
          path: "/contact-us",
          element: (
            <AnimationWrapper>
              <LazyContactUs />
            </AnimationWrapper>
          ),
        },
        {
          path: "/game-types",
          element: (
              <AnimationWrapper>
                <LazyGameTypes />
              </AnimationWrapper>
          ),
        },
        {
          path: "/faq",
          element: (
            <AnimationWrapper>
              <LazyFaq />
            </AnimationWrapper>
          ),
        },
        {
          path: "/events",
          element: (
            <AnimationWrapper>
              <LazyEvents />
            </AnimationWrapper>
          ),
          children: [
            {
              path: ":id",
              element: (
                <AnimationWrapper>
                  <DynamicEventDetails />
                </AnimationWrapper>
              ),
            },
          ],
        },
        {
          path: "/my-events",
          element: (
            <LazyProtectedRoute>
              <AnimationWrapper>
                <LazyUserEvents />
              </AnimationWrapper>
            </LazyProtectedRoute>
          ),
        },
        {
          path: "/checkout/cart",
          element: (
            <AnimationWrapper>
              <LazyCartPage />
            </AnimationWrapper>
          ),
        },
        {
          path: "/store/product",
          element: (
            <AnimationWrapper>
              <LazyProductPage />
            </AnimationWrapper>
          ),
        },
        {
          path: "/checkout/payment",
          element: (
            <AnimationWrapper>
              <LazyPaymentPage />
            </AnimationWrapper>
          ),
        },
        {
          path: "/payment/bit",
          element: (
            <AnimationWrapper>
              <LazyBitPage />
            </AnimationWrapper>
          ),
        },
        {
          path: "/checkout/order-success",
          element: (
            <AnimationWrapper>
              <LazyOrderCompletedPage />
            </AnimationWrapper>
          ),
        },
        // {
        //   path: "/marketplace",
        //   element: (
        //     <AnimationWrapper>
        //       <LazyMarketplace />
        //     </AnimationWrapper>
        //   ),
        //   children: [
        //     {
        //       path: ":id",
        //       element: (
        //         <AnimationWrapper>
        //           <div>1</div>
        //         </AnimationWrapper>
        //       ),
        //     },
        //     {
        //       path: "add",
        //       element: (
        //         <AnimationWrapper>
        //           <LazyAddMarketplace />
        //         </AnimationWrapper>
        //       ),
        //     },
        //   ],
        // },
        {
          path: "/profile",
          element: (
            <LazyProtectedRoute>
              <AnimationWrapper>
                <LazyProfile />
              </AnimationWrapper>
            </LazyProtectedRoute>
          ),
          children: [
            {
              path: "updatePassword",
              element: (
                <LazyProtectedRoute>
                  <AnimationWrapper>
                    <LazyProfileUpdatePassword />
                  </AnimationWrapper>
                </LazyProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "*",
          element: (
            <AnimationWrapper>
              <LazyNotFound />
            </AnimationWrapper>
          ),
        },
      ],
    },
    {
      path: "/events/add",
      element: (
        <LazyProtectedRoute>
          <AnimationWrapper>
            <LazyAddEvent />
          </AnimationWrapper>
        </LazyProtectedRoute>
      ),
    },
    {
      path: "/my-events/edit/:id",
      element: (
        <LazyProtectedRoute>
          <AnimationWrapper>
            <DynamicEditEvent />
          </AnimationWrapper>
        </LazyProtectedRoute>
      ),
    },
    // {
    //   path: "/marketplace/add/airsoft-replicas",
    //   element: (
    //     <LazyProtectedRoute>
    //       <AnimationWrapper>
    //         <LazyAddMarketplaceAirsoftReplicas />
    //       </AnimationWrapper>
    //     </LazyProtectedRoute>
    //   ),
    // },
    // {
    //   path: "/marketplace/add/parts-and-accessories",
    //   element: (
    //     <AnimationWrapper>
    //       <LazyAddMarketplacePartsAndAccessories />
    //     </AnimationWrapper>
    //   ),
    // },
    // {
    //   path: "/marketplace/add/tactical-equipment",
    //   element: (
    //     <AnimationWrapper>
    //       <LazyAddMarketplaceTacticalEquipment />
    //     </AnimationWrapper>
    //   ),
    // },
    {
      path: "/login",
      element: (
        <AuthRedirect>
          <AnimationWrapper>
            <LazyLogin />
          </AnimationWrapper>
        </AuthRedirect>
      ),
    },
    {
      path: "/register",
      element: (
        <AuthRedirect>
          <AnimationWrapper>
            <LazyRegister />
          </AnimationWrapper>
        </AuthRedirect>
      ),
    },
    {
      path: "/reset-password",
      element: (
        <AnimationWrapper>
          <LazyResetPassword />
        </AnimationWrapper>
      ),
    },
    {
      path: "/setPassword",
      element: (
        <AnimationWrapper>
          <LazySetPassword />
        </AnimationWrapper>
      ),
    },
  ]);

export { InitRoutes };
