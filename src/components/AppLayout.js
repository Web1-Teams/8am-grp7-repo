import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
const Container = styled.div`
   background-color: #3670aa;
   يمكنك إزالة التعليق هنا إذا كنت بحاجة إلى إضافة ارتفاع
   height: 100vh;
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
