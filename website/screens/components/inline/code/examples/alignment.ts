import { DxcInline } from "@dxc-technology/halstack-react";
import Placeholder from "./Placeholder";

const code = `() => {
  return (
    <DxcInline gutter="0.5rem" alignX="center" alignY="end">
      <Placeholder width="medium" height="large" />
      <Placeholder width="large" height="medium" />
      <Placeholder width="medium" height="medium" />
      <Placeholder width="small" height="medium" />
      <Placeholder width="medium" height="small" />
      <Placeholder width="medium" height="large" />
      <Placeholder width="large" height="medium" />
      <Placeholder width="medium" height="medium" />
    </DxcInline>
  );
}`;

const scope = {
  DxcInline,
  Placeholder,
};

export default { code, scope };
