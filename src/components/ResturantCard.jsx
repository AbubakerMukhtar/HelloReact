import React from "react";

const ResturantCard = (props) => {
  const { resData } = props;

  const {
    url,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card">
      <div className="card-img-container">
        <img alt={name} src={url} />
      </div>
      <div className="dish-container">
        <h6 className="dish-name">{name}</h6>
        <h6 className="rating-stars">{cuisines.join(", ")}</h6>
        <h6 className="rating-stars">{avgRating} stars</h6>
        <h6 className="rating-stars">₹{costForTwo / 100} FOR TWO</h6>
        <h6 className="rating-stars">{deliveryTime} minutes</h6>
      </div>
    </div>
  );
};
export default ResturantCard;
