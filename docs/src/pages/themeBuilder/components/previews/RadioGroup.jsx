import React from "react";
import styled from "styled-components";
import { DxcRadioGroup } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const RadioGroup = () => {
  const options = [
    { label: "Option A", value: "A" },
    { label: "Option B", value: "B" },
    { label: "Option C", value: "C" },
  ];
  const single_disabled_options = [
    { label: "Option A", value: "A" },
    { label: "Option B", value: "B", disabled: true },
    { label: "Option C", value: "C" },
  ];

  return (
    <>
      <Mode text="Default">
        <RadioGroupExamples>
          <DxcRadioGroup label="Default" defaultValue="A" options={options} />
          <DxcRadioGroup
            label="Error"
            defaultValue="A"
            options={options}
            error="Error message"
          />
          <DxcRadioGroup
            label="Readonly"
            defaultValue="A"
            options={options}
            readonly
          />
          <DxcRadioGroup
            label="Disabled group"
            defaultValue="A"
            options={options}
            disabled
          />
          <DxcRadioGroup
            label="Disabled option"
            defaultValue="A"
            options={single_disabled_options}
          />
        </RadioGroupExamples>
      </Mode>
      <Mode text="Optional">
        <DxcRadioGroup
          label="Optional"
          helperText="Adds a predefined option whose value is the empty string"
          options={options}
          optional
        />
      </Mode>
      <Mode text="Stacking">
        <RadioGroupExamples>
          <DxcRadioGroup
            label="Column (default)"
            helperText="By default, stacking is set to column"
            options={options}
            stacking="column"
          />
          <DxcRadioGroup
            label="Row"
            helperText="But with the prop 'stacking' you can make the options display in a row"
            options={options}
            stacking="row"
          />
        </RadioGroupExamples>
      </Mode>
    </>
  );
};

const RadioGroupExamples = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 100px;
`;

export default RadioGroup;
