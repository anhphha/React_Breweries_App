import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Breweries from "./components/Breweries";
import SingleBrewery from "./components/SingleBrewery";
import Home from "./components/Home";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "breweries",
        element: <Breweries />,
      },
      {
        path: "breweries/:id",
        element: <SingleBrewery />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
