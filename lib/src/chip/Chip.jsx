import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";
import "../common/OpenSans.css";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";

const DxcChip = ({
  label,
  suffixIcon,
  prefixIcon,
  suffixIconSrc,
  onClickSuffix,
  prefixIconSrc,
  onClickPrefix,
  disabled,
  margin,
}) => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.chip}>
      <StyledDxcChip disabled={disabled} margin={margin}>
        {prefixIcon ? (
          <IconContainer
            disabled={disabled}
            prefixIcon
            label={label}
            onClick={() => onClickPrefix && !disabled && onClickPrefix(label)}
          >
            {typeof prefixIcon === "object" ? prefixIcon : React.createElement(prefixIcon)}
          </IconContainer>
        ) : (
          prefixIconSrc && (
            <PrefixIconContainer
              disabled={disabled}
              src={prefixIconSrc}
              label={label}
              onClick={() => onClickPrefix && !disabled && onClickPrefix(label)}
            />
          )
        )}
        {label && (
          <ChipTextContainer disabled={disabled} prefixIconSrc={prefixIconSrc} suffixIconSrc={suffixIconSrc}>
            {label}
          </ChipTextContainer>
        )}
        {suffixIcon ? (
          <IconContainer
            disabled={disabled}
            suffixIcon
            label={label}
            onClick={() => onClickSuffix && !disabled && onClickSuffix(label)}
          >
            {typeof suffixIcon === "object" ? suffixIcon : React.createElement(suffixIcon)}
          </IconContainer>
        ) : (
          suffixIconSrc && (
            <SuffixIconContainer
              disabled={disabled}
              src={suffixIconSrc}
              label={label}
              onClick={() => onClickSuffix && !disabled && onClickSuffix(label)}
            />
          )
        )}
      </StyledDxcChip>
    </ThemeProvider>
  );
};

const StyledDxcChip = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 50px;
  margin: 2px;
  max-width: ${({ margin }) => `calc(100% - 40px - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`};
  background-color: ${(props) => props.theme.backgroundColor};
  ${(props) => (props.theme.outlinedColor !== "" ? `border: 2px solid ${props.theme.outlinedColor}` : ``)};
  height: ${(props) => (props.theme.outlinedColor !== "" ? "18px" : "22px")};

  padding: 10px 20px;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  opacity: ${(props) => (props.disabled && props.theme.disabledBackgroundColor) || "initial"};

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

const ChipTextContainer = styled.span`
  font-size: 16px;
  font-family: "Open Sans";
  line-height: 24px;
  color: ${(props) => props.theme.fontColor};
  cursor: ${({ disabled }) => (disabled && "not-allowed") || "default"};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const SuffixIconContainer = styled.img`
  cursor: ${({ disabled }) => (disabled && "not-allowed") || "pointer"};
  margin-left: ${(props) => ((props.label || props.suffixIconSrc) && "10px") || (props.prefixIconSrc && "5px")};
  max-width: 24px;
  max-height: 24px;
`;
const PrefixIconContainer = styled.img`
  cursor: ${({ disabled }) => (disabled && "not-allowed") || "pointer"};
  margin-right: ${(props) => ((props.label || props.suffixIconSrc) && "10px") || (props.prefixIconSrc && "5px")};
  max-width: 24px;
  max-height: 24px;
`;

const IconContainer = styled.div`
  cursor: ${({ disabled }) => (disabled && "not-allowed") || "pointer"};
  ${(props) =>
    props.prefixIcon
      ? `margin-right: ${
          ((props.label || props.suffixIcon || props.suffixIconSrc) && "10px") ||
          ((props.prefixIcon || props.prefixIconSrc) && "0")
        };`
      : `margin-left: ${
          ((props.label || props.prefixIcon || props.prefixIconSrc) && "10px") ||
          ((props.prefixIcon || props.prefixIconSrc) && "0")
        };`}
  max-width: 24px;
  max-height: 24px;
  overflow: hidden;
`;

DxcChip.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
  suffixIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  prefixIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  suffixIconSrc: PropTypes.string,
  prefixIconSrc: PropTypes.string,
  onClickSuffix: PropTypes.func,
  onClickPrefix: PropTypes.func,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};

export default DxcChip;
