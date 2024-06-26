import React from "react";
import { DxcLink, DxcParagraph } from "@repo/ui";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const icon = (
  <svg viewBox="0 0 24 24" enableBackground="new 0 0 24 24" fill="currentColor">
    <g>
      <rect fill="none" width="24" height="24" />
    </g>
    <g>
      <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
    </g>
  </svg>
);

const Link = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcParagraph>
        This is a text with a{" "}
        <DxcLink href="#" newWindow>
          Link
        </DxcLink>{" "}
        to another page.
      </DxcParagraph>
    </Mode>
    <Mode text="Undecorated">
      <DxcParagraph>
        This is a text with a{" "}
        <DxcLink href="#" newWindow inheritColor>
          Link
        </DxcLink>{" "}
        to another page.
      </DxcParagraph>
    </Mode>
    <Mode text="Disabled">
      <DxcParagraph>
        This is a text with a{" "}
        <DxcLink href="#" newWindow disabled>
          disabled Link
        </DxcLink>
        .
      </DxcParagraph>
    </Mode>
    <Mode text="With action">
      <DxcParagraph>
        This is a{" "}
        <DxcLink
          onClick={() => {
            console.log("click");
          }}
        >
          link with action
        </DxcLink>
        .
      </DxcParagraph>
    </Mode>
    <Mode text="Icon">
      <DxcParagraph>
        This is a text with an{" "}
        <DxcLink iconPosition="after" icon={icon} href="#" newWindow>
          Icon after
        </DxcLink>{" "}
        the link.
      </DxcParagraph>
    </Mode>
  </PreviewContainer>
);

export default Link;
