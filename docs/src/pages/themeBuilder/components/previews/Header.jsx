import React from "react";
import styled from "styled-components";
import { DxcHeader, DxcButton } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

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
