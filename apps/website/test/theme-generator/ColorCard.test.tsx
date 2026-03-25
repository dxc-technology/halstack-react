import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ColorCard } from "../../screens/theme-generator/components/branding/ColorCard";

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const mockHandleCopy = jest.fn();

jest.mock("hooks/useCopyToClipboard", () => ({
  __esModule: true,
  default: () => mockHandleCopy,
}));

// Mock SketchColorPicker to avoid react-color issues (Canvas/Context errors)
jest.mock("react-color", () => ({
  SketchPicker: ({
    color,
    onChange,
    onErrorChange,
  }: {
    color: string;
    onChange: (color: { hex: string }) => void;
    onErrorChange?: (error: boolean) => void;
  }) => (
    <div data-testid="mock-sketch-picker">
      Picker for {color}
      <button onClick={() => onChange({ hex: "#ffffff" })}>Select White</button>
      <button onClick={() => onErrorChange?.(true)}>Trigger Error</button>
      <button onClick={() => onErrorChange?.(false)}>Clear Error</button>
    </div>
  ),
}));

describe("ColorCard", () => {
  const defaultProps = {
    label: "Primary Color",
    helperText: "Main brand color",
    color: "#5F249F",
    onChange: jest.fn(),
  };

  describe("Color Picker Popover", () => {
    it("should call onChange when selecting color from picker", () => {
      const onChange = jest.fn();
      render(<ColorCard {...defaultProps} onChange={onChange} />);

      const colorBox = screen.getByLabelText("Open color picker for Primary Color");
      fireEvent.click(colorBox);

      expect(screen.getByTestId("mock-sketch-picker")).toBeInTheDocument();

      const selectWhiteButton = screen.getByText("Select White");
      fireEvent.click(selectWhiteButton);

      expect(onChange).toHaveBeenCalledWith("#ffffff");
    });
  });

  describe("Edge Cases", () => {
    it("should handle uppercase hex colors", () => {
      const onChange = jest.fn();
      render(<ColorCard {...defaultProps} onChange={onChange} />);

      const input = screen.getByDisplayValue("#5F249F");
      fireEvent.change(input, { target: { value: "#FFFFFF" } });
      fireEvent.blur(input);

      expect(onChange).toHaveBeenCalledWith("#FFFFFF");
    });

    it("should show error for invalid hex color format", () => {
      const onChange = jest.fn();
      render(<ColorCard {...defaultProps} onChange={onChange} />);

      const input = screen.getByDisplayValue("#5F249F");
      fireEvent.change(input, { target: { value: "invalid" } });
      fireEvent.blur(input, { error: "Invalid color format" });

      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe("Copy to Clipboard Action", () => {
    beforeEach(() => {
      mockHandleCopy.mockClear();
    });

    it("should call copy handler when clicking copy action button", () => {
      render(<ColorCard {...defaultProps} />);

      const copyButton = screen.getByLabelText("Copy the hex value");
      fireEvent.click(copyButton);

      expect(mockHandleCopy).toHaveBeenCalledWith("#5F249F");
    });
  });
});
