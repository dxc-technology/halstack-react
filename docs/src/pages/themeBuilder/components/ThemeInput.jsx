import React, { useState } from "react";
import styled from "styled-components";
import LogoConfig from "./widgets/LogoConfig";
import ColorPicker from "./widgets/ColorPicker";
import DefaultInput from "./widgets/DefaultInput";

const ThemeInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
  tokenType,
}) => {
  const [anchorEl, setAnchorEl] = useState();
  const [displayedProperty, setDisplayedProperty] = useState();

  return (
    <PropertyContainer ref={anchorEl} key={`property-${propertyName}`}>
      <PropertyName>{propertyName}</PropertyName>
      {(() => {
        switch (tokenType) {
          case "color":
            return (
              <ColorPicker
                propertyName={propertyName}
                propertyValue={propertyValue}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                onChangeCustomTheme={onChangeCustomTheme}
                displayedProperty={displayedProperty}
                onDisplayProperty={setDisplayedProperty}
              />
            );
          case "image":
            return (
              <LogoConfig
                propertyName={propertyName}
                propertyValue={propertyValue}
                onChangeCustomTheme={onChangeCustomTheme}
              />
            );
          // case "length":
          // case "fFamily":
          // case "fWeight":
          // case "fStyle":
          // case "fTextTransform":
          // case "bStyle":
          // case "bWidth":
          // case "alphaValue":
          // case "flexAlign":  
          // case "flexJustify":
          // case "text":
          // case "integer":
          // case "scale":
          // case "textAlign":
          default:
            return (
              <DefaultInput 
                propertyName={propertyName}
                propertyValue={propertyValue}
                onChangeCustomTheme={onChangeCustomTheme}
              />
            );
        }
      })()}
    </PropertyContainer>
  );
};

const PropertyName = styled.div`
  font: normal 14px/19px Open Sans;
  color: #000000;
`;

const PropertyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin: 5px 0;
`;

export default ThemeInput;
