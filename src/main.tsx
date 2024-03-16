import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.css";
import "normalize.css";
import EvaluateYourself from "./pages/EvaluateYourself";
import IdentifyConcerns from "./pages/IdentifyConcerns";
import Report from "./pages/Report";
import About from "./pages/About";
import Contribute from "./pages/Contribute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/evaluate-yourself",
    element: <EvaluateYourself />,
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary
      fallback={<div>Something went wrong!</div>}
      onError={(error: Error, info: { componentStack: string }) => {
        console.error("error", error);
        console.error("info", info);
      }}
    >
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
