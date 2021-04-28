import React, { useState } from "react";
import styled from "styled-components";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ColorPicker from "./ColorPicker";
import LogoConfig from "./LogoConfig";

const ThemeInputsConfig = ({ componentInputs, onChangeCustomTheme }) => {
  const [anchorEl, setAnchorEl] = useState();
  const [displayedProperty, setDisplayedProperty] = useState();

  return (
    <ThemeInputsConfigContainer>
      <DxcHeading level={5} text="Theme inputs" />
      <Separator />
      <PropertiesContent>
        {Object.keys(componentInputs)
          ?.filter((propertyName) => !propertyName.includes("logo"))
          .reduce((result, path, i, array) => {
            if (i % 4 === 0) result.push(array.slice(i, i + 4));
            return result;
          }, [])
          .map((sublist, column) => (
            <ColorInfoColumn key={`colors-column${column}`}>
              {sublist.map((propertyName, i) => (
                <PropertyContainer
                  ref={anchorEl}
                  key={`property-${propertyName}`}
                >
                  <PropertyName>{propertyName}</PropertyName>
                  <ColorPicker
                    propertyName={propertyName}
                    propertyValue={componentInputs[propertyName]}
                    anchorEl={anchorEl}
                    setAnchorEl={setAnchorEl}
                    onChangeCustomTheme={onChangeCustomTheme}
                    displayedProperty={displayedProperty}
                    onDisplayProperty={setDisplayedProperty}
                  />
                </PropertyContainer>
              ))}
            </ColorInfoColumn>
          ))}

        <ColorInfoColumn>
          {Object.keys(componentInputs)
            ?.filter((propertyName) => propertyName.includes("logo"))
            .map((propertyName) => (
              <LogoContainer>
                <PropertyName>{propertyName}</PropertyName>
                <LogoConfig
                  propertyName={propertyName}
                  propertyValue={componentInputs[propertyName]}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              </LogoContainer>
            ))}
        </ColorInfoColumn>
      </PropertiesContent>
    </ThemeInputsConfigContainer>
  );
};

const ThemeInputsConfigContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  background: #f2f2f2;
  padding: 20px 30px;
`;

const PropertyName = styled.div`
  font: normal 14px/19px Open Sans;
  color: #000000;
`;

const PropertiesContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  flex-wrap: wrap;
  overflow: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #d9d9d9;
    border-radius: 26px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #666666;
    border-radius: 26px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const PropertyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin: 5px 0;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin: 5px 0;
`;

const ColorInfoColumn = styled.div`
  width: 30%;
  margin-right: 100px;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin: 10px 0;
`;

export default ThemeInputsConfig;
