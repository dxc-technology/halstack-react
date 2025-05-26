import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DxcTextInput from "../text-input/TextInput";
import PasswordInputPropsType, { RefType } from "./types";
import { HalstackLanguageContext } from "../HalstackContext";

const setInputType = (type: string, element: HTMLDivElement | null) => {
  element?.getElementsByTagName("input")[0]?.setAttribute("type", type);
};

const setAriaAttributes = (ariaExpanded: "true" | "false", element: HTMLDivElement | null) => {
  const buttonElement = element?.getElementsByTagName("button")[0];
  buttonElement?.setAttribute("aria-expanded", ariaExpanded);
};

const PasswordInput = styled.div<{ size: PasswordInputPropsType["size"] }>`
  ${(props) => props.size === "fillParent" && "width: 100%;"}
  & ::-ms-reveal {
    display: none;
  }
`;

const DxcPasswordInput = forwardRef<RefType, PasswordInputPropsType>(
  (
    {
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
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const inputRef = useRef<HTMLDivElement | null>(null);
    const { passwordInput } = useContext(HalstackLanguageContext);

    useEffect(() => {
      (() => {
        if (isPasswordVisible) {
          setInputType("text", inputRef.current);
          if (passwordInput.inputHidePasswordTitle) {
            setAriaAttributes("true", inputRef.current);
          }
        } else {
          setInputType("password", inputRef.current);
          if (passwordInput.inputShowPasswordTitle) {
            setAriaAttributes("false", inputRef.current);
          }
        }
      })();
    }, [isPasswordVisible, passwordInput]);

    return (
      <PasswordInput ref={ref} size={size}>
        <DxcTextInput
          label={label}
          name={name}
          value={value}
          helperText={helperText}
          action={{
            onClick: () => {
              setIsPasswordVisible((isPasswordCurrentlyVisible) => !isPasswordCurrentlyVisible);
            },
            icon: isPasswordVisible ? "Visibility_Off" : "Visibility",
            title: isPasswordVisible ? passwordInput.inputHidePasswordTitle : passwordInput.inputShowPasswordTitle,
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
          ref={inputRef}
          tabIndex={tabIndex}
          ariaLabel={ariaLabel}
        />
      </PasswordInput>
    );
  }
);

export default DxcPasswordInput;
