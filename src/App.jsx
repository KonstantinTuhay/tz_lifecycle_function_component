import React, { useEffect, useState } from "react";

const App = () => {
  const [dog, setDog] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((data) => data.json())
      .then((data) => setDog(data));
  }, []);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((data) => data.json())
      .then((data) => setDog(data));
  }, [count]);

  console.log(dog);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Update
      </button>
      <p>{JSON.stringify(dog)}</p>
      <img src={dog && dog.message} alt="dog" />
    </>
  );
};

export default App;
