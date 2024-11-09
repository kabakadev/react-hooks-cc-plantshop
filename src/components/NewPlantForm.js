import React, { useState } from "react";

function NewPlantForm() {
  const [plantName, setPlantName] = useState("");
  const [plantUrl, setPlantUrl] = useState("");
  const [plantNum, setPlantNum] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={plantName}
          onChange={setPlantName}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={plantUrl}
          onChange={setPlantUrl}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={plantNum}
          onChange={setPlantNum}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
