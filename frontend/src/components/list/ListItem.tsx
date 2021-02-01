import React from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";
import Button from "../Button";
import constants from "../../constants";
import { deleteList, getAllLists } from "../../api/lists";
import toDoStore from "../../store/ToDoStore";

const Item = styled.li<{ isToDo?: boolean; isDone: boolean }>`
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme, isDone }) =>
    isDone ? theme.colors.gray : "transparent"};
  color: ${({ theme, isDone }) =>
    isDone ? theme.colors.primaryDark : theme.colors.primary};
  padding: 15px 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: "background-color 200ms ease-in";
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
const Done = styled.span`
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 10px;
`;
const SuccessButton = styled(Button)`
  padding: 10px;
  margin: 0 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    border: 2px solid ${({ theme }) => theme.colors.green};
  }
`;
const DeleteButton = styled(Button)`
  padding: 10px;
  margin: 0 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
    border: 2px solid ${({ theme }) => theme.colors.red};
  }
`;

interface IListItem {
  item: any;
  isToDo?: boolean;
}

const ListItem = ({ item, isToDo }: IListItem) => (
  <Item isToDo={isToDo} isDone={item.isDone}>
    <span>{item.name}</span>
    <div style={{ zIndex: 100 }}>
      {isToDo && !item.isDone && (
        <SuccessButton
          text={constants.DONE}
          onClick={() => {
            toDoStore.changeToDone(item);
          }}
        />
      )}
      {isToDo && item.isDone && <Done>{constants.DONE}</Done>}
      {!isToDo && (
        <>
          <SuccessButton
            text={constants.CHECKTASKS}
            onClick={() => {
              toDoStore.setCurrentToDoList(item);
              navigate(`/todolist/${item.name}}`);
            }}
          />
          <DeleteButton
            text={constants.DELETE}
            onClick={() => {
              deleteList(item._id).then(() => getAllLists());
            }}
          />
        </>
      )}
    </div>
  </Item>
);

export default ListItem;
