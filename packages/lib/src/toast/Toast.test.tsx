import { act, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcButton from "../button/Button";
import DxcToastsQueue from "./ToastsQueue";
import useToast from "./useToast";

const ToastPage = ({ onClick }: { onClick?: () => void }) => {
  const toast = useToast();

  const loadingFunc = () => {
    const removeLoadingToast = toast.loading({ message: "Loading process..." });

    setTimeout(() => {
      removeLoadingToast?.();
      toast.success({ message: "The process ended successfully." });
    }, 5000);
  };

  return (
    <>
      <DxcButton
        label="Show info toast"
        onClick={() => {
          toast.info({ message: "This is an information toast." });
        }}
      />
      <DxcButton
        label="Show loading toast"
        onClick={() => {
          toast.loading({ message: "Loading..." });
        }}
      />
      <DxcButton
        label="Show toast"
        onClick={() => {
          if (onClick) {
            toast.default({ message: "This is a simple toast.", action: { label: "Action", onClick } });
          } else {
            toast.default({ message: "This is a simple toast." });
          }
        }}
      />
      <DxcButton label="Load process" onClick={loadingFunc} />
    </>
  );
};

describe("Toast component tests", () => {
  test("Renders the component", async () => {
    const { getByText } = render(
      <DxcToastsQueue>
        <ToastPage />
      </DxcToastsQueue>
    );
    const button = getByText("Show toast");
    userEvent.click(button);
    await waitFor(() => {
      expect(getByText("This is a simple toast.")).toBeTruthy();
    });
  });
  test("Toast disappears after the specified duration", () => {
    jest.useFakeTimers();
    const { getByText, queryByText } = render(
      <DxcToastsQueue duration={4250}>
        <ToastPage />
      </DxcToastsQueue>
    );
    const button = getByText("Show toast");
    userEvent.click(button);

    act(() => {
      jest.advanceTimersByTime(4249);
    });
    expect(getByText("This is a simple toast.")).toBeTruthy();

    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(queryByText("This is a simple toast.")).toBeFalsy();

    jest.useRealTimers();
  });
  test("If duration > 5000, the toast disappears at 5000ms", () => {
    jest.useFakeTimers();
    const { getByText, queryByText } = render(
      <DxcToastsQueue duration={1000000}>
        <ToastPage />
      </DxcToastsQueue>
    );
    const button = getByText("Show toast");
    userEvent.click(button);

    act(() => {
      jest.advanceTimersByTime(5001);
    });
    expect(queryByText("This is a simple toast.")).toBeFalsy();

    jest.useRealTimers();
  });
  test("If duration < 3000, the toast disappears at 3000ms", () => {
    jest.useFakeTimers();
    const { getByText, queryByText } = render(
      <DxcToastsQueue duration={100}>
        <ToastPage />
      </DxcToastsQueue>
    );
    const button = getByText("Show toast");
    userEvent.click(button);

    act(() => {
      jest.advanceTimersByTime(3001);
    });
    expect(queryByText("This is a simple toast.")).toBeFalsy();

    jest.useRealTimers();
  });
  test("Clear action removes the toast", async () => {
    const { getByText, getByLabelText, queryByText } = render(
      <DxcToastsQueue>
        <ToastPage />
      </DxcToastsQueue>
    );
    const button = getByText("Show toast");
    userEvent.click(button);
    const clearButton = getByLabelText("Clear toast");
    userEvent.click(clearButton);
    await waitFor(() => {
      expect(queryByText("This is a simple toast.")).toBeFalsy();
    });
  });
  test("Action button executes the onClick function", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <DxcToastsQueue>
        <ToastPage onClick={onClick} />
      </DxcToastsQueue>
    );
    const button = getByText("Show toast");
    userEvent.click(button);
    const actionButton = getByText("Action");
    userEvent.click(actionButton);
    expect(onClick).toHaveBeenCalled();
  });
  test("Toast queue can only accumulate 5 toasts at the same time", async () => {
    const { getByText, getAllByText } = render(
      <DxcToastsQueue>
        <ToastPage />
      </DxcToastsQueue>
    );
    const button = getByText("Show toast");
    for (let i = 0; i < 6; i++) {
      userEvent.click(button);
    }
    await waitFor(() => {
      expect(getAllByText("This is a simple toast.").length).toBe(5);
    });
  });
  test("Toast queue removes the older toast when more than 5 toast accumulate", async () => {
    const { getByText, getAllByText, queryByText } = render(
      <DxcToastsQueue>
        <ToastPage />
      </DxcToastsQueue>
    );
    const infoBtn = getByText("Show info toast");
    const defaultBtn = getByText("Show toast");

    userEvent.click(infoBtn);
    await waitFor(() => {
      expect(getByText("This is an information toast.")).toBeTruthy();
    });
    for (let i = 0; i < 6; i++) {
      userEvent.click(defaultBtn);
    }
    await waitFor(() => {
      expect(queryByText("This is an information toast.")).toBeFalsy();
      expect(getAllByText("This is a simple toast.").length).toBe(5);
    });
  });
  test("Loading toast is never removed automatically", () => {
    jest.useFakeTimers();
    const { getByText } = render(
      <DxcToastsQueue>
        <ToastPage />
      </DxcToastsQueue>
    );
    const button = getByText("Show loading toast");
    userEvent.click(button);
    act(() => {
      jest.advanceTimersByTime(10000); // over 5000ms
    });
    expect(getByText("Loading...")).toBeTruthy();
    jest.useRealTimers();
  });
  test("Loading toast can be cleared", async () => {
    const { getByLabelText, getByText, queryByText } = render(
      <DxcToastsQueue>
        <ToastPage />
      </DxcToastsQueue>
    );
    const button = getByText("Show loading toast");
    userEvent.click(button);
    const clearButton = getByLabelText("Clear toast");
    userEvent.click(clearButton);
    await waitFor(() => {
      expect(queryByText("Loading...")).toBeFalsy();
    });
  });
  test("Loading toast can be removed programmatically", async () => {
    jest.useFakeTimers();
    const { getByText, queryByText } = render(
      <DxcToastsQueue>
        <ToastPage />
      </DxcToastsQueue>
    );
    const button = getByText("Load process");
    userEvent.click(button);
    await waitFor(() => {
      expect(getByText("Loading process...")).toBeTruthy();
    });
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(queryByText("Loading process...")).toBeFalsy();
    expect(getByText("The process ended successfully.")).toBeTruthy();
    jest.useRealTimers();
  });
});
