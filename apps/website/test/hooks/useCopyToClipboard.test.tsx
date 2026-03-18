import { renderHook } from "@testing-library/react";
import { HalstackProvider } from "@dxc-technology/halstack-react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import React from "react";

describe("useCopyToClipboard", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => <HalstackProvider>{children}</HalstackProvider>;

  let mockWriteText: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();

    mockWriteText = jest.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return a function", () => {
    const { result } = renderHook(() => useCopyToClipboard(), { wrapper });
    expect(typeof result.current).toBe("function");
  });

  it("should copy text to clipboard successfully", async () => {
    const { result } = renderHook(() => useCopyToClipboard(), { wrapper });
    const testText = "Hello World";

    mockWriteText.mockResolvedValue(undefined);

    result.current(testText);

    expect(mockWriteText).toHaveBeenCalledWith(testText);

    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  it("should handle errors when copying to clipboard", async () => {
    const { result } = renderHook(() => useCopyToClipboard(), { wrapper });
    const testText = "Test Error";
    const error = new Error("Clipboard error");

    mockWriteText.mockRejectedValue(error);

    result.current(testText);

    expect(mockWriteText).toHaveBeenCalledWith(testText);

    // Wait for the rejected promise to resolve
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  it("should call navigator.clipboard.writeText with the correct text", () => {
    const { result } = renderHook(() => useCopyToClipboard(), { wrapper });
    const testTexts = ["Text 1", "Example code", ""];

    mockWriteText.mockResolvedValue(undefined);

    for (const text of testTexts) {
      result.current(text);
      expect(mockWriteText).toHaveBeenCalledWith(text);
    }
  });

  it("should work with multiple consecutive calls", () => {
    const { result } = renderHook(() => useCopyToClipboard(), { wrapper });

    mockWriteText.mockResolvedValue(undefined);

    result.current("First copy");
    result.current("Second copy");

    expect(mockWriteText).toHaveBeenCalledTimes(2);
    expect(mockWriteText).toHaveBeenNthCalledWith(1, "First copy");
    expect(mockWriteText).toHaveBeenNthCalledWith(2, "Second copy");
  });
});
