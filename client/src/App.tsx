import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./pages/Layout/Layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Blog from "./pages/Blog/Blog";
import HairCare from "./pages/Haircare/HairCare";
import MakeUp from "./pages/MakeUp/MakeUp";
import SkinCare from "./pages/skincare/SkinCare";
import Fragnance from "./pages/Fragence/Fragnance";
import SearchProduct from "./pages/search/SearchProduct";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading....</div>}>
          <Layout />
        </Suspense>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "skincare",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <SkinCare />
            </Suspense>
          ),
        },
        {
          path: "makeup",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <MakeUp />
            </Suspense>
          ),
        },
        {
          path: "blog",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Blog />
            </Suspense>
          ),
        },
        {
          path: "haircare",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <HairCare />
            </Suspense>
          ),
        },
        {
          path: "fragnance",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Fragnance />
            </Suspense>
          ),
        },
        {
          path: "search",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <SearchProduct />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
