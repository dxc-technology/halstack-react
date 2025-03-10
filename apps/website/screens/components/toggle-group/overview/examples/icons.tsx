import { DxcToggleGroup, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import { useState } from "react";

const icons = {
  ethernet: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" />
    </svg>
  ),
  gMobile: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <g>
          <path d="M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z" />
        </g>
      </g>
    </svg>
  ),
  wifi: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
    </svg>
  ),
};

const code = `() => {
  const options1 = [
    {
      value: 1,
      label: "Wi-fi",
      icon: icons.wifi,
    },
    {
      value: 2,
      label: "Ethernet",
      icon: icons.ethernet,
    },
    {
      value: 3,
      label: "3G Mobile",
      icon: icons.gMobile,
    },
  ];

  const options2 = [
    {
      value: 1,
      icon: icons.wifi,
      title: "Wi-fi connection",
    },
    {
      value: 2,
      icon: icons.ethernet,
      title: "Ethernet connection"
    },
    {
      value: 3,
      icon: icons.gMobile,
      title: "3G Mobile data connection"
    },
  ];

  return (
    <DxcInset space="2rem">
      <DxcFlex gap="2rem">
        <DxcToggleGroup
          options={options1}
          defaultValue={1}
        />
        <DxcToggleGroup
          options={options2}
          defaultValue={1}
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcToggleGroup,
  DxcInset,
  DxcFlex,
  useState,
  icons,
};

export default { code, scope };
