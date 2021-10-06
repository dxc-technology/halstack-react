import React from "react";
import styled from "styled-components";
import { DxcChip } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const deleteIcon = () => {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
  );
};

const Chip = () => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <ChipContainer>
      <Mode text="Default">
        <DxcChip label="Default chip" margin={{ top: "xsmall" }} />
      </Mode>
      <Mode text="With suffix">
        <DxcChip
          label="Chip with suffix"
          suffixIcon={deleteIcon}
          margin={{ top: "xsmall" }}
          onClickSuffix={onClick}
        />
      </Mode>
      <Mode text="With prefix">
        <DxcChip
          label="Chip with prefix"
          prefixIcon={deleteIcon}
          margin={{ top: "xsmall" }}
          onClickPrefix={onClick}
        />
      </Mode>
      <Mode text="Only icon">
        <DxcChip
          prefixIcon={deleteIcon}
          margin={{ top: "xsmall" }}
          onClickPrefix={onClick}
        />
      </Mode>
      <Mode text="Disabled">
        <DxcChip
          label="Chip disabled"
          disabled
          prefixIcon={deleteIcon}
          margin={{ top: "xsmall" }}
          onClickPrefix={onClick}
        />
      </Mode>
    </ChipContainer>
  );
};

const ChipContainer = styled.div``;

export default Chip;
