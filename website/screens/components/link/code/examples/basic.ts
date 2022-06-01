import { DxcLink } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <p>
        This is a text with a <DxcLink href="#">Link</DxcLink> to another page.
    </p>
  );
}`;

const scope = {
  DxcLink,
};

export default { code, scope };
