import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcFlex from "../flex/Flex";
import DxcTypography from "./Typography";

describe("Typography component accessibility tests", () => {
  it("Should not have basic accessibility issues for different font sizes", async () => {
    const { container } = render(
      <DxcFlex>
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
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for different letter spacings", async () => {
    const { container } = render(
      <DxcFlex>
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
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for different line heights", async () => {
    const { container } = render(
      <DxcFlex>
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
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for different font weights", async () => {
    const { container } = render(
      <DxcFlex>
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
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for different text decorations", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcTypography display="block" textDecoration="underline">
          Underline.
        </DxcTypography>
        <DxcTypography display="block" textDecoration="line-through">
          Line-through.
        </DxcTypography>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for different font families", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcTypography display="block" fontFamily="Open Sans, sans-serif">
          Open Sans, sans-serif.
        </DxcTypography>
        <DxcTypography display="block" fontFamily="Source Code Pro, monospace">
          Source Code Pro, monospace.
        </DxcTypography>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for different font styles", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcTypography display="block" fontStyle="italic">
          Italic.
        </DxcTypography>
        <DxcTypography display="block" fontStyle="normal">
          Normal.
        </DxcTypography>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for different text alignments", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcTypography display="block" textAlign="left">
          Left.
        </DxcTypography>
        <DxcTypography display="block" textAlign="center">
          Center.
        </DxcTypography>
        <DxcTypography display="block" textAlign="right">
          Right.
        </DxcTypography>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for different white-spaces", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcTypography fontSize="2rem">{"                  "} Normal: A bunch of words you see.</DxcTypography>
        <DxcTypography whiteSpace="nowrap" fontSize="2rem">
          {"                  "}No-wrap: A bunch of words you see.
        </DxcTypography>
        <DxcTypography whiteSpace="pre" fontSize="2rem">
          {"                  "} pre: A bunch of words you see.
        </DxcTypography>
        <DxcTypography whiteSpace="pre-line" fontSize="2rem">
          {"                  "}pre-line: A bunch of words you see.
        </DxcTypography>
        <DxcTypography whiteSpace="pre-wrap" fontSize="2rem">
          {"                  "} pre-wrap: A bunch of words you see.
        </DxcTypography>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for different displays", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcTypography display="block" textAlign="left">
          Display Block.
          <DxcTypography>A different text.</DxcTypography>
        </DxcTypography>
        <DxcTypography display="inline" textAlign="left">
          Display Inline.
          <DxcTypography>A different text.</DxcTypography>
        </DxcTypography>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for different text overflows", async () => {
    const { container } = render(
      <DxcFlex>
        <div style={{ width: "75px" }}>
          <DxcTypography display="block" textOverflow="clip">
            Overflow clip.
          </DxcTypography>
        </div>
        <div style={{ width: "75px" }}>
          <DxcTypography display="block" textOverflow="ellipsis">
            Overflow ellipsis.
          </DxcTypography>
        </div>
        <div style={{ width: "75px" }}>
          <DxcTypography display="block" textOverflow="unset">
            Overflow unset.
          </DxcTypography>
        </div>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
