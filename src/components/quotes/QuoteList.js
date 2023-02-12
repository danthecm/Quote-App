import { Fragment } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const quotes = props.quotes;

  const changeSortingHandler = () => {
    navigate("./?sort=" + (isAscending ? "dsc" : "asc"));
  };

  const params = new URLSearchParams(location.search);

  const isAscending = params.get("sort") !== "dsc";
  quotes.sort((a, b) => {
    if (isAscending) {
      return a.id > b.id ? 1 : -1;
    } else {
      return a.id > b.id ? -1 : 1;
    }
  });

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
