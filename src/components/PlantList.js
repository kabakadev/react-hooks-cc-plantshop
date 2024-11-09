import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ data }) {
  return (
    <ul className="cards">
      {data.map((item) => {
        return <PlantCard key={item.id} image={item.image} name={item.name} />;
      })}
    </ul>
  );
}

export default PlantList;
