import styled, { css, ThemeProvider } from "styled-components";
import { useState, memo, useId, useEffect, useCallback, useContext } from "react";
import AlertPropsType from "./types";
import DxcIcon from "../icon/Icon";
import DxcButton from "../button/Button";
import DxcDivider from "../divider/Divider";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcFlex from "../flex/Flex";
import ModalAlertWrapper from "./ModalAlertWrapper";
import { HalstackLanguageContext } from "../HalstackContext";

const AlertContainer = styled.div<{
  semantic: AlertPropsType["semantic"];
  mode: AlertPropsType["mode"];
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.mode === "banner" ? "var(--spacing-gap-m)" : "var(--spacing-gap-s)")};
  ${(props) => (props.mode === "modal" || props.mode === "inline") && `border-radius: var(--border-radius-s);`};
  padding: ${(props) =>
    props.mode === "modal"
      ? "var(--spacing-padding-l)"
      : props.mode === "inline"
        ? "var(--spacing-padding-s)"
        : "var(--spacing-padding-xs) var(--spacing-padding-s)"};

  background-color: ${(props) =>
    (props.mode === "modal" && "var(--color-absolutes-white)") ||
    (props.semantic === "info" && "var(--color-bg-secondary-lighter)") ||
    (props.semantic === "success" && "var(--color-bg-success-lighter)") ||
    (props.semantic === "warning" && "var(--color-bg-warning-lighter)") ||
    (props.semantic === "error" && "var(--color-bg-error-lighter)")};
  overflow: hidden;
`;

const TitleContainer = styled.div<{ mode: AlertPropsType["mode"]; semantic: AlertPropsType["semantic"] }>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  color: ${(props) =>
    (props.semantic === "info" && "var(--color-bg-secondary-strong)") ||
    (props.semantic === "success" && "var(--color-bg-success-strong)") ||
    (props.semantic === "warning" && "var(--color-bg-warning-strong)") ||
    (props.semantic === "error" && "var(--color-bg-error-strong)")};
  font-size: var(--height-s);
  overflow: hidden;
`;

const typographyStyles = css`
  font-family: var(--typography-font-family);
  font-style: var(--type_normal);
  color: var(--color-fg-neutral-dark);
  font-weight: var(--typography-helper-text-regular);
`;

const Title = styled.span<{ mode: AlertPropsType["mode"] }>`
  ${typographyStyles}
  font-size: ${(props) => (props.mode === "modal" ? "var(--typography-title-xl)" : "var(--typography-title-s)")};
  font-weight: var(--typography-title-bold);
`;

const Message = styled.div<{ mode: AlertPropsType["mode"] }>`
  ${typographyStyles}
  white-space: ${(props) => props.mode === "banner" && "nowrap"};
  text-overflow: ${(props) => props.mode === "banner" && "ellipsis"};
  overflow: ${(props) => props.mode === "banner" && "hidden"};
  font-size: var(--typography-helper-text-m);
  > strong {
    font-weight: var(--typography-title-bold);
    font-size: var(--typography-title-s);
  }
`;

const NavigationText = styled.span`
  ${typographyStyles}
  white-space: nowrap;
  font-size: var(--typography-helper-text-s);
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
  }
};

export default function DxcAlert({
  closable = true,
  message = [],
  mode = "inline",
  primaryAction,
  secondaryAction,
  semantic = "info",
  title = "",
}: AlertPropsType) {
  const [messages, setMessages] = useState(Array.isArray(message) ? message : [message]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const id = useId();
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
    if (currentIndex === messages.length) handlePrevOnClick();
  }, [currentIndex, messages, handlePrevOnClick]);

  return (
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
            <Actions semantic={semantic} mode={mode} primaryAction={primaryAction} secondaryAction={secondaryAction} />
          )}
          {messages.length > 1 && (
            <DxcFlex alignItems="center" gap="0.25rem">
              <DxcActionIcon
                icon="chevron_left"
                title={translatedLabels.alert.previousMessageActionTitle}
                onClick={handlePrevOnClick}
                disabled={currentIndex === 0}
              />
              <NavigationText>
                {currentIndex + 1} of {messages.length}
              </NavigationText>
              <DxcActionIcon
                icon="chevron_right"
                title={translatedLabels.alert.nextMessageActionTitle}
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
                    ? translatedLabels.alert.closeMessageActionTitle
                    : translatedLabels.alert.closeAlertActionTitle
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
            <Actions semantic={semantic} mode={mode} primaryAction={primaryAction} secondaryAction={secondaryAction} />
          </>
        )}
      </AlertContainer>
    </ModalAlertWrapper>
  );
}
