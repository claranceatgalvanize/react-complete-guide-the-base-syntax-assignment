import React from "react";

const UserOutput = ({ username, changeOnClick }) => {
  const body = {
    padding: "2em",
    textAlign: "center"
  };
  return (
    <div style={body}>
      <p>
        Type in the input above or click <br /> the below text to change it.
      </p>
      <h2 onClick={changeOnClick}>Hi, I'm {username}</h2>
    </div>
  );
};

export default UserOutput;
