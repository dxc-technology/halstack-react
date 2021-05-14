import React, { useState } from "react";
import styled from "styled-components";
import { DxcBox } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Box = () => {
  return (
    <BoxContainer>
      <Mode text="ShadowDepth 0">
        <DxcBox margin="medium" shadowDepth={0} padding="medium">
          Box Content
        </DxcBox>
      </Mode>
      <Mode text="ShadowDepth 1">
        <DxcBox margin="medium" shadowDepth={1} padding="medium">
          Box Content
        </DxcBox>
      </Mode>

      <Mode text="ShadowDepth 2">
        <DxcBox margin="medium" shadowDepth={2} padding="medium">
          Box Content
        </DxcBox>
      </Mode>

    </BoxContainer>
  );
};

const BoxContainer = styled.div``;

export default Box;
