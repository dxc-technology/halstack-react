import React from "react";
import styled from "styled-components";
import DocTitle from "../../../common/DocTitle";
import { DxcTag, DxcChip } from "@dxc-technology/halstack-react";
import ReadyIcon from "./ready.svg";
import ExperimentalIcon from "./experimental.svg";
import PlannedIcon from "./planned.svg";


function ComponentHeader({ title, status }) {
  return (
    <StyledHeader>
      <DocTitle size={1}>{title}</DocTitle>
      {status ? (
        <DxcChip
          label="Ready"
          margin="small"
          prefixIconSrc={
            status === "ready"
              ? ReadyIcon
              : status === "experimental"
              ? ExperimentalIcon
              : status === "planned"
              ? PlannedIcon
              : ""
          }
        ></DxcChip>
      ) : (
        ""
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export default ComponentHeader;
