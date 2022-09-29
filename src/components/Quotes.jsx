import React, { useState } from "react";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  const quotesChangeHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://api.quotable.io/random", {
        method: "GET",
      });

      const data = await response.json();

      setQuotes([{ ...data }]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <h1>Quotes Random</h1>
      <button onClick={quotesChangeHandler}>Quotes</button>
      {quotes.map((quote) => (
        <article key={quote?._id}>
          <p>{quote?.content}</p>
          <span>{quote?.author}</span>
        </article>
      ))}
    </section>
  );
};

export default Quotes;
