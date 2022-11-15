import React, { useEffect, useState } from "react";

const QuoteGen = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);


  return (
    <div>
      <div className="quote">
        <p>{quote}</p>
        <small>-{author}-</small>
      </div>
      <br />
      {/* <button className="btn" onClick={fetchNewQuote}>
        I need Inspiration
      </button> */}
    </div>
  );
};

export default QuoteGen;
