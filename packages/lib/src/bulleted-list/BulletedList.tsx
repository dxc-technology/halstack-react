import { Children, useContext } from "react";
import styled from "@emotion/styled";
import DxcFlex from "../flex/Flex";
import DxcTypography from "../typography/Typography";
import BulletedListPropsType, { BulletedListItemPropsType } from "./types";
import DxcIcon from "../icon/Icon";
import HalstackContext from "../HalstackContext";

const ListContainer = styled.div`
  ul,
  ol {
    margin: 0;
    padding: 0;
  }
`;

const Bullet = styled.div`
  align-items: center;
  align-self: flex-start;
  display: flex;
  height: var(--height-s);
`;

const GeneralContent = styled.div`
  align-items: center;
  display: grid;
  gap: var(--spacing-gap-s);
  grid-template-columns: auto 1fr;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--height-xxs);
  height: var(--height-s);
  width: auto;
  svg {
    height: var(--height-xxs);
    width: 16px;
  }
`;

const Number = styled.div`
  align-self: flex-start;
  box-sizing: border-box;
  display: flex;
  min-width: 0;
  user-select: none;
`;

const Square = styled.div`
  background-color: var(--color-fg-neutral-dark);
  height: 4px;
  width: 4px;
`;

const Circle = styled.div`
  border-color: var(--color-fg-neutral-dark);
  border-radius: 50%;
  border: var(--border-width-s) var(--border-style-default);
  height: 4px;
  width: 4px;
`;

const Disc = styled.div`
  background-color: var(--color-fg-neutral-dark);
  border-radius: 50%;
  height: 4px;
  width: 4px;
`;

const ListItem = styled.li`
  color: var(--color-fg-neutral-dark);
  display: flex;
  font-family: var(--typography-font-family);
  font-size: var(--typography-body-m);
  font-weight: var(--typography-body-regular);
  list-style: none;
  margin: var(--spacing-padding-none);
  padding: var(--spacing-padding-none);
`;

const BulletedListItem = ({ children }: BulletedListItemPropsType): JSX.Element => <>{children}</>;

const DxcBulletedList = ({ children, type = "disc", icon = "" }: BulletedListPropsType): JSX.Element => {
  const colorsTheme = useContext(HalstackContext);

  return (
    <ListContainer>
      <DxcFlex direction="column" as={type === "number" ? "ol" : "ul"} gap="0.125rem">
        {Children.map(children, (child, index) => (
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
        ))}
      </DxcFlex>
    </ListContainer>
  );
};

DxcBulletedList.Item = BulletedListItem;

export default DxcBulletedList;
