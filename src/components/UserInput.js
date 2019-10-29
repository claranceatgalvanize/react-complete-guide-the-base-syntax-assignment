import React from "react";

const UserInput = ({ username, changeOnEvent }) => {
  return <input type="text" onChange={changeOnEvent} value={username} />;
};

export default UserInput;
