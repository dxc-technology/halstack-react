//@ts-nocheck
import React, { useContext } from "react";
import styled from "styled-components";
import DxcStack from "../stack/Stack";
import DxcTypography from "../typography/Typography";
import BulletedListPropsType, { BulletedListItemPropsType } from "./types";
import BackgroundColorContext from "../BackgroundColorContext";

const BulletedListItem = ({ children }: BulletedListItemPropsType): JSX.Element => {
  return <React.Fragment>{children}</React.Fragment>;
};

const DxcBulletedList = ({ children, type = "disc", icon = "" }: BulletedListPropsType): JSX.Element => {
  const backgroundType = useContext(BackgroundColorContext);

  return (
    <DxcStack as={type === "number" ? "ol" : "ul"} gutter="xxsmall">
      {React.Children.map(children, (child, index) => {
        return (
          <ListItem>
            <GeneralContent>
              {type === "number" ? (
                <Number>
                  <DxcTypography color={backgroundType && backgroundType === "dark" ? "#FFFFFF" : "#000000"}>
                    {index + 1}.
                  </DxcTypography>
                </Number>
              ) : type === "square" ? (
                <Bullet>
                  <Square backgroundType={backgroundType}></Square>
                </Bullet>
              ) : type === "circle" ? (
                <Bullet>
                  <Circle backgroundType={backgroundType}></Circle>
                </Bullet>
              ) : type === "icon" ? (
                <Bullet>
                  <Icon backgroundType={backgroundType}>{icon}</Icon>
                </Bullet>
              ) : (
                <Bullet>
                  <Disc backgroundType={backgroundType}></Disc>
                </Bullet>
              )}
              <DxcTypography color={backgroundType && backgroundType === "dark" ? "#FFFFFF" : "#000000"}>
                {child}
              </DxcTypography>
            </GeneralContent>
          </ListItem>
        );
      })}
    </DxcStack>
  );
};

DxcBulletedList.Item = BulletedListItem;

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
    fill: ${({ backgroundType }) => (backgroundType && backgroundType === "dark" ? "#FFFFFF" : "#000000")};
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
  background-color: ${({ backgroundType }) => (backgroundType && backgroundType === "dark" ? "#FFFFFF" : "#000000")};
  width: 5px;
  height: 5px;
  margin-right: 0.5rem;
`;

const Circle = styled.div<ListPropsType>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${({ backgroundType }) => (backgroundType && backgroundType === "dark" ? "#FFFFFF" : "#000000")};
  margin-right: 0.5rem;
`;

const Disc = styled.div<ListPropsType>`
  background-color: ${({ backgroundType }) => (backgroundType && backgroundType === "dark" ? "#FFFFFF" : "#000000")};
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
