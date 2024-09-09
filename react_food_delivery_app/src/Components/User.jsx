import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function User() {
  let userDetails = "";
  const [userData, setUserData] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/users/dheeraj08mishra")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        userDetails = data;
        setUserData(data);
      });
  }, []);
  if (!userData) return <Shimmer />;
  const { name, avatar_url, login, location, company } = userData;
  return (
    <div className="card-container">
      <div className="card">
        <img src={avatar_url} alt={name} />
        <div className="card-content">
          <h3>Name:{name}</h3>
          <h3>UserId:{login}</h3>
        </div>
        <div className="card-footer">
          <div className="rating">
            {/* <span className="rating-icon">⭐</span> */}
            <h4>Company:{company}</h4>
          </div>
          <div className="cost">
            <span className="cost-icon"></span>
            <h4>Location:{location}</h4>
          </div>
          <h4>{""}</h4>
        </div>
      </div>
    </div>
  );
}

export default User;
