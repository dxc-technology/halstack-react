import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import DxcTextInput from "../text-input/TextInput";
import useTranslatedLabels from "../useTranslatedLabels";
import PasswordInputPropsType, { RefType } from "./types";
import icons from "./Icons";

const setInputType = (type: string, element: HTMLDivElement | null) => {
  element?.getElementsByTagName("input")[0].setAttribute("type", type);
};

const setAriaAttributes = (ariaExpanded: "true" | "false", ariaLabel: string, element: HTMLDivElement | null) => {
  const inputElement = element?.getElementsByTagName("input")[0];
  inputElement?.setAttribute("aria-expanded", ariaExpanded);
  inputElement?.setAttribute("aria-label", ariaLabel);
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
      setInputType("password", inputRef?.current);
      setAriaAttributes("false", passwordInput.inputShowPasswordTitle, inputRef?.current);
    }, [passwordInput]);

    const viewPassword = () => {
      setIsPasswordVisible(true);
      setInputType("text", inputRef?.current);
      setAriaAttributes("true", passwordInput.inputHidePasswordTitle, inputRef?.current);
    };

    const hidePassword = () => {
      setIsPasswordVisible(false);
      setInputType("password", inputRef?.current);
      setAriaAttributes("false", passwordInput.inputShowPasswordTitle, inputRef?.current);
    };

    return (
      <PasswordInput ref={ref}>
        <DxcTextInput
          label={label}
          name={name}
          value={value}
          helperText={helperText}
          action={{
            onClick: isPasswordVisible ? hidePassword : viewPassword,
            icon: isPasswordVisible ? icons.hidePassword : icons.showPassword,
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
