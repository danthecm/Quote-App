import React from "react";
import { Outlet, useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>QuoteDetail</h1>
      <p>{params.quoteID}</p>
      <Outlet />
    </>
  );
};

export default QuoteDetail;
