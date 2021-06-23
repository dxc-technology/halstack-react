import React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, act, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import routeData from "react-router";

import { versionsResponse } from "./mocks/VersionsMock";
import advancedTheme from "./mocks/advancedThemeMock.json";
import ThemeBuilder from "../ThemeBuilder";
import { makeReadable } from "../utils";

const portalUrl = "https://developer.dxc.com/tools/react/versions.json";

const handler = [
  rest.get(portalUrl, (req, res, ctx) => {
    const response = res(ctx.delay(100), ctx.json(versionsResponse));
    response.headers.set(
      "x-api-key",
      "p4JuyDseE33fwi5qK3DXf7DzxmNzxC2L7QH9uSJn"
    );
    response.headers.set("content-type", "binary/octet-stream");
    return response;
  }),
];
const server = setupServer(...handler);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Successful component tests for advanced theme", () => {
  const history = createMemoryHistory();
  history.push("/themeBuilder");
  window.location.pathname = "/tools/react/next/";
  jest.spyOn(routeData, "useParams").mockReturnValue({ type: "advancedTheme" });

  it("Should render accordion component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    expect(getByText("Accordion component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Disabled")).toBeTruthy();
    expect(getByText("Icon")).toBeTruthy();
    expect(getByText("Accordion Group")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["accordion"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render button component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Button"));
    });
    expect(getByText("Button component")).toBeTruthy();
    expect(getByText("Light Mode")).toBeTruthy();
    expect(getByText("Dark Mode")).toBeTruthy();
    expect(getAllByText("Primary").length).toBe(2);
    expect(getAllByText("Secondary").length).toBe(2);
    expect(getAllByText("Text").length).toBe(2);
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["button"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render checkbox component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Checkbox"));
    });
    expect(getByText("Checkbox component")).toBeTruthy();
    expect(getByText("Light Mode")).toBeTruthy();
    expect(getByText("Dark Mode")).toBeTruthy();
    expect(getAllByText("Default").length).toBe(2);
    expect(getAllByText("Label position").length).toBe(2);
    expect(getAllByText("Disabled").length).toBe(4);
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["checkbox"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render chip component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Chip"));
    });
    expect(getByText("Chip component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("With suffix")).toBeTruthy();
    expect(getByText("With prefix")).toBeTruthy();
    expect(getByText("Only icon")).toBeTruthy();
    expect(getByText("Disabled")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["chip"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render date component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Date"));
    });
    expect(getByText("Date component")).toBeTruthy();
    expect(getByText("Light Mode")).toBeTruthy();
    expect(getByText("Dark Mode")).toBeTruthy();
    expect(getAllByText("Default").length).toBe(2);
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["date"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render dropdown component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Dropdown"));
    });
    expect(getByText("Dropdown component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["dropdown"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render footer component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Footer"));
    });
    expect(getByText("Footer component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["footer"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render header component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Header"));
    });
    expect(getByText("Header component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Responsive")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["header"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render paginator component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Paginator"));
    });
    expect(getByText("Paginator component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["paginator"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render progress bar component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Progress Bar"));
    });
    expect(getByText("ProgressBar component")).toBeTruthy();
    expect(getByText("Undeterminate default")).toBeTruthy();
    expect(getByText("Determinate default")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["progressBar"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render radio component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Radio"));
    });
    expect(getByText("Radio component")).toBeTruthy();
    expect(getByText("Light Mode")).toBeTruthy();
    expect(getByText("Dark Mode")).toBeTruthy();
    expect(getAllByText("Default").length).toBe(2);
    expect(getAllByText("Disabled").length).toBe(2);
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["radio"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render select component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Select"));
    });
    expect(getByText("Select component")).toBeTruthy();
    expect(getByText("Light Mode")).toBeTruthy();
    expect(getByText("Dark Mode")).toBeTruthy();
    expect(getAllByText("Default").length).toBe(2);
    expect(getAllByText("Disabled").length).toBe(2);
    expect(getByText("Multiple")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["select"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render sidenav component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Sidenav"));
    });
    expect(getByText("Sidenav component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("With compound components")).toBeTruthy();
    expect(getByText("With scroll")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["sidenav"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render slider component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Slider"));
    });
    expect(getByText("Slider component")).toBeTruthy();
    expect(getByText("Light Mode")).toBeTruthy();
    expect(getByText("Dark Mode")).toBeTruthy();
    expect(getAllByText("Default").length).toBe(2);
    expect(getAllByText("Disabled").length).toBe(2);
    expect(getAllByText("With marks").length).toBe(2);
    expect(getAllByText("With input").length).toBe(2);
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["slider"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render spinner component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Spinner"));
    });
    expect(getByText("Spinner component")).toBeTruthy();
    expect(getByText("Undeterminate default")).toBeTruthy();
    expect(getByText("Determinate default")).toBeTruthy();
    expect(getByText("Small")).toBeTruthy();
    expect(getByText("With overlay")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["spinner"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render switch component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Switch"));
    });
    expect(getByText("Switch component")).toBeTruthy();
    expect(getByText("Light Mode")).toBeTruthy();
    expect(getByText("Dark Mode")).toBeTruthy();
    expect(getAllByText("Default").length).toBe(2);
    expect(getAllByText("Disabled").length).toBe(2);
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["switch"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render table component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Table"));
    });
    expect(getByText("Table component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Resultset Table")).toBeTruthy();
    expect(getByText("With scroll")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["table"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render tabs component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Tabs"));
    });
    expect(getByText("Tabs component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Disabled")).toBeTruthy();
    expect(getByText("With notifications")).toBeTruthy();
    expect(getByText("With scroll buttons")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["tabs"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render input text component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Input Text"));
    });
    expect(getByText("InputText component")).toBeTruthy();
    expect(getByText("Light Mode")).toBeTruthy();
    expect(getByText("Dark Mode")).toBeTruthy();
    expect(getAllByText("Default").length).toBe(2);
    expect(getAllByText("Disabled").length).toBe(2);
    expect(getAllByText("Required").length).toBe(2);
    expect(getAllByText("Invalid").length).toBe(2);
    expect(getAllByText("Autocomplete").length).toBe(4);
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["inputText"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render wizard component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Wizard"));
    });
    expect(getByText("Wizard component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Icons")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["wizard"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render toggle group component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Toggle Group"));
    });
    expect(getByText("ToggleGroup component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Disabled")).toBeTruthy();
    expect(getByText("Multiple with icons")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["toggleGroup"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render alert component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Alert"));
    });
    await findByText("next");
    expect(getByText("Alert component")).toBeTruthy();
    expect(getByText("Information Alert")).toBeTruthy();
    expect(getByText("Success Alert")).toBeTruthy();
    expect(getByText("Warning Alert")).toBeTruthy();
    expect(getByText("Error Alert")).toBeTruthy();
    expect(getByText("Modal Alert")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["alert"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render box component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Box"));
    });
    await findByText("next");
    expect(getByText("Box component")).toBeTruthy();
    expect(getByText("ShadowDepth 0")).toBeTruthy();
    expect(getByText("ShadowDepth 1")).toBeTruthy();
    expect(getByText("ShadowDepth 2")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["box"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render card component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Card"));
    });
    await findByText("next");
    expect(getByText("Card component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["card"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render dialog component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Dialog"));
    });
    await findByText("next");
    expect(getByText("Dialog component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Modal")).toBeTruthy();
    expect(getByText("With close button")).toBeTruthy();
    expect(getByText("With scroll")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["dialog"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render heading component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Heading"));
    });
    await findByText("next");
    expect(getByText("Heading component")).toBeTruthy();
    expect(getByText("Level 1")).toBeTruthy();
    expect(getByText("Level 2")).toBeTruthy();
    expect(getByText("Level 3")).toBeTruthy();
    expect(getByText("Level 4")).toBeTruthy();
    expect(getByText("Level 5")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["heading"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render link component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Link"));
    });
    await findByText("next");
    expect(getByText("Link component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Disabled")).toBeTruthy();
    expect(getByText("Undecorated")).toBeTruthy();
    expect(getByText("With action")).toBeTruthy();
    expect(getByText("Icon")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["link"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render tag component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Tag"));
    });
    await findByText("next");
    expect(getByText("Tag component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["tag"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render textarea component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Textarea"));
    });
    await findByText("next");
    expect(getByText("Textarea component")).toBeTruthy();
    expect(getByText("Light Mode")).toBeTruthy();
    expect(getByText("Dark Mode")).toBeTruthy();
    expect(getAllByText("Default").length).toBe(2);
    expect(getAllByText("Disabled").length).toBe(2);
    expect(getAllByText("Invalid").length).toBe(2);
    expect(getAllByText("Required").length).toBe(2);
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["textarea"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });

  it("Should render upload component", async () => {
    const { getByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Upload"));
    });
    await findByText("next");
    expect(getByText("Upload component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(advancedTheme["upload"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });
});
