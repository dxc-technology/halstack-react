import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import AlertPropsType from "./types";
import DxcIcon from "../icon/Icon";
import DxcButton from "../button/Button";
import DxcDivider from "../divider/Divider";
import DxcActionIcon from "../action-icon/ActionIcon";
import CoreTokens from "../common/coreTokens";

const Modal = styled.div<{ mode: AlertPropsType["mode"] }>`
  width: ${(props) => (props.mode === "modal" || props.mode === "inline" ? "100%" : "")};
  height: ${(props) => (props.mode === "modal" || props.mode === "inline" ? "100%" : "")};
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
  semantic: AlertPropsType["semantic"];
  mode: AlertPropsType["mode"];
}>`
  display: flex;
  flex-direction: ${(props) => (props.mode === "banner" ? "column" : "row")};
  min-width: ${(props) => (props.mode === "inline" || props.mode === "modal") && "696px"};
  max-width: ${(props) => (props.mode === "inline" || props.mode === "modal") && "80%"};
  width: ${(props) => (props.mode === "banner" && "100%") || "fit-content"};
  padding-top: ${(props) =>
    (props.mode === "modal" && `${props.theme.modalPaddingTop}`) || `${props.theme.paddingTop}`};
  padding-right: ${(props) =>
    (props.mode === "modal" && `${props.theme.modalPaddingRight}`) || `${props.theme.paddingRight}`};
  padding-bottom: ${(props) =>
    (props.mode === "modal" && `${props.theme.modalPaddingBottom}`) || `${props.theme.paddingBottom}`};
  padding-left: ${(props) =>
    (props.mode === "modal" && `${props.theme.modalPaddingLeft}`) || `${props.theme.paddingLeft}`};
  overflow: hidden;
  box-sizing: border-box;
  border-radius: ${(props) => (props.mode === "modal" || props.mode === "inline") && `${props.theme.borderRadius}`};
  box-shadow: ${(props) =>
    props.mode === "modal" &&
    `${props.theme.boxShadowOffsetX} ${props.theme.boxShadowOffsetY} ${props.theme.boxShadowBlur} ${props.theme.boxShadowSpreadRadius} rgba(0, 0, 0, 0.25)`};
  background-color: ${(props) =>
    (props.mode === "modal" && props.theme.modalBackgroundColor) ||
    (props.semantic === "info" && props.theme.infoBackgroundColor) ||
    (props.semantic === "success" && props.theme.successBackgroundColor) ||
    (props.semantic === "warning" && props.theme.warningBackgroundColor) ||
    (props.semantic === "error" && props.theme.errorBackgroundColor)};
  justify-content: ${(props) => (props.mode === "modal" ? "center" : "")};
  align-items: ${(props) => (props.mode === "modal" ? "center" : "")};
  z-index: ${(props) => (props.mode === "modal" ? "1300" : "")};
`;

const BannerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BannerLeftContent = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
`;

const RightActionsBanner = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: ${CoreTokens.spacing_4};
`;

const TextContent = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TextContentInline = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  gap: 8px;
  margin-top: 8px;
`;

const ActionsContainer = styled.div<{
  mode: AlertPropsType["mode"];
}>`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => props.mode !== "banner" && "8px"};
  gap: 8px;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const Icon = styled.span<{ semantic: AlertPropsType["semantic"] }>`
  display: flex;
  flex-wrap: wrap;
  width: 24px;
  height: 24px;
  padding-right: ${(props) => props.theme.iconPaddingRight};
  color: ${(props) =>
    (props.semantic === "info" && props.theme.infoIconColor) ||
    (props.semantic === "success" && props.theme.successIconColor) ||
    (props.semantic === "warning" && props.theme.warningIconColor) ||
    (props.semantic === "error" && props.theme.errorIconColor)};
  font-size: ${(props) => props.theme.iconSize};
`;

const Title = styled.div<{ mode: AlertPropsType["mode"] }>`
  font-family: ${(props) => props.theme.titleFontFamily};
  font-size: ${(props) => (props.mode === "modal" && props.theme.modalTitleFontSize) || props.theme.titleFontSize};
  font-style: ${(props) => props.theme.titleFontStyle};
  font-weight: ${(props) => props.theme.titleFontWeight};
  color: ${(props) => props.theme.titleFontColor};
  /* padding-right: ${(props) => props.mode === "banner" && `${(props) => props.theme.titlePaddingRight}`}; */
  padding-right: 4px;
`;

const Message = styled.div<{ mode: AlertPropsType["mode"] }>`
  padding-right: ${(props) => props.theme.messagePaddingRight};
  padding-left: ${(props) => props.theme.messagePaddingLeft};
  flex-grow: 1;
  white-space: ${(props) => props.mode === "banner" && "nowrap"};
  overflow: ${(props) => props.mode === "banner" && "hidden"};
  text-overflow: ${(props) => props.mode === "banner" && "ellipsis"};
  font-family: ${(props) => props.theme.messageFontFamily};
  font-size: ${(props) => props.theme.messageFontSize};
  font-style: ${(props) => props.theme.messageFontStyle};
  font-weight: ${(props) => props.theme.messageFontWeight};
  color: ${(props) => props.theme.messageFontColor};
`;

const PrevAction = styled.div`
  margin-right: 4px;
`;

const NextAction = styled.div`
  margin-left: 4px;
  margin-right: 12px;
