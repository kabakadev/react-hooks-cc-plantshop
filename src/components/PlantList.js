import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return <ul className="cards">{<PlantCard />}</ul>;
}

export default PlantList;
