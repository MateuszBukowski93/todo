import React, { useState } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import constants from "../constants";
import Button from "./Button";
import TextInput from "./TextInput";
import { loginUser } from "../api/user";

const Container = styled.div`
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

const ErrorContainer = styled(Container)<{ isCorrect: boolean }>`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
  height: auto;
  margin-top: 20px;
  opacity: ${({ isCorrect }) => (isCorrect ? 0 : 1)};
  transition: opacity 300ms;
`;

const Form = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(true);
  const [response, setResponse] = useState<LoginResponse>({
    isCorrectLogin: true,
    isCorrectPassword: true,
  });

  const loginFunc = async () => {
    const res = await loginUser(login, password);
    setResponse(res);
    if (res.isCorrectPassword && res.isCorrectLogin) {
      navigate("/home");
    } else {
      setIsCorrect(false);
      console.log(response);
      setTimeout(() => setIsCorrect(true), 3000);
    }
  };

  return (
    <>
      <Container>
        <TextInput
          value={login}
          onChange={setLogin}
          placeholder={constants.LOGIN}
          name="login"
        />
        <TextInput
          value={password}
          onChange={setPassword}
          placeholder={constants.PASSWORD}
          type="password"
          name="password"
        />
        <FormButton
          disabled={!login || !password}
          text={constants.LOGIN}
          onClick={() => loginFunc()}
        />
      </Container>
      <ErrorContainer isCorrect={isCorrect}>
        {!response.isCorrectLogin && <span>{constants.INCORRECTLOGIN}</span>}
        {!response.isCorrectPassword && (
          <span>{constants.INCORRECTPASSWORD}</span>
        )}
      </ErrorContainer>
    </>
  );
};

export default Form;
