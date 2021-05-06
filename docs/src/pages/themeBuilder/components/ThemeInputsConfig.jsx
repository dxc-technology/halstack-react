import React from "react";
import styled from "styled-components";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ThemeInput from "./ThemeInput";

const ThemeInputsConfig = ({
  componentInputs,
  componentInputsTypes,
  onChangeCustomTheme,
}) => {
  return (
    <ThemeInputsConfigContainer>
      <DxcHeading level={5} text="Theme inputs" />
      <Separator />
      <PropertiesContent>
        {Object.keys(componentInputs)
          ?.reduce((result, path, i, array) => {
            if (i % 4 === 0) result.push(array.slice(i, i + 4));
            return result;
          }, [])
          .map((sublist, column) => (
            <ColorInfoColumn key={`colors-column${column}`}>
              {sublist.map((propertyName) => (
                <ThemeInput
                  propertyName={propertyName}
                  propertyValue={componentInputs[propertyName]}
                  onChangeCustomTheme={onChangeCustomTheme}
                  tokenType={componentInputsTypes[propertyName]}
                />
              ))}
            </ColorInfoColumn>
          ))}
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
