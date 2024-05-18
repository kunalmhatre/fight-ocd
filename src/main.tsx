import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestYourself from "./pages/TestYourself";
import IdentifyConcerns from "./pages/IdentifyConcerns";
import Report from "./pages/Report";
import About from "./pages/About";
import Contribute from "./pages/Contribute";
import Resources from "./pages/Resources";
import "../index.css";
import "normalize.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/take-a-test-for-ocd",
    element: <TestYourself />,
  },
  {
    path: "/identify-obsessions",
    element: <IdentifyConcerns />,
  },
  {
    path: "/identify-compulsions",
    element: <IdentifyConcerns />,
  },
  {
    path: "/obsessions-report",
    element: <Report />,
  },
  {
    path: "/compulsions-report",
    element: <Report />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contribute",
    element: <Contribute />,
  },
  {
    path: "/learn-about-ocd",
    element: <Resources />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
