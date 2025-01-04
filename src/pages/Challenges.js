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
  flex-wrap: wrap;
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
        description=" Test your knowledge on Health & Sports treatments"
      />
      <Card
        imgsrc={img6}
        title="Literature"
        description="In the boundless world of literature, where words intertwine with ideas, every book offers a chance to discover new realms—are you ready to take on the challenge and uncover the secrets of literature?"
      />
      <Card
        imgsrc={img7}
        title="Beauty"
        description="In the world of beauty, where colors and techniques blend to create stunning looks, are you ready to embark on a challenge to discover the secrets of beauty and the art of elegance?"
      />
    </Container>
  );
}
