import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { DUMMY_QUOTES } from "./AllQuotes";

const AddQuote = () => {
  const navigate = useNavigate();
  const addQuoteHandler = (quote) => {
    quote.id = Math.floor(Math.random() * 100);
    console.log("Quote ID: ", quote.id);
    DUMMY_QUOTES.push(quote);
    navigate("/");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default AddQuote;
