import React, { useEffect, useState } from "react";

function PlantCard() {
  const [images, setImages] = useState("");
  const [names, setNames] = useState("");
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
