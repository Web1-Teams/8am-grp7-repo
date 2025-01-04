import Button from "../components/Button.js";
import styled from "styled-components";

const Container = styled.div`
    width: 100%; 
  height: 82vh; 
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  background-color: rgba(24, 95, 226, 0.49);
 
`;

export default function Programming() {
  return (
    <Container>
      <Button link="HTML" />
      <Button link="CSS" />
      <Button link="JavaScript" />
      <Button link="REACT" />
    </Container>
  );
}
