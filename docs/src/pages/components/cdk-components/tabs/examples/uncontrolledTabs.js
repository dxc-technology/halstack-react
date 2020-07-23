import { DxcTabs } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onTabClick = i => {
    console.log(i);
  };

  return (
    <DxcTabs
      onTabClick={onTabClick}
      tabs={[
        {
          label: "Tab 1"
        },
        {
          label: "Tab 2"
        },
        {
          label: "Tab 3"
        }
      ]}
    ></DxcTabs>
  );
}`;

const scope = {
  DxcTabs,
  useState
};

export default { code, scope };
