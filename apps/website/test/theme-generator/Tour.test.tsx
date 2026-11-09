import type { ComponentType, ReactNode } from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import Tour from "../../screens/theme-generator/components/Tour/Tour";
import type { TourPopoverProps } from "../../screens/theme-generator/components/Tour/types";

jest.mock("next/router", () => ({ useRouter: jest.fn() }));

type MockEvent = { type?: string; action?: string; status?: string; index?: number };
type MockTooltipProps = Omit<TourPopoverProps, "onFinish" | "onRestart">;
type MockJoyrideProps = {
  run: boolean;
  stepIndex: number;
  steps: { title?: string; content?: ReactNode; target: string }[];
  onEvent: (event: MockEvent) => void;
  tooltipComponent: ComponentType<MockTooltipProps>;
};
type JoyrideMockModule = { __state: { last: MockJoyrideProps | undefined } };

// Minimal Joyride stand-in: it records the latest props and renders the custom tooltip for the
// current step. Popover controls emit the same events the real library emits (next/prev/skip).
jest.mock("react-joyride", () => {
  const { createElement } = jest.requireActual<typeof import("react")>("react");
  const joyrideState: { last: MockJoyrideProps | undefined } = { last: undefined };
  const EVENTS = { STEP_AFTER: "step:after" };
  const ACTIONS = { NEXT: "next", PREV: "prev", SKIP: "skip" };
  const STATUS = { FINISHED: "finished", SKIPPED: "skipped", PAUSED: "paused", RUNNING: "running" };

  return {
    __state: joyrideState,
    ACTIONS: { CLOSE: "close", ...ACTIONS },
    EVENTS,
    STATUS,
    Joyride: (props: MockJoyrideProps) => {
      joyrideState.last = props;
      const step = props.steps[props.stepIndex];
      if (!props.run || !step) {
        return null;
      }
      const controls = {
        next: () =>
          props.onEvent({
            type: EVENTS.STEP_AFTER,
            action: ACTIONS.NEXT,
            index: props.stepIndex,
            status: STATUS.RUNNING,
          }),
        prev: () =>
          props.onEvent({
            type: EVENTS.STEP_AFTER,
            action: ACTIONS.PREV,
            index: props.stepIndex,
            status: STATUS.RUNNING,
          }),
        skip: () =>
          props.onEvent({ type: "tour:end", action: ACTIONS.SKIP, index: props.stepIndex, status: STATUS.SKIPPED }),
      };
      return createElement(props.tooltipComponent, {
        step,
        index: props.stepIndex,
        size: props.steps.length,
        isLastStep: props.stepIndex === props.steps.length - 1,
        controls,
        tooltipProps: { "aria-modal": true, role: "dialog" },
      });
    },
  };
});

const joyrideState = jest.requireMock<JoyrideMockModule>("react-joyride").__state;
const currentProps = (): MockJoyrideProps => {
  if (!joyrideState.last) {
    throw new Error("Joyride has not rendered yet");
  }
  return joyrideState.last;
};

const mockUseRouter = useRouter as unknown as jest.Mock;
const routerReplace = jest.fn();
const onTourStepIndexChange = jest.fn();

const SECTIONS = [
  { section: 0, title: "The 3-Step Journey" },
  { section: 1, title: "Preview theme" },
  { section: 2, title: "Review theme" },
] as const;

const renderTour = ({ currentStep = 0, welcome = false }: { currentStep?: number; welcome?: boolean } = {}) => {
  mockUseRouter.mockReturnValue({ query: welcome ? { tour: "true" } : {}, replace: routerReplace });
  return render(<Tour currentStep={currentStep} onTourStepIndexChange={onTourStepIndexChange} />);
};

const emitEvent = (event: MockEvent) => {
  act(() => {
    currentProps().onEvent(event);
  });
};

const goToNextStep = (index: number) => emitEvent({ type: "step:after", action: "next", index, status: "running" });

const goToPrevStep = (index: number) => emitEvent({ type: "step:after", action: "prev", index, status: "running" });

const startTour = () => fireEvent.click(screen.getByRole("button", { name: "Get Started!" }));

const WELCOME_TITLE = "Welcome to Halstack Theme Generator";

beforeEach(() => {
  jest.clearAllMocks();
  joyrideState.last = undefined;
  mockUseRouter.mockReturnValue({ query: {}, replace: routerReplace });
});

