import React from "react";
import { DxcButton, DxcFlex } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const Button = () => {
  return (
    <PreviewContainer>
      <Mode text="Primary">
        <DxcFlex direction="column" gap="2rem">
          <DxcFlex gap="3rem">
            <DxcButton mode="primary" semantic="default" icon="person" size={{ height: "small" }} />
            <DxcButton mode="primary" semantic="default" label="Default" size={{ height: "medium" }} />
            <DxcButton mode="primary" semantic="default" label="Default" size={{ height: "large" }} />
            <DxcButton mode="primary" semantic="default" label="Default" disabled />
          </DxcFlex>
        </DxcFlex>
      </Mode>
      <Mode text="Secondary">
        <DxcFlex direction="column" gap="2rem">
          <DxcFlex gap="3rem">
            <DxcButton mode="secondary" semantic="default" icon="person" size={{ height: "small" }} />
            <DxcButton mode="secondary" semantic="default" label="Default" size={{ height: "medium" }} />
            <DxcButton mode="secondary" semantic="default" label="Default" size={{ height: "large" }} />
            <DxcButton mode="secondary" semantic="default" label="Default" disabled />
          </DxcFlex>
        </DxcFlex>
      </Mode>
      <Mode text="Tertiary">
        <DxcFlex direction="column" gap="2rem">
          <DxcFlex gap="3rem">
            <DxcButton mode="tertiary" semantic="default" icon="person" size={{ height: "small" }} />
            <DxcButton mode="tertiary" semantic="default" label="Default" size={{ height: "medium" }} />
            <DxcButton mode="tertiary" semantic="default" label="Default" size={{ height: "large" }} />
            <DxcButton mode="tertiary" semantic="default" label="Default" disabled />
          </DxcFlex>
        </DxcFlex>
      </Mode>
    </PreviewContainer>
  );
};

export default Button;
