import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import ChildSafetyPolicy from "./pages/childabuse.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Shared layout
    children: [
      {
        index: true,
        element: <Home />, // Homepage content
      },
      {
        path: "terms",
        element: <TermsAndConditions />,
      },
      {
        path: "privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "safety-standards",
        element: <ChildSafetyPolicy />,
      },
    ],
  },
]);
ChildSafetyPolicy;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
