import { Suspense, useMemo } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Spinner } from "../components/Elements/Spinner/Spinner";
import { lazyImport } from "../utils/lazyImport";

// const { PageNotFound } = lazyImport(
//   () => import("../page/Report"),
//   "PageNotFound"
// );
const { Landing } = lazyImport(() => import("../page/Landing"), "Landing");
const { Projects } = lazyImport(() => import("../page/Projects"), "Projects");
const { Achievements } = lazyImport(
  () => import("../page/Achievements"),
  "Achievements"
);
const { About } = lazyImport(() => import("../page/About"), "About");
const { Contact } = lazyImport(() => import("../page/Contact"), "Contact");

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
            path: "achievements",
            element: (
              <Suspense fallback={<Spinner />}>
                <Achievements />
              </Suspense>
            ),
          },
          {
            path: "about",
            element: (
              <Suspense fallback={<Spinner />}>
                <About />
              </Suspense>
            ),
          },
          {
            path: "contact",
            element: (
              <Suspense fallback={<Spinner />}>
                <Contact />
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
