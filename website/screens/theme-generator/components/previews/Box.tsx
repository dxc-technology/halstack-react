import React from "react";
import { DxcBox, DxcInset } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "../PreviewContainer";

const Box = () => (
  <PreviewContainer>
    <Mode text="ShadowDepth 0">
      <DxcBox shadowDepth={0}>
        <DxcInset space="3rem">Box Content</DxcInset>
      </DxcBox>
    </Mode>
    <Mode text="ShadowDepth 1">
      <DxcBox shadowDepth={1}>
        <DxcInset space="3rem">Box Content</DxcInset>
      </DxcBox>
    </Mode>
    <Mode text="ShadowDepth 2">
      <DxcBox shadowDepth={2}>
        <DxcInset space="3rem">Box Content</DxcInset>
      </DxcBox>
    </Mode>
  </PreviewContainer>
);

export default Box;
