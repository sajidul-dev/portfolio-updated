import { Suspense, useMemo } from "react";
import { useRoutes } from "react-router-dom";
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

export const AppRoutes = () => {
  const routes = useMemo(
    () => [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "report",
            element: (
              <Suspense fallback={<Spinner />}>
                <Report />
              </Suspense>
            ),
          },
          {
            path: "users",
            element: (
              <Suspense fallback={<Spinner />}>
                <Users />
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
