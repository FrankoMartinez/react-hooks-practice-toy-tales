import React from "react";

function ToyCard({ toy, handleDeleteButton }) {
  const { name, image, likes } = toy

  function handleDonateButton(id) {
    fetch(`http://localhost:3001/toys/:id`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => handleDeleteButton(data))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateButton}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
