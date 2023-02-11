import React from "react";
import { Outlet, useParams } from "react-router-dom";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { DUMMY_QUOTES } from "./AllQuotes";

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteID);
  console.log("The Quote is: ", quote);
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
