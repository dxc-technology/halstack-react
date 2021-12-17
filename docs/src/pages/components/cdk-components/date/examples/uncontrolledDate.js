import { V3DxcDate } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <V3DxcDate
      label="Date of birth"
      format="dd-MM-yyyy"
      assistiveText="assistive text"
      margin="medium"
    />
  );
}`;
const scope = {
  V3DxcDate,
  useState,
};

export default { code, scope };
