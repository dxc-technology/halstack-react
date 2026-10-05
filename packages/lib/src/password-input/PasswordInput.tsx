import { use, useLayoutEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import DxcTextInput from "../text-input/TextInput";
import PasswordInputPropsType from "./types";
import { HalstackLanguageContext } from "../HalstackContext";

const PasswordInput = styled.div<{
  size: PasswordInputPropsType["size"];
  isPasswordVisible: boolean;
}>`
  ${(props) => props.size === "fillParent" && "width: 100%;"}
  & ::-ms-reveal {
    display: none;
  }
  & input {
    -webkit-text-security: ${(props) => (props.isPasswordVisible ? "none" : "disc")};
  }
`;

const DxcPasswordInput = ({
  label,
  name = "",
  value,
  helperText,
  clearable = false,
  onChange,
  onBlur,
  error,
  pattern,
  minLength,
  maxLength,
  autocomplete = "off",
  margin,
  size = "medium",
  tabIndex = 0,
  ariaLabel = "Password input",
  ref,
}: PasswordInputPropsType) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const containerRef = useRef<HTMLInputElement | null>(null);
  const { passwordInput } = use(HalstackLanguageContext).labels;

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const inputEl = container.querySelector("input");
    if (!inputEl) return;

    const targetType = isPasswordVisible ? "text" : "password";

    if (inputEl.getAttribute("type") !== targetType) {
      inputEl.setAttribute("type", targetType);
    }
    const buttonEl = container.querySelector("button");
    if (buttonEl) {
      buttonEl.setAttribute("aria-expanded", isPasswordVisible ? "true" : "false");
    }
    const observer = new MutationObserver(() => {
      if (inputEl.getAttribute("type") !== targetType) {
        inputEl.setAttribute("type", targetType);
      }
    });
    observer.observe(inputEl, { attributes: true, attributeFilter: ["type"] });
    return () => {
      observer.disconnect();
    };
  }, [isPasswordVisible]);

  return (
    <PasswordInput ref={ref} size={size} isPasswordVisible={isPasswordVisible}>
      <DxcTextInput
        label={label}
        name={name}
        value={value}
        helperText={helperText}
        action={{
          onClick: () => {
            setIsPasswordVisible((prev) => !prev);
          },
          icon: isPasswordVisible ? "Visibility_Off" : "Visibility",
          title: isPasswordVisible ? passwordInput?.inputHidePasswordTitle : passwordInput?.inputShowPasswordTitle,
        }}
        error={error}
        clearable={clearable}
        onChange={onChange}
        onBlur={onBlur}
        margin={margin}
        size={size}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        autocomplete={autocomplete}
        ref={containerRef}
        tabIndex={tabIndex}
        ariaLabel={ariaLabel}
      />
    </PasswordInput>
  );
};

DxcPasswordInput.displayName = "DxcPasswordInput";

export default DxcPasswordInput;
