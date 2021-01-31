import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.screenSizeWidth.medium}) {
    flex-direction: row;
  }
`;

interface IFlexContainer {
  children: React.ReactNode;
}
const FlexContainer = ({ children }: IFlexContainer) => {
  return <Container>{children}</Container>;
};

export default FlexContainer;
