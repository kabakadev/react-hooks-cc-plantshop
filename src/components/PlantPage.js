import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [setData]);

  function addPlant(newPlant) {
    setData([...data, newPlant]);
  }
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search />
      <PlantList data={data} />
    </main>
  );
}

export default PlantPage;
