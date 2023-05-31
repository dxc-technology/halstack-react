import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcFlex from "../flex/Flex";
import DxcTypography from "../typography/Typography";
import BulletedListPropsType, { BulletedListItemPropsType } from "./types";
import useTheme from "../useTheme";
import BackgroundColorContext, { BackgroundColors } from "../BackgroundColorContext";

const BulletedListItem = ({ children }: BulletedListItemPropsType): JSX.Element => {
  return <>{children}</>;
};

const DxcBulletedList = ({ children, type = "disc", icon = "" }: BulletedListPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);

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
                      <DxcTypography
                        color={
                          backgroundType && backgroundType === "dark"
                            ? colorsTheme.bulletedList.fontColorOnDark
                            : colorsTheme.bulletedList.fontColor
                        }
                      >
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
                      <Icon backgroundType={backgroundType}>
                        {typeof icon === "string" ? <img src={icon} /> : icon}
                      </Icon>
                    </Bullet>
                  ) : (
                    <Bullet>
                      <Disc backgroundType={backgroundType}></Disc>
                    </Bullet>
                  )}
                  <DxcTypography
                    color={
                      backgroundType && backgroundType === "dark"
                        ? colorsTheme.bulletedList.fontColorOnDark
                        : colorsTheme.bulletedList.fontColor
                    }
                  >
                    {child}
                  </DxcTypography>
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

const Icon = styled.span<{ backgroundType: BackgroundColors }>`
  height: 1.5rem;
  width: auto;
  margin-right: ${(props) => props.theme.bulletMarginRight};
  align-content: center;
  color: ${(props) =>
    props.backgroundType && props.backgroundType === "dark" ? props.theme.fontColorOnDark : props.theme.fontColor};
  svg,
  img {
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

const Square = styled.div<{ backgroundType: BackgroundColors }>`
  background-color: ${(props) =>
    props.backgroundType && props.backgroundType === "dark" ? props.theme.fontColorOnDark : props.theme.fontColor};
  height: ${(props) => props.theme.bulletHeight};
  width: ${(props) => props.theme.bulletWidth};
  margin-right: ${(props) => props.theme.bulletMarginRight};
`;

const Circle = styled.div<{ backgroundType: BackgroundColors }>`
  height: ${(props) => props.theme.bulletHeight};
  width: ${(props) => props.theme.bulletWidth};
  border-radius: 50%;
  border: 1px solid;
  border-color: ${(props) =>
    props.backgroundType && props.backgroundType === "dark" ? props.theme.fontColorOnDark : props.theme.fontColor};
  margin-right: ${(props) => props.theme.bulletMarginRight};
`;

const Disc = styled.div<{ backgroundType: BackgroundColors }>`
  background-color: ${(props) =>
    props.backgroundType && props.backgroundType === "dark" ? props.theme.fontColorOnDark : props.theme.fontColor};
  height: ${(props) => props.theme.bulletHeight};
  width: ${(props) => props.theme.bulletWidth};
  border-radius: 50%;
  margin-right: ${(props) => props.theme.bulletMarginRight};
`;

const ListItem = styled.li`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  font-size: 1em;
`;

export default DxcBulletedList;
