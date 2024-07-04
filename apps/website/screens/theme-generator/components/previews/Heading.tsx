import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const Heading = () => (
  <PreviewContainer>
    <Mode text="Level 1">
      <DxcHeading level={1} text="Title for main section" />
    </Mode>
    <Mode text="Level 2">
      <DxcHeading level={2} text="Heading for sections" />
    </Mode>
    <Mode text="Level 3">
      <DxcHeading level={3} text="Subtitle introducing a section" />
    </Mode>
    <Mode text="Level 4">
      <DxcHeading level={4} text="Heading for a paragraph" />
    </Mode>
    <Mode text="Level 5">
      <DxcHeading level={5} text="Heading to mix with the rest of the headings" />
    </Mode>
  </PreviewContainer>
);

export default Heading;
