import React from "react";

export const ButtonExample = (props) => (
  <button
    style={{
      backgroundColor: "white",
      border: "solid red",
      borderRadius: 20,
      padding: 10,
      cursor: "pointer",
      ...props.style,
    }}
  />
);
