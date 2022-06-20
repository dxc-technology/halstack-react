//@ts-nocheck
import React from "react";
import styled from "styled-components";
import DxcStack from "../stack/Stack";
import DxcTypography from "../typography/Typography";
import ListPropsType from "./types";

function DxcBulletedList({ children, type = "disc", icon = "", size = "standard" }: ListPropsType): JSX.Element {
  return (
    <DxcStack as={type === "number" ? "ol" : "ul"} gutter="xxsmall">
      {React.Children.map(children, (child, index) => {
        return (
          <ListItem size={size}>
            <GeneralContent>
              {type === "number" ? (
                <Number>
                  <DxcTypography size={size}>{index + 1}.</DxcTypography>
                </Number>
              ) : type === "square" ? (
                <Bullet size={size}>
                  <Square size={size}></Square>
                </Bullet>
              ) : type === "circle" ? (
                <Bullet size={size}>
                  <Circle size={size}></Circle>
                </Bullet>
              ) : type === "icon" ? (
                <Bullet size={size}>
                  <Icon size={size}>{icon}</Icon>
                </Bullet>
              ) : (
                <Bullet size={size}>
                  <Disc size={size}></Disc>
                </Bullet>
              )}
              {type ? React.cloneElement(child, { size }) : { child }}
            </GeneralContent>
          </ListItem>
        );
      })}
    </DxcStack>
  );
}

const Bullet = styled.div<ListPropsType>`
  display: flex;
  align-self: flex-start;
  align-items: center;
  height: 1.5rem;
`;

const GeneralContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

const Icon = styled.div`
  height: 1.5rem;
  width: auto;
  margin-right: 0.5rem;
  align-content: center;

  & > svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const Number = styled.div`
  user-select: none;
  margin-right: 0.5rem;
  display: flex;
  box-sizing: border-box;
  align-self: flex-start;
  min-width: 0;
`;

const Square = styled.div<ListPropsType>`
  background-color: black;
  width: 5px;
  height: 5px;
  margin-right: 0.5rem;
`;

const Circle = styled.div<ListPropsType>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 0.5rem;
`;

const Disc = styled.div<ListPropsType>`
  background-color: black;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const ListItem = styled.li<ListPropsType>`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  font-size: "1em";
`;

export default DxcBulletedList;
