import React from "react";
import styled from "styled-components";
import { DxcHeader, DxcButton } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const selectOption = (value) => {
  console.log(value);
};

const options = [
  {
    value: 1,
    label: "Amazon",
  },
  {
    value: 2,
    label: "Ebay",
  },
  {
    value: 3,
    label: "Apple",
  },
];

const Header = () => {
  return (
    <HeaderContainer>
      <Mode text="Default">
        <DxcHeader
          content={
            <React.Fragment>
              <p>Header text</p>
              <DxcButton
                label={"Custom Button"}
                margin={{ right: "small", left: "small" }}
              />
              <DxcHeader.Dropdown
                options={options}
                onSelectOption={selectOption}
                label="Default Dropdown"
              />
            </React.Fragment>
          }
          responsiveContent={(closeHandler) => (
            <React.Fragment>
              <p>Header text</p>
              <DxcButton label={"Custom Button"} onClick={closeHandler} />
            </React.Fragment>
          )}
          margin="medium"
          underlined
        />
      </Mode>
      <Mode text="Responsive">
        <div style={{ width: "320px" }}>
          <DxcHeader
            content={
              <React.Fragment>
                <p>Header text</p>
                <DxcButton label={"Custom Button"} margin="small" />
              </React.Fragment>
            }
            responsiveContent={(closeHandler) => (
              <React.Fragment>
                <p>Header text</p>
                <DxcButton label={"Custom Button"} onClick={closeHandler} />
              </React.Fragment>
            )}
            margin="medium"
            underlined
          />
        </div>
      </Mode>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div``;

export default Header;
