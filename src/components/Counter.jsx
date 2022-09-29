import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const setCountHandler = () => setCount((prevState) => prevState + 1);

  return (
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
  );
};

export default Counter;
