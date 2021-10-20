import React from "react";
import styled from "styled-components";
import { DxcDropdown } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";
import linkedinIcon from "../../images/LinkedinIcon";
import twitterIcon from "../../images/TwitterIcon";

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
      icon: twitterIcon,
    },
    {
      value: 3,
      label: "Linkedin",
      icon: linkedinIcon,
    },
  ];

  const optionsScroll = [
    {
      value: 1,
      label: "Example 1",
    },
    {
      value: 2,
      label: "Example 2",
    },
    {
      value: 3,
      label: "Example 3",
    },
    {
      value: 4,
      label: "Example 4",
    },
    {
      value: 5,
      label: "Example 5",
    },
    {
      value: 6,
      label: "Example 6",
    },
    {
      value: 7,
      label: "Example 7",
    },
    {
      value: 8,
      label: "Example 8",
    },
    {
      value: 9,
      label: "Example 9",
    },
    {
      value: 10,
      label: "Example 10",
    },
    {
      value: 11,
      label: "Example 11",
    },
    {
      value: 12,
      label: "Example 12",
    },
    {
      value: 13,
      label: "Example 13",
    },
    {
      value: 14,
      label: "Example 14",
    },
    {
      value: 15,
      label: "Example 15",
    },
    {
      value: 16,
      label: "Example 16",
    },
  ];

  return (
    <DropdownContainer>
      <Mode text="Default">
        <DxcDropdown
          options={options}
          onSelectOption={selectOption}
          label="Default Dropdown"
          margin={{ top: "xsmall", right: "small" }}
        ></DxcDropdown>
        <DxcDropdown
          options={iconOptions}
          onSelectOption={selectOption}
          icon={linkedinIcon}
          label="Dropdown with icons"
          margin={{ top: "xsmall" }}
        ></DxcDropdown>
      </Mode>
      <Mode text="Disabled">
        <DxcDropdown
          options={iconOptions}
          onSelectOption={selectOption}
          icon={linkedinIcon}
          label="Disabled dropdown"
          margin={{ top: "xsmall" }}
          disabled
        ></DxcDropdown>
      </Mode>
      <Mode text="With scrollbar">
        <DxcDropdown
          options={optionsScroll}
          onSelectOption={selectOption}
          label="Dropdown with scroll"
          margin={{ top: "xsmall" }}
        ></DxcDropdown>
      </Mode>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div``;

export default Dropdown;
