import React from "react";
import Title from "../../.storybook/components/Title";
import DxcTypography from "./Typography";

export default {
  title: "Typography",
  component: DxcTypography,
};

export const Chromatic = () => (
  <>
    <Title title="Default Typography" theme="light" level={4} />
    <DxcTypography>Default typography.</DxcTypography>

    <Title title="Typography font sizes" theme="light" level={4} />
    <DxcTypography display="block" fontSize="3.75rem">
      3.75rem.
    </DxcTypography>
    <DxcTypography display="block" fontSize="3rem">
      3rem.
    </DxcTypography>
    <DxcTypography display="block" fontSize="2rem">
      2rem.
    </DxcTypography>
    <DxcTypography display="block" fontSize="1.5rem">
      1.5rem.
    </DxcTypography>
    <DxcTypography display="block" fontSize="1.25rem">
      1.25rem.
    </DxcTypography>
    <DxcTypography display="block" fontSize="1rem">
      1rem.
    </DxcTypography>
    <DxcTypography display="block" fontSize="0.875rem">
      0.875rem.
    </DxcTypography>
    <DxcTypography display="block" fontSize="0.75rem">
      0.75rem.
    </DxcTypography>

    <Title title="Typography letter spacing" theme="light" level={4} />
    <DxcTypography display="block" letterSpacing="-0.025em">
      -0.025em.
    </DxcTypography>
    <DxcTypography display="block" letterSpacing="-0.0125em">
      -0.0125em.
    </DxcTypography>
    <DxcTypography display="block" letterSpacing="0em">
      0em.
    </DxcTypography>
    <DxcTypography display="block" letterSpacing="0.025em">
      0.025em.
    </DxcTypography>
    <DxcTypography display="block" letterSpacing="0.05em">
      0.05em.
    </DxcTypography>
    <DxcTypography display="block" letterSpacing="0.1em">
      0.1em.
    </DxcTypography>

    <Title title="Typography line height" theme="light" level={4} />
    <DxcTypography display="block" lineHeight="1em">
      1em.
    </DxcTypography>
    <DxcTypography display="block" lineHeight="1.25em">
      1.25em.
    </DxcTypography>
    <DxcTypography display="block" lineHeight="1.365em">
      1.365em.
    </DxcTypography>
    <DxcTypography display="block" lineHeight="1.5em">
      1.5em.
    </DxcTypography>
    <DxcTypography display="block" lineHeight="1.715em">
      1.715em.
    </DxcTypography>
    <DxcTypography display="block" lineHeight="2em">
      2em.
    </DxcTypography>

    <Title title="Typography font weight" theme="light" level={4} />
    <DxcTypography display="block" fontWeight="300">
      300.
    </DxcTypography>
    <DxcTypography display="block" fontWeight="400">
      400.
    </DxcTypography>
    <DxcTypography display="block" fontWeight="600">
      600.
    </DxcTypography>
    <DxcTypography display="block" fontWeight="700">
      700.
    </DxcTypography>

    <Title title="Typography decoration" theme="light" level={4} />
    <DxcTypography display="block" textDecoration="underline">
      Underline.
    </DxcTypography>
    <DxcTypography display="block" textDecoration="line-through">
      Line-through.
    </DxcTypography>

    <Title title="Typography font family" theme="light" level={4} />
    <DxcTypography display="block" fontFamily="Open Sans, sans-serif">
      Open Sans, sans-serif.
    </DxcTypography>
    <DxcTypography display="block" fontFamily="Source Code Pro, monospace">
      Source Code Pro, monospace.
    </DxcTypography>

    <Title title="Typography font style" theme="light" level={4} />
    <DxcTypography display="block" fontStyle="italic">
      Italic.
    </DxcTypography>
    <DxcTypography display="block" fontStyle="normal">
      Normal.
    </DxcTypography>

    <Title title="Typography align" theme="light" level={4} />
    <DxcTypography display="block" textAlign="left">
      Left.
    </DxcTypography>
    <DxcTypography display="block" textAlign="center">
      Center.
    </DxcTypography>
    <DxcTypography display="block" textAlign="right">
      Right.
    </DxcTypography>
  </>
);
