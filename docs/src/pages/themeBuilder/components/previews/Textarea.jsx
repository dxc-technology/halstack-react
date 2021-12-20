import React, { useState } from "react";
import styled from "styled-components";
import { DxcTextarea, DxcHeading } from "@dxc-technology/halstack-react";
import Mode from "../Mode";

const Textarea = () => {
  const [value, setValue] = useState("");
  const onChange = ({ value }) => {
    setValue(value);
  };
  const onBlur = ({ value }) => {
    setValue(value);
  };

  return (
    <TextareaContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <DxcTextarea
          label="Regular textarea"
          helperText="Example of helper text"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          margin={{ top: "xsmall" }}
          optional
          verticalGrow="manual"
        />
      </Mode>
      <Mode text="Disabled">
        <DxcTextarea
          label="Disabled textarea"
          helperText="Example of helper text"
          placeholder="Placeholder"
          value={value}
          onChange={onChange}
          margin={{ top: "xsmall" }}
          disabled
        />
      </Mode>
      <Mode text="Invalid">
        <DxcTextarea
          label="Invalid textarea"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin={{ top: "xsmall", bottom: "xxsmall" }}
          error="Error message."
        />
      </Mode>
      {/* <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xsmall" }}
      />
      <div style={{ marginBottom: "25px" }}>
        <BackgroundColorProvider color="#000000">
          <Mode mode="dark" text="Default">
            <DxcTextarea
              label="Regular textarea"
              helperText="Example of helper text"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              margin={{ top: "xsmall" }}
              optional
              verticalGrow="manual"
            />
          </Mode>
          <Mode mode="dark" text="Disabled">
            <DxcTextarea
              label="Disabled textarea"
              helperText="Example of helper text"
              placeholder="Placeholder"
              value={value}
              onChange={onChange}
              margin={{ top: "xsmall" }}
              disabled
            />
          </Mode>
          <Mode mode="dark" text="Invalid">
            <DxcTextarea
              label="Invalid textarea"
              helperText="Example of helper text"
              placeholder="Placeholder"
              margin={{ top: "xsmall", bottom: "xxsmall" }}
              error="Error message."
            />
          </Mode>
        </BackgroundColorProvider>
      </div> */}
    </TextareaContainer>
  );
};

const TextareaContainer = styled.div``;

export default Textarea;
