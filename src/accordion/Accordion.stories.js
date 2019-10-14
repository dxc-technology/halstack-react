import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import accordionMD from "./readme.md";
import Accordion from "./Accordion";
import logo from "../../.storybook/public/run_icon_black.png";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";

storiesOf("Form Components|Accordion", module).add(
  "Types",
  () => (
    <div>
      <h3>Light</h3>
      <div style={{ marginBottom: "50px" }}>
        <Accordion label="First accordion" onChange={onChange}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </Accordion>
        <Accordion theme="light" disabled label="Second accordion" onChange={onChange}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </Accordion>
        <Accordion label="Third accordion" onChange={onChange} assistiveText="Extra information">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </Accordion>
        <Accordion
          theme="light"
          label="Fourth accordion"
          assistiveText="Extra information"
          iconPosition="before"
          iconSrc={logo}
          onChange={onChange}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </Accordion>
        <Accordion
          theme="light"
          label="Fifth accordion"
          assistiveText="Extra information"
          iconPosition="after"
          iconSrc={logo}
          onChange={onChange}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </Accordion>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Accordion theme="light" mode="alternative" label="First accordion" onChange={onChange}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </div>
        </Accordion>
        <Accordion theme="light" mode="alternative" disabled label="Second accordion" onChange={onChange}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </Accordion>
        <Accordion
          theme="light"
          mode="alternative"
          label="Third accordion"
          assistiveText="Extra information"
          onChange={onChange}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </Accordion>
        <Accordion
          theme="light"
          mode="alternative"
          label="Fourth accordion"
          assistiveText="Extra information"
          iconPosition="before"
          iconSrc={logo}
          onChange={onChange}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </Accordion>
        <Accordion
          theme="light"
          mode="alternative"
          label="Fifth accordion"
          assistiveText="Extra information"
          iconPosition="after"
          iconSrc={logo}
          onChange={onChange}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </Accordion>
      </div>
      <h3>Dark</h3>
      <div>
        <div style={{ background: "black", paddingTop: "50px", paddingBottom: "50px" }}>
          <Accordion label="First accordion" onChange={onChange}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </div>
          </Accordion>
          <Accordion theme="dark" disabled label="Second accordion" onChange={onChange}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </div>
          </Accordion>
          <Accordion theme="dark" label="Third accordion" onChange={onChange} assistiveText="Extra information">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </div>
          </Accordion>
          <Accordion
            theme="dark"
            label="Fourth accordion"
            assistiveText="Extra information"
            iconPosition="before"
            iconSrc={logo}
            onChange={onChange}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </div>
          </Accordion>
          <Accordion
            theme="dark"
            label="Fifth accordion"
            assistiveText="Extra information"
            iconPosition="after"
            iconSrc={logo}
            onChange={onChange}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </div>
          </Accordion>
        </div>
        <div style={{ background: "black", paddingBottom: "50px" }}>
          <Accordion theme="dark" mode="alternative" label="First accordion" onChange={onChange}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </div>
          </Accordion>
          <Accordion theme="dark" mode="alternative" disabled label="Second accordion" onChange={onChange}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </div>
          </Accordion>
          <Accordion
            theme="dark"
            mode="alternative"
            label="Third accordion"
            assistiveText="Extra information"
            onChange={onChange}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </div>
          </Accordion>
          <Accordion
            theme="dark"
            mode="alternative"
            label="Fourth accordion"
            assistiveText="Extra information"
            iconPosition="before"
            iconSrc={logo}
            onChange={onChange}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </div>
          </Accordion>
          <Accordion
            theme="dark"
            mode="alternative"
            label="Fifth accordion"
            assistiveText="Extra information"
            iconPosition="after"
            iconSrc={logo}
            onChange={onChange}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: accordionMD }
  }
);

const knobProps = () => ({
  mode: select("mode", { default: "default", alternative: "alternative" }, "default"),
  label: text("label", "Test Accordion"),
  assistiveText: text("assistive text", "Extra information"),
  theme: select("theme", { light: "light", dark: "dark" }, "light"),
  disabled: boolean("disabled", false),
  iconPosition: select("icon position", { before: "before", after: "after" }, "before")
});

storiesOf("Form Components|Accordion", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div style={{ background: (props.theme === "dark" && "black") || "transparent" }}>
        <Accordion {...props} onChange={onChange} iconSrc={logo}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </Accordion>
      </div>
    );
  },
  {
    notes: { markdown: accordionMD }
  }
);
