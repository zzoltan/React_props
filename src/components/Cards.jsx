import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
import Name from "./Name";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <Name name={props.name} />
        <Avatar image={props.img} />
      </div>
      <div className="bottom">
        <Details info={props.tel} />
        <Details info={props.email} />
      </div>
    </div>
  );
}

export default Card;