describe("Tour", () => {
  describe("welcome dialog", () => {
    it("does not show the welcome dialog or run the tour without the tour query parameter", () => {
      renderTour();

      expect(screen.queryByText(WELCOME_TITLE)).not.toBeInTheDocument();
      expect(currentProps().run).toBe(false);
    });

    it("opens the welcome dialog from the Take a tour URL and removes the query parameter", () => {
      renderTour({ welcome: true });

      expect(screen.getByText(WELCOME_TITLE)).toBeInTheDocument();
      expect(routerReplace).toHaveBeenCalledWith("/theme-generator/configuration", undefined, { shallow: true });
      expect(currentProps().run).toBe(false);
    });

    it("closes the welcome dialog with Skip tour without starting the tour", () => {
      renderTour({ welcome: true });
      fireEvent.click(screen.getByRole("button", { name: "Skip tour" }));

      expect(screen.queryByText(WELCOME_TITLE)).not.toBeInTheDocument();
      expect(currentProps().run).toBe(false);
    });

    it("closes the welcome dialog with its close button without starting the tour", () => {
      renderTour({ welcome: true });
      fireEvent.click(screen.getByRole("button", { name: "Close dialog" }));

      expect(screen.queryByText(WELCOME_TITLE)).not.toBeInTheDocument();
      expect(currentProps().run).toBe(false);
    });

    it("closes the welcome dialog when the tour starts", () => {
      renderTour({ welcome: true });
      startTour();

      expect(screen.queryByText(WELCOME_TITLE)).not.toBeInTheDocument();
      expect(currentProps().run).toBe(true);
    });
  });

  describe("starting a section", () => {
    it.each(SECTIONS)("starts section $section at its first step", ({ section, title }) => {
      renderTour({ currentStep: section, welcome: true });
      startTour();

      expect(currentProps().run).toBe(true);
      expect(currentProps().stepIndex).toBe(0);
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText("1 / 3")).toBeInTheDocument();
    });

    it("does not start the following section when the welcome dialog was skipped", () => {
      const { rerender } = renderTour({ welcome: true });
      fireEvent.click(screen.getByRole("button", { name: "Skip tour" }));

      rerender(<Tour currentStep={1} onTourStepIndexChange={onTourStepIndexChange} />);
      expect(currentProps().run).toBe(false);
    });
  });

  describe("navigation", () => {
    it("moves forward and back through the steps and reports the index", () => {
      renderTour({ welcome: true });
      startTour();

      goToNextStep(0);
      expect(currentProps().stepIndex).toBe(1);
      expect(onTourStepIndexChange).toHaveBeenLastCalledWith(1);
      expect(screen.getByText("2 / 3")).toBeInTheDocument();

      goToPrevStep(1);
      expect(currentProps().stepIndex).toBe(0);
      expect(onTourStepIndexChange).toHaveBeenLastCalledWith(0);
    });

    it("ignores step events with other actions", () => {
      renderTour({ welcome: true });
      startTour();
      onTourStepIndexChange.mockClear();

      emitEvent({ type: "step:after", action: "update", index: 0 });
      emitEvent({ type: "tour:start", action: "start", index: 0 });

      expect(onTourStepIndexChange).not.toHaveBeenCalled();
      expect(currentProps().stepIndex).toBe(0);
    });

    it("shows Skip step and the navigation controls on non-final steps", () => {
      renderTour({ welcome: true });
      startTour();

      expect(screen.getByRole("button", { name: "Skip step" })).toBeInTheDocument();
      expect(screen.queryByRole("button", { name: "Got it!" })).not.toBeInTheDocument();
    });
  });

  describe("ending a section", () => {
    it.each(["finished", "skipped", "paused"])("stops the tour when the status is %s", (status) => {
      renderTour({ welcome: true });
      startTour();
      emitEvent({ status, action: "next", index: 0, type: "tour:end" });

      expect(currentProps().run).toBe(false);
    });

    it("stops the tour when the popover is closed", () => {
      renderTour({ welcome: true });
      startTour();
      emitEvent({ action: "close", status: "running", index: 0, type: "tour:end" });

      expect(currentProps().run).toBe(false);
    });

    it("stops the tour when Skip step is clicked", () => {
      renderTour({ welcome: true });
      startTour();
      fireEvent.click(screen.getByRole("button", { name: "Skip step" }));

      expect(currentProps().run).toBe(false);
    });

    it("finishes the tour from the last step with Got it!", () => {
      renderTour({ welcome: true });
      startTour();
      goToNextStep(0);
      goToNextStep(1);

      expect(screen.getByText("Upload assets")).toBeInTheDocument();
      expect(screen.queryByRole("button", { name: "Skip step" })).not.toBeInTheDocument();
      fireEvent.click(screen.getByRole("button", { name: "Got it!" }));

      expect(currentProps().run).toBe(false);
    });
  });

  describe("restarting a section", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("restarts the current section from its first step after a short delay", () => {
      renderTour({ welcome: true });
      startTour();
      goToNextStep(0);
      goToNextStep(1);
      onTourStepIndexChange.mockClear();

      fireEvent.click(screen.getByRole("button", { name: "Restart" }));

      expect(currentProps().run).toBe(false);
      expect(currentProps().stepIndex).toBe(0);
      expect(onTourStepIndexChange).toHaveBeenLastCalledWith(0);

      act(() => {
        jest.advanceTimersByTime(100);
      });
      expect(currentProps().run).toBe(true);
      expect(currentProps().stepIndex).toBe(0);
    });
  });

  describe("moving between sections", () => {
    it("starts the next section automatically after the current one finishes", () => {
      const { rerender } = renderTour({ welcome: true });
      startTour();
      emitEvent({ status: "finished", action: "next", index: 2, type: "tour:end" });
      expect(currentProps().run).toBe(false);

      rerender(<Tour currentStep={1} onTourStepIndexChange={onTourStepIndexChange} />);

      expect(currentProps().run).toBe(true);
      expect(currentProps().stepIndex).toBe(0);
      expect(screen.getByText("Preview theme")).toBeInTheDocument();
    });

    it("does not start the next section again after the last section ends", () => {
      const { rerender } = renderTour({ currentStep: 2, welcome: true });
      startTour();
      emitEvent({ status: "finished", action: "next", index: 2, type: "tour:end" });

      rerender(<Tour currentStep={2} onTourStepIndexChange={onTourStepIndexChange} />);
      expect(currentProps().run).toBe(false);
    });
  });
});
