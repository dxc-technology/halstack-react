import { DxcHeading, DxcFlex } from "@dxc-technology/halstack-react";
import React from "react";
import styled from "styled-components";

type ComponentHeadingProps = {
  name: string;
  status: "Ready" | "Deprecated" | "Experimental";
};

const ComponentHeading = ({ name, status }: ComponentHeadingProps) => {
  return (
    <DxcFlex alignItems="center" gap="1.5rem">
      <DxcHeading level={1} text={name} weight="bold" />
      <StatusTag status={status}>{status}</StatusTag>
    </DxcFlex>
  );
};

type StatusTagProps = { status: "Ready" | "Deprecated" | "Experimental" };

const StatusTag = styled.div<StatusTagProps>`
  box-sizing: border-box;
  height: 24px;
  border: 1px solid
    ${(props) =>
      props.status === "Ready"
        ? "#24A148"
        : props.status === "Deprecated"
        ? "#C59F07"
        : props.status === "Experimental"
        ? "#5F249F"
        : ""};
  border-radius: 0.5rem;
  padding: 4px 8px;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.125em;
  color: ${(props) =>
    props.status === "Ready"
      ? "#135325"
      : props.status === "Deprecated"
      ? "#624F04"
      : props.status === "Experimental"
      ? "#321353"
      : ""};
  background-color: ${(props) =>
    props.status === "Ready"
      ? "#F7FDF9"
      : props.status === "Deprecated"
      ? "#FFFDF5"
      : props.status === "Experimental"
      ? "#FAF7FD"
      : ""}; ;
`;

export default ComponentHeading;
