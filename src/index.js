import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
  document.getElementById("root")
);
