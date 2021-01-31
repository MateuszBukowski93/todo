import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Layout from "../components/layout/Layout";
import constants from "../constants";
import List from "../components/list/List";
import FlexContainer from "../components/FlexContainer";
import toDoStore from "../store/ToDoStore";
import { updateList } from "../api/lists";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

const ButtonWithMargin = styled(Button)`
  width: 100%;
  min-width: 200px;
  @media (min-width: ${({ theme }) => theme.screenSizeWidth.small}) {
    margin-left: 10px;
    width: auto;
  }
`;

interface IToDoList {
  path: string;
}

const ToDoList = observer(({}: IToDoList) => {
  const [task, setTask] = useState("");

  return (
    <Layout>
      <FlexContainer>
        <TextInput
          placeholder={constants.ADDNEWTASK}
          value={task}
          onChange={setTask}
        />
        <ButtonWithMargin
          text={constants.ADD}
          onClick={() => {
            updateList({ _id: "asasa", name: task, isDone: false });
            setTask("");
          }}
        />
      </FlexContainer>
      <List
        //@ts-ignore
        data={toJS(toDoStore.currentToDoList.tasks).sort(function (a, b) {
          return Number(a.isDone) - Number(b.isDone);
        })}
        isToDo
      />
    </Layout>
  );
});

export default ToDoList;
