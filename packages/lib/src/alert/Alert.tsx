import styled, { css, ThemeProvider } from "styled-components";
import { useState, memo, useId, useEffect, useCallback, useContext } from "react";
import AlertPropsType from "./types";
import DxcIcon from "../icon/Icon";
import DxcButton from "../button/Button";
import DxcDivider from "../divider/Divider";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcFlex from "../flex/Flex";
import ModalAlertWrapper from "./ModalAlertWrapper";
import CoreTokens from "../common/coreTokens";
import HalstackContext, { HalstackLanguageContext } from "../HalstackContext";

const AlertContainer = styled.div<{
  semantic: AlertPropsType["semantic"];
  mode: AlertPropsType["mode"];
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${CoreTokens.spacing_8};
  ${(props) =>
    (props.mode === "modal" || props.mode === "inline") && `border-radius: ${CoreTokens.border_radius_medium};`};
  padding: ${(props) =>
    props.mode === "modal"
      ? CoreTokens.spacing_24
      : props.mode === "inline"
        ? CoreTokens.spacing_12
        : `${CoreTokens.spacing_8} ${CoreTokens.spacing_12}`};
  background-color: ${(props) =>
    (props.mode === "modal" && props.theme.modalBackgroundColor) ||
    (props.semantic === "info" && props.theme.infoBackgroundColor) ||
    (props.semantic === "success" && props.theme.successBackgroundColor) ||
    (props.semantic === "warning" && props.theme.warningBackgroundColor) ||
    (props.semantic === "error" && props.theme.errorBackgroundColor)};
  overflow: hidden;
`;

const TitleContainer = styled.div<{ mode: AlertPropsType["mode"]; semantic: AlertPropsType["semantic"] }>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: ${CoreTokens.spacing_8};
  color: ${(props) =>
    (props.semantic === "info" && props.theme.infoIconColor) ||
    (props.semantic === "success" && props.theme.successIconColor) ||
    (props.semantic === "warning" && props.theme.warningIconColor) ||
    (props.semantic === "error" && props.theme.errorIconColor)};
  font-size: ${(props) => props.theme.iconSize};
  overflow: hidden;
`;

const typographyStyles = css`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  color: ${(props) => props.theme.fontColor};
`;

const Title = styled.span<{ mode: AlertPropsType["mode"] }>`
  ${typographyStyles}
  ${(props) => props.mode === "modal" && `font-size: ${props.theme.modalTitleFontSize}`};
  font-weight: ${(props) => props.theme.modalTitleFontWeight};
`;

const Message = styled.div<{ mode: AlertPropsType["mode"] }>`
  ${typographyStyles}
  white-space: ${(props) => props.mode === "banner" && "nowrap"};
  text-overflow: ${(props) => props.mode === "banner" && "ellipsis"};
  overflow: ${(props) => props.mode === "banner" && "hidden"};

  > strong {
    font-weight: ${(props) => props.theme.modalTitleFontWeight};
  }
`;

const NavigationText = styled.span`
  ${typographyStyles}
  white-space: nowrap;
`;

const Actions = memo(
  ({
    mode,
    primaryAction,
    secondaryAction,
    semantic,
  }: Pick<AlertPropsType, "mode" | "primaryAction" | "secondaryAction" | "semantic">) =>
    (primaryAction != null || secondaryAction != null) && (
      <DxcFlex gap="0.5rem" alignSelf={mode === "inline" || mode === "modal" ? "flex-end" : undefined}>
        {secondaryAction?.onClick && (
          <DxcButton
            icon={secondaryAction.icon}
            label={secondaryAction.label}
            mode="secondary"
            semantic={semantic}
            size={{ height: mode === "modal" ? "medium" : "small" }}
            onClick={secondaryAction.onClick}
          />
        )}
        {primaryAction?.onClick && (
          <DxcButton
            icon={primaryAction.icon}
            label={primaryAction.label}
            semantic={semantic}
            size={{ height: mode === "modal" ? "medium" : "small" }}
            onClick={primaryAction.onClick}
          />
        )}
      </DxcFlex>
    )
);

Actions.displayName = "Actions";

const getIcon = (semantic: AlertPropsType["semantic"]) => {
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
      return undefined;
  }
};

