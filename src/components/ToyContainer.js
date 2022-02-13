import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDeleteButton, handleLikeButton }) {
  const toysRendered= toys.map((toy) => {
  return <ToyCard key={toy.id} toy={toy} handleDeleteButton={handleDeleteButton} handleLikeButton={handleLikeButton}/>
  })
  return (
    <div id="toy-collection">
      {toysRendered}
    </div>
  );
}

export default ToyContainer;
