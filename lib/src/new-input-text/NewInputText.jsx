import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme.js";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";

const DxcNewInputText = ({
  label = "",
  name = "",
  value,
  action,
  helperText = "",
  // disabled = false,
  prefix = "",
  suffix = "",
  onChange,
  onBlur,
  error = "",
  optional = false,
  clearable = false,
  placeholder = "",
  margin,
  // size = "medium",
  // autocompleteOptions,
  // tabIndex = 0,
}) => {
  const colorsTheme = useTheme();
  const random = `input-${Math.floor(Math.random() * 1000000000000000) + 1}`;
  const handleOnChange = (event) => {
    onChange?.(event.target.value);
  };
  const defaultClearAction = {
    onClick: () => {
      onChange?.("");
    },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
      </svg>
    ),
  };
  const errorIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
      <path
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
        fill="#EE2222"
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );

  return (
    <ThemeProvider theme={colorsTheme.newInputText}>
      <DxcInput margin={margin}>
        <Label htmlFor={random}>
          {label} {optional && <OptionalLabel>(Optional)</OptionalLabel>}
        </Label>
        <HelperText>{helperText}</HelperText>
        <InputContainer error={error}>
          {prefix && <Prefix>{prefix}</Prefix>}
          <Input id={random} placeholder={placeholder} value={value} onChange={handleOnChange} name={name} onBlur={onBlur}/>
          {error && <ErrorIcon>{errorIcon}</ErrorIcon>}
          {clearable && <Action onClick={defaultClearAction.onClick}>{defaultClearAction.icon}</Action>}
          {action && <Action onClick={action.onClick}>{action.icon}</Action>}
          {suffix && <Suffix>{suffix}</Suffix>}
        </InputContainer>
        {error && <Error>{error}</Error>}
      </DxcInput>
    </ThemeProvider>
  );
};

const sizes = {
  small: "42px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
};

const DxcInput = styled.div`
  display: flex;
  flex-direction: column;

  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
`;

const Label = styled.label`
  color: ${(props) => props.theme.labelFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: 1.75em;
`;

const OptionalLabel = styled.span`
  color: ${(props) => props.theme.labelFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.optionalLabelFontWeight};
  line-height: 1.75em;
`;

const HelperText = styled.span`
  color: ${(props) => props.theme.helperTextFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: 1.5em;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: calc(calc(1rem * 2.5) - calc(1px * 2));
  border: ${(props) => props.error ? `1px solid ${props.theme.errorColor}` : "1px solid #666666"};
  ${(props) => props.error && `box-shadow: inset 0 0 0 1px ${props.theme.errorColor};`}
  border-radius: 4px;
  margin: calc(1rem * 0.25) 0;
  padding: 0 calc(1rem * 0.5);

  &:hover {
    border-color: #a46ede;
    box-shadow: none;
  }
  &:focus-within {
    border: 1px solid #a46ede;
    box-shadow: inset 0 0 0 1px #a46ede;
  }
`;

const Input = styled.input`
  height: calc(calc(1rem * 2.5) - calc(1px * 2));
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 0 calc(1rem * 0.5);
  color: ${(props) => props.theme.customContentFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.customContentFontSize};
  font-style: ${(props) => props.theme.customContentFontStyle};
  font-weight: ${(props) => props.theme.customContentFontWeight};
`;

const Action = styled.button`
  height: calc(calc(1rem * 1.5) - calc(1px * 2));
  width: calc(calc(1rem * 1.5) - calc(1px * 2));
  margin: 0 calc(1rem * 0.25) 0 calc(1rem * 0.25);
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
  border: 1px solid transparent;
  border-radius: 4px;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  padding: 0;

  &:hover {
    background-color: #f2f2f2;
  }
  &:focus {
    border: 1px solid #a46ede;
    box-shadow: inset 0 0 0 1px #a46ede;
    outline: none;
  }
  &:focus-visible {
    border: 1px solid #a46ede;
    box-shadow: inset 0 0 0 1px #a46ede;
    outline: none;
  }
  &:active {
    border: 1px solid #a46ede;
    box-shadow: inset 0 0 0 1px #a46ede;
    outline: none;
    background-color: #d9d9d9;
  }
  svg {
    line-height: 18px;
    width: 100%;
    height: 100%;
  }
`;

const Error = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 0.75rem;
  font-weight: 400;
  color: ${(props) => props.theme.errorColor};
  line-height: 1.5em;
`;

const ErrorIcon = styled.span`
  height: calc(24px - (1px * 2));
  width: calc(24px - (1px * 2));
  margin-right: calc(1rem * 0.5);
  display: flex;
  align-content: center;
  justify-content: center;
  pointer-events: none;

  svg {
    font-size: 1.25rem;
    line-height: 22px;
  }
`;

const Prefix = styled.span`
  height: calc(1rem * 1.5);
  border-right: 1px solid #999999;
  line-height: calc(1rem * 1.5);
  padding: 0 calc(1rem * 0.5) 0 0;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
  pointer-events: none;
  color: #666666;
`;

const Suffix = styled.span`
  height: calc(1rem * 1.5);
  border-left: 1px solid #999999;
  line-height: calc(1rem * 1.5);
  margin-left: calc(1rem * 0.25);
  padding: 0 0 0 calc(1rem * 0.5);
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
  pointer-events: none;
  color: #666666;
`;

DxcNewInputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  action: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.shape({ type: PropTypes.oneOf(["svg"]) }).isRequired,
  }),
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  optional: PropTypes.bool,
  clearable: PropTypes.bool,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  autocompleteOptions: PropTypes.any,
  tabIndex: PropTypes.number,
};

export default DxcNewInputText;
