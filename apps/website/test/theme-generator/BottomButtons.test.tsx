import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import BottomButtons from "../../screens/theme-generator/components/BottomButtons";

describe("BottomButtons", () => {
  it("shows Back disabled and Next enabled on first step", () => {
    const onChangeStep = jest.fn();
    const onExport = jest.fn();

    render(<BottomButtons currentStep={0} onChangeStep={onChangeStep} onExport={onExport} />);

    const backButton = screen.getByRole("button", { name: "Back" });
    const nextButton = screen.getByRole("button", { name: "Next" });

    expect(backButton).toBeDisabled();
    expect(nextButton).toBeEnabled();

    fireEvent.click(nextButton);
    expect(onChangeStep).toHaveBeenCalledWith(1);
  });

  it("shows Export theme on last step and triggers export", () => {
    const onChangeStep = jest.fn();
    const onExport = jest.fn();

    render(<BottomButtons currentStep={2} onChangeStep={onChangeStep} onExport={onExport} />);

    const backButton = screen.getByRole("button", { name: "Back" });
    const exportButton = screen.getByRole("button", { name: "Export theme" });

    fireEvent.click(backButton);
    expect(onChangeStep).toHaveBeenCalledWith(1);

    fireEvent.click(exportButton);
    expect(onExport).toHaveBeenCalledTimes(1);
  });
});
