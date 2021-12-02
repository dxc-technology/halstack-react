import React, { useState } from "react";
import styled from "styled-components";
import {
  DxcNewTextarea,
  DxcHeading,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const NewTextarea = () => {
  const [value, setValue] = useState("");
  const onChange = ({ value }) => {
    setValue(value);
  };
  const onBlur = ({ value }) => {
    setValue(value);
  };

  return (
    <NewTextareaContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <DxcNewTextarea
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
        <DxcNewTextarea
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
        <DxcNewTextarea
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
            <DxcNewTextarea
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
            <DxcNewTextarea
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
            <DxcNewTextarea
              label="Invalid textarea"
              helperText="Example of helper text"
              placeholder="Placeholder"
              margin={{ top: "xsmall", bottom: "xxsmall" }}
              error="Error message."
            />
          </Mode>
        </BackgroundColorProvider>
      </div> */}
    </NewTextareaContainer>
  );
};

const NewTextareaContainer = styled.div``;

export default NewTextarea;
