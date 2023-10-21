import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_LINK } from "./contants";

const RestaurantMenu = () => {
  const { id } = useParams();

   const [restaurant, setRestaurant]=useState({});
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  return (
    <div>
      <h1>Restaurant id: {id}</h1>
      <h2>{restaurant.name}</h2>
      <img src={CDN_LINK + restaurant.ImageId}/>

    </div>
  );
};

export default RestaurantMenu;
