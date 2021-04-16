import React from "react";
import styled from "styled-components";
import { DxcSelect } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";
import linkedinIcon from "../../images/LinkedinIcon";

const options = [
  {
    value: 1,
    label: "Amazon",
    icon: facebookIcon,
  },
  {
    value: 2,
    label: "Ebay",
    icon: linkedinIcon,
  },
];

const optionsNoIcons = [
  {
    value: 1,
    label: "Amazon",
  },
  {
    value: 2,
    label: "Ebay",
  },
];

const Select = () => {
  return (
    <SelectContainer>
      <Mode text="Default">
        <DxcSelect
          options={options}
          label="Default Select"
          margin={{ right: "small" }}
        ></DxcSelect>
      </Mode>
      <Mode text="Multiple">
        <DxcSelect
          options={optionsNoIcons}
          multiple
          label="Multiple Select"
          margin={{ right: "small" }}
        ></DxcSelect>
      </Mode>
      <Mode text="Disabled">
        <DxcSelect
          options={options}
          disabled
          label="Disabled Select"
        ></DxcSelect>
      </Mode>
    </SelectContainer>
  );
};

const SelectContainer = styled.div``;

export default Select;
