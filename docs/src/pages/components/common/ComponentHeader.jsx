import React from "react";
import styled from "styled-components";
import { DxcHeading } from "@dxc-technology/halstack-react";
import StatusTag from "../../../common/StatusTag";

function ComponentHeader({ title, status }) {
  return (
    <StyledHeader>
      <DxcHeading level={2} text={title} />
      {status && (
        <StatusTag
          status={
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
        />
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 36px;
  gap: 0.5rem;
`;

export default ComponentHeader;
