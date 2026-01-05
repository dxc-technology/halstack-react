import styled from "@emotion/styled";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import { SearchBarProps } from "./types";
import DxcActionIcon from "../action-icon/ActionIcon";
import { KeyboardEvent, useContext, useRef, useState } from "react";
import { HalstackLanguageContext } from "../HalstackContext";
import { css } from "@emotion/react";
import DxcIcon from "../icon/Icon";

const SearchBarContainer = styled.div<{ disabled: Required<SearchBarProps>["disabled"] }>`
  width: 100%;
  min-width: 200px;
  max-width: 720px;
  height: var(--height-m);
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  border-radius: var(--border-radius-xl);
  border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-dark);
  box-sizing: border-box;
  padding: 0 var(--spacing-padding-s);
  color: var(--color-fg-neutral-dark);

  ${({ disabled }) =>
    !disabled
      ? css`
          &:hover {
            border-color: var(--border-color-primary-strong);
          }
          &:focus,
          &:focus-within,
          &:focus-visible {
            border-color: transparent;
            outline-offset: -2px;
            outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
          }
        `
      : css`
          color: var(--color-fg-neutral-medium);
          border-color: var(--border-color-neutral-strong);
          cursor: not-allowed;
        `}
`;

const SearchBarInput = styled.input<{ disabled: Required<SearchBarProps>["disabled"] }>`
  width: 100%;
  max-width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
`;

const DxcSearchBar = ({
  autoFocus,
  disabled = false,
  onBlur,
  onCancel,
  onChange,
  onEnter,
  placeholder,
}: SearchBarProps) => {
  const translatedLabels = useContext(HalstackLanguageContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [innerValue, setInnerValue] = useState("");

  const handleClearActionOnClick = () => {
    setInnerValue("");
    inputRef.current?.focus();
  };

  const handleSearchChangeValue = (value: string) => {
    setInnerValue(value);
    if (typeof onChange === "function") {
      onChange(value);
    }
  };

  const handleInputOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Esc":
      case "Escape":
        e.preventDefault();
        if (innerValue.length > 0) {
          handleClearActionOnClick();
        }
        break;
      case "Enter":
        if (typeof onEnter === "function") {
          onEnter(innerValue);
        }
        break;
      default:
        break;
    }
  };

  return (
    <DxcFlex gap="var(--spacing-gap-m)" alignItems="center" justifyContent="center" grow={1}>
      <SearchBarContainer disabled={disabled} autoFocus={autoFocus}>
        <DxcIcon icon="search" />
        <SearchBarInput
          ref={inputRef}
          value={innerValue}
          placeholder={placeholder}
          onBlur={(e) => typeof onBlur === "function" && onBlur(e.target.value)}
          onChange={(e) => handleSearchChangeValue(e.target.value)}
          onKeyDown={handleInputOnKeyDown}
          disabled={disabled}
        />
        {!disabled && innerValue.length > 0 && (
          <DxcActionIcon
            size="xsmall"
            shape="circle"
            icon="cancel"
            onClick={handleClearActionOnClick}
            tabIndex={0}
            title={!disabled ? translatedLabels.textInput.clearFieldActionTitle : undefined}
          />
        )}
      </SearchBarContainer>

      {typeof onCancel === "function" && (
        <DxcButton label="Cancel" onClick={onCancel} mode="tertiary" size={{ height: "medium" }} />
      )}
    </DxcFlex>
  );
};

export default DxcSearchBar;
