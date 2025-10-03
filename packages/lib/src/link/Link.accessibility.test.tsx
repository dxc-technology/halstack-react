import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcFlex from "../flex/Flex";
import DxcLink from "./Link";

const icon = (
  <svg viewBox="0 0 24 24" enableBackground="new 0 0 24 24" fill="currentColor">
    <g>
      <rect fill="none" width="24" height="24" />
    </g>
    <g>
      <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
    </g>
  </svg>
);

describe("Link component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcLink href="https://www.google.com" icon={icon} iconPosition="before" margin="medium">
          Link
        </DxcLink>
        <DxcLink href="https://www.google.com" icon={icon} iconPosition="after" margin="medium">
          Link
        </DxcLink>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcLink href="https://www.google.com" icon={icon} iconPosition="before" margin="medium" disabled>
          Link
        </DxcLink>
        <DxcLink href="https://www.google.com" icon={icon} iconPosition="after" margin="medium" disabled>
          Link
        </DxcLink>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for new-window mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcLink href="https://www.google.com" icon={icon} iconPosition="before" margin="medium" newWindow>
          Link
        </DxcLink>
        <DxcLink href="https://www.google.com" icon={icon} iconPosition="after" margin="medium" newWindow>
          Link
        </DxcLink>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
