import React from "react";
import styled from "styled-components";
import { V3DxcSelect, DxcHeading } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";
import linkedinIcon from "../../images/LinkedinIcon";
import twitterIcon from "../../images/TwitterIcon";
import importIcon from "../../images/ImportIcon";

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
    label: "Import",
    icon: importIcon,
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

const V3Select = () => {
  return (
    <SelectContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <V3DxcSelect
          options={options}
          label="Default Select"
          margin={{ top: "xxsmall", bottom: "xsmall", right: "small" }}
          assistiveText="assistiveText"
        ></V3DxcSelect>
        <V3DxcSelect
          options={options}
          required
          label="Required Select"
          margin={{ top: "xxsmall", bottom: "xsmall" }}
          assistiveText="assistiveText"
        ></V3DxcSelect>
      </Mode>
      <Mode text="Multiple">
        <V3DxcSelect
          options={optionsNoIcons}
          multiple
          label="Multiple Select"
          margin={{ top: "xxsmall", bottom: "xsmall", right: "small" }}
          assistiveText="assistiveText"
        ></V3DxcSelect>
        <V3DxcSelect
          options={optionsNoIcons}
          multiple
          invalid
          label="Invalid Select"
          margin={{ top: "xxsmall", bottom: "xsmall" }}
          assistiveText="assistiveText"
        ></V3DxcSelect>
      </Mode>
      <Mode text="Disabled">
        <V3DxcSelect
          options={options}
          disabled
          label="Disabled Select"
          margin={{ top: "xxsmall", bottom: "xsmall" }}
          assistiveText="assistiveText"
        ></V3DxcSelect>
      </Mode>
      {/* <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "small", bottom: "xsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <V3DxcSelect
            options={options}
            label="Default Select"
            margin={{ top: "xxsmall", bottom: "xsmall", right: "small" }}
            assistiveText="assistiveText"
          ></V3DxcSelect>
          <V3DxcSelect
            options={options}
            required
            label="Required Select"
            margin={{ top: "xxsmall", bottom: "xsmall" }}
            assistiveText="assistiveText"
          ></V3DxcSelect>
        </Mode>
        <Mode mode="dark" text="Multiple">
          <V3DxcSelect
            options={optionsNoIcons}
            multiple
            label="Multiple Select"
            margin={{ top: "xxsmall", bottom: "xsmall", right: "small" }}
            assistiveText="assistiveText"
          ></V3DxcSelect>
          <V3DxcSelect
            options={optionsNoIcons}
            multiple
            invalid
            label="Invalid Select"
            margin={{ top: "xxsmall", bottom: "xsmall" }}
            assistiveText="assistiveText"
          ></V3DxcSelect>
        </Mode>
        <Mode mode="dark" text="Disabled">
          <V3DxcSelect
            options={options}
            disabled
            label="Disabled Select"
            margin={{ top: "xxsmall", bottom: "small" }}
            assistiveText="assistiveText"
          ></V3DxcSelect>
        </Mode>
      </BackgroundColorProvider> */}
    </SelectContainer>
  );
};

const SelectContainer = styled.div``;

export default V3Select;
