import React from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grayLight : theme.colors.white};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray : theme.colors.primary};
  text-transform: uppercase;
  font-weight: 700;
  border: 2px solid
    ${({ theme, disabled }) =>
      disabled ? theme.colors.gray : theme.colors.primary};
  outline: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.grayLight : theme.colors.primary};
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray : theme.colors.white};
  }
`;

interface IButton {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ text, onClick, disabled, ...otherProps }: IButton) => (
  <StyledButton onClick={onClick} disabled={disabled} {...otherProps}>
    {text}
  </StyledButton>
);

export default Button;
