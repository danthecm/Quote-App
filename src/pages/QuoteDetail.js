import React, { useEffect, useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const quoteID = useMemo(() => params.quoteID, [params]);
  const {
    sendRequest,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <div className="centered">{error}</div>;
  }

  if (!quote?.text) {
    return <NoQuotesFound />;
  }

  return (
    <>
      <HighlightedQuote {...quote} />
      <Outlet />
    </>
  );
};

export default QuoteDetail;
