import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState, useId, useEffect, useCallback, useContext, useMemo } from "react";
import AlertPropsType from "./types";
import DxcIcon from "../icon/Icon";
import DxcDivider from "../divider/Divider";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcFlex from "../flex/Flex";
import Actions from "./Actions";
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
    (props.mode === "modal" && "var(--color-bg-neutral-lightest)") ||
    (props.semantic === "info" && "var(--color-bg-info-lighter)") ||
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
    (props.semantic === "info" && "var(--color-fg-info-strong)") ||
    (props.semantic === "success" && "var(--color-fg-success-medium)") ||
    (props.semantic === "warning" && "var(--color-fg-warning-medium)") ||
    (props.semantic === "error" && "var(--color-fg-error-medium)")};
  font-size: var(--height-s);
  overflow: hidden;
`;

const typographyStyles = css`
  font-family: var(--typography-font-family);
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

const DxcAlert = ({
  closable = true,
  message = [],
  mode = "inline",
  primaryAction,
  secondaryAction,
  semantic = "info",
  title = "",
}: AlertPropsType) => {
  const messages = useMemo(() => (Array.isArray(message) ? message : [message]), [message]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const id = useId();
  const translatedLabels = useContext(HalstackLanguageContext);

  const handleNextOnClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < messages.length ? prevIndex + 1 : prevIndex));
  };
  const handlePrevOnClick = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }, []);

  const handleOnClose = useCallback(() => {
    messages[currentIndex]?.onClose?.();
  }, [messages, currentIndex, mode]);

  useEffect(() => {
    if (currentIndex === messages.length) {
      handlePrevOnClick();
    }
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
        <DxcFlex gap="var(--spacing-gap-m)" alignItems="center">
          <TitleContainer mode={mode} semantic={semantic}>
            {getIcon(semantic)}
            {mode === "banner" ? (
              <Message mode={mode}>
                <strong>{title}</strong>
                {messages.length > 0 && <> — {messages[currentIndex]?.text}</>}
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
            <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
              <DxcActionIcon
                size="xsmall"
                icon="chevron_left"
                title={translatedLabels.alert.previousMessageActionTitle}
                onClick={handlePrevOnClick}
                disabled={currentIndex === 0}
              />
              <NavigationText>
                {currentIndex + 1} of {messages.length}
              </NavigationText>
              <DxcActionIcon
                size="xsmall"
                icon="chevron_right"
                title={translatedLabels.alert.nextMessageActionTitle}
                onClick={handleNextOnClick}
                disabled={currentIndex === messages.length - 1}
              />
            </DxcFlex>
          )}
          {closable && (
            <DxcFlex gap="var(--spacing-gap-xs)">
              {mode !== "modal" && <DxcDivider orientation="vertical" />}
              <DxcActionIcon
                size="xsmall"
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
};

export default DxcAlert;
