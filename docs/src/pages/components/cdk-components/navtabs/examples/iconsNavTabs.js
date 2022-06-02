import { DxcNavTabs } from "@dxc-technology/halstack-react";

const code = `() => {
  const iconSVG = (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );

  return (
    <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active icon={iconSVG}>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon={iconSVG}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png">
          Tab 3
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>}
        >
          Tab 4
        </DxcNavTabs.Tab>
    </DxcNavTabs>
  );
}`;

const scope = {
  DxcNavTabs,
};

export default { code, scope };
