import { DxcTag } from "@dxc-technology/halstack-react";
import dxcLogoPath from "./images/dxclogo.png";

const code = `() => {
  return (
    <DxcTag
      margin="medium"
      icon={<img src={dxcLogoPath} />}
      label="DXC Technology"
      size="large"
      onClick={() => {
        console.log("click");
      }}
    ></DxcTag>
  );
}`;

const scope = {
  DxcTag,
  dxcLogoPath
};

export default { code, scope };
