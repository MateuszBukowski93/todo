import React from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import constants from "../constants";
import Button from "./Button";
import TextInput from "./TextInput";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grayLight};
  border-radius: 10px;
  margin: auto;
  padding: 30px;
  height: 300px;
  width: 300px;
  @media (min-width: ${({ theme }) => theme.screenSizeWidth.small}) {
    width: 500px;
  }

  @media (min-width: ${({ theme }) => theme.screenSizeWidth.medium}) {
    width: 700px;
  }
`;

const FormButton = styled(Button)<{ text: string; onClick: () => void }>`
  min-width: 100px;
  width: 100%;
  max-width: 200px;
`;

const Form = () => {
  return (
    <FormContainer>
      <TextInput placeholder={constants.LOGIN} />
      <TextInput placeholder={constants.PASSWORD} type="password" />
      <FormButton
        text={constants.LOGIN}
        onClick={() => {
          navigate("/home");
        }}
      />
    </FormContainer>
  );
};

export default Form;
