import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import DxcTextInput from "../text-input/TextInput";
import useTranslatedLabels from "../useTranslatedLabels";
import PasswordInputPropsType, { RefType } from "./types";

const setInputType = (type: string, element: HTMLDivElement | null) => {
  element?.getElementsByTagName("input")[0].setAttribute("type", type);
};

const setAriaAttributes = (ariaExpanded: "true" | "false", ariaLabel: string, element: HTMLDivElement | null) => {
  const buttonElement = element?.getElementsByTagName("button")[0];
  buttonElement?.setAttribute("aria-expanded", ariaExpanded);
  buttonElement?.setAttribute("aria-label", ariaLabel);
};

const DxcPasswordInput = React.forwardRef<RefType, PasswordInputPropsType>(
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
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const inputRef = useRef<HTMLDivElement>(null);
    const { passwordInput } = useTranslatedLabels();

    useEffect(() => {
      (() => {
        if (isPasswordVisible) {
          setInputType("text", inputRef.current);
          setAriaAttributes("true", passwordInput.inputHidePasswordTitle, inputRef.current);
        } else {
          setInputType("password", inputRef.current);
          setAriaAttributes("false", passwordInput.inputShowPasswordTitle, inputRef.current);
        }
      })();
    }, [isPasswordVisible, passwordInput]);

    return (
      <PasswordInput ref={ref} role="group">
        <DxcTextInput
          label={label}
          name={name}
          value={value}
          helperText={helperText}
          action={{
            onClick: () => {
              setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible);
            },
            icon: isPasswordVisible ? 'Visibility_Off' : 'Visibility',
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
        />
      </PasswordInput>
    );
  }
);

const PasswordInput = styled.div`
  & ::-ms-reveal {
    display: none;
  }
`;

export default DxcPasswordInput;
