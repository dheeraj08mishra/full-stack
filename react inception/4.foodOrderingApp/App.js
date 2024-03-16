import React from "react";
import  ReactDOM  from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img"
          src="https://img.freepik.com/premium-vector/food-delivery-logo-design-template-restaurant-logo_556845-430.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Order</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard=(props)=>{
    const {resName, cusine, raiting, ETA}=props;
    return(
        <div className="res-card">

            <img className="res-cardList" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/akbvvc2wh0wgei00vax4"></img>
            <h3 className="resturantName">{resName}</h3>
            <h4 className="resturantName">{cusine}</h4>
            <h4 className="resturantName">{raiting}</h4>
            <h4 className="resturantName">{ETA}</h4>

        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               {/* Restaurant card */}
               <ResCard resName="1st hotel" cusine="North Indian, Punjabi" raiting="4.4 Star" ETA="35 min"/>
               <ResCard resName="2nd hotel" cusine="Italian, American, Fast Food" raiting="4 star" ETA="40 min"/>
            </div>

        </div>
    )
}

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
      {/* header */}
      {/* body */}
      {/* footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
