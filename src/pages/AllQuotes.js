import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http.js";
import { getAllQuotes } from "../lib/api";

import { useEffect } from "react";

import LoadingSpinner from "../components/UI/LoadingSpinner";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "completed" && (!loadedQuote || loadedQuote.length === 0)) {
    return (
      <div className="centered">
        <NoQuotesFound />
      </div>
    );
  }
  return (
    <>
      {status === "pending" ? (
        <div className="centered">
          <LoadingSpinner />
        </div>
      ) : error ? (
        <p className="centered focused">{error}</p>
      ) : status === "completed" &&
        (!loadedQuote || loadedQuote.length === 0) ? (
        <div className="centered">
          <NoQuotesFound />
        </div>
      ) : (
        <div>
          <QuoteList quotes={loadedQuote} />
        </div>
      )}
    </>
  );
};

export default AllQuotes;
