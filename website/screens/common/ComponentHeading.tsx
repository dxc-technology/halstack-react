import { DxcHeading, DxcFlex } from "@dxc-technology/halstack-react";
import React from "react";
import StatusTag from "@/common/StatusTag";

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

export default ComponentHeading;
