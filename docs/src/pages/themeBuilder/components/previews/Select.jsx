import React from "react";
import styled from "styled-components";
import {
  DxcSelect,
  DxcHeading,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";
import linkedinIcon from "../../images/LinkedinIcon";
import twitterIcon from "../../images/TwitterIcon";

const options = [
  {
    value: 1,
    label: "Facebook",
    icon: facebookIcon,
  },
  {
    value: 2,
    label: "Linkedin",
    icon: linkedinIcon,
  },
  {
    value: 3,
    label: "Twitter",
    icon: twitterIcon,
  },
  {
    value: 4,
    label: "Instagram",
    icon: linkedinIcon,
  },
];

const optionsNoIcons = [
  {
    value: 1,
    label: "Facebook",
  },
  {
    value: 2,
    label: "Linkedin",
  },
  {
    value: 3,
    label: "Twitter",
  },
  {
    value: 4,
    label: "Instagram",
  },
  {
    value: 5,
    label: "Whatsapp",
  },
  {
    value: 6,
    label: "Telegram",
  },
];

const Select = () => {
  return (
    <SelectContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <DxcSelect
          options={options}
          label="Default Select"
          margin={{ top: "xxsmall", bottom: "xsmall", right: "small" }}
        ></DxcSelect>
        <DxcSelect
          options={options}
          required
          label="Required Select"
          margin={{ top: "xxsmall", bottom: "xsmall" }}
        ></DxcSelect>
      </Mode>
      <Mode text="Multiple">
        <DxcSelect
          options={optionsNoIcons}
          multiple
          label="Multiple Select"
          margin={{ top: "xxsmall", bottom: "xsmall", right: "small" }}
        ></DxcSelect>
        <DxcSelect
          options={optionsNoIcons}
          multiple
          invalid
          label="Invalid Select"
          margin={{ top: "xxsmall", bottom: "xsmall" }}
        ></DxcSelect>
      </Mode>
      <Mode text="Disabled">
        <DxcSelect
          options={options}
          disabled
          label="Disabled Select"
          margin={{ top: "xxsmall", bottom: "xsmall" }}
        ></DxcSelect>
      </Mode>
      <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "small", bottom: "xsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <DxcSelect
            options={options}
            label="Default Select"
            margin={{ top: "xxsmall", bottom: "xsmall", right: "small" }}
          ></DxcSelect>
          <DxcSelect
            options={options}
            invalid
            label="Invalid Select"
            margin={{ top: "xxsmall", bottom: "xsmall" }}
          ></DxcSelect>
        </Mode>
        <Mode mode="dark" text="Disabled">
          <DxcSelect
            options={options}
            disabled
            label="Disabled Select"
          ></DxcSelect>
        </Mode>
      </BackgroundColorProvider>
    </SelectContainer>
  );
};

const SelectContainer = styled.div``;

export default Select;
