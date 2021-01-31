import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
`;

const Header = () => (
  <StyledHeader>
    <Title>ToDo App</Title>
  </StyledHeader>
);

export default Header;
