import { DxcLink } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <div style={{ background: "#000000" }}>
        <DxcLink
            href="#"
            theme="dark"
            text="Dark theme Link"
        >
        </DxcLink>
    </div>
  );
}`;

const scope = {
  DxcLink
};

export default { code, scope };
