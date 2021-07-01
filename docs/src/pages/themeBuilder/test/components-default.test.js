import React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, act, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { versionsResponse } from "./mocks/VersionsMock";
import defaultTheme from "./mocks/defaultThemeMock.json";
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

describe("Successful component tests for default theme", () => {
  const history = createMemoryHistory();
  history.push("/themeBuilder");
  window.location.pathname = "/tools/react/next/";

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
    Object.keys(defaultTheme["accordion"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["button"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["checkbox"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["chip"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["date"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["dropdown"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["footer"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["header"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["paginator"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["progressBar"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["radio"]).forEach((themeInputs) =>
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
    expect(getAllByText("Multiple").length).toBe(2);
    expect(getByText("Theme Inputs")).toBeTruthy();
    Object.keys(defaultTheme["select"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["sidenav"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["slider"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["spinner"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["switch"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["table"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["tabs"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["inputText"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["wizard"]).forEach((themeInputs) =>
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
    Object.keys(defaultTheme["toggleGroup"]).forEach((themeInputs) =>
      expect(getByText(makeReadable(themeInputs))).toBeTruthy()
    );
  });
});