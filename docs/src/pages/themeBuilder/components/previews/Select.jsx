import React from "react";
import styled from "styled-components";
import { DxcSelect, DxcHeading } from "@dxc-technology/halstack-react";

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
          options={url_options}
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
