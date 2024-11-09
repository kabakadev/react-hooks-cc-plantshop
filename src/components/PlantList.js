import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ data }) {
  return (
    <ul className="cards">
      {data.map((item) => {
        return (
          <PlantCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </ul>
  );
}

export default PlantList;
