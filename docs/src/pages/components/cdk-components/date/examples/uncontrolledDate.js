import { DxcDate } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcDate
      label="Date of birth"
      format="dd-MM-yyyy"
      assistiveText="assistive text"
      margin="medium"
    />
  );
}`;
const scope = {
  DxcDate,
  useState
};

export default { code, scope };
