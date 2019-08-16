import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";
import moment from "moment";

import dateMD from "./readme.md";

import Date from "./Date";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";

storiesOf("Form Components|Date", module).add(
  "Component",
  () => (
    <div>
      <div>
        <Date
          name="date1"
          format="dd-MM-yyyy"
          label="Date"
          theme="light"
          assistiveText="Assistive text"
          onInputChange={event => console.log(event)}
          onChange={onChange}
        />
        <Date
          name="date2"
          format="dd-MM-yy"
          value={moment("03/12/1995", "DD/MM/YYYY")}
          label="Default value"
          theme="light"
          assistiveText="Assistive text"
          onInputChange={event => console.log(event)}
          onChange={onChange}
        />
        <Date
          name="date3"
          format="dd/MM/yy"
          label="Invalid Date"
          theme="light"
          assistiveText="Assistive text"
          onInputChange={event => console.log(event)}
          onChange={onChange}
          invalid={true}
        />
        <Date
          name="date4"
          format="dd/MM/yy"
          label="Disabled Date"
          theme="light"
          assistiveText="Assistive text"
          onInputChange={event => console.log(event)}
          onChange={onChange}
          invalid={true}
          disabled={true}
        />
        <Date
          name="date5"
          format="dd/MM/yy"
          value={moment("03/12/1995", "DD/MM/YYYY")}
          label="Disabled Default Date"
          theme="light"
          assistiveText="Assistive text"
          onInputChange={event => console.log(event)}
          onChange={onChange}
          invalid={true}
          disabled={true}
        />
        <Date
          name="date6"
          format="dd/MM/yy"
          label="Required Date"
          theme="light"
          assistiveText="Assistive text"
          onInputChange={event => console.log(event)}
          onChange={onChange}
          required={true}
        />
      </div>

      <div style={{ background: "black", height: "150px" }}>
        <Date
          name="date1"
          format="dd/MM/yyyy"
          label="Date"
          theme="dark"
          assistiveText="Assistive text"
          onInputChange={event => console.log(event)}
          onChange={onChange}
        />
        <Date
          name="date2"
          format="dd/MM/yyyy"
          value={moment("03/12/1995", "DD/MM/YYYY")}
          label="Default value"
          theme="dark"
          assistiveText="Assistive text"
          onInputChange={event => console.log(event)}
          onChange={onChange}
        />
        <Date
          name="date3"
          format="dd/MM/yy"
          label="Invalid Date"
          theme="dark"
          assistiveText="Assistive text"
          onInputChange={event => console.log(event)}
          onChange={onChange}
          invalid={true}
        />
        <Date
          name="date4"
          format="dd/MM/yy"
          label="Disabled Date"
          theme="dark"
          assistiveText="Assistive text"
          onInputChange={event => console.log(event)}
          onChange={onChange}
          invalid={true}
          disabled={true}
        />
        <Date
          name="date5"
          format="dd/MM/yy"
          value={moment("03/12/1995", "DD/MM/YYYY")}
          label="Disabled Default Date"
          theme="dark"
          assistiveText="Assistive text"
          onInputChange={event => console.log(event)}
          onChange={onChange}
          invalid={true}
          disabled={true}
        />
        <Date
          name="date6"
          format="dd/MM/yy"
          label="Required Date"
          theme="dark"
          assistiveText="Assistive text"
          onInputChange={event => console.log(event)}
          onChange={onChange}
          required={true}
        />
      </div>
    </div>
  ),
  {
    notes: { markdown: dateMD }
  }
);

const knobProps = () => ({
  label: text("Label", "Label"),
  assistiveText: text("Assistive Text", "Assistive Text"),
  format: text("Format", "dd/MM/yyyy"),
  theme: select("Theme", { light: "light", dark: "dark" }, "light"),
  disabled: boolean("Disabled", false),
  dissableRipple: boolean("Disable Ripple", false),
  invalid: boolean("Invalid", false),
  required: boolean("Required", false)
});

storiesOf("Form Components|Date", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div style={{ background: (props.theme === "dark" && "black") || "transparent"  }}>
        <Date {...props} onChange={onChange}/>
      </div>
    );
  },
  {
    notes: { markdown: dateMD }
  }
);
