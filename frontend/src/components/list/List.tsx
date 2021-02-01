import React from "react";
import styled from "styled-components";
import constants from "../../constants";
import ListItem from "./ListItem";

const StyledList = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 20px 0 50px 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;

const Nothing = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 900;
`;
interface IList {
  data: any;
  isToDo?: boolean;
}

const List = ({ data, isToDo }: IList) => (
  <StyledList>
    {data.map((item: any) => (
      <ListItem key={data.id} item={item} isToDo={isToDo} />
    ))}
    {data.length === 0 && <Nothing>{constants.THEREISNOITEMTODISPLAY}</Nothing>}
  </StyledList>
);

export default List;
