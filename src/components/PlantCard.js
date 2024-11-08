import React, { useEffect, useState } from "react";

function PlantCard() {
  const [images, setImages] = useState("");
  const [names, setNames] = useState("");
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.image);
        setNames(data.name);
      });
  }, []);
  return (
    <li className="card" data-testid="plant-item">
      <img src={images} alt={"plant name"} />
      <h4>{names}</h4>
      <p>Price: {"plant price"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
