import React from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";
import Button from "../Button";
import constants from "../../constants";
import { deleteList, updateList } from "../../api/lists";
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
  cursor: ${({ isToDo }) => (isToDo ? "initial" : "pointer")};
  transition: ${({ isToDo }) => !isToDo && "background-color 200ms ease-in"};
  &:hover {
    background-color: ${({ theme, isToDo }) =>
      !isToDo && theme.colors.primaryLight};
  }
`;

const SuccessButton = styled(Button)`
  padding: 5px;
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

const ListItem = ({ item, isToDo }: IListItem) => {
  return (
    <Item
      onClick={() => {
        toDoStore.setCurrentToDoList(item);
        navigate(`/todolist/${item.name}}`);
      }}
      isToDo={isToDo}
      isDone={item.isDone}
    >
      <span>{item.name}</span>
      <div>
        {isToDo && !item.isDone && (
          <SuccessButton
            text={constants.DONE}
            // @ts-ignore
            onClick={(event) => {
              event.stopPropagation();
              updateList(item._id);
            }}
          />
        )}
        {!isToDo && (
          <DeleteButton
            text={constants.DELETE}
            // @ts-ignore
            onClick={(event) => {
              event.stopPropagation();
              deleteList(item._id);
            }}
          />
        )}
      </div>
    </Item>
  );
};

export default ListItem;
