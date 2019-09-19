import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text, number } from "@storybook/addon-knobs";

import tabsMD from "./readme.md";

import Tabs from "./Tabs";
import Tab from "./tab/Tab";
import amazon from "../../.storybook/public/amazon.svg";
import ebay from "../../.storybook/public/ebay.svg";
import apple from "../../.storybook/public/apple.svg";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";

storiesOf("Form Components|Tabs", module).add(
  "Types",
  () => (
    <div>
      <h3>Light</h3>
      <div>
        <Tabs activeTabIndex={0} activeTabIndexChange={onChange} mode="underlined">
          <Tab label="Tab ONE" iconSrc="" disabled={false}>
            <h1>Content ONE</h1>
          </Tab>
          <Tab label="Tab TWO" iconSrc="" disabled={false}>
            Content TWO
          </Tab>
          <Tab label="Tab THREE" iconSrc="" disabled={false}>
            Content THREE
          </Tab>
        </Tabs>
      </div>
      <div>
        <Tabs activeTabIndex={0} activeTabIndexChange={onChange} mode="filled">
          <Tab label="Label 1" iconSrc={amazon} disabled={false}>
            <h1>Filled ONE</h1>
          </Tab>
          <Tab label="Label 2" iconSrc={ebay} disabled={false}>
            Filled TWO
          </Tab>
          <Tab label="Label 3" iconSrc={apple} disabled={true}>
            Filled THREE
          </Tab>
        </Tabs>
      </div>
    </div>
  ),
  {
    notes: { markdown: tabsMD }
  }
);
const knobProps = () => ({
  mode: select("mode", { filled: "filled", underlined: "underlined" }, "filled"),
  theme: select("theme", { light: "light", dark: "dark" }, "light"),
  activeTabIndex: number("Tab Active", 0),
});
const knobTab1Props = () => ({
  label: text("First Tab Label", "Tab 1"),
  disabled: boolean("First Tab Disabled", false)
});
const knobTab2Props = () => ({
  label: text("Second Tab Label", "Tab 2"),
  disabled: boolean("Second Tab Disabled", false)
});
const knobTab3Props = () => ({
  label: text("Third Tab Label", "Tab 3"),
  disabled: boolean("Third Tab Disabled", false)
});

storiesOf("Form Components|Tabs", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    const tab1Props = knobTab1Props();
    const tab2Props = knobTab2Props();
    const tab3Props = knobTab3Props();
    return (
      <div style={{ background: (props.theme === "dark" && "black") || "transparent" }}>
        <Tabs {...props} activeTabIndexChange={onChange}>
          <Tab {...tab1Props} iconSrc={amazon}>
            Content ONE
          </Tab>
          <Tab {...tab2Props} iconSrc={ebay}>
            Content TWO
          </Tab>
          <Tab {...tab3Props} iconSrc={apple}>
            Content THREE
          </Tab>
        </Tabs>
      </div>
    );
  },
  {
    notes: { markdown: tabsMD }
  }
);
