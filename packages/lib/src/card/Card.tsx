import { useContext, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import CardPropsType from "./types";
import HalstackContext from "../HalstackContext";

const Card = styled.div<{
  hasAction: boolean;
  margin: CardPropsType["margin"];
  shadowDepth: 0 | 1 | 2;
}>`
  display: flex;
  cursor: ${({ hasAction }) => (hasAction && "pointer") || "unset"};
  outline: ${({ hasAction }) => !hasAction && "none"};
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
  text-decoration: none;
  ${({ hasAction }) =>
    hasAction &&
    `:focus {
      border-radius: var(--border-radius-s);
      outline: var(--border-width-m) solid var(--border-color-secondary-medium);
    }`}
  box-shadow: ${({ shadowDepth }) =>
    shadowDepth === 1
      ? "var(--shadow-low-x-position) var(--shadow-low-y-position) var(--shadow-low-blur) var(--shadow-low-spread) var(--shadow-dark)"
      : shadowDepth === 2
        ? "var(--shadow-mid-x-position) var(--shadow-mid-y-position) var(--shadow-mid-blur) var(--shadow-mid-spread) var(--shadow-light)"
        : "none"};
`;

const CardContainer = styled.div<{
  hasAction: boolean;
  imagePosition: CardPropsType["imagePosition"] | "none";
}>`
  display: flex;
  flex-direction: ${(props) => (props.imagePosition === "after" ? "row-reverse" : "row")};
  height: 220px;
  width: 400px;
  &:hover {
    border-color: ${({ hasAction }) => (hasAction ? "" : "unset")};
  }
`;

const TagImage = styled.img<{ imagePadding: CardPropsType["imagePadding"]; imageCover: CardPropsType["imageCover"] }>`
  height: ${({ imagePadding }) =>
    !imagePadding
      ? "100%"
      : typeof imagePadding !== "object" && `calc(100% - ${spaces[imagePadding]} - ${spaces[imagePadding]})`};
  width: ${({ imagePadding }) =>
    !imagePadding
      ? "100%"
      : typeof imagePadding !== "object" && `calc(100% - ${spaces[imagePadding]} - ${spaces[imagePadding]})`};
  object-fit: ${({ imageCover }) => (imageCover ? "cover" : "contain")};
`;

const ImageContainer = styled.div<{ imageBgColor: CardPropsType["imageBgColor"] }>`
  align-items: center;
  background-color: ${({ imageBgColor }) => imageBgColor};
  display: flex;
  flex-shrink: 0;
  height: 100%;
  justify-content: center;
  width: 35%;
`;

const CardContent = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: var(--spacing-gap-ml, 16px);
  overflow: hidden;
  padding: var(--spacing-padding-l);
`;

const DxcCard = ({
  imageSrc,
  imageBgColor = "black",
  imagePadding,
  imagePosition = "before",
  linkHref,
  onClick,
  imageCover = false,
  margin,
  tabIndex = 0,
  outlined = true,
  children,
}: CardPropsType): JSX.Element => {
  const colorsTheme = useContext(HalstackContext);
  const [isHovered, changeIsHovered] = useState(false);

  return (
    <ThemeProvider theme={colorsTheme.card}>
      <Card
        hasAction={onClick || linkHref ? true : false}
        margin={margin}
        onMouseEnter={() => changeIsHovered(true)}
        onMouseLeave={() => changeIsHovered(false)}
        onClick={onClick}
        tabIndex={onClick || linkHref ? tabIndex : -1}
        as={linkHref && "a"}
        href={linkHref}
        shadowDepth={!outlined ? 0 : isHovered && (onClick || linkHref) ? 2 : 1}
      >
        <CardContainer hasAction={onClick || linkHref ? true : false} imagePosition={imageSrc ? imagePosition : "none"}>
          {imageSrc && (
            <ImageContainer imageBgColor={imageBgColor}>
              <TagImage imagePadding={imagePadding} imageCover={imageCover} src={imageSrc} alt="Card image" />
            </ImageContainer>
          )}
          <CardContent>{children}</CardContent>
        </CardContainer>
      </Card>
    </ThemeProvider>
  );
};

export default DxcCard;
