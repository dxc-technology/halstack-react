import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcButton from "./Button";

const iconSVG = (
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

describe("Button component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="primary"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for semantic error", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="primary"
        semantic="error"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for semantic warning", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="primary"
        semantic="warning"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for semantic success", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="primary"
        semantic="success"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for semantic info", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="primary"
        semantic="info"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="primary"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
        disabled
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for disabled mode for semantic error", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="primary"
        semantic="error"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
        disabled
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for disabled mode for semantic warning", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="primary"
        semantic="warning"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
        disabled
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for disabled mode for semantic success", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="primary"
        semantic="success"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
        disabled
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for disabled mode for semantic info", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="primary"
        semantic="info"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
        disabled
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for secondary mode", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="secondary"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for secondary mode for semantic error", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="secondary"
        semantic="error"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for secondary mode for semantic warning", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="secondary"
        semantic="warning"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for secondary mode for semantic success", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="secondary"
        semantic="success"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for secondary mode for semantic info", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="secondary"
        semantic="info"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for tertiary mode", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="tertiary"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for tertiary mode for semantic error", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="tertiary"
        semantic="error"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for tertiary mode for semantic warning", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="tertiary"
        semantic="warning"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for tertiary mode for semantic success", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="tertiary"
        semantic="success"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for tertiary mode for semantic info", async () => {
    const { container } = render(
      <DxcButton
        label="Primary"
        icon={iconSVG}
        iconPosition="after"
        margin="small"
        mode="tertiary"
        semantic="info"
        title="Button Title"
        size={{ width: "fitContent" }}
        type="button"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
