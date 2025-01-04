import React from "react";
import Card from "../components/Card";
import img4 from "../img/pro.jpg";
import img5 from "../img/sport.png";
import img6 from "../img/hello.png";
import img7 from "../img/Beauty.jpg";

import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3670aa;
  height: 82vh;
  gap: 2rem;
`;

export default function challenges() {
  return (
    <Container>
      <Card
        imgsrc={img4}
        title="Programming"
        description=" Challenge your programming skills"
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
        title="Programming"
        description=" Challenge your programming knowledge"
      />
    </Container>
  );
}
