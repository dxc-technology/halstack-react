import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "../../test/accessibility/axe-helper";
import DxcToast from "./Toast";
import DxcToastsQueue from "./ToastsQueue";
import useToast from "./useToast";
import DxcButton from "../button/Button";

const actionIcon = {
  label: "Action",
  onClick: () => {
    console.log("Action clicked");
  },
  icon: "restart_alt",
};

const ToastPage = () => {
  const toast = useToast();
  return (
    <DxcButton
      label="Show toast"
      onClick={() => {
        toast.default({ message: "This is a simple placed toast." });
      }}
    />
  );
};

const TestExample = () => (
  <DxcToastsQueue>
    <ToastPage />
  </DxcToastsQueue>
);

describe("Toast component accessibility tests", () => {
  it("Toast queue should not have accessibility issues", async () => {
    const { container } = render(<TestExample />);
    const results = await axe(container);
    const button = container.querySelector("button");
    if (button) {
      userEvent.click(button);
    }
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcToast
        semantic="default"
        duration={2147483647}
        message="This is a toast."
        onClear={() => {}}
        icon="rocket"
        action={actionIcon}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have accessibility issues when loading", async () => {
    const { container } = render(
      <DxcToast
        semantic="info"
        duration={2147483647}
        message="This is a toast."
        onClear={() => {}}
        action={actionIcon}
        loading
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
