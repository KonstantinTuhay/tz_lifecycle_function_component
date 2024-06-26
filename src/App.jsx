import React, { useState } from "react";
import Mems from "./Mems";
import LifecycleComponent from "./LifecycleComponent ";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        CLICK
      </button>{" "}
      <br />
      <Mems count={count} />
      <br />
      {count % 2 === 0 ? (
        <LifecycleComponent />
      ) : (
        <p>Кликни, чтобы ещё раз появилось</p>
        // ""
      )}
    </>
  );
};

export default App;
