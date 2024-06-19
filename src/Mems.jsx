import React, { memo } from "react";

const Mems = memo(
  ({ count }) => {
    // console.log("--Memo--");
    return (
      <>
        <p>{count}</p>
      </>
    );
  },
  (prevProps, nextProps) => {
    // console.log("nextprops", nextProps);
    return nextProps.count % 2 === 0 ? true : false;
  }
);

export default Mems;
