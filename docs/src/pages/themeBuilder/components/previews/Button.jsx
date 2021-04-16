import React from "react";
import styled from "styled-components";
import { DxcButton } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import linkedinIcon from "../../images/LinkedinIcon";

const Button = () => {
  return (
    <ButtonContainer>
      <Mode text="Primary">
        <DxcButton mode="primary" label="button" margin={{ right: "small" }} />
        <DxcButton
          mode="primary"
          label="Button"
          icon={linkedinIcon}
          margin={{ right: "small" }}
        />
        <DxcButton
          mode="primary"
          label="button"
          disabled
          margin={{ right: "small" }}
        />
      </Mode>
      <Mode text="Secondary">
        <DxcButton
          mode="secondary"
          label="button"
          margin={{ right: "small" }}
        />
        <DxcButton
          label="Button"
          mode="secondary"
          icon={linkedinIcon}
          iconPosition="after"
          margin={{ right: "small" }}
        />
        <DxcButton
          mode="secondary"
          label="button"
          disabled={true}
          margin={{ right: "small" }}
        />
      </Mode>
      <Mode text="Text">
        <DxcButton mode="text" label="button" margin={{ right: "small" }} />
        <DxcButton
          label="Button"
          mode="text"
          icon={linkedinIcon}
          margin={{ right: "small" }}
        />
        <DxcButton
          mode="text"
          label="button"
          disabled
          margin={{ right: "small" }}
        />
      </Mode>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div``;

export default Button;
