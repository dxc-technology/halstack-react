import { DxcNavTabs, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-l)">
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active>
          Mail
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">
          Calendar
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">
          External site
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </DxcInset>
  );
}`;

const scope = {
  DxcNavTabs,
  DxcInset,
};

export default { code, scope };
