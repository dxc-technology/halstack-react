import { DxcInline, DxcInset } from "@dxc-technology/halstack-react";
import Placeholder from '@/common/Placeholder';

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcInline gutter="0.5rem" divider>
        <Placeholder width="medium" height="large" />
        <Placeholder width="large" height="medium" />
        <Placeholder width="medium" height="medium" />
        <Placeholder width="small" height="medium" />
        <Placeholder width="medium" height="small" />
        <Placeholder width="medium" height="large" />
        <Placeholder width="large" height="medium" />
        <Placeholder width="medium" height="medium" />
      </DxcInline>
    </DxcInset>
  );
}`;

const scope = {
  DxcInline,
  DxcInset,
  Placeholder,
};

export default { code, scope };
