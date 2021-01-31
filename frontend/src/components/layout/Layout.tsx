import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  @media (min-width: ${({ theme }) => theme.screenSizeWidth.extraSmall}) {
    padding: 10px 50px;
  }
  @media (min-width: ${({ theme }) => theme.screenSizeWidth.medium}) {
    padding: 10px 100px;
  }
  @media (min-width: ${({ theme }) => theme.screenSizeWidth.large}) {
    padding: 10px 200px;
  }
`;

interface ILayout {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayout) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;
