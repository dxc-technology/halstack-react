import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcFlex from "../flex/Flex";
import DxcStatusLight from "./StatusLight";

describe("StatusLight component accessibility tests", () => {
  it("Should not have basic accessibility issues for default mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLight label="Status Light Test" mode="default" size="large" />
        <DxcStatusLight label="Status Light Test" mode="default" size="medium" />
        <DxcStatusLight label="Status Light Test" mode="default" size="small" />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for error mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLight label="Status Light Test" mode="error" size="large" />
        <DxcStatusLight label="Status Light Test" mode="error" size="medium" />
        <DxcStatusLight label="Status Light Test" mode="error" size="small" />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for info mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLight label="Status Light Test" mode="info" size="large" />
        <DxcStatusLight label="Status Light Test" mode="info" size="medium" />
        <DxcStatusLight label="Status Light Test" mode="info" size="small" />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for success mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLight label="Status Light Test" mode="success" size="large" />
        <DxcStatusLight label="Status Light Test" mode="success" size="medium" />
        <DxcStatusLight label="Status Light Test" mode="success" size="small" />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for warning mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLight label="Status Light Test" mode="warning" size="large" />
        <DxcStatusLight label="Status Light Test" mode="warning" size="medium" />
        <DxcStatusLight label="Status Light Test" mode="warning" size="small" />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
