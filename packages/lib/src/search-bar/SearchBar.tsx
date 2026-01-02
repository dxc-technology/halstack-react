import styled from "@emotion/styled";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import { SearchBarProps } from "./types";

const SearchBarStyles = styled.input`
  width: 100%;
  min-width: 200px;
  max-width: 720px;
  height: var(--height-m);
  border-radius: var(--border-radius-xl);
  border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-dark);
  box-sizing: border-box;
  padding: 0 var(--spacing-padding-s);
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DxcSearchBar = ({ autoFocus, onBlur, onCancel, onChange, onEnter, placeholder }: SearchBarProps) => (
  <DxcFlex gap="var(--spacing-gap-m)" alignItems="center" grow={1}>
    <SearchBarStyles
      placeholder={placeholder}
      onBlur={(e) => typeof onBlur === "function" && onBlur(e.target.value)}
      onChange={(e) => typeof onChange === "function" && onChange(e.target.value)}
      onKeyDown={(e) =>
        e.key === "Enter" && typeof onEnter === "function" && onEnter((e.target as HTMLInputElement).value)
      }
      autoFocus={autoFocus}
    />
    {typeof onCancel === "function" && (
      <DxcButton label="Cancel" onClick={onCancel} mode="tertiary" size={{ height: "medium" }} />
    )}
  </DxcFlex>
);

export default DxcSearchBar;
