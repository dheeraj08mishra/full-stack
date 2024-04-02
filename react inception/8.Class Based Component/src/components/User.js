import React, { useState } from "react";
const User = () => {
    const [user, setUser] = useState(1);
  return (
    <div className="user-card">
        <h1>Count:{user}</h1>
      <h2>Dheeraj Mishra</h2>
      <h3> Location : Kanpur</h3>
      <h3>Contact: @dheerajmishra08</h3>
    </div>
  );
};

export default User;
