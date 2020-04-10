import { DxcLink } from "@diaas/dxc-react-cdk";

const code = `() => {
  return (
    <div style={{ background: "#000000" }}>
        <DxcLink
            href="#"
            theme="dark"
            color={true}
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
