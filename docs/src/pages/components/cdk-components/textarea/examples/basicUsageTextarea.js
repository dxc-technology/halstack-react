import { DxcTextarea } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <div style={{ display: "flex" }}>
      <DxcTextarea
        label="Default"
        placeholder="Placeholder"
        margin="medium"
      />
      <DxcTextarea
        label="Error"
        error="Error message."
        margin="medium"
      />
      <DxcTextarea
        label="Disabled"
        disabled
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcTextarea,
  useState,
};

export default { code, scope };
