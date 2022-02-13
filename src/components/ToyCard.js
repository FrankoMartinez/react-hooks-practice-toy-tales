import React from "react";

function ToyCard({ toy, handleDeleteButton, handleLikeButton }) {
  const { id, name, image, likes } = toy

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => {
      handleDeleteButton(toy)
    })
  }

  function handleLikeClick() {
    const updateObj = {
      likes : likes + 1,
    }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
    .then(res => res.json())
    .then(handleLikeButton)
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
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
