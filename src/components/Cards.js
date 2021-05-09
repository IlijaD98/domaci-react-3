import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/ny6.jpeg"
              text="A little over 8 million people live in New York City"
              label="Population"
              path="/services"
            />
            <CardItem
              src="images/ny2.jpeg"
              text="More than 800 languages are spoken in New York City, making it the most linguistically diverse city in the world."
              label="Language"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/ny3.jpeg"
              text="New York City’s Federal Reserve Bank has the largest gold storage in the world."
              label="Wealth"
              path="/services"
            />
            <CardItem
              src="images/ny4.jpeg"
              text="The New York Public Library has over 50 million books"
              label="Culture"
              path="/products"
            />
            <CardItem
              src="images/ny7.jpeg"
              text="New York City became the first capital of the United States in 1789."
              label="History"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
