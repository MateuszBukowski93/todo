import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Layout from "../components/layout/Layout";
import constants from "../constants";
import List from "../components/list/List";
import { addList, getAllList } from "../api/lists";
import toDoStore from "../store/ToDoStore";
import { observer } from "mobx-react";

const data = [
  { name: "zakupy", createDate: "12.02.2020", tasks: [1, 2, 3, 4, 5, 6] },
  { name: "prezenty", createDate: "10.02.2020", tasks: [1, 2, 3, 4] },
  { name: "pomysły", createDate: "15.02.2020", tasks: [1, 2, 3] },
  {
    name: "dupa",
    createDate: "1.02.2020",
    tasks: [1, 2, 3, 4, 5, 6, 5, 5, 5, 5],
  },
];

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.screenSizeWidth.medium}) {
    flex-direction: row;
  }
`;

const ButtonWithMargin = styled(Button)`
  width: 100%;
  min-width: 200px;
  @media (min-width: ${({ theme }) => theme.screenSizeWidth.small}) {
    margin-left: 10px;
    width: auto;
  }
`;

interface IHome {
  path: string;
}
const Home = observer(({ path }: IHome) => {
  const [listName, setListName] = useState("");
  useEffect(() => {
    getAllList().then((res) => toDoStore.setToDoLists(res));
  }, [toDoStore.toDoLists]);
  return (
    <Layout>
      <FlexContainer>
        <TextInput
          placeholder={constants.ADDNEWLIST}
          value={listName}
          onChange={setListName}
        />
        <ButtonWithMargin
          text="Add"
          onClick={() => {
            addList(listName);
            getAllList().then((res) => toDoStore.setToDoLists(res));
            setListName("");
          }}
          disabled={listName === ""}
        />
      </FlexContainer>
      <List data={toDoStore.toDoLists} />
    </Layout>
  );
});

export default Home;
