import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

  describe("Rendering", () => {
    it("should render with initial color and label", () => {
      render(<ColorCard {...defaultProps} />);

      expect(screen.getByText("Primary Color")).toBeInTheDocument();
      expect(screen.getByText("Main brand color")).toBeInTheDocument();
    });

    it("should render color box button", () => {
      render(<ColorCard {...defaultProps} />);

      const colorBox = screen.getByLabelText("Open color picker for Primary Color");
      expect(colorBox).toBeInTheDocument();
      expect(colorBox).toHaveAttribute("tabIndex", "0");
    });

    it("should render with initial color value in input", () => {
      render(<ColorCard {...defaultProps} />);

      const input = screen.getByDisplayValue("#5F249F");
      expect(input).toBeInTheDocument();
    });
  });

  describe("Color Picker Popover", () => {
    it("should open sketch picker when clicking color box", async () => {
      render(<ColorCard {...defaultProps} />);

      const colorBox = screen.getByLabelText("Open color picker for Primary Color");
      fireEvent.click(colorBox);

      await waitFor(() => {
        expect(screen.getByTestId("mock-sketch-picker")).toBeInTheDocument();
      });
    });

    it("should call onChange when selecting color from picker", async () => {
      const onChange = jest.fn();
      render(<ColorCard {...defaultProps} onChange={onChange} />);

      const colorBox = screen.getByLabelText("Open color picker for Primary Color");
      fireEvent.click(colorBox);

      await waitFor(() => {
        expect(screen.getByTestId("mock-sketch-picker")).toBeInTheDocument();
      });

      const selectWhiteButton = screen.getByText("Select White");
      fireEvent.click(selectWhiteButton);

      expect(onChange).toHaveBeenCalledWith("#ffffff");
    });

    it("should update input value when changing color from picker", async () => {
      render(<ColorCard {...defaultProps} />);

      const colorBox = screen.getByLabelText("Open color picker for Primary Color");
      fireEvent.click(colorBox);

      await waitFor(() => {
        expect(screen.getByTestId("mock-sketch-picker")).toBeInTheDocument();
      });

      const selectWhiteButton = screen.getByText("Select White");
      fireEvent.click(selectWhiteButton);

      await waitFor(() => {
        expect(screen.getByDisplayValue("#ffffff")).toBeInTheDocument();
      });
    });
  });

  describe("Text Input", () => {
    it("should update input value when typing", () => {
      render(<ColorCard {...defaultProps} />);

      const input = screen.getByDisplayValue("#5F249F");
      fireEvent.change(input, { target: { value: "#123456" } });

      expect(screen.getByDisplayValue("#123456")).toBeInTheDocument();
    });

    it("should call onChange with valid hex color on blur", async () => {
      const onChange = jest.fn();
      render(<ColorCard {...defaultProps} onChange={onChange} />);

      const input = screen.getByDisplayValue("#5F249F");
      fireEvent.change(input, { target: { value: "#123456" } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith("#123456");
      });
    });

    it("should accept 3-character hex colors", async () => {
      const onChange = jest.fn();
      render(<ColorCard {...defaultProps} onChange={onChange} />);

      const input = screen.getByDisplayValue("#5F249F");
      fireEvent.change(input, { target: { value: "#fff" } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith("#fff");
      });
    });

    it("should accept 6-character hex colors", async () => {
      const onChange = jest.fn();
      render(<ColorCard {...defaultProps} onChange={onChange} />);

      const input = screen.getByDisplayValue("#5F249F");
      fireEvent.change(input, { target: { value: "#ffffff" } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith("#ffffff");
      });
    });

    it("should show error for invalid hex format", async () => {
      const onChange = jest.fn();
      render(<ColorCard {...defaultProps} onChange={onChange} />);

      const input = screen.getByDisplayValue("#5F249F");
      fireEvent.change(input, { target: { value: "invalid" } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.getByText("Please match the format requested.")).toBeInTheDocument();
      });
      expect(onChange).not.toHaveBeenCalled();
    });

    it("should show error for hex without # prefix", async () => {
      const onChange = jest.fn();
      render(<ColorCard {...defaultProps} onChange={onChange} />);

      const input = screen.getByDisplayValue("#5F249F");
      fireEvent.change(input, { target: { value: "123456" } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.getByText("Please match the format requested.")).toBeInTheDocument();
      });
      expect(onChange).not.toHaveBeenCalled();
    });

    it("should show error for hex with wrong length", async () => {
      const onChange = jest.fn();
      render(<ColorCard {...defaultProps} onChange={onChange} />);

      const input = screen.getByDisplayValue("#5F249F");
      fireEvent.change(input, { target: { value: "#12345" } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.getByText("Please match the format requested.")).toBeInTheDocument();
      });
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe("Copy to Clipboard", () => {
    it("should copy current input value when clicking copy button", () => {
      render(<ColorCard {...defaultProps} />);

      const copyButton = screen.getByLabelText("Copy the hex value");
      fireEvent.click(copyButton);

      expect(mockHandleCopy).toHaveBeenCalledWith("#5F249F");
    });

    it("should copy updated value after input change", () => {
      render(<ColorCard {...defaultProps} />);

      const input = screen.getByDisplayValue("#5F249F");
      fireEvent.change(input, { target: { value: "#ABCDEF" } });

      const copyButton = screen.getByLabelText("Copy the hex value");
      fireEvent.click(copyButton);

      expect(mockHandleCopy).toHaveBeenCalledWith("#ABCDEF");
    });

    it("should copy value from color picker change", async () => {
      render(<ColorCard {...defaultProps} />);

      const colorBox = screen.getByLabelText("Open color picker for Primary Color");
      fireEvent.click(colorBox);

      await waitFor(() => {
        expect(screen.getByTestId("mock-sketch-picker")).toBeInTheDocument();
      });

      const selectWhiteButton = screen.getByText("Select White");
      fireEvent.click(selectWhiteButton);

      const copyButton = screen.getByLabelText("Copy the hex value");
      fireEvent.click(copyButton);

      expect(mockHandleCopy).toHaveBeenCalledWith("#ffffff");
    });
  });

  describe("Accessibility", () => {
    it("should have proper aria attributes on color box", () => {
      render(<ColorCard {...defaultProps} />);

      const colorBox = screen.getByLabelText("Open color picker for Primary Color");
      expect(colorBox).toHaveAttribute("aria-label", "Open color picker for Primary Color");
      expect(colorBox).toHaveAttribute("aria-haspopup", "dialog");
    });

    it("should have accessible label for input", () => {
      render(<ColorCard {...defaultProps} />);

      expect(screen.getByText("Primary Color")).toBeInTheDocument();
    });

    it("should have helper text", () => {
      render(<ColorCard {...defaultProps} />);

      expect(screen.getByText("Main brand color")).toBeInTheDocument();
    });
  });

  describe("Edge Cases", () => {
    it("should handle uppercase hex colors", async () => {
      const onChange = jest.fn();
      render(<ColorCard {...defaultProps} onChange={onChange} />);

      const input = screen.getByDisplayValue("#5F249F");
      fireEvent.change(input, { target: { value: "#FFFFFF" } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith("#FFFFFF");
      });
    });

    it("should handle lowercase hex colors", async () => {
      const onChange = jest.fn();
      render(<ColorCard {...defaultProps} onChange={onChange} />);

      const input = screen.getByDisplayValue("#5F249F");
      fireEvent.change(input, { target: { value: "#ffffff" } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith("#ffffff");
      });
    });

    it("should handle mixed case hex colors", async () => {
      const onChange = jest.fn();
      render(<ColorCard {...defaultProps} onChange={onChange} />);

      const input = screen.getByDisplayValue("#5F249F");
      fireEvent.change(input, { target: { value: "#FfFfFf" } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith("#FfFfFf");
      });
    });
  });
});
