
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
            <DxcButton mode="primary" semantic="default" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="primary" semantic="default" label="Default" size={{ height: "medium" }} />
            <DxcButton mode="primary" semantic="default" label="Default" size={{ height: "large" }} />
            <DxcButton mode="primary" semantic="default" label="Default" disabled />
          </DxcFlex>
          <DxcFlex gap="3rem">
            <DxcButton mode="primary" semantic="error" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="primary" semantic="error" label="Error" size={{ height: "medium" }} />
            <DxcButton mode="primary" semantic="error" label="Error" size={{ height: "large" }} />
            <DxcButton mode="primary" semantic="error" label="Error" disabled />
          </DxcFlex>
          <DxcFlex gap="3rem">
            <DxcButton mode="primary" semantic="warning" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="primary" semantic="warning" label="Warning" size={{ height: "medium" }} />
            <DxcButton mode="primary" semantic="warning" label="Warning" size={{ height: "large" }} />
            <DxcButton mode="primary" semantic="warning" label="Warning" disabled />
          </DxcFlex>
          <DxcFlex gap="3rem">
            <DxcButton mode="primary" semantic="success" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="primary" semantic="success" label="Success" size={{ height: "medium" }} />
            <DxcButton mode="primary" semantic="success" label="Success" size={{ height: "large" }} />
            <DxcButton mode="primary" semantic="success" label="Success" disabled />
          </DxcFlex>
          <DxcFlex gap="3rem">
            <DxcButton mode="primary" semantic="info" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="primary" semantic="info" label="Info" size={{ height: "medium" }} />
            <DxcButton mode="primary" semantic="info" label="Info" size={{ height: "large" }} />
            <DxcButton mode="primary" semantic="info" label="Info" disabled />
          </DxcFlex>
        </DxcFlex>
      </Mode>
      <Mode text="Secondary">
        <DxcFlex direction="column" gap="2rem">
          <DxcFlex gap="3rem">
            <DxcButton mode="secondary" semantic="default" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="secondary" semantic="default" label="Default" size={{ height: "medium" }} />
            <DxcButton mode="secondary" semantic="default" label="Default" size={{ height: "large" }} />
            <DxcButton mode="secondary" semantic="default" label="Default" disabled />
          </DxcFlex>
          <DxcFlex gap="3rem">
            <DxcButton mode="secondary" semantic="error" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="secondary" semantic="error" label="Error" size={{ height: "medium" }} />
            <DxcButton mode="secondary" semantic="error" label="Error" size={{ height: "large" }} />
            <DxcButton mode="secondary" semantic="error" label="Error" disabled />
          </DxcFlex>
          <DxcFlex gap="3rem">
            <DxcButton mode="secondary" semantic="warning" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="secondary" semantic="warning" label="Warning" size={{ height: "medium" }} />
            <DxcButton mode="secondary" semantic="warning" label="Warning" size={{ height: "large" }} />
            <DxcButton mode="secondary" semantic="warning" label="Warning" disabled />
          </DxcFlex>
          <DxcFlex gap="3rem">
            <DxcButton mode="secondary" semantic="success" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="secondary" semantic="success" label="Success" size={{ height: "medium" }} />
            <DxcButton mode="secondary" semantic="success" label="Success" size={{ height: "large" }} />
            <DxcButton mode="secondary" semantic="success" label="Success" disabled />
          </DxcFlex>
          <DxcFlex gap="3rem">
            <DxcButton mode="secondary" semantic="info" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="secondary" semantic="info" label="Info" size={{ height: "medium" }} />
            <DxcButton mode="secondary" semantic="info" label="Info" size={{ height: "large" }} />
            <DxcButton mode="secondary" semantic="info" label="Info" disabled />
          </DxcFlex>
        </DxcFlex>
      </Mode>
      <Mode text="Tertiary">
        <DxcFlex direction="column" gap="2rem">
          <DxcFlex gap="3rem">
            <DxcButton mode="tertiary" semantic="default" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="tertiary" semantic="default" label="Default" size={{ height: "medium" }} />
            <DxcButton mode="tertiary" semantic="default" label="Default" size={{ height: "large" }} />
            <DxcButton mode="tertiary" semantic="default" label="Default" disabled />
          </DxcFlex>
          <DxcFlex gap="3rem">
            <DxcButton mode="tertiary" semantic="error" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="tertiary" semantic="error" label="Error" size={{ height: "medium" }} />
            <DxcButton mode="tertiary" semantic="error" label="Default" size={{ height: "large" }} />
            <DxcButton mode="tertiary" semantic="error" label="Default" disabled />
          </DxcFlex>
          <DxcFlex gap="3rem">
            <DxcButton mode="tertiary" semantic="warning" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="tertiary" semantic="warning" label="Warning" size={{ height: "medium" }} />
            <DxcButton mode="tertiary" semantic="warning" label="Warning" size={{ height: "large" }} />
            <DxcButton mode="tertiary" semantic="warning" label="Warning" disabled />
          </DxcFlex>
          <DxcFlex gap="3rem">
            <DxcButton mode="tertiary" semantic="success" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="tertiary" semantic="success" label="Success" size={{ height: "medium" }} />
            <DxcButton mode="tertiary" semantic="success" label="Success" size={{ height: "large" }} />
            <DxcButton mode="tertiary" semantic="success" label="Success" disabled />
          </DxcFlex>
          <DxcFlex gap="3rem">
            <DxcButton mode="tertiary" semantic="info" icon="home" size={{ height: "small" }} title="Home" />
            <DxcButton mode="tertiary" semantic="info" label="Info" size={{ height: "medium" }} />
            <DxcButton mode="tertiary" semantic="info" label="Info" size={{ height: "large" }} />
            <DxcButton mode="tertiary" semantic="info" label="Info" disabled />
          </DxcFlex>
        </DxcFlex>
      </Mode>
    </PreviewContainer>
  );
};

export default Button;
