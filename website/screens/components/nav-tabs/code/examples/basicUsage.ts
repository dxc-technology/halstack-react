import { DxcNavTabs } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcNavTabs>
      <DxcNavTabs.Tab href="#" active>
        Tab 1
      </DxcNavTabs.Tab>
      <DxcNavTabs.Tab href="#">Tab 2</DxcNavTabs.Tab>
      <DxcNavTabs.Tab href="#">Tab 3</DxcNavTabs.Tab>
      <DxcNavTabs.Tab href="#">Tab 4</DxcNavTabs.Tab>
    </DxcNavTabs>
  );
}`;

const scope = {
  DxcNavTabs,
};

export default { code, scope };
