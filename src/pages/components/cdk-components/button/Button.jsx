import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../common/DocTitle";
import Example from "../../common/Example";

import modes from "./examples/modes";
import disabled from "./examples/disabled";

function Button() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Button</DocTitle>
      <DocTitle size={2}>Elements</DocTitle>
      <Example title="Default Button" example={modes}></Example>
      <Example title="Disabled Button" example={disabled}></Example>
    </ComponentDoc>
  );
}

export default Button;
