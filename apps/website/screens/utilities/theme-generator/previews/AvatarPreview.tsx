import { DxcAvatar, DxcFlex } from "@dxc-technology/halstack-react";

const AvatarPreview = () => {
  return (
    <DxcFlex direction="row" gap="var(--spacing-gap-l)">
      <DxcAvatar
        color="success"
        primaryText="John Doe"
        secondaryText="johndoe@company.com"
        status={{ mode: "success", position: "top" }}
      />
      <DxcAvatar
        color="error"
        primaryText="John Doe"
        secondaryText="johndoe@company.com"
        status={{ mode: "error", position: "top" }}
      />
      <DxcAvatar
        color="neutral"
        primaryText="John Doe"
        secondaryText="johndoe@company.com"
        status={{ mode: "default", position: "top" }}
      />
      <DxcAvatar
        color="info"
        primaryText="John Doe"
        secondaryText="johndoe@company.com"
        status={{ mode: "info", position: "top" }}
      />
      <DxcAvatar
        color="warning"
        primaryText="John Doe"
        secondaryText="johndoe@company.com"
        status={{ mode: "warning", position: "top" }}
      />
      <DxcAvatar
        color="primary"
        primaryText="John Doe"
        secondaryText="johndoe@company.com"
        status={{ mode: "default", position: "top" }}
      />
      <DxcAvatar
        color="secondary"
        primaryText="John Doe"
        secondaryText="johndoe@company.com"
        status={{ mode: "default", position: "top" }}
      />
      <DxcAvatar
        color="tertiary"
        primaryText="John Doe"
        secondaryText="johndoe@company.com"
        status={{ mode: "default", position: "top" }}
      />
    </DxcFlex>
  );
};

export default AvatarPreview;
