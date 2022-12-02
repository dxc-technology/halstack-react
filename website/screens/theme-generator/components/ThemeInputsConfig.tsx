//@ts-nocheck
import React from "react";
import styled from "styled-components";
import ThemeInput from "./ThemeInput";

const ThemeInputsConfig = ({
  componentInputs,
  componentInputsTypes,
  onChangeCustomTheme,
}) => (
  <ThemeInputsConfigContainer>
    <Title>Theme Inputs</Title>
    <InputsList>
      {Object.keys(componentInputs).map((propertyName, index) => (
        <ThemeInput
          key={`themeInput-${index}`}
          propertyName={propertyName}
          propertyValue={componentInputs[propertyName]}
          onChangeCustomTheme={onChangeCustomTheme}
          tokenType={componentInputsTypes[propertyName]}
        />
      ))}
    </InputsList>
  </ThemeInputsConfigContainer>
);

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #5f249f;
  margin: 0px;
  padding: 12px 24px;
  border-bottom: 1px solid rgb(191, 191, 191);
`;

const ThemeInputsConfigContainer = styled.div`
  position: sticky;
  top: calc(64px + 25px); // header height

  @media only screen and (max-width: 45rem) {
    top: calc(116px + 25px); // header height + visibility toggle
  }

  display: flex;
  flex-direction: column;
  height: calc(100vh - 114px);
  background-color: white;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px;
  margin: 25px;
`;

const InputsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 350px;
  padding: 25px;

  overflow: hidden auto;
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgb(214, 214, 214);
    border-radius: 26px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(102, 102, 102);
    border-radius: 26px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default ThemeInputsConfig;
