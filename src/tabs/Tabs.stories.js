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
          <Tab label="Tab TWO" iconSrc="" disabled={true}>
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
  label: text("label", "Test Button"),
  activeTabIndex: number("Tab Active", 0),
  disabled: boolean("disabled", false),
  iconPosition: select("icon poistion", { before: "before", after: "after" }, "before")
});

// storiesOf("Form Components|Tabs", module).add(
//   "Knobs example",
//   () => {
//     const props = knobProps();
//     return (
//       <div style={{ background: (props.theme === "dark" && "black") || "transparent" }}>
//         <Tabs {...props} activeTabIndexChange={onChange}>
//         <Tab label="Tab THREE" iconSrc="" disabled={false}>
//             Content THREE
//           </Tab>
//         </Tabs>
//       </div>
//     );
//   },
//   {
//     notes: { markdown: tabsMD }
//   }
// );
