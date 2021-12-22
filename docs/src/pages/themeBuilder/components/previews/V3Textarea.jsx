import React, { useState } from "react";
import styled from "styled-components";
import { V3DxcTextarea, DxcHeading } from "@dxc-technology/halstack-react";
import Mode from "../Mode";

const Textarea = () => {
  const [value, changeValue] = useState("Sample text");
  const onChange = (newValue) => {
    changeValue(newValue);
  };

  return (
    <TextareaContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <V3DxcTextarea
          label="Textarea label"
          value={value}
          onChange={onChange}
          margin={{ top: "xsmall", bottom: "xxsmall" }}
        />
      </Mode>
      <Mode text="Disabled">
        <V3DxcTextarea
          label="Textarea label"
          value="Sample text"
          assistiveText="assistive text"
          disabled={true}
          margin={{ top: "xsmall", bottom: "xxsmall" }}
        />
      </Mode>
      <Mode text="Invalid">
        <V3DxcTextarea
          label="Textarea label"
          assistiveText="assistive text"
          invalid={true}
          margin={{ top: "xsmall", bottom: "xxsmall" }}
        />
      </Mode>
      <Mode text="Required">
        <V3DxcTextarea
          label="Textarea label"
          assistiveText="assistive text"
          required={true}
          margin={{ top: "xsmall", bottom: "xxsmall" }}
        />
      </Mode>
      {/* <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <V3DxcTextarea
            label="Textarea label"
            value={value}
            onChange={onChange}
            margin={{ top: "xsmall", bottom: "xxsmall" }}
          />
        </Mode>
        <Mode mode="dark" text="Disabled">
          <V3DxcTextarea
            label="Textarea label"
            value="Sample text"
            assistiveText="assistive text"
            disabled={true}
            margin={{ top: "xsmall", bottom: "xxsmall" }}
          />
        </Mode>
        <Mode mode="dark" text="Invalid">
          <V3DxcTextarea
            label="Textarea label"
            assistiveText="assistive text"
            invalid={true}
            margin={{ top: "xsmall", bottom: "xxsmall" }}
          />
        </Mode>
        <Mode mode="dark" text="Required">
          <V3DxcTextarea
            label="Textarea label"
            assistiveText="assistive text"
            required={true}
            margin={{ top: "xsmall", bottom: "xxsmall" }}
          />
        </Mode>
      </BackgroundColorProvider> */}
    </TextareaContainer>
  );
};

const TextareaContainer = styled.div``;

export default Textarea;
