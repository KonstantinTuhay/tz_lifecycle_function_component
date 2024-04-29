import React from "react";
import LifecycleComponent from "./LifecycleComponent ";

const Mems = React.memo(
  ({ count }) => {
    console.log("--Memo--");
    return (
      <>
        <p>{count}</p>
        {count % 2 === 0 ? <LifecycleComponent /> : <p></p>}
      </>
    );
  },
  (prevProps, nextProps) => {
    nextProps % 2 === 0 ? <LifecycleComponent /> : <p></p>;
  }
);

export default Mems;
