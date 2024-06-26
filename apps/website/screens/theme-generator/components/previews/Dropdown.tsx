import React from "react";
import { DxcDropdown } from "@repo/ui";
import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";
import linkedinIcon from "../../images/LinkedinIcon";
import xIcon from "../../images/XIcon";
import PreviewContainer from "./PreviewContainer";

const options = [
  {
    value: "1",
    label: "Amazon",
  },
  {
    value: "2",
    label: "Ebay",
  },
  {
    value: "3",
    label: "Apple",
  },
];

const iconOptions = [
  {
    value: "1",
    label: "Facebook",
    icon: facebookIcon,
  },
  {
    value: "2",
    label: "X",
    icon: xIcon,
  },
  {
    value: "3",
    label: "Linkedin",
    icon: linkedinIcon,
  },
];

const largeOptionsList = [
  {
    value: "1",
    label: "Example 1",
  },
  {
    value: "2",
    label: "Example 2",
  },
  {
    value: "3",
    label: "Example 3",
  },
  {
    value: "4",
    label: "Example 4",
  },
  {
    value: "5",
    label: "Example 5",
  },
  {
    value: "6",
    label: "Example 6",
  },
  {
    value: "7",
    label: "Example 7",
  },
  {
    value: "8",
    label: "Example 8",
  },
  {
    value: "9",
    label: "Example 9",
  },
  {
    value: "10",
    label: "Example 10",
  },
  {
    value: "11",
    label: "Example 11",
  },
  {
    value: "12",
    label: "Example 12",
  },
  {
    value: "13",
    label: "Example 13",
  },
  {
    value: "14",
    label: "Example 14",
  },
  {
    value: "15",
    label: "Example 15",
  },
];

const Dropdown = () => {
  const selectOption = (value: string) => {
    console.log(value);
  };

  return (
    <PreviewContainer>
      <Mode text="Default">
        <DxcDropdown options={options} onSelectOption={selectOption} label="Default Dropdown" />
        <DxcDropdown
          options={iconOptions}
          onSelectOption={selectOption}
          icon={linkedinIcon}
          label="Dropdown with icons"
        />
      </Mode>
      <Mode text="Disabled">
        <DxcDropdown
          options={iconOptions}
          onSelectOption={selectOption}
          icon={linkedinIcon}
          label="Disabled dropdown"
          disabled
        />
      </Mode>
      <Mode text="With scrollbar">
        <DxcDropdown options={largeOptionsList} onSelectOption={selectOption} label="Dropdown with scroll" />
      </Mode>
    </PreviewContainer>
  );
};

export default Dropdown;
