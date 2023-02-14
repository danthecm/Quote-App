import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import App from "./App";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import Comments from "./components/comments/Comments";
import NotFound from "./pages/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/quotes" />,
      },
      {
        path: "/quotes",
        element: <AllQuotes />,
      },
      {
        path: "/new-quote",
        element: <AddQuote />,
      },
      {
        path: "quotes/:quoteID",
        element: <QuoteDetail />,
        children: [
          {
            index: true,
            element: (
              <div className="centered">
                <Link className="btn--flat" to={`./comments`}>
                  Load Comments{" "}
                </Link>
              </div>
            ),
          },
          {
            path: "comments",
            element: <Comments />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
