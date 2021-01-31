import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Footer = () => <StyledFooter />;

export default Footer;
