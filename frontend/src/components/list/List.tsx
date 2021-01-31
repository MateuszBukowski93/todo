import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const StyledList = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 20px 0 50px 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;

interface IList {
  data: any;
  isToDo?: boolean;
}
const List = ({ data, isToDo }: IList) => {
  return (
    <StyledList>
      {data.map((item: any) => (
        <ListItem key={data.id} item={item} isToDo={isToDo} />
      ))}
    </StyledList>
  );
};

export default List;
