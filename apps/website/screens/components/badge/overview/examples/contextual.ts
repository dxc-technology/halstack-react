import { DxcInset, DxcBadge, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="2rem" direction="column">
        <DxcFlex gap="2rem" justifyContent="space-evenly">
          <DxcBadge label="Label" color="green" icon="info" />
          <DxcBadge label="Label" color="blue" icon="info" />
          <DxcBadge label="Label" color="red" icon="info" />
          <DxcBadge label="Label" color="orange" icon="info" />
          <DxcBadge label="Label" color="yellow" icon="info" />
          <DxcBadge label="Label" color="purple" icon="info" />
          <DxcBadge label="Label" icon="info" />
        </DxcFlex>
        <DxcFlex gap="2rem" justifyContent="space-evenly">
          <DxcBadge label="Label" color="green"/>
          <DxcBadge label="Label" color="blue"/>
          <DxcBadge label="Label" color="red" />
          <DxcBadge label="Label" color="orange"/>
          <DxcBadge label="Label" color="yellow" />
          <DxcBadge label="Label" color="purple" />
          <DxcBadge label="Label"/>
        </DxcFlex>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcBadge,
  DxcFlex,
  Placeholder,
};

export default { code, scope };
