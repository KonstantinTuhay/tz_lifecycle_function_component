import React, { useEffect, useState } from "react";

const LifecycleComponent = () => {
  const [dog, setDog] = useState(null);

  useEffect(() => {
    console.log("-------------------Mounting-------------------");
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => data.json())
      .then((data) => setTimeout(() => setDog(data.message), 1000));
  }, []);

  useEffect(() => {
    console.log("-------------------Update-------------------");
  });

  useEffect(() => {
    return () => {
      console.log("-------------------Will-------------------");
    };
  }, []);

  console.log("-------------------Render-------------------");
  return (
    <>
      <img src={dog} alt="dogi"></img>
    </>
  );
};

export default LifecycleComponent;
