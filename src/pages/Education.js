import React from "react";

import Card from "../components/Card";
import img4 from "../img/pro.jpg";
import img5 from "../img/sport.png";
import img6 from "../img/hello.png";
import img7 from "../img/Beauty.jpg";
import  "./Education.css";

export default function Education() {
  {
    return (
      <div className="body">
        <div className="container">
          <Card
            imgsrc={img4}
            title="Programming"
            description=" Challenge your programming skills"
            link="Programming"
          />
          <Card
            imgsrc={img5}
            title=" Health & Sports"
            description=" Test your knowledge on beauty treatments"
          />
          <Card
            imgsrc={img6}
            title="Programming"
            description=" Challenge your programming knowledge"
          />
          <Card
            imgsrc={img7}
            title="Progrg"
            description=" Challenge your programming knowledge"
            link="home"
          />
        </div>
      </div>
    );
  }
}

