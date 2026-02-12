import React from "react";
import { DxcAlert, DxcFlex } from "@dxc-technology/halstack-react";
const AlertPreview = () => {
  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-l)">
      <DxcAlert
        message={{ text: "Success message" }}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
        semantic="success"
        title="Success"
      />
      <DxcAlert
        message={{ text: "Information message" }}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
        semantic="info"
        title="Information"
      />
      <DxcAlert
        message={{ text: "Warning message" }}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
        semantic="warning"
        title="Warning"
      />
      <DxcAlert
        message={{ text: "Error message" }}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
        semantic="error"
        title="Error"
      />
    </DxcFlex>
  );
};

export default AlertPreview;
