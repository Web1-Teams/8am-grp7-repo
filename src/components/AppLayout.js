import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer";
import Header from "./Header";

const Container = styled.div`
<<<<<<< HEAD
<<<<<<< HEAD
  background-color: #3670aa;
 // height: 100vh;
=======
  background-color: rgb(250, 250, 250);
  // height: 100vh;
>>>>>>> 161d159e16fc70a238cea7fa92821c6b5d3cd1d1
=======
  background-color: rgb(250, 250, 250);
  // height: 100vh;
>>>>>>> 161d159e16fc70a238cea7fa92821c6b5d3cd1d1
`;

export default function AppLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
