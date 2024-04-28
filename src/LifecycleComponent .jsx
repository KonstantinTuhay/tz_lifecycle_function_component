import React, { useEffect, useState } from "react";

const LifecycleComponent = () => {
  const [dog, setDog] = useState(null);
  const [againCount, setAgainCount] = useState(0);

  const otherCount = () => {
    setAgainCount(() => againCount + 1);
  };

  useEffect(() => {
    console.log("-------------------Mounting-------------------");
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => data.json())
      .then((data) => setTimeout(() => setDog(data.message), 1000));
  }, []);

  useEffect(() => {
    console.log("-------------------Update-------------------");
  }, [dog]);

  useEffect(() => {
    return () => {
      console.log("-------------------Will-------------------");
    };
  }, []);

  console.log("-------------------Render-------------------");
  return (
    <>
      <button onClick={otherCount}>otherCount</button>
      <p>{againCount}</p>

      <img src={dog} alt="dogi"></img>
    </>
  );
};

export default LifecycleComponent;
