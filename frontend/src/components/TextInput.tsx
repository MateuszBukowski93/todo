import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.colors.primaryLight};
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  transition: all 200ms;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
`;

interface ITextInput {
  value?: string;
  onChange: Dispatch<SetStateAction<string>>;
  placeholder: string;
  name: string;
  type?: string;
}

const TextInput = ({
  value,
  onChange,
  placeholder,
  type = "text",
  name,
  ...otherProps
}: ITextInput) => (
  <Input
    name={name}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    type={type}
    placeholder={placeholder}
    {...otherProps}
  />
);

export default TextInput;
