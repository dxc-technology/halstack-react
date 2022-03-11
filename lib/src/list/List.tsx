import React from "react";
import styled from "styled-components";
import DxcStack from "../stack/Stack";
import DxcText from "../text/Text";

type ListProps = {
  children: React.ReactNode;
  gutter?: "none" | "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | "xxxlarge";
  type?: "disc" | "circle" | "square" | "number";
};

function List({ children, type = "disc", gutter = "xxsmall" }: ListProps) {
  return (
    <DxcStack as={type === "number" ? "ol" : "ul"} gutter={gutter}>
      {React.Children.map(children, (child, index) => {
        return (
          <ListItem>
            {type === "number" ? (
              <Number>
                <DxcText>{index + 1}.</DxcText>
              </Number>
            ) : type === "square" ? (
              <Square></Square>
            ) : type === "circle" ? (
              <Circle></Circle>
            ) : (
              <Disc></Disc>
            )}
            {child}
          </ListItem>
        );
      })}
    </DxcStack>
  );
}

const Number = styled.div`
  user-select: none;
  margin-right: 10px;
  flex-shrink: 0;
`;

const Square = styled.div`
  background-color: black;
  width: 5px;
  height: 5px;
  flex-shrink: 0;
  margin-top: 8px;
  margin-right: 10px;
`;

const Circle = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid black;
  flex-shrink: 0;
  margin-top: 8px;
  margin-right: 10px;
  box-sizing: border-box;
`;

const Disc = styled.div`
  background-color: black;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 8px;
  margin-right: 10px;
`;

const ListItem = styled.li`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
`;

export default List;
