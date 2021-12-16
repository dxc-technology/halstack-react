import React from "react";
import styled from "styled-components";
import { DxcChip, DxcHeading } from "@dxc-technology/halstack-react";
import ReadyIcon from "./ready.svg";
import ExperimentalIcon from "./experimental.svg";
import PlannedIcon from "./planned.svg";
import DeprecatedIcon from "./deprecated.svg";

function ComponentHeader({ title, status }) {
  return (
    <StyledHeader>
      <DxcHeading level={2} text={title} margin={{ bottom: "medium" }} />
      {status ? (
        <DxcChip
          label={
            status === "ready"
              ? "Ready"
              : status === "experimental"
              ? "Experimental"
              : status === "planned"
              ? "Planned"
              : status === "deprecated"
              ? "Deprecated"
              : ""
          }
          margin={{ left: "small", bottom: "medium" }}
          prefixIconSrc={
            status === "ready"
              ? ReadyIcon
              : status === "experimental"
              ? ExperimentalIcon
              : status === "planned"
              ? PlannedIcon
              : status === "deprecated"
              ? DeprecatedIcon
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
