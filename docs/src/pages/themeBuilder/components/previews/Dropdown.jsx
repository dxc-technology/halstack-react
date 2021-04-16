import React from "react";
import styled from "styled-components";
import { DxcDropdown } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";
import linkedinIcon from "../../images/LinkedinIcon";

const Dropdown = () => {
  const selectOption = (value) => {
    console.log(value);
  };

  const options = [
    {
      value: 1,
      label: "Amazon",
    },
    {
      value: 2,
      label: "Ebay",
    },
    {
      value: 3,
      label: "Apple",
    },
  ];

  const iconOptions = [
    {
      value: 1,
      label: "Facebook",
      icon: facebookIcon,
    },
    {
      value: 2,
      label: "Twitter",
      icon: facebookIcon,
    },
    {
      value: 3,
      label: "Linkedin",
      icon: linkedinIcon,
    },
  ];

  return (
    <DropdownContainer>
      <Mode text="Default">
        <DxcDropdown
          options={options}
          onSelectOption={selectOption}
          label="Default Dropdown"
          margin={{ right: "small" }}
        ></DxcDropdown>
        <DxcDropdown
          options={iconOptions}
          onSelectOption={selectOption}
          icon={linkedinIcon}
          label="Dropdown with icons"
        ></DxcDropdown>
      </Mode>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div``;

export default Dropdown;
