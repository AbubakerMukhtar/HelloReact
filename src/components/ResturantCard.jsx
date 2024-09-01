import React from "react";
import { CDN_URL } from "../utils/constants";import {LOGO_URL} from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card">
      <div className="card-img-container">
        {/* <img alt={name} src={CDN_URL + cloudinaryImageId} /> */}
        <img alt={name} src={LOGO_URL} />
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
