import { DxcTag } from "@diaas/dxc-react-cdk";
import dxcLogoPath from "./images/dxclogo.png";

const code = `() => {
  return (
    <div>
      <DxcTag
        margin="medium"
        iconSrc={dxcLogoPath}
        label="DXC Technology"
      ></DxcTag>
      <DxcTag
        margin="medium"
        iconSrc={dxcLogoPath}
        label="DXC Technology"
        iconBgColor="#6B4187"
      ></DxcTag>
      <DxcTag
        margin="medium"
        iconSrc={dxcLogoPath}
        label="DXC Technology"
        labelPosition="before"
      ></DxcTag>
    </div>
  );
}`;

const scope = {
  DxcTag,
  dxcLogoPath
};

export default { code, scope };
