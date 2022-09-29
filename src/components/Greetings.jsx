import React, { useState } from "react";

import Paragraph from "./Paragraph";
import Counter from "./Counter";
import Quotes from "./Quotes";

const Greetings = () => {
  const [viewText, setViewText] = useState(false);

  const viewTextHandler = () => setViewText((prevState) => !prevState);

  return (
    <>
      <h1>Hello Hutama</h1>
      <p>Lorem ipsum dolor sit ament.</p>
      {/* {viewText ? <p>My name is Hutama</p> : <p>I love frontend dev</p>} */}
      {!viewText && <Paragraph>I love frontend dev</Paragraph>}
      {viewText && <Paragraph>My name is Hutama</Paragraph>}
      <button onClick={viewTextHandler}>View Text</button>
      <Counter />
    </>
  );
};

export default Greetings;
