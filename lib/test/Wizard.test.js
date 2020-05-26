import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcWizard from "../src/wizard/Wizard";

describe("Wizard components tests", () => {
  test("Wizard renders with correct steps", () => {
    const { getByText } = render(
      <DxcWizard
        steps={[
          {
            label: "first-step",
          },
          {
            label: "second-step",
          },
        ]}
      ></DxcWizard>
    );

    expect(getByText("first-step")).toBeTruthy();
    expect(getByText("second-step")).toBeTruthy();
  });

  test("Click on step text", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <DxcWizard
        onStepClick={onClick}
        steps={[
          {
            label: "first-step",
          },
        ]}
      ></DxcWizard>
    );

    const step = getByText("first-step");
    fireEvent.click(step);
    expect(onClick).toHaveBeenCalled();
  });

  test("Click on step description", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <DxcWizard
        onStepClick={onClick}
        steps={[
          {
            label: "first-step",
            description: "step-description",
          },
        ]}
      ></DxcWizard>
    );

    const step = getByText("step-description");
    fireEvent.click(step);
    expect(onClick).toHaveBeenCalled();
  });

  test("Click on step number", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <DxcWizard
        onStepClick={onClick}
        steps={[
          {
            label: "first-step",
          },
        ]}
      ></DxcWizard>
    );

    const step = getByText("1");
    fireEvent.click(step);
    expect(onClick).toHaveBeenCalled();
  });

  test("Click on disable step", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <DxcWizard
        onStepClick={onClick}
        steps={[
          {
            label: "first-step",
          },
          {
            label: "second-step",
            disabled: true,
          },
        ]}
      ></DxcWizard>
    );

    const step = getByText("second-step");
    fireEvent.click(step);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("Controlled wizard function is called", () => {
    const onClick = jest.fn((i) => i);
    const { getByText } = render(
      <DxcWizard
        currentStep={1}
        onStepClick={onClick}
        steps={[
          {
            label: "first-step",
          },
          {
            label: "second-step",
          },
        ]}
      ></DxcWizard>
    );

    const step1 = getByText("first-step");
    const step2 = getByText("second-step");
    fireEvent.click(step1);
    fireEvent.click(step2);
    fireEvent.click(step1);
    
    expect(onClick).toHaveBeenCalledTimes(3);
    //Test the received value in the onClick function
    expect(onClick).toHaveBeenNthCalledWith(1, 0);
    expect(onClick).toHaveBeenNthCalledWith(2, 1);
    expect(onClick).toHaveBeenNthCalledWith(3, 0);
  });
});
