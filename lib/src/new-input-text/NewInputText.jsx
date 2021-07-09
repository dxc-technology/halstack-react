import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme.js";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";

const DxcNewInputText = ({
  label = "",
  // name = "",
  value,
  action,
  helperText = "",
  // disabled = false,
  prefix = "",
  suffix = "",
  onChange,
  // onBlur = "",
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
    onChange(event.target.value);
  };
  const clearAction = {
    onClick: () => {
      onChange("");
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
      </svg>
    ),
  };

  return (
    <ThemeProvider theme={colorsTheme.newInputText}>
      <DxcInput margin={margin}>
        <Label htmlFor={random}>
          {label} {optional && <OptionalLabel>(Optional)</OptionalLabel>}
        </Label>
        <HelperText>{helperText}</HelperText>
        <InputContainer>
          {prefix && <Prefix>{prefix}</Prefix>}
          <Input id={random} placeholder={placeholder} value={value} onChange={handleOnChange} />
          {clearable && <Action onClick={clearAction.onClick}>{clearAction.icon}</Action>}
          {action && <Action onClick={action.onClick}>{action.icon}</Action>}
          {suffix && <Suffix>{suffix}</Suffix>}
        </InputContainer>
        {/* <Error>{error}</Error> */}
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
  font-family: "Open Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.75em;
`;

const OptionalLabel = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.75em;
`;

const HelperText = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5em;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: calc(calc(1rem * 2.5) - calc(1px * 2));
  border: 1px solid #666666;
  border-radius: 4px;
  margin: calc(1rem * 0.25) 0;
  padding: 0 calc(1rem * 0.5);

  &:hover {
    border-color: #a46ede;
  }
  &:focus-within {
    border: 1px solid #a46ede;
    box-shadow: inset 0 0 0 1px #a46ede;
  }
`;

const Input = styled.input`
  width: 100%;
  height: calc(calc(1rem * 2.5) - calc(1px * 2));
  background: none;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  padding: 0 calc(1rem * 0.5);
`;

const Action = styled.button`
  height: calc(calc(1rem * 1.5) - calc(1px * 2));
  width: calc(calc(1rem * 1.5) - calc(1px * 2));
  margin: 0 calc(1rem * 0.25) 0 calc(1rem * 0.25);
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
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
  font-family: "Open Sans", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #d0011b;
  line-height: 1.5em;
`;

const Prefix = styled.span`
  height: calc(1rem * 1.5);
  border-right: 1px solid #999999;
  line-height: calc(1rem * 1.5);
  padding: 0 calc(1rem * 0.5) 0 0;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
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
  font-family: "Open Sans", sans-serif;
  pointer-events: none;
  color: #666666;
`;

DxcNewInputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  action: PropTypes.shape({ onClick: PropTypes.func.isRequired, icon: PropTypes.shape({ type: PropTypes.oneOf(["svg"]) }).isRequired }),
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  optional: PropTypes.bool,
  clearable: PropTypes.bool,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  isMasked: PropTypes.bool,
  onClickIcon: PropTypes.func,
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
