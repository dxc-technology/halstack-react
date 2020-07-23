import { DxcTag } from "@dxc-technology/halstack-react";
import dxcLogoPath from "./images/dxclogo.png";

const code = `() => {
  return (
    <DxcTag
      margin="medium"
      iconSrc={dxcLogoPath}
      label="DXC Technology"
      linkHref="https://www.dxc.com"
    ></DxcTag>
  );
}`;

const scope = {
  DxcTag,
  dxcLogoPath
};

export default { code, scope };
