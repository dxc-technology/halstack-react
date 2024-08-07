import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import getMargin from "../common/utils";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import AlertPropsType from "./types";
import DxcIcon from "../icon/Icon";

const DxcAlert = ({
  type = "info",
  mode = "inline",
  inlineText = "",
  onClose,
  children,
  margin,
  size = "fitContent",
  tabIndex,
}: AlertPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const translatedLabels = useTranslatedLabels();

  const getTypeText = () =>
    type === "info"
      ? translatedLabels?.alert?.infoTitleText
      : type === "confirm"
        ? translatedLabels?.alert?.successTitleText
        : type === "warning"
          ? translatedLabels?.alert?.warningTitleText
          : translatedLabels?.alert?.errorTitleText;

  return (
    <ThemeProvider theme={colorsTheme?.alert}>
      <AlertModal mode={mode}>
        {mode === "modal" && <OverlayContainer mode={mode} onClick={onClose}></OverlayContainer>}
        <AlertContainer
          mode={mode}
          type={type}
          margin={margin}
          size={size}
          role={type === "error" ? "alert" : "status"}
          aria-live={type === "error" ? "assertive" : "off"}
        >
          <AlertInfo>
            <AlertIcon type={type}>
              {(type === "info" && <DxcIcon icon="filled_info" />) ||
                (type === "confirm" && <DxcIcon icon="filled_check_circle" />) ||
                (type === "warning" && <DxcIcon icon="filled_warning" />) ||
                (type === "error" && <DxcIcon icon="filled_cancel" />)}
            </AlertIcon>
            <AlertText>
              <AlertTitle>{getTypeText()}</AlertTitle>
              {inlineText && inlineText !== "" && "-"}
              <AlertInlineText>{inlineText}</AlertInlineText>
            </AlertText>
            {typeof onClose === "function" && (
              <AlertCloseAction onClick={onClose} tabIndex={tabIndex} aria-label="Close alert">
                <DxcIcon icon="close" />
              </AlertCloseAction>
            )}
          </AlertInfo>
          {children && <AlertContent>{children}</AlertContent>}
        </AlertContainer>
      </AlertModal>
    </ThemeProvider>
  );
};

const sizes = {
  small: "280px",
  medium: "480px",
  large: "820px",
  fillParent: "100%",
  fitContent: "fit-content",
};

const calculateWidth = (margin: AlertPropsType["margin"], size: AlertPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin as string | object, "left")} - ${getMargin(margin as string | object, "right")})`
    : size && sizes[size];

const AlertModal = styled.div<{ mode: AlertPropsType["mode"] }>`
  font-size: ${(props) => props.theme.fontSizeBase};
  width: ${(props) => (props.mode === "modal" ? "100%" : "")};
  height: ${(props) => (props.mode === "modal" ? "100%" : "")};
  justify-content: ${(props) => (props.mode === "modal" ? "center" : "")};
  align-items: ${(props) => (props.mode === "modal" ? "center" : "")};
  top: ${(props) => (props.mode === "modal" ? "0" : "")};
  left: ${(props) => (props.mode === "modal" ? "0" : "")};
  position: ${(props) => (props.mode === "modal" ? "fixed" : "")};
  display: ${(props) => (props.mode === "modal" ? "flex" : "")};
  z-index: ${(props) => (props.mode === "modal" ? "1200" : "")};
`;

const OverlayContainer = styled.div<{ mode: AlertPropsType["mode"] }>`
  background-color: ${(props) => (props.mode === "modal" ? `${props.theme.overlayColor}` : "transparent")};
  position: ${(props) => (props.mode === "modal" ? "fixed" : "")};
  top: ${(props) => (props.mode === "modal" ? "0" : "")};
  bottom: ${(props) => (props.mode === "modal" ? "0" : "")};
  left: ${(props) => (props.mode === "modal" ? "0" : "")};
  right: ${(props) => (props.mode === "modal" ? "0" : "")};
