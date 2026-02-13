import { DxcAvatar } from "@dxc-technology/halstack-react";

const AvatarPreview = () => {
  return (
    <DxcAvatar
      color="success"
      primaryText="Michael Ramirez"
      secondaryText="m.ramirez@insurance.com"
      status={{ mode: "success", position: "top" }}
    />
  );
};

export default AvatarPreview;
