import React from "react";

function Backdrop(props) {
  return <div className="backdrop bg4" onClick={props.onCancel}></div>;
}

export default Backdrop;
