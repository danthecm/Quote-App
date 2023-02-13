import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const { sendRequest, status, data: quote } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(params.quoteID);
  }, [sendRequest, params]);

  console.log("Params: ", params);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (!quote) {
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
