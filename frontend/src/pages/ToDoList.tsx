import React, { useState } from "react";
import styled from "styled-components";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { v4 as uuid } from "uuid";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Layout from "../components/layout/Layout";
import constants from "../constants";
import List from "../components/list/List";
import FlexContainer from "../components/FlexContainer";
import toDoStore from "../store/ToDoStore";
import { getCurrentList, updateList } from "../api/lists";

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

const ToDoList = observer(({ path }: IToDoList) => {
  const [task, setTask] = useState<string>("");

  return (
    <Layout>
      <FlexContainer>
        <TextInput
          placeholder={constants.ADDNEWTASK}
          value={task}
          onChange={setTask}
          name="task"
        />
        <ButtonWithMargin
          text={constants.ADD}
          disabled={task === ""}
          onClick={() => {
            updateList({ _id: uuid(), name: task, isDone: false }).then(() =>
              getCurrentList(toDoStore.currentToDoList._id)
            );

            setTask("");
          }}
        />
      </FlexContainer>
      <List
        data={toJS(toDoStore.currentToDoList.tasks).sort(function (a, b) {
          return Number(a.isDone) - Number(b.isDone);
        })}
        isToDo
      />
    </Layout>
  );
});

export default ToDoList;
