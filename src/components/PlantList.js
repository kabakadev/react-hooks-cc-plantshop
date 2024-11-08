import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <ul className="cards">
      {data.map((item) => {
        return <PlantCard key={item.id} image={item.image} name={item.name} />;
      })}
    </ul>
  );
}

export default PlantList;