`;

const NavigationText = styled.span`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.navigationTextFontFamily};
  font-size: ${(props) => props.theme.navigationTextFontSize};
  font-style: ${(props) => props.theme.navigationTextFontStyle};
  font-weight: ${(props) => props.theme.navigationTextFontWeight};
  color: ${(props) => props.theme.navigationTextFontColor};
`;

const getIcon = (semantic: string) => {
  switch (semantic) {
    case "info":
      return <DxcIcon icon="filled_info" />;
    case "success":
      return <DxcIcon icon="filled_check_circle" />;
    case "warning":
      return <DxcIcon icon="filled_warning" />;
    case "error":
      return <DxcIcon icon="filled_cancel" />;
    default:
      return null;
  }
};

const DxcAlert = ({
  message,
  mode = "inline",
  primaryAction,
  secondaryAction,
  semantic = "info",
  tabIndex,
  title = "",
}: AlertPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [isLastMessage, setIsLastMessage] = useState(false);
  const [activeMessages, setActiveMessages] = useState(Array.isArray(message) ? message : [message]);

  const handleClose = (index: number) => {
    if (activeMessages[index]?.onClose) activeMessages[index].onClose();
  };

  const handlePrev = () => {
    if (Array.isArray(activeMessages)) {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex - 1 + activeMessages.length) % activeMessages.length;
        setIsFirstMessage(newIndex === 0);
        setIsLastMessage(false);
        return newIndex;
      });
    }
  };

  const handleNext = () => {
    if (Array.isArray(activeMessages)) {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % activeMessages.length;
        setIsLastMessage(newIndex === activeMessages.length - 1);
        setIsFirstMessage(false);
        return newIndex;
      });
    }
  };

  useEffect(() => {
    setActiveMessages(Array.isArray(message) ? message : [message]);
    if (activeMessages.length === 0) return null;
  }, [message]);

  return (
    <ThemeProvider theme={colorsTheme.alert}>
      <Modal mode={mode}>
        {mode === "modal" && <OverlayContainer mode={mode} onClick={activeMessages[currentIndex]?.onClose} />}
        <AlertContainer semantic={semantic} mode={mode}>
          <ContentWrapper>
            <BannerContent>
              <BannerLeftContent>
                <Icon semantic={semantic}>{getIcon(semantic)}</Icon>
                <TextContent>
                  <Title mode={mode}>{title}</Title>-
                  {mode === "banner" && Array.isArray(activeMessages) && (
                    <Message mode={mode}>{activeMessages[currentIndex]?.messageText}</Message>
                  )}
                </TextContent>
              </BannerLeftContent>
              <RightActionsBanner>
                {mode === "banner" && (
                  <ActionsContainer mode={mode}>
                    {secondaryAction?.onClick && typeof secondaryAction?.onClick === "function" && (
                      <DxcButton
                        label={secondaryAction?.label}
                        mode="secondary"
                        semantic={semantic}
                        size={{ height: "small" }}
                        onClick={secondaryAction?.onClick}
                      />
                    )}
                    {primaryAction?.onClick && typeof primaryAction?.onClick === "function" && (
                      <DxcButton
                        label={primaryAction?.label}
                        semantic={semantic}
                        size={{ height: "small" }}
                        margin={{ right: "small" }}
                        onClick={primaryAction?.onClick}
                      />
                    )}
                  </ActionsContainer>
                )}
                {activeMessages.length > 1 && (
                  <>
                    <PrevAction>
                      <DxcActionIcon
                        icon="chevron_left"
                        title="Previous message"
                        onClick={Array.isArray(activeMessages) && handlePrev}
                        disabled={isFirstMessage ?? false}
                        tabIndex={tabIndex}
                      />
                    </PrevAction>
                    <NavigationText>
                      {currentIndex + 1} of {Array.isArray(activeMessages) ? activeMessages.length : 1}
                    </NavigationText>
                    <NextAction>
                      <DxcActionIcon
                        icon="chevron_right"
                        title="Next message"
                        onClick={handleNext}
                        disabled={isLastMessage ?? false}
                        tabIndex={tabIndex}
                      />
                    </NextAction>
                  </>
                )}
                {mode !== "modal" && <DxcDivider orientation="vertical" />}
                <DxcActionIcon
                  icon="close"
                  title="Close alert"
                  onClick={() => handleClose(currentIndex)}
                  tabIndex={tabIndex}
                />
              </RightActionsBanner>
            </BannerContent>
            {(mode === "inline" || mode === "modal") && (
              <TextContentInline>
                {mode === "modal" && <DxcDivider />}
                {Array.isArray(activeMessages) && (
                  <Message mode={mode}>{activeMessages[currentIndex]?.messageText}</Message>
                )}
              </TextContentInline>
            )}
            {mode !== "banner" && (
              <ActionsContainer mode={mode}>
                {secondaryAction?.onClick && typeof secondaryAction?.onClick === "function" && (
                  <DxcButton
                    label={secondaryAction?.label}
                    mode="secondary"
                    semantic={semantic}
                    size={{ height: mode === "modal" ? "medium" : "small" }}
                    onClick={secondaryAction?.onClick}
                  />
                )}
                {primaryAction?.onClick && typeof primaryAction?.onClick === "function" && (
                  <DxcButton
                    label={primaryAction?.label}
                    semantic={semantic}
                    size={{ height: mode === "modal" ? "medium" : "small" }}
                    margin={{ right: "small" }}
                    onClick={primaryAction?.onClick}
                  />
                )}
              </ActionsContainer>
            )}
          </ContentWrapper>
        </AlertContainer>
      </Modal>
    </ThemeProvider>
  );
};

export default DxcAlert;
