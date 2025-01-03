import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
export default function Button(props) {
  return (
    <div>
      <Link to={props.link}>
        <button className ="button "> {props.link}</button>
      </Link>
    </div>
  );
}
