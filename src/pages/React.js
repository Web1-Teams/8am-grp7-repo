import styled from "styled-components";

const Titel = styled.h1`
  padding: 10px;
  text-align: center;
  color: black;
  font-size: 60px;
  //   align-self: flex-start; /* Aligns title to the top */
`;

const Content = styled.p`
  padding: 10px;
  color: black;
  font-size: 40px;
  text-align: left;
  flex-grow: 1;
  margin-top: 40px;
`;

const Container = styled.div`
  width: 100%;
  height: 82vh;
  display: flex;
  flex-direction: column;
`;

const ButtonLink = styled.a`
  width: 50%;

  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  align-self: center;
  margin-bottom: 40px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function JavaScript() {
  return (
    <Container>
      <Titel> React</Titel>
      <Content>
        React is a JavaScript library for building user interfaces.
        <br /> React is used to build single-page applications.
        <br /> React allows us to create reusable UI components.
      </Content>
      <ButtonLink href="http://localhost:3000/Programming">Back</ButtonLink>

      <ButtonLink
        href="https://www.w3schools.com/react/default.asp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Let's Learn
      </ButtonLink>
    </Container>
  );
}
