import React, { useState } from "react";

const Greetings = () => {
  const [viewText, setViewText] = useState(false);
  const [count, setCount] = useState(0);

  const viewTextHandler = () => setViewText((prevState) => !prevState);
  const setCountHandler = () => setCount((prevState) => prevState + 1);

  return (
    <>
      <h1>Hello Hutama</h1>
      <p>Lorem ipsum dolor sit ament.</p>
      {/* {viewText ? <p>My name is Hutama</p> : <p>I love frontend dev</p>} */}
      {!viewText && <p>I love frontend dev</p>}
      {viewText && <p>My name is Hutama</p>}
      <button onClick={viewTextHandler}>View Text</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          rowGap: "1rem",
          margin: "1rem 0",
        }}
      >
        <span>{count}</span>
        <button onClick={setCountHandler}>count</button>
      </div>
    </>
  );
};

export default Greetings;
