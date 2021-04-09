import React, { useState } from "react";
import styled from "styled-components";
import { DxcHeading, DxcButton } from "@dxc-technology/halstack-react";
import InfoIcon from "../images/info.svg";
import ColorPicker from "./ColorPicker";

const ColorConfiguration = ({ componentInputs, onChangeCustomTheme }) => {
  const [anchorEl, setAnchorEl] = useState();
  const [displayedProperty, setDisplayedProperty] = useState();

  return (
    <ColorConfigContainer>
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

        <ColorInfoColumn key={`logo-column`}>
          {Object.keys(componentInputs)
            ?.filter((propertyName) => propertyName.includes("logo"))
            .map((propertyName) => (
              <LogoContainer key={`logo-${propertyName}`}>
                <PropertyName>{propertyName}</PropertyName>
                <UploadContainer>
                  <LogoImage src={componentInputs[propertyName]} />
                  <CustomUpload
                    type="file"
                    id="logo"
                    name="img"
                    accept="image/*"
                    onChange={(event) =>
                      onChangeCustomTheme(propertyName, event.target.files[0])
                    }
                  ></CustomUpload>
                </UploadContainer>
              </LogoContainer>
            ))}
        </ColorInfoColumn>
      </PropertiesContent>

      <OptionsContainer>
        <InfoContainer>
          <img src={InfoIcon} alt="Information" />
          <InfoTextsContainer>
            <InfoText>
              Remember to apply the changes before you leave the configurator
            </InfoText>
            <InfoText>Maximum image size 5MB</InfoText>
          </InfoTextsContainer>
        </InfoContainer>
      </OptionsContainer>
    </ColorConfigContainer>
  );
};

const ColorConfigContainer = styled.div`
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

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InfoTextsContainer = styled.div``;

const InfoText = styled.div`
  margin-left: 5px;
  font: normal 12px/17px Open Sans;
  color: #00000099;
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

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const LogoImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  background-color: #d9d9d9;
`;

const CustomUpload = styled.input`
  margin-left: 10px;
  font: normal 12px/17px Open Sans;
  color: #00000099;
`;

export default ColorConfiguration;
