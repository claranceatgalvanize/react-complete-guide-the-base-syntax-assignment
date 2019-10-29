import React from "react";

const UserOutput = ({ username }) => {
  return (
    <div>
      <h3>Hi, I'm {username}</h3>
      <p>First paragraph</p>
      <p>Second paragraph, to be manipulated</p>
    </div>
  );
};

export default UserOutput;
