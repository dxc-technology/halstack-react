import { render } from "@testing-library/react";
import DxcStatusLightV2 from "./StatusLightV2";

describe("StatusLightV2 component", () => {
  test("StatusLightV2 renders with correct mode and size", () => {
    const { getByRole, getByText } = render(<DxcStatusLightV2 label="Test Label" mode="info" size="large" />);
    expect(getByRole("status")).toBeInTheDocument();
    expect(getByText("Test Label")).toBeInTheDocument();
  });

  test("StatusLightV2 renders with default props", () => {
    const { getByRole, getByText } = render(<DxcStatusLightV2 label="Default Test" />);
    expect(getByRole("status")).toBeInTheDocument();
    expect(getByText("Default Test")).toBeInTheDocument();
  });

  test("StatusLightV2 renders all modes correctly", () => {
    const modes = ["default", "info", "success", "warning", "error"] as const;
    
    modes.forEach((mode) => {
      const { getByRole } = render(<DxcStatusLightV2 label={`${mode} test`} mode={mode} />);
      expect(getByRole("status")).toBeInTheDocument();
    });
  });

  test("StatusLightV2 renders all sizes correctly", () => {
    const sizes = ["small", "medium", "large"] as const;
    
    sizes.forEach((size) => {
      const { getByRole } = render(<DxcStatusLightV2 label={`${size} test`} size={size} />);
      expect(getByRole("status")).toBeInTheDocument();
    });
  });

  test("StatusLightV2 label truncates with ellipsis for long text", () => {
    const longLabel = "This is a very long label that should be truncated with ellipsis";
    const { getByText } = render(<DxcStatusLightV2 label={longLabel} />);
    const labelElement = getByText(longLabel);
    
    expect(labelElement).toHaveStyle({
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    });
  });
});
