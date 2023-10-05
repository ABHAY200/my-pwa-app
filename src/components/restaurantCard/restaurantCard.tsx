import React from "react";
import Styles from "./styles.ts";

const RestaurantCard = ({ data }) => {
  return (
    <div style={Styles.restaurantCardContainer}>
      <img src={data.image} alt={data.name} />
      <div style={Styles.restaurantDetails}>
        <h2>{data.name}</h2>
        <p>{data.cuisine}</p>
        <div style={Styles.restaurantRating}>
          <p>{data.rating}</p>
        </div>
        <p>Delivery Time: {data.deliveryTime}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
