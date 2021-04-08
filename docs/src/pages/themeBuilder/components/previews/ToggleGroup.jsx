import React from "react";
import styled from "styled-components";
import { DxcToggleGroup } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";
import linkedinIcon from "../../images/LinkedinIcon";

const ProgressBar = () => {
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
  ];

  return (
    <ToggleGroupContainer>
      <Mode text="Default">
        <DxcToggleGroup options={options}></DxcToggleGroup>
      </Mode>
      <Mode text="Default with icons">
        <DxcToggleGroup options={optionsWithIcons}></DxcToggleGroup>
      </Mode>
    </ToggleGroupContainer>
  );
};

const ToggleGroupContainer = styled.div``;

export default ProgressBar;
