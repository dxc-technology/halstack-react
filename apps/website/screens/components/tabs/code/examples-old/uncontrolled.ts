import { DxcTabs, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcTabs
        defaultActiveTabIndex={1}
        tabs={[
          {
            label: "Mail",
          },
          {
            label: "Calendar",
          },
          {
            label: "Contacts",
          },
        ]}
      ></DxcTabs>
    </DxcInset>
  );
}`;

const scope = {
  DxcTabs,
  DxcInset,
};

export default { code, scope };