`;

const AlertContainer = styled.div<{
  margin: AlertPropsType["margin"];
  size: AlertPropsType["size"];
  type: AlertPropsType["type"];
  mode: AlertPropsType["mode"];
}>`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  display: ${(props) => (props.size === "fitContent" ? "inline-block" : "block")};
  overflow: hidden;
  box-sizing: border-box;

  background-color: ${(props) =>
    (props.type === "info" && props.theme.infoBackgroundColor) ||
    (props.type === "confirm" && props.theme.successBackgroundColor) ||
    (props.type === "warning" && props.theme.warningBackgroundColor) ||
    (props.type === "error" && props.theme.errorBackgroundColor)};

  border-radius: ${(props) => props.theme.borderRadius};
  border-width: ${(props) => props.theme.borderThickness};
  border-style: ${(props) => props.theme.borderStyle};
  border-color: ${(props) =>
    (props.type === "info" && props.theme.infoBorderColor) ||
    (props.type === "confirm" && props.theme.successBorderColor) ||
    (props.type === "warning" && props.theme.warningBorderColor) ||
    (props.type === "error" && props.theme.errorBorderColor)};

  padding-left: 12px;
  padding-right: 12px;
  justify-content: ${(props) => (props.mode === "modal" ? "center" : "")};
  align-items: ${(props) => (props.mode === "modal" ? "center" : "")};
  max-width: ${(props) => props.size !== "fillParent" && calculateWidth(props.margin, "fillParent")};
  width: ${(props) => props.size !== "fillParent" && calculateWidth(props.margin, props.size)};
  z-index: ${(props) => (props.mode === "modal" ? "1300" : "")};
`;

const AlertInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(48px - calc(${(props) => props.theme.borderThickness} * 2));
  align-items: center;
  width: 100%;
`;

const AlertTitle = styled.div`
  margin-right: 8px;
  padding-right: ${(props) => props.theme.titlePaddingRight};
  padding-left: ${(props) => props.theme.titlePaddingLeft};
  font-family: ${(props) => props.theme.titleFontFamily};
  font-size: ${(props) => props.theme.titleFontSize};
  font-style: ${(props) => props.theme.titleFontStyle};
  font-weight: ${(props) => props.theme.titleFontWeight};
  color: ${(props) => props.theme.titleFontColor};
  text-transform: ${(props) => props.theme.titleTextTransform};
`;

const AlertInlineText = styled.div`
  margin-left: 8px;
  padding-right: ${(props) => props.theme.inlineTextPaddingRight};
  padding-left: ${(props) => props.theme.inlineTextPaddingLeft};
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${(props) => props.theme.inlineTextFontFamily};
  font-size: ${(props) => props.theme.inlineTextFontSize};
  font-style: ${(props) => props.theme.inlineTextFontStyle};
  font-weight: ${(props) => props.theme.inlineTextFontWeight};
  color: ${(props) => props.theme.inlineTextFontColor};
`;

const AlertIcon = styled.span<{ type: AlertPropsType["type"] }>`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-right: 12px;
  padding-right: ${(props) => props.theme.iconPaddingRight};
  padding-left: ${(props) => props.theme.iconPaddingLeft};

  color: ${(props) =>
    (props.type === "info" && props.theme.infoIconColor) ||
    (props.type === "confirm" && props.theme.successIconColor) ||
    (props.type === "warning" && props.theme.warningIconColor) ||
    (props.type === "error" && props.theme.errorIconColor)};

  font-size: ${(props) => props.theme.iconSize};
`;

const AlertText = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  overflow: hidden;
`;

const AlertContent = styled.div`
  flex: 1 1 auto;
  padding: ${(props) =>
    `${props.theme.contentPaddingTop} ${props.theme.contentPaddingRight} ${props.theme.contentPaddingBottom} ${props.theme.contentPaddingLeft}`};
  overflow-y: auto;
`;

const AlertCloseAction = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  font-size: 20px;
  border: 1px solid transparent;
  border-radius: 2px;
  box-shadow: 0 0 0 2px transparent;
  padding: 3px;
  margin-left: 12px;
  background-color: transparent;
  color: #000000;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hoverActionBackgroundColor};
  }
  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.focusActionBorderColor};
  }
  &:active {
    background-color: ${(props) => props.theme.activeActionBackgroundColor};
  }
`;

export default DxcAlert;
