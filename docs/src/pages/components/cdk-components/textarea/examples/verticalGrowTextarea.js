import { DxcTextarea } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <div style={{ display: "flex" }}>
      <DxcTextarea
        label="Vertical grow"
        helperText="Set to 'auto' (default) to grow vertically"
        verticalGrow="auto"
        margin="medium"
      />
      <DxcTextarea
        label="Vertical grow"
        helperText="Set to 'manual' to manually grow the textarea"
        verticalGrow="manual"
        margin="medium"
      />
      <DxcTextarea
        label="Vertical grow"
        helperText="Set to 'none' to disable vertical grow"
        verticalGrow="none"
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
