import { DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const svg_options = [
    {
      label: "3G Mobile",
      value: "1",
      icon: (
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
      ),
    },
    {
      label: "Ethernet",
      value: "2",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" />
        </svg>
      ),
    },
    {
      label: "Wi-fi",
      value: "3",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
        </svg>
      ),
    },
    {
      label: "Settings backup restore (just for previous configuration)",
      value: "4",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
        </svg>
      ),
    },
  ];
  const url_options = [
    {
      label: "Social Media",
      options: [
        {
          label: "Instagram",
          value: "instagram",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png",
        },
        {
          label: "Twitter",
          value: "twitter",
          icon: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2013/08/17981-logo-twitter.png?itok=dElA6iAV",
        },
        {
          label: "Facebook",
          value: "facebook",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
        },
        {
          label: "Pinterest",
          value: "pinterest",
          icon: "https://cdn-icons-png.flaticon.com/512/145/145808.png",
        },
      ],
    },
    {
      label: "Design",
      options: [
        {
          label: "Figma",
          value: "figma",
          icon: "https://logowik.com/content/uploads/images/figma.jpg",
        },
        { 
          label: "Adobe XD", 
          value: "adobexd", 
          icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg" 
        },
        { 
          label: "Sketch", 
          value: "sketch", 
          icon: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg" 
        },
      ],
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <DxcSelect
        label="Svg icons"
        placeholder="Choose options"
        helperText="Icons are passed using inline svg"
        options={svg_options}
        multiple
        margin="medium"
      />
      <DxcSelect
        label="Url icons"
        placeholder="Choose an option"
        helperText="Icons are passed using url"
        options={url_options}
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcSelect,
  useState,
};

export default { code, scope };
