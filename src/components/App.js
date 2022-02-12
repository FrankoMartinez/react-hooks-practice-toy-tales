import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  // When the page initally renders it will make a fetch and display all the toys
  // On the page
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])

  // When the AddToy button is clicked it will display the form to add a new toy
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Add a new toy to the page
  function addNewToy(newToy) {
    setToys({...toys, newToy})
  }

  // Clicking the donate to GoodWill button will delete it
  function handleDeleteButton(deletedToy) {
    setToys({...toys, deletedToy})
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDeleteButton={handleDeleteButton} />
    </>
  );
}

export default App;
