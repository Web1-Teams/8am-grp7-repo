import styled from "styled-components";

import Card from "../components/Card";
import img4 from "../img/pro.jpg";
import img5 from "../img/sport.png";
import img6 from "../img/hello.png";
import img7 from "../img/Beauty.jpg";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #3670aa;
  height: 82vh;
  gap: 2rem;
`;

export default function Education() {
  return (
    <Container>
      <Card
        imgsrc={img4}
        title="Programming"
        description="Let's learn about  programming "
        link="Programming"
      />
      <Card
        imgsrc={img5}
        title=" Health & Sports"
        description=" Let's learn about Health & Sports "
        link=" "
      />
      <Card
        imgsrc={img6}
        title=" Literature"
        description=" Let's learn about Literature "
        link="Languages"
      />
      <Card
        imgsrc={img7}
        title="Beauty"
        description="Let's learn about Beauty "
        link=" "
      />
    </Container>
  );
}
