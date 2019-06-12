import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";

import buttonMD from "./readme.md";

import Button from "./Button";

const onClick = action("onClick");
onClick.toString = () => "onClickHandler";

storiesOf("Form Components|Button", module).add(
  "Types",
  () => (
    <div>
      <h3>Light</h3>
      <div>
        <Button mode={"basic"} theme={"light"} label={"Test Button"} onClick={onClick} />
        <Button mode={"raised"} theme={"light"} label={"Test Button"} onClick={onClick} />
        <Button mode={"flat"} theme={"light"} label={"Test Button"} onClick={onClick} />
        <Button mode={"outlined"} theme={"light"} label={"Test Button"} onClick={onClick} />
      </div>
      <div>
        <Button disabled mode={"basic"} theme={"light"} label={"Test Button"} onClick={onClick} />
        <Button disabled mode={"raised"} theme={"light"} label={"Test Button"} onClick={onClick} />
        <Button disabled mode={"flat"} theme={"light"} label={"Test Button"} onClick={onClick} />
        <Button disabled mode={"outlined"} theme={"light"} label={"Test Button"} onClick={onClick} />
      </div>
      <h3>Dark</h3>
      <div style={{ background: "black" }}>
        <div>
          <Button mode={"basic"} theme={"dark"} label={"Test Button"} onClick={onClick} />
          <Button mode={"raised"} theme={"dark"} label={"Test Button"} onClick={onClick} />
          <Button mode={"flat"} theme={"dark"} label={"Test Button"} onClick={onClick} />
          <Button mode={"outlined"} theme={"dark"} label={"Test Button"} onClick={onClick} />
        </div>
        <div>
          <Button disabled mode={"basic"} theme={"dark"} label={"Test Button"} onClick={onClick} />
          <Button disabled mode={"raised"} theme={"dark"} label={"Test Button"} onClick={onClick} />
          <Button disabled mode={"flat"} theme={"dark"} label={"Test Button"} onClick={onClick} />
          <Button disabled mode={"outlined"} theme={"dark"} label={"Test Button"} onClick={onClick} />
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: buttonMD }
  }
);

const knobProps = () => ({
  label: text('label', 'Test Button'),
  mode: select("mode", { basic: "basic", raised: "raised", flat: "flat", outlined: "outlined" }, "basic"),
  theme: select("theme", { light: "light", dark: "dark" }, "light"),
  disabled: boolean("disabled", false)
});

storiesOf("Form Components|Button", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div style={{ background: (props.theme === "dark" && "black") || "transparent" }}>
        <Button {...props} onClick={onClick} />
      </div>
    );
  },
  {
    notes: { markdown: buttonMD }
  }
);
