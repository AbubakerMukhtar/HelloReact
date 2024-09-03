import React from "react";
import ResturantCard from "./ResturantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);
  return (
    <div className="body">
      <div className="search">
        {/* <input type="text" placeholder="Search" /> */}
        <button
          onClick={() => {
            const filterrdList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filterrdList);
          }}
        >
          Search Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <ResturantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
