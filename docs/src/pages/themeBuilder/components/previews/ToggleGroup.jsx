import React, { useState } from "react";
import styled from "styled-components";
import { DxcToggleGroup } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";
import linkedinIcon from "../../images/LinkedinIcon";
import twitterIcon from "../../images/TwitterIcon";

const ProgressBar = () => {
  const [value, changeValue] = useState(1);
  const onChange = (newValue) => {
    changeValue(newValue);
  };
  const options = [
    {
      value: 1,
      label: "Facebook",
    },
    {
      value: 2,
      label: "Twitter",
    },
    {
      value: 3,
      label: "Linkedin",
    },
  ];

  const optionsWithIcons = [
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
  ];

  return (
    <ToggleGroupContainer>
      <Mode text="Default">
        <DxcToggleGroup
          margin={{ top: "xsmall", bottom: "xxsmall" }}
          options={options}
        ></DxcToggleGroup>
      </Mode>
      <Mode text="Disabled">
        <DxcToggleGroup
          value={value}
          onChange={onChange}
          margin={{ top: "xsmall", bottom: "xxsmall" }}
          disabled
          options={options}
        ></DxcToggleGroup>
      </Mode>
      <Mode text="Multiple with icons">
        <DxcToggleGroup
          margin={{ top: "xsmall", bottom: "xxsmall" }}
          options={optionsWithIcons}
          multiple
        ></DxcToggleGroup>
      </Mode>
    </ToggleGroupContainer>
  );
};

const ToggleGroupContainer = styled.div``;

export default ProgressBar;
