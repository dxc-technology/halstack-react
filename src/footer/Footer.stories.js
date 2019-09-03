import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "../common/OpenSans.css";
import { text, object } from "@storybook/addon-knobs";

import linkedin from "./linkedin.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";

import DxcInputText from "../input-text/InputText";

import dropdownMD from "./readme.md";

import DxcFooter from "./Footer";

const social = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    logoSrc: linkedin
  },
  {
    href: "https://twitter.com/dxctechnology",
    logoSrc: twitter
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    logoSrc: facebook
  }
];

const bottom = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    text: "Linkedin"
  },
  {
    href: "https://twitter.com/dxctechnology",
    text: "Twitter"
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook"
  }
];

storiesOf("Form Components|Footer", module).add(
  "Component",
  () => (
    <div>
      <DxcFooter
        copyright="© DXC Technology 2019. All rights reserved."
        bottomLinks={bottom}
        socialLinks={social}
      ></DxcFooter>

      <div style={{ marginTop: "20px" }}>
        <DxcFooter copyright="© DXC Technology 2019. All rights reserved." bottomLinks={bottom} socialLinks={social}>
          <DxcInputText assistiveText="text input component" label="Footer Child" theme="dark" />
          <DxcInputText assistiveText="text input component" label="Footer Child" theme="dark" />
          <DxcInputText assistiveText="text input component" label="Footer Child" theme="dark" />
          <DxcInputText assistiveText="text input component" label="Footer Child" theme="dark" />
        </DxcFooter>
      </div>
    </div>
  ),
  {
    notes: { markdown: dropdownMD }
  }
);

const knobProps = () => ({
  bottomLinks: object("Bottom Links", bottom),
  copyright: text("copyright", "© DXC Technology 2019. All rights reserved.")
});

storiesOf("Form Components|Footer", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div>
        <DxcFooter
          {...props}
          socialLinks={social}
        ></DxcFooter>
      </div>
    );
  },
  {
    notes: { markdown: dropdownMD }
  }
);
