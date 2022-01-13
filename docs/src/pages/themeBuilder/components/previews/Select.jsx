import React from "react";
import styled from "styled-components";
import { DxcSelect } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Select = () => {
  const single_options = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
  ];
  const single_options_long = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
    { label: "Option 05", value: "5" },
    { label: "Option 06", value: "6" },
    { label: "Option 07", value: "7" },
    { label: "Option 08", value: "8" },
    { label: "Option 09", value: "9" },
    { label: "Option 10", value: "10" },
    { label: "Option 11", value: "11" },
    { label: "Option 12", value: "12" },
    { label: "Option 13", value: "13" },
    { label: "Option 14", value: "14" },
    { label: "Option 15", value: "15" },
    { label: "Option 16", value: "16" },
    { label: "Option 17", value: "17" },
    { label: "Option 18", value: "18" },
    { label: "Option 19", value: "19" },
    { label: "Option 20", value: "20" },
  ];
  const svg_options = [
    {
      label: "Utils",
      options: [
        {
          label: "3G Mobile",
          value: "3g",
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
          value: "ethernet",
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
          value: "wifi",
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
          value: "restore",
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
      ],
    },
    {
      label: "Operations",
      options: [
        {
          label: "Log out",
          value: "logout",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <g>
                <path d="M0,0h24v24H0V0z" fill="none" />
              </g>
              <g>
                <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
              </g>
            </svg>
          ),
        },
        {
          label: "Log in",
          value: "login",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z" />
              </g>
            </svg>
          ),
        },
        {
          label: "Filter",
          value: "filter",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <g>
                <path d="M0,0h24 M24,24H0" fill="none" />
                <path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z" />
                <path d="M0,0h24v24H0V0z" fill="none" />
              </g>
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <SelectContainer>
      <Mode text="Default">
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          placeholder="Choose an option"
          margin={{ top: "xsmall", right: "small" }}
        />
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          placeholder="Choose an option"
          disabled
          margin={{ top: "xsmall", right: "small" }}
        />
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          error="Error message"
          placeholder="Choose an option"
          margin={{ top: "xsmall" }}
        />
      </Mode>
      <Mode text="Searchable and optional">
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={single_options_long}
          placeholder="Choose an option"
          searchable
          optional
          margin={{ top: "xsmall" }}
        />
      </Mode>
      <Mode text="Multiple selection with groups and icons">
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={svg_options}
          placeholder="Choose an option"
          multiple
          margin={{ top: "xsmall" }}
        />
      </Mode>
    </SelectContainer>
  );
};

const SelectContainer = styled.div``;

export default Select;
