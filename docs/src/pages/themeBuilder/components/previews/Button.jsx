import React from "react";
import styled from "styled-components";
import { DxcButton, DxcHeading } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import linkedinIcon from "../../images/LinkedinIcon";

const Button = () => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <ButtonContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xxsmall", bottom: "xsmall" }}
      />
      <Mode text="Primary">
        <DxcButton
          mode="primary"
          label="button"
          margin={{ top: "xsmall", right: "small" }}
          onClick={onClick}
        />
        <DxcButton
          mode="primary"
          label="Button"
          icon={linkedinIcon}
          margin={{ top: "xsmall", right: "small" }}
          onClick={onClick}
        />
        <DxcButton
          mode="primary"
          label="button"
          disabled
          margin={{ top: "xsmall", right: "small" }}
          onClick={onClick}
        />
      </Mode>
      <Mode text="Secondary">
        <DxcButton
          mode="secondary"
          label="button"
          margin={{ top: "xsmall", right: "small" }}
          onClick={onClick}
        />
        <DxcButton
          label="Button"
          mode="secondary"
          icon={linkedinIcon}
          iconPosition="after"
          margin={{ top: "xsmall", right: "small" }}
          onClick={onClick}
        />
        <DxcButton
          mode="secondary"
          label="button"
          disabled={true}
          margin={{ top: "xsmall", right: "small" }}
          onClick={onClick}
        />
      </Mode>
      <Mode text="Text">
        <DxcButton
          mode="text"
          label="button"
          margin={{ top: "xsmall", right: "small" }}
          onClick={onClick}
        />
        <DxcButton
          label="Button"
          mode="text"
          icon={linkedinIcon}
          margin={{ top: "xsmall", right: "small" }}
          onClick={onClick}
        />
        <DxcButton
          mode="text"
          label="button"
          disabled
          margin={{ top: "xsmall", right: "small" }}
          onClick={onClick}
        />
      </Mode>
      {/*<DxcHeading
        text=""
        level={5}
        margin={{ top: "small", bottom: "xsmall" }}
      />
       <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Primary">
          <DxcButton
            mode="primary"
            label="button"
            margin={{ top: "xsmall", right: "small" }}
          />
          <DxcButton
            mode="primary"
            label="Button"
            icon={linkedinIcon}
            margin={{ top: "xsmall", right: "small" }}
          />
          <DxcButton
            mode="primary"
            label="button"
            disabled
            margin={{ top: "xsmall", right: "small" }}
          />
        </Mode>
        <Mode mode="dark" text="Secondary">
          <DxcButton
            mode="secondary"
            label="button"
            margin={{ top: "xsmall", right: "small" }}
          />
          <DxcButton
            label="Button"
            mode="secondary"
            icon={linkedinIcon}
            iconPosition="after"
            margin={{ top: "xsmall", right: "small" }}
          />
          <DxcButton
            mode="secondary"
            label="button"
            disabled={true}
            margin={{ top: "xsmall", right: "small" }}
          />
        </Mode>
        <Mode mode="dark" text="Text">
          <DxcButton
            mode="text"
            label="button"
            margin={{ top: "xsmall", right: "small" }}
          />
          <DxcButton
            label="Button"
            mode="text"
            icon={linkedinIcon}
            margin={{ top: "xsmall", right: "small" }}
          />
          <DxcButton
            mode="text"
            label="button"
            disabled
            margin={{ top: "xsmall", right: "small" }}
          />
        </Mode>
      </BackgroundColorProvider> */}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div``;

export default Button;
