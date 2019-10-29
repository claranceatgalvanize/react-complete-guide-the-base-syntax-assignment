import React from "react";

const UserInput = ({ username, changeOnEvent, modeSwitch }) => {
  console.log(modeSwitch);
  const mode = {
    day: {
      color: "#111",
      background: "none",
      width: "70%",
      padding: ".5em",
      textAlign: "center",
      marginTop: "3em",
      border: "none",
      borderBottom: ".02em solid #222",
      fontSize: "1em"
    },
    night: {
      color: "#eee",
      background: "none",
      width: "70%",
      padding: ".5em",
      textAlign: "center",
      marginTop: "3em",
      border: "none",
      borderBottom: ".02em solid #222",
      fontSize: "1em"
    }
  };
  return (
    <input
      style={modeSwitch === true ? mode.day : mode.night}
      type="text"
      onChange={changeOnEvent}
      value={username}
    />
  );
};

export default UserInput;
