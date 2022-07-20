import React from "react";

const Helmet = (props) => {
  document.title = props.title;
  return <section>{props.children}</section>;
};

export default Helmet;
