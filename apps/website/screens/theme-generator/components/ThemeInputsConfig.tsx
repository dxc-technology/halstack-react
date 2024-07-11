import { DxcInset } from "@dxc-technology/halstack-react";
import React from "react";
import styled from "styled-components";
import { IndexedThemeInput } from "../types";
import ThemeInput from "./ThemeInput";

type ThemeInputsConfigProps = {
  componentInputs: IndexedThemeInput;
  componentInputsTypes: IndexedThemeInput;
  onChangeCustomTheme: (propertyName: string, propertyValue: string) => void;
};

const ThemeInputsConfig = ({
  componentInputs,
  componentInputsTypes,
  onChangeCustomTheme,
}: ThemeInputsConfigProps): JSX.Element => (
  <DxcInset space="1.5rem">
    <ThemeInputsConfigContainer>
      <Title>Theme Inputs</Title>
      <ThemeInputsList>
        {Object.keys(componentInputs).map((propertyName, index) => (
          <ThemeInput
            key={`themeInput-${index}`}
            propertyName={propertyName}
            propertyValue={componentInputs[propertyName]}
            onChangeCustomTheme={onChangeCustomTheme}
            tokenType={componentInputsTypes[propertyName]}
          />
        ))}
      </ThemeInputsList>
    </ThemeInputsConfigContainer>
  </DxcInset>
);

const ThemeInputsConfigContainer = styled.div`
  position: sticky;
  top: calc(64px + 24px); // header height + padding

  @media only screen and (max-width: 45rem) {
    top: calc(116px + 24px); // (header height + visibility toggle) + padding
  }

  display: flex;
  flex-direction: column;
  width: 400px;
  height: calc(100vh - 112px);
  background-color: white;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #5f249f;
  margin: 0px;
  padding: 12px 24px;
  border-bottom: 1px solid rgb(191, 191, 191);
`;

const ThemeInputsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
