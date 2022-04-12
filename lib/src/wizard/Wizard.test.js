import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcWizard from "./Wizard";

describe("Wizard components tests", () => {
  test("Wizard renders with correct steps", () => {
    const { getByText, getAllByRole } = render(
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
    const steps = getAllByRole("button");
    expect(getByText("first-step")).toBeTruthy();
    expect(getByText("second-step")).toBeTruthy();
    expect(steps[0].getAttribute("aria-current")).toBe("step");
    expect(steps[1].getAttribute("aria-current")).toBe("false");
  });
  test("Wizard renders with initially selected step", () => {
    const { getAllByRole } = render(
      <DxcWizard
        defaultCurrentStep={1}
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
    const steps = getAllByRole("button");
    expect(steps[1].getAttribute("aria-current")).toBe("step");
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
    const { getAllByRole } = render(
      <DxcWizard
        currentStep={0}
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
    const steps = getAllByRole("button");
    fireEvent.click(steps[1]);
    fireEvent.click(steps[0]);
    expect(onClick).toHaveBeenCalledTimes(2);
    expect(onClick).toHaveBeenNthCalledWith(1, 1);
    expect(onClick).toHaveBeenNthCalledWith(2, 0);
  });
});
