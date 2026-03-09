import { DxcAlert, DxcFlex } from "@dxc-technology/halstack-react";

const AlertPreview = () => {
  return (
    <DxcFlex direction="row" gap="var(--spacing-gap-l)" wrap="wrap">
      <DxcAlert
        message={{ text: "Your profile has been updated successfully." }}
        primaryAction={{ label: "Accept", onClick: () => {} }}
        secondaryAction={{ label: "Don't show", onClick: () => {} }}
        semantic="success"
        title="Update completed"
      />

      <DxcAlert
        message={{ text: "New system updates are available for your account." }}
        primaryAction={{ label: "Accept", onClick: () => {} }}
        secondaryAction={{ label: "Don't show", onClick: () => {} }}
        semantic="info"
        title="System information"
      />

      <DxcAlert
        message={{ text: "Your password will expire in 3 days." }}
        primaryAction={{ label: "Accept", onClick: () => {} }}
        secondaryAction={{ label: "Don't show", onClick: () => {} }}
        semantic="warning"
        title="Password expiration warning"
      />

      <DxcAlert
        message={{ text: "We couldn't process your request. Please try again later." }}
        primaryAction={{ label: "Accept", onClick: () => {} }}
        secondaryAction={{ label: "Don't show", onClick: () => {} }}
        semantic="error"
        title="Request failed"
      />
    </DxcFlex>
  );
};

export default AlertPreview;
