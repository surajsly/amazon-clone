import React from "react";
import "./Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home__banner"
        />
        <div className="home__row">
          <Product
            id="1"
            title="The Lean start"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="1"
            title="The Lean start"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="1"
            title="The Lean start"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="1"
            title="The Lean start"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="1"
            title="The Lean start"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="1"
            title="The Lean start"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
