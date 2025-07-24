import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcFlex from "../flex/Flex";
import DxcStatusLightV2 from "./StatusLightV2";

describe("StatusLightV2 component accessibility tests", () => {
  it("Should not have basic accessibility issues for default mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="default" size="large"></DxcStatusLightV2>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="default" size="medium"></DxcStatusLightV2>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="default" size="small"></DxcStatusLightV2>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues for error mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="error" size="large"></DxcStatusLightV2>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="error" size="medium"></DxcStatusLightV2>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="error" size="small"></DxcStatusLightV2>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues for info mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="info" size="large"></DxcStatusLightV2>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="info" size="medium"></DxcStatusLightV2>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="info" size="small"></DxcStatusLightV2>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues for success mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="success" size="large"></DxcStatusLightV2>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="success" size="medium"></DxcStatusLightV2>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="success" size="small"></DxcStatusLightV2>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues for warning mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="warning" size="large"></DxcStatusLightV2>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="warning" size="medium"></DxcStatusLightV2>
        <DxcStatusLightV2 label="Status Light V2 Test" mode="warning" size="small"></DxcStatusLightV2>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues with long labels", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcStatusLightV2 label="Very long label to test accessibility with ellipsis behavior" mode="info" size="medium"></DxcStatusLightV2>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
