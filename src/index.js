import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
