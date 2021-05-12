import React from "react";
import styled from "styled-components";
import { DxcHeading } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Heading = () => {
  return (
    <HeadingContainer>
      <Mode text="Level 1">
        <DxcHeading
          level={1}
          weight="light"
          text="Main title"
          margin={{ right: "small" }}
        />
        <DxcHeading
          level={1}
          weight="normal"
          text="Main title"
          margin={{ right: "small" }}
        />
        <DxcHeading level={1} weight="bold" text="Main title" />
      </Mode>
      <Mode text="Level 2">
        <DxcHeading
          level={2}
          weight="light"
          text="Heading for sections"
          margin={{ right: "small" }}
        />
        <DxcHeading
          level={2}
          weight="normal"
          text="Heading for sections"
          margin={{ right: "small" }}
        />
        <DxcHeading level={2} weight="bold" text="Heading for sections" />
      </Mode>
      <Mode text="Level 3">
        <DxcHeading
          level={3}
          weight="light"
          text="Subtitle"
          margin={{ right: "small" }}
        />
        <DxcHeading
          level={3}
          weight="normal"
          text="Subtitle"
          margin={{ right: "small" }}
        />
        <DxcHeading level={3} weight="bold" text="Subtitle" />
      </Mode>
      <Mode text="Level 4">
        <DxcHeading
          level={4}
          weight="light"
          text="Heading for a paragraph"
          margin={{ right: "small" }}
        />
        <DxcHeading
          level={4}
          weight="normal"
          text="Heading for a paragraph"
          margin={{ right: "small" }}
        />
        <DxcHeading level={4} weight="bold" text="Heading for a paragraph" />
      </Mode>
      <Mode text="Level 5">
        <DxcHeading
          level={5}
          weight="light"
          text="Heading to mix"
          margin={{ right: "small" }}
        />
        <DxcHeading
          level={5}
          weight="normal"
          text="Heading to mix"
          margin={{ right: "small" }}
        />
        <DxcHeading level={5} weight="bold" text="Heading to mix" />
      </Mode>
    </HeadingContainer>
  );
};

const HeadingContainer = styled.div``;

export default Heading;
