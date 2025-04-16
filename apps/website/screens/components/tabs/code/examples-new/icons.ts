import { DxcTabs, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const mobileIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <g>
          <path d="M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z" />
        </g>
      </g>
    </svg>
  );

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcTabs>
        <DxcTabs.Tab label="3G Mobile" icon={mobileIcon} notificationNumber={true}>
          <></>
        </DxcTabs.Tab>
        <DxcTabs.Tab label="Ethernet" icon="settings_ethernet" notificationNumber={2} disabled>
          <></>
        </DxcTabs.Tab>
        <DxcTabs.Tab label="Wifi" icon="wifi" notificationNumber={120}>
          <></>
        </DxcTabs.Tab>  
      </DxcTabs>
    </DxcInset>
  );
}`;

const scope = {
  DxcTabs,
  DxcInset,
};

export default { code, scope };
