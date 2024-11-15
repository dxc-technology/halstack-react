import { useState, memo, useMemo } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import AlertPropsType from "./types";
import DxcIcon from "../icon/Icon";
import DxcButton from "../button/Button";
import DxcDivider from "../divider/Divider";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcFlex from "../flex/Flex";
import ModalAlertWrapper from "./ModalAlertWrapper";

const AlertContainer = styled.div<{
  semantic: AlertPropsType["semantic"];
  mode: AlertPropsType["mode"];
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${(props) =>
    (props.mode === "modal" || props.mode === "inline") && `border-radius: ${props.theme.inlineBannerBorderRadius};`};
  padding: ${(props) => (props.mode === "modal" ? "1.5rem" : "0.5rem 0.75rem")};
  background-color: ${(props) =>
    (props.mode === "modal" && props.theme.modalBackgroundColor) ||
    (props.semantic === "info" && props.theme.infoBackgroundColor) ||
    (props.semantic === "success" && props.theme.successBackgroundColor) ||
    (props.semantic === "warning" && props.theme.warningBackgroundColor) ||
    (props.semantic === "error" && props.theme.errorBackgroundColor)};
  overflow: hidden;
`;

const TitleContainer = styled.div<{ mode: AlertPropsType["mode"]; semantic: AlertPropsType["semantic"] }>`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 0.5rem;
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
  white-space: ${(props) => props.mode === "banner" && "nowrap"};
  text-overflow: ${(props) => props.mode === "banner" && "ellipsis"};
  overflow: ${(props) => props.mode === "banner" && "hidden"};
  ${typographyStyles}
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
    semantic,
    mode,
    primaryAction,
    secondaryAction,
  }: Pick<AlertPropsType, "semantic" | "mode" | "primaryAction" | "secondaryAction">) => (
    <DxcFlex gap="0.5rem" alignSelf={mode === "inline" || mode === "modal" ? "flex-end" : undefined}>
      {secondaryAction?.onClick && (
        <DxcButton
          label={secondaryAction?.label}
          mode="secondary"
          semantic={semantic}
          size={{ height: mode === "modal" ? "medium" : "small" }}
          onClick={secondaryAction?.onClick}
        />
      )}
      {primaryAction?.onClick && (
        <DxcButton
          label={primaryAction?.label}
          semantic={semantic}
          size={{ height: mode === "modal" ? "medium" : "small" }}
          onClick={primaryAction?.onClick}
        />
      )}
    </DxcFlex>
  )
);

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
  const messages = useMemo(() => (Array.isArray(message) ? message : [message]), [message]);

  const handleNextOnClick = () => {
    if (currentIndex + 1 < messages.length) setCurrentIndex(currentIndex + 1);
  };
  const handlePrevOnClick = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <ThemeProvider theme={colorsTheme.alert}>
      <ModalAlertWrapper condition={mode === "modal"} onClose={messages[currentIndex]?.onClose}>
        <AlertContainer semantic={semantic} mode={mode}>
          <DxcFlex gap="0.75rem" alignItems="center">
            <TitleContainer mode={mode} semantic={semantic}>
              {getIcon(semantic)}
              {mode === "banner" ? (
                <Message mode={mode}>
                  <strong>{title}</strong> - {messages[currentIndex]?.text}
                </Message>
              ) : (
                <Title mode={mode}>{title}</Title>
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
                  title="Previous message"
                  onClick={handlePrevOnClick}
                  disabled={currentIndex === 0}
                  tabIndex={tabIndex}
                />
                <NavigationText>
                  {currentIndex + 1} of {messages.length}
                </NavigationText>
                <DxcActionIcon
                  icon="chevron_right"
                  title="Next message"
                  onClick={handleNextOnClick}
                  disabled={currentIndex === messages.length - 1}
                  tabIndex={tabIndex}
                />
              </DxcFlex>
            )}
            <DxcFlex gap="0.25rem">
              {mode !== "modal" && <DxcDivider orientation="vertical" />}
              <DxcActionIcon
                icon="close"
                title="Close alert"
                onClick={messages[currentIndex]?.onClose}
                tabIndex={tabIndex}
              />
            </DxcFlex>
          </DxcFlex>
          {mode === "modal" && <DxcDivider />}
          {mode !== "banner" && (
            <>
              <Message mode={mode}>{messages[currentIndex]?.text}</Message>
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
