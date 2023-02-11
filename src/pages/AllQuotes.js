import QuoteList from "../components/quotes/QuoteList";

export const DUMMY_QUOTES = [
  { id: "1", author: "John", text: "Learning react is great" },
  { id: "2", author: "Favour", text: "Learning react is fantastic" },
  { id: "3", author: "Juliet", text: "Learning Python is great" },
  { id: "4", author: "Romeo", text: "Love is the essence of life" },
  {
    id: "5",
    author: "CM",
    text: "Your potential needs responsibility to show it's possibilities",
  },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
};

export default AllQuotes;
