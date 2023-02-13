import React from "react";
import { Outlet, useParams } from "react-router-dom";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const params = useParams();

  console.log("Params: ", params);

  const quote = [].find((quote) => quote.id === params.quoteID);
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
