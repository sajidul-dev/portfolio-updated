import { Suspense, useMemo } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Spinner } from "../components/Elements/Spinner/Spinner";
import { lazyImport } from "../utils/lazyImport";

const { Report } = lazyImport(() => import("../page/Report"), "Report");
const { Users } = lazyImport(() => import("../page/Report"), "Users");
const { Products } = lazyImport(() => import("../page/Report"), "Products");
const { PurchaseHistory } = lazyImport(
  () => import("../page/Report"),
  "PurchaseHistory"
);
// const { PageNotFound } = lazyImport(
//   () => import("../page/Report"),
//   "PageNotFound"
// );
const { Landing } = lazyImport(() => import("../page/Landing"), "Landing");
const { Projects } = lazyImport(() => import("../page/Projects"), "Projects");

export const AppRoutes = () => {
  const routes = useMemo(
    () => [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Navigate to="/home" replace />,
          },
          {
            path: "home",
            element: (
              <Suspense fallback={<Spinner />}>
                <Landing />
              </Suspense>
            ),
          },
          {
            path: "projects",
            element: (
              <Suspense fallback={<Spinner />}>
                <Projects />
              </Suspense>
            ),
          },
          {
            path: "products",
            element: (
              <Suspense fallback={<Spinner />}>
                <Products />
              </Suspense>
            ),
          },
          {
            path: "purchase-history",
            element: (
              <Suspense fallback={<Spinner />}>
                <PurchaseHistory />
              </Suspense>
            ),
          },
        ],
      },
    ],
    []
  );
  const element = useRoutes([...routes]);

  return <>{element}</>;
};

AppRoutes.displayName = "AppRoutes";
