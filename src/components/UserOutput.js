import React from "react";

const UserOutput = ({ username, changeOnClick }) => {
  return (
    <div>
      <h3 onClick={changeOnClick}>Hi, I'm {username}</h3>
      <p>First paragraph</p>
      <p>Second paragraph, to be manipulated</p>
    </div>
  );
};

export default UserOutput;
