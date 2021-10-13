import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";

const DxcToggleGroup = ({
  value,
  onChange,
  disabled = false,
  options = [],
  margin,
  multiple = false,
  tabIndex = 0,
}) => {
  const colorsTheme = useTheme();
  const [selectedValue, setSelectedValue] = useState(multiple ? [] : null);

  const handleToggleChange = (selectedOption) => {
    let newSelectedOptions;
    if (value == null) {
      if (multiple) {
        newSelectedOptions = selectedValue.map((value) => value);
        if (newSelectedOptions.includes(selectedOption)) {
          const index = newSelectedOptions.indexOf(selectedOption);
          newSelectedOptions.splice(index, 1);
        } else {
          newSelectedOptions.push(selectedOption);
        }
        setSelectedValue(newSelectedOptions);
      } else {
        setSelectedValue(selectedOption === selectedValue ? null : selectedOption);
      }
    } else if (multiple) {
      newSelectedOptions = value.map((v) => v);
      newSelectedOptions.push(selectedOption);
    }

    if (typeof onChange === "function") {
      onChange(multiple ? newSelectedOptions : selectedOption);
    }
  };

  const handleKeyPress = (event, optionValue) => {
    event.preventDefault();
    if (!disabled && (event.nativeEvent.code === "Enter" || event.nativeEvent.code === "Space")) {
      handleToggleChange(optionValue);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.toggleGroup}>
      <ToggleGroup margin={margin} disabled={disabled}>
        {options.map((option, i) => (
          <ToggleContainer
            selected={
              multiple
                ? value
                  ? value.includes(option.value)
                  : selectedValue.includes(option.value)
                : value
                ? option.value === value
                : option.value === selectedValue
            }
            tabIndex={!disabled ? tabIndex : -1}
            onClick={() => !disabled && handleToggleChange(option.value)}
            isFirst={i === 0}
            isLast={i === options.length - 1}
            isIcon={option.iconSrc || option.icon}
            disabled={disabled}
            onKeyPress={(event) => {
              handleKeyPress(event, option.value);
            }}
            key={`toggle-${i}-${option.label}`}
          >
            {option.icon ? (
              <IconContainer>
                {typeof option.icon === "object" ? option.icon : React.createElement(option.icon)}
              </IconContainer>
            ) : option.iconSrc ? (
              <Icon src={option.iconSrc}></Icon>
            ) : (
              <LabelContainer disabled={disabled}>{option.label}</LabelContainer>
            )}
          </ToggleContainer>
        ))}
      </ToggleGroup>
    </ThemeProvider>
  );
};

const ToggleGroup = styled.div`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  display: flex;
  flex-direction: row;
  opacity: 1;
  min-height: 40px;
`;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${(props) => `
    background-color: ${
      props.selected
        ? props.disabled
          ? props.theme.selectedDisabledBackgroundColor
          : props.theme.selectedBackgroundColor
        : props.disabled
        ? props.theme.unselectedDisabledBackgroundColor
        : props.theme.unselectedBackgroundColor
    };
    border-radius: ${props.isFirst ? "4px 0 0 4px" : props.isLast ? "0 4px 4px 0" : "0"};
    color: ${props.selected ? props.theme.selectedFontColor : props.theme.unselectedFontColor};
    padding: ${
      props.isIcon
        ? `${props.theme.iconPaddingTop} ${props.theme.iconPaddingRight} ${props.theme.iconPaddingBottom} ${props.theme.iconPaddingLeft}`
        : `${props.theme.labelPaddingTop} ${props.theme.labelPaddingRight} ${props.theme.labelPaddingBottom} ${props.theme.labelPaddingLeft}`
    };
    
    ${
      !props.disabled
        ? `:hover {
          background-color: ${
            props.selected ? props.theme.selectedHoverBackgroundColor : props.theme.unselectedHoverBackgroundColor
          };
        }
        :active {
          background-color: ${
            props.selected ? props.theme.selectedActiveBackgroundColor : props.theme.unselectedActiveBackgroundColor
          };
          color: #ffffff;
        }        
        :focus {
          outline: ${props.theme.focusColor} solid 2px;
          outline-offset: -2px;
        }
        cursor: pointer;`
        : `color: ${
            props.selected ? props.theme.selectedDisabledFontColor : props.theme.unselectedDisabledFontColor
          } !important;
        cursor: not-allowed;`
    }
  `}
`;

const LabelContainer = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
`;

const Icon = styled.img`
  height: ${(props) => props.theme.iconSize};
  width: ${(props) => props.theme.iconSize};
`;

const IconContainer = styled.div`
  height: ${(props) => props.theme.iconSize};
  width: ${(props) => props.theme.iconSize};
  overflow: hidden;
  display: flex;
  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

DxcToggleGroup.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
      iconSrc: PropTypes.string,
    })
  ),
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  tabIndex: PropTypes.number,
};

export default DxcToggleGroup;
