import React from "react";

const UserOutput = ({ username, changeOnClick }) => {
  return (
    <div>
      <p>Type in the input above or click the below text to change it.</p>
      <p onClick={changeOnClick}>Hi, I'm {username}</p>
    </div>
  );
};

export default UserOutput;
