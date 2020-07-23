import { DxcLink } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <p>
        This is a text with a <DxcLink disabled={true} href="#" text="disabled Link"></DxcLink>.
    </p>
  );
}`;

const scope = {
  DxcLink
};

export default { code, scope };
