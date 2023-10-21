import { restaurantList } from "./contants";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import Skeleton from "react-loading-skeleton";

// code for serach bar
// Images are imported which are used in Search Bar
import location_logo from "../../Images/location_logo.png";
import search_logo from "../../Images/search_logo.png";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter(
    (restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    // ||
    // restaurant?.info?.cuisines?.toLowerCase()?.includes(searchText.toLowerCase)
  );

  return filterData;
}

//code for Inspiration for your first order
const Inspiration = () => {
  return (
    <div className="inspiration ">
      <h1>Inspiration for your first order</h1>
      <div className="inspiration-items ">
        <div className="inspiration-items-div">
          <img
            className="inspiration-items-imgs"
            src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
          />
          <h2 className="inspiration-items-names">Pizza</h2>
        </div>
        <div className="inspiration-items-div">
          <img
            className="inspiration-items-imgs"
            src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
          />
          <h2 className="inspiration-items-names">Chicken</h2>
        </div>
        <div className="inspiration-items-div">
          <img
            className="inspiration-items-imgs"
            src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
          />
          <h2 className="inspiration-items-names">Biryani</h2>
        </div>
        <div className="inspiration-items-div">
          <img
            className="inspiration-items-imgs"
            src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
          />
          <h2 className="inspiration-items-names">Burger</h2>
        </div>
        <div className="inspiration-items-div">
          <img
            className="inspiration-items-imgs"
            src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
          />
          <h2 className="inspiration-items-names">Thali</h2>
        </div>
        <div className="inspiration-items-div">
          <img
            className="inspiration-items-imgs"
            src="https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
          />
          <h2 className="inspiration-items-names">Fried Rice</h2>
        </div>
      </div>
    </div>
  );
};

// code for Top brands for you
// Images are imported which are used in 'Top brands for you'
import Burger from "../../Images/BurgerKing.png";
import McD from "../../Images/McD.avif";
import Pizza from "../../Images/Domi_pizza.avif";
import Rolls from "../../Images/Rolls.avif";
import kfc from "../../Images/kfc.avif";
import Hut from "../../Images/pizza_hut.avif";

const Topbrand = () => {
  return (
    <div className="topbrand ">
      <h1>Top brands for you</h1>
      <div className="topbrand-items ">
        <div className="topbrand-items-div">
          <img src={McD} className="topbrand-items-imgs" />
          <h2 className="topbrand-items-names">McDonald's</h2>
        </div>
        <div className="topbrand-items-div">
          <img className="topbrand-items-imgs" src={Pizza} />
          <h2 className="topbrand-items-names">Domino's Pizza</h2>
        </div>
        <div className="topbrand-items-div">
          <img className="topbrand-items-imgs" src={Burger} />
          <h2 className="topbrand-items-names">Burger King</h2>
        </div>
        <div className="topbrand-items-div">
          <img className="topbrand-items-imgs" src={Rolls} />
          <h2 className="topbrand-items-names">Rolls Mania</h2>
        </div>
        <div className="topbrand-items-div">
          <img className="topbrand-items-imgs" src={kfc} />
          <h2 className="topbrand-items-names">KFC</h2>
        </div>
        <div className="topbrand-items-div">
          <img className="topbrand-items-imgs" src={Hut} />
          <h2 className="topbrand-items-names">Pizza Hut</h2>
        </div>
      </div>
    </div>
  );
};

// code for Signpamplet
// Images are imported which are used in 'Signpamplet'
import pimg1 from "../../Images/pamplet_img1.jpg";

const Signpamplet = () => {
  return (
    <div className="signpamplet_outer">
      <div className="signpamplet">
        <div className="card-hover">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
              Make your <span>choice</span> right now !
            </h3>
            <p className="card-hover__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              quisquam doloremque nostrum laboriosam, blanditiis libero corporis
              nulla a aut?
            </p>
            <a href="#" className="card-hover__link">
              <span>Sign In</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="card-hover__extra">
            <h4>
              Sign In <span>now</span> and get <span>40%</span> discount !
            </h4>
          </div>
          <img src={pimg1} alt="" />
        </div>
      </div>
    </div>
  );
};

// in this project I have used a live data
// config driven UI
// following is a data ehich I have used

import { CDN_LINK } from "./contants";
//code for cards
const Card = ({ cloudinaryImageId, name, avgRating, cuisines, costForTwo }) => {
  return (
    <div className="card-container">
      <img src={CDN_LINK + cloudinaryImageId} className="cards-imgs" />
      <div className="lower-info">
        <div className="lower-info1">
          <h2 className="item-name">{name}</h2>
          <div className="rating">{avgRating}*</div>
        </div>
        <div className="lower-info2">
          <div className="extra-info">{cuisines.join(", ")}</div>
          <div className="prize">{costForTwo}</div>
        </div>
      </div>
    </div>
  );
};

//main body tag
const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    // console.log("useEffect")
    getRestaurants();
  }, []);

  // console.log("render")
  async function getRestaurants() {
    // console.log("ijcienu");
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // setRestaurants(json?.data?.card?.data?.data?.cards);
    //data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0].info

    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  // useEffect(() => {
  //   async function getRestaurants() {
  //     try {
  //       const data = await fetch(
  //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //       );
  //       const json = await data.json();
  //       console.log(json);
  //       setRestaurants(json?.data?.card?.data?.data?.cards || []);
  //     } catch (error) {
  //       console.error("Error fetching restaurant data:", error);
  //     }
  //   }

  //   getRestaurants();
  // }, []);

  //not render Component(Early Return)
  if (!allrestaurants) return null;

  // if (filteredrestaurants?.length === 0) {
  //   return <h1>Opps !!!!! Sorry No Item found.</h1>;
  // }

  return allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-sub">
      <div className="search-div">
        <div className="search-div-border">
          <div className="search-div1">
            <img src={location_logo} alt="logo" className="search-div-images" />
            <input
              type="text"
              id="search-innertext1"
              className="search-innertext"
              placeholder="Location"
              // value={searchText1}
              // onChange={(e) => {
              //   setSearchText1(e.target.value);
              // }}
            />
          </div>
          {/* nc */}
          <div className="search-div1">
            <img src={search_logo} alt="logo" className="search-div-images" />
            <input
              type="text"
              id="search-innertext2"
              className="search-innertext"
              placeholder="Search for restaurant, cuisine or a dish"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                const data = filterData(searchText, allrestaurants);
                setFilteredRestaurants(data);
              }}
            >
              Search
            </button>
            
          </div>
        </div>
      </div>
      <Inspiration />
      <Topbrand />
      <Signpamplet />
      {filteredrestaurants.length === 0 ? (
        <h1>Opps !!!!! Sorry No Item found.</h1>
      ) : (
        <div className="number-cards">
          {filteredrestaurants.map((r) => {
            return <Card {...r.info} key={r.info.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
