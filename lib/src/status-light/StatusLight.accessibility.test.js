import React from "react";
import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper.js";
import DxcStatusLight from "./StatusLight.tsx";
import DxcFlex from "../flex/Flex.tsx";
import { disabledRules as rules } from "../../test/accessibility/rules/specific/status-light/disabledRules.js";

const disabledRules = {
  rules: rules.reduce((rulesObj, rule) => {
    rulesObj[rule] = { enabled: false };
    return rulesObj;
  }, {}),
};

describe("StatusLight component accessibility tests", () => {
  it("Should not have basic accessibility issues for default mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLight label="Status Light Test" mode="default" size="large"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="default" size="medium"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="default" size="small"></DxcStatusLight>
      </DxcFlex>
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for error mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLight label="Status Light Test" mode="error" size="large"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="error" size="medium"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="error" size="small"></DxcStatusLight>
      </DxcFlex>
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for info mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLight label="Status Light Test" mode="info" size="large"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="info" size="medium"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="info" size="small"></DxcStatusLight>
      </DxcFlex>
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for success mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLight label="Status Light Test" mode="success" size="large"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="success" size="medium"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="success" size="small"></DxcStatusLight>
      </DxcFlex>
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for warning mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLight label="Status Light Test" mode="warning" size="large"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="warning" size="medium"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="warning" size="small"></DxcStatusLight>
      </DxcFlex>
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
});