const DxcAlert = ({
  closable = true,
  message = [],
  mode = "inline",
  primaryAction,
  secondaryAction,
  semantic = "info",
  title = "",
}: AlertPropsType) => {
  const [messages, setMessages] = useState(Array.isArray(message) ? message : [message]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const id = useId();
  const colorsTheme = useContext(HalstackContext);
  const translatedLabels = useContext(HalstackLanguageContext);

  const handleNextOnClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < messages.length ? prevIndex + 1 : prevIndex));
  };
  const handlePrevOnClick = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }, []);
  const handleOnClose = () => {
    messages[currentIndex]?.onClose?.();
    if (mode !== "modal") {
      setMessages((prevMessages) => prevMessages.filter((_, index) => index !== currentIndex));
    }
  };

  useEffect(() => {
    if (currentIndex === messages.length) {
      handlePrevOnClick();
    }
  }, [currentIndex, messages, handlePrevOnClick]);

  return (
    <ThemeProvider theme={colorsTheme.alert}>
      <ModalAlertWrapper condition={mode === "modal"} onClose={handleOnClose}>
        <AlertContainer
          role={mode === "modal" ? "alertdialog" : "alert"}
          aria-modal={mode === "modal" ? true : undefined}
          aria-labelledby={mode === "modal" ? `${id}-title` : undefined}
          aria-describedby={mode === "modal" ? `${id}-message` : undefined}
          semantic={semantic}
          mode={mode}
        >
          <DxcFlex gap="0.75rem" alignItems="center">
            <TitleContainer mode={mode} semantic={semantic}>
              {getIcon(semantic)}
              {mode === "banner" ? (
                <Message mode={mode}>
                  <strong>{title}</strong>
                  {messages.length > 0 && <> - {messages[currentIndex]?.text}</>}
                </Message>
              ) : (
                <Title id={`${id}-title`} mode={mode}>
                  {title}
                </Title>
              )}
            </TitleContainer>
            {mode === "banner" && (
              <Actions
                semantic={semantic}
                mode={mode}
                primaryAction={primaryAction}
                secondaryAction={secondaryAction}
              />
            )}
            {messages.length > 1 && (
              <DxcFlex alignItems="center" gap="0.25rem">
                <DxcActionIcon
                  icon="chevron_left"
                  title={translatedLabels.alert.previousMessageActionTitle ?? ""}
                  onClick={handlePrevOnClick}
                  disabled={currentIndex === 0}
                />
                <NavigationText>
                  {currentIndex + 1} of {messages.length}
                </NavigationText>
                <DxcActionIcon
                  icon="chevron_right"
                  title={translatedLabels.alert.nextMessageActionTitle ?? ""}
                  onClick={handleNextOnClick}
                  disabled={currentIndex === messages.length - 1}
                />
              </DxcFlex>
            )}
            {closable && (
              <DxcFlex gap="0.25rem">
                {mode !== "modal" && <DxcDivider orientation="vertical" />}
                <DxcActionIcon
                  icon="close"
                  title={
                    messages.length > 1
                      ? (translatedLabels.alert.closeMessageActionTitle ?? "")
                      : (translatedLabels.alert.closeAlertActionTitle ?? "")
                  }
                  onClick={handleOnClose}
                />
              </DxcFlex>
            )}
          </DxcFlex>
          {mode === "modal" && <DxcDivider />}
          {mode !== "banner" && (
            <>
              {messages.length > 0 && (
                <Message id={`${id}-message`} mode={mode}>
                  {messages[currentIndex]?.text}
                </Message>
              )}
              <Actions
                semantic={semantic}
                mode={mode}
                primaryAction={primaryAction}
                secondaryAction={secondaryAction}
              />
            </>
          )}
        </AlertContainer>
      </ModalAlertWrapper>
    </ThemeProvider>
  );
};

export default DxcAlert;
