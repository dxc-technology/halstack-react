import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcFlex from "../flex/Flex";
import DxcTypography from "../typography/Typography";
import BulletedListPropsType, { BulletedListItemPropsType } from "./types";
import useTheme from "../useTheme";
import DxcIcon from "../icon/Icon";

const BulletedListItem = ({ children }: BulletedListItemPropsType): JSX.Element => {
  return <>{children}</>;
};

const DxcBulletedList = ({ children, type = "disc", icon = "" }: BulletedListPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.bulletedList}>
      <ListContainer>
        <DxcFlex direction="column" as={type === "number" ? "ol" : "ul"} gap="0.125rem">
          {React.Children.map(children, (child, index) => {
            return (
              <ListItem>
                <GeneralContent>
                  {type === "number" ? (
                    <Number>
                      <DxcTypography color={colorsTheme.bulletedList.fontColor}>{index + 1}.</DxcTypography>
                    </Number>
                  ) : type === "square" ? (
                    <Bullet>
                      <Square />
                    </Bullet>
                  ) : type === "circle" ? (
                    <Bullet>
                      <Circle />
                    </Bullet>
                  ) : type === "icon" ? (
                    <Bullet>
                      <Icon>{typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}</Icon>
                    </Bullet>
                  ) : (
                    <Bullet>
                      <Disc />
                    </Bullet>
                  )}
                  <DxcTypography color={colorsTheme.bulletedList.fontColor}>{child}</DxcTypography>
                </GeneralContent>
              </ListItem>
            );
          })}
        </DxcFlex>
      </ListContainer>
    </ThemeProvider>
  );
};

DxcBulletedList.Item = BulletedListItem;

const ListContainer = styled.div`
  ul,
  ol {
    padding: 0;
    margin: 0;
  }
`;

const Bullet = styled.div`
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
  margin-right: ${(props) => props.theme.bulletMarginRight};
  align-content: center;
  color: ${(props) => props.theme.fontColor};

  font-size: ${(props) => props.theme.bulletIconWidth};
  svg {
    height: ${(props) => props.theme.bulletIconHeight};
    width: ${(props) => props.theme.bulletIconWidth};
  }
`;

const Number = styled.div`
  user-select: none;
  margin-right: ${(props) => props.theme.bulletMarginRight};
  display: flex;
  box-sizing: border-box;
  align-self: flex-start;
  min-width: 0;
`;

const Square = styled.div`
  background-color: ${(props) => props.theme.fontColor};
  height: ${(props) => props.theme.bulletHeight};
  width: ${(props) => props.theme.bulletWidth};
  margin-right: ${(props) => props.theme.bulletMarginRight};
`;

const Circle = styled.div`
  height: ${(props) => props.theme.bulletHeight};
  width: ${(props) => props.theme.bulletWidth};
  border-radius: 50%;
  border: 1px solid;
  border-color: ${(props) => props.theme.fontColor};
  margin-right: ${(props) => props.theme.bulletMarginRight};
`;

const Disc = styled.div`
  background-color: ${(props) => props.theme.fontColor};
  height: ${(props) => props.theme.bulletHeight};
  width: ${(props) => props.theme.bulletWidth};
  border-radius: 50%;
  margin-right: ${(props) => props.theme.bulletMarginRight};
`;

const ListItem = styled.li`
  display: flex;
  margin: 0px;
  padding: 0px;
  list-style: none;
  font-size: 1em;
`;

export default DxcBulletedList;
