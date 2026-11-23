import { render } from "@testing-library/react";
import DxcStatusLight from "./StatusLight";

describe("StatusLight component tests", () => {
  test("StatusLight with label has role status and shows the label", () => {
    const { getByRole } = render(<DxcStatusLight label="Online" />);
    const status = getByRole("status");
    expect(status.textContent).toBe("Online");
  });

  test("StatusLight without label has no status role, since there is nothing to announce", () => {
    const { queryByRole, container } = render(<DxcStatusLight mode="error" />);
    expect(queryByRole("status")).toBeNull();
    expect(container.querySelector("[aria-hidden='true']")).not.toBeNull();
  });
});
