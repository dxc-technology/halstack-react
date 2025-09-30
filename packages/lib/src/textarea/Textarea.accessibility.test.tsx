import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcTextarea from "./Textarea";

describe("Textarea component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcTextarea
        label="Example label"
        helperText="Helper Text"
        defaultValue="Value"
        margin="medium"
        placeholder="Placeholder"
        verticalGrow="manual"
        name="Name"
        autocomplete="on"
        minLength={0}
        maxLength={100}
        optional
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for pattern mode", async () => {
    const { container } = render(
      <DxcTextarea
        label="Example label"
        helperText="Helper Text"
        defaultValue="Value"
        margin="medium"
        placeholder="Placeholder"
        verticalGrow="manual"
        name="Name"
        autocomplete="on"
        minLength={0}
        maxLength={100}
        pattern='^.*(?=.*[a-zA-Z])(?=.*)(?=.*[!&$%&? "]).*$'
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for error mode", async () => {
    const { container } = render(
      <DxcTextarea
        label="Example label"
        helperText="Helper Text"
        defaultValue="Value"
        margin="medium"
        placeholder="Placeholder"
        verticalGrow="manual"
        name="Name"
        error="Error message."
        minLength={0}
        maxLength={100}
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    const { container } = render(
      <DxcTextarea
        label="Example label"
        helperText="Helper Text"
        defaultValue="Value"
        margin="medium"
        placeholder="Placeholder"
        verticalGrow="manual"
        name="Name"
        autocomplete="on"
        minLength={0}
        maxLength={100}
        disabled
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for read-only mode", async () => {
    const { container } = render(
      <DxcTextarea
        label="Example label"
        helperText="Helper Text"
        defaultValue="Value"
        margin="medium"
        placeholder="Placeholder"
        verticalGrow="manual"
        name="Name"
        autocomplete="on"
        minLength={0}
        maxLength={100}
        readOnly
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
