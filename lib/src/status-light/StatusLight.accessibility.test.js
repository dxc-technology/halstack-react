import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcStatusLight from "./StatusLight.tsx";
import DxcFlex from "../flex/Flex.tsx";

describe("StatusLight component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLight label="Status Light Test" mode="default" size="large"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="default" size="medium"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="default" size="small"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="error" size="large"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="error" size="medium"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="error" size="small"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="info" size="large"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="info" size="medium"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="info" size="small"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="success" size="large"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="success" size="medium"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="success" size="small"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="warning" size="large"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="warning" size="medium"></DxcStatusLight>
        <DxcStatusLight label="Status Light Test" mode="warning" size="small"></DxcStatusLight>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
