import {
  DxcTag,
  DxcInset,
  DxcRow,
  DxcStack,
} from "@dxc-technology/halstack-react";
import { icon } from "./Icons";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcRow justify="spaceEvenly">
        <DxcStack gutter="large">
          <label style={{fontWeight: 600}}>Icon before</label>
          <DxcTag
            label="Enabled"
            labelPosition="before"
            icon={icon}
          />
        </DxcStack>
        <DxcStack gutter="large">
          <label style={{fontWeight: 600}}>Icon after</label>
          <DxcTag
            label="Enabled"
            icon={icon}
          />
        </DxcStack>
        <DxcStack gutter="large">
          <label style={{fontWeight: 600}}>Only icon</label>
          <DxcTag
            icon={icon}
          />
        </DxcStack>
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcTag,
  DxcInset,
  DxcRow,
  DxcStack,
  icon,
};

export default { code, scope };
