import { DxcTabs, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [selectedTab, setSelectedTab] = useState("Mail");
  
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcTabs>
        <DxcTabs.Tab tabId="Mail" label="Mail" active={selectedTab === "Mail"} onClick={() => setSelectedTab("Mail")}>
          <></>
        </DxcTabs.Tab>
        <DxcTabs.Tab tabId="Calendar" label="Calendar" active={selectedTab === "Calendar"} onClick={() => setSelectedTab("Calendar")}>
          <></>
        </DxcTabs.Tab>
        <DxcTabs.Tab tabId="Contacts" label="Contacts" active={selectedTab === "Contacts"} onClick={() => setSelectedTab("Contacts")}>
          <></>
        </DxcTabs.Tab>
      </DxcTabs>
    </DxcInset>
  );
}`;

const scope = {
  DxcTabs,
  DxcInset,
  useState,
};

export default { code, scope };
