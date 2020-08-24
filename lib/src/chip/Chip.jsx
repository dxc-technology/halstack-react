import React, { useContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { theme, spaces, defaultTheme } from "../common/variables.js";
import ThemeContext from "../ThemeContext.js";
import "../common/OpenSans.css";
import { getMargin, getCustomTheme } from "../common/utils.js";

const DxcChip = ({
  label,
  suffixIconSrc,
  onClickSuffix,
  prefixIconSrc,
  onClickPrefix,
  disabled,
  margin,
}) => {
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => (getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme))), [customTheme]);

  return (
    <ThemeProvider theme={colorsTheme.chip}>
      <StyledDxcChip disabled={disabled} margin={margin}>
        {prefixIconSrc && (
          <PrefixIconContainer
            disabled={disabled}
            src={prefixIconSrc}
            label={label}
            onClick={() => onClickPrefix && !disabled && onClickPrefix(label)}
          />
        )}
        {label && (
          <ChipTextContainer disabled={disabled} prefixIconSrc={prefixIconSrc} suffixIconSrc={suffixIconSrc}>
            {label}
          </ChipTextContainer>
        )}
        {suffixIconSrc && (
          <SuffixIconContainer
            disabled={disabled}
            src={suffixIconSrc}
            label={label}
            onClick={() => onClickSuffix && !disabled && onClickSuffix(label)}
          />
        )}
      </StyledDxcChip>
    </ThemeProvider>
  );
};

const StyledDxcChip = styled.div`
  height: 22px;
  display: inline-flex;
  align-items: center;
  border-radius: 50px;
  margin: 2px;
  max-width: ${({ margin }) => `calc(100% - 40px - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`};

  ${(props) => (props.theme.outlinedColor !== "" ?
  `border: 1px solid ${props.theme.outlinedColor}` : ``)};

  padding: 10px 20px;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  opacity: ${(props) => (props.disabled && props.theme.disabled) || "initial"};
  background: ${(props) => props.theme.backgroundColor};

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
  padding-left: ${(props) => ((props.label || props.suffixIconSrc) && "10px") || (props.prefixIconSrc && "5px")};
`;
const PrefixIconContainer = styled.img`
  cursor: ${({ disabled }) => (disabled && "not-allowed") || "pointer"};
  padding-right: ${(props) => ((props.label || props.suffixIconSrc) && "10px") || (props.prefixIconSrc && "5px")};
`;
DxcChip.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
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
