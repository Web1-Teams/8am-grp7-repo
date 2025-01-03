import React from "react";
import Button from "../components/Button";
import "./Programming.css";
export default function programming() {
  return (
    <div className="container">
      <div className="button-container">
        <Button link="HTML" />
        <Button link="CSS" />
        <Button link="JavaScript" />
        <Button link="REACT" />
        <Button link="C++" />
      </div>
    </div>
  );
}