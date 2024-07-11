import { DxcLink, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      This is a text with a <DxcLink href="#">Link</DxcLink> to another page.
    </DxcInset>
  );
}`;

const scope = {
  DxcLink,
  DxcInset,
};

export default { code, scope };
