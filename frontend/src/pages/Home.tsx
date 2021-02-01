import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Layout from "../components/layout/Layout";
import constants from "../constants";
import List from "../components/list/List";
import { addList, getAllLists } from "../api/lists";
import toDoStore from "../store/ToDoStore";

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
  const [listName, setListName] = useState<string>("");

  useEffect(() => {
    getAllLists();
  }, []);

  return (
    <Layout>
      <FlexContainer>
        <TextInput
          placeholder={constants.ADDNEWLIST}
          value={listName}
          onChange={setListName}
          name="listName"
        />
        <ButtonWithMargin
          text="Add"
          onClick={() => {
            addList(listName);
            getAllLists();
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
