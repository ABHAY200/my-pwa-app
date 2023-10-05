// ShopList.js

import React from "react";
import Styles from "./styles.ts";
import RestaurantCard from "../../components/restaurantCard/restaurantCard.tsx";

const Dashboard = () => {
  const restaurants = [
    {
      id: 1,
      name: "Restaurant 1",
      cuisine: "Chinese",
      rating: 4.5,
      deliveryTime: "30 min",
      image: "restaurant1.jpg",
    },
    {
      id: 2,
      name: "Restaurant 2",
      cuisine: "Italian",
      rating: 4.2,
      deliveryTime: "40 min",
      image: "restaurant2.jpg",
    },
    // Add more restaurant data here
  ];

  return (
    <div style={Styles.restaurantListing}>
      <h1>Restaurants Near You 1</h1>
      <div style={Styles.restaurantCards}>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
