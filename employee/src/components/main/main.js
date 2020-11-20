import React from "react";

function main(props) {
  return <div className="container" style={props.style}>{props.children}</div>;
}

export default main; 