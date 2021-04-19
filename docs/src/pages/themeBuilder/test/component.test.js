import React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, act, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { versionsResponse } from "./mocks/VersionsMock";
import ThemeBuilder from "../ThemeBuilder";

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

describe("Successful component tests", () => {
  const history = createMemoryHistory();
  history.push("/themeBuilder");
  window.location.pathname = "/tools/react/next/";

  it("Should render accordion component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    expect(getByText("Accordion component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Disabled")).toBeTruthy();
    expect(getByText("Icon")).toBeTruthy();
    expect(getByText("Accordion Group")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("accentColor").length).toBe(8);
    expect(getAllByText("fontColor").length).toBe(9);
  });

  it("Should render button component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Button"));
    });
    expect(getByText("Button component")).toBeTruthy();
    expect(getByText("Primary")).toBeTruthy();
    expect(getByText("Secondary")).toBeTruthy();
    expect(getByText("Text")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
    expect(getAllByText("hoverBaseColor").length).toBe(2);
    expect(getAllByText("primaryFontColor").length).toBe(2);
    expect(getAllByText("primaryHoverFontColor").length).toBe(2);
    expect(getAllByText("secondaryFontColor").length).toBe(2);
    expect(getAllByText("secondaryHoverFontColor").length).toBe(2);
    expect(getAllByText("textFontColor").length).toBe(2);
    expect(getAllByText("textHoverFontColor").length).toBe(2);
  });

  it("Should render checkbox component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Checkbox"));
    });
    expect(getByText("Checkbox component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Label position")).toBeTruthy();
    expect(getAllByText("Disabled").length).toBe(2);
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
    expect(getAllByText("checkColor").length).toBe(2);
  });

  it("Should render chip component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Chip"));
    });
    expect(getByText("Chip component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("With suffix")).toBeTruthy();
    expect(getByText("With prefix")).toBeTruthy();
    expect(getByText("Only icon")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
    expect(getAllByText("accentColor").length).toBe(8);
    expect(getAllByText("fontColor").length).toBe(9);
  });

  it("Should render date component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Date"));
    });
    expect(getByText("Date component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
    expect(getAllByText("accentColor").length).toBe(8);
  });

  it("Should render dropdown component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Dropdown"));
    });
    expect(getByText("Dropdown component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
    expect(getAllByText("fontColor").length).toBe(9);
  });

  it("Should render footer component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Footer"));
    });
    expect(getByText("Footer component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
    expect(getAllByText("fontColor").length).toBe(9);
    expect(getAllByText("accentColor").length).toBe(8);
    expect(getAllByText("logo").length).toBe(3);
  });

  it("Should render header component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Header"));
    });
    expect(getByText("Header component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Responsive")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
    expect(getAllByText("accentColor").length).toBe(8);
    expect(getAllByText("fontColor").length).toBe(9);
    expect(getAllByText("menuBaseColor").length).toBe(2);
    expect(getAllByText("hamburguerColor").length).toBe(2);
  });

  it("Should render paginator component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Paginator"));
    });
    expect(getByText("Paginator component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
    expect(getAllByText("fontColor").length).toBe(9);
  });

  it("Should render progressBar component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("ProgressBar"));
    });
    expect(getByText("ProgressBar component")).toBeTruthy();
    expect(getByText("Undeterminate default")).toBeTruthy();
    expect(getByText("Determinate default")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("accentColor").length).toBe(8);
    expect(getAllByText("baseColor").length).toBe(18);
  });

  it("Should render radio component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Radio"));
    });
    expect(getByText("Radio component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Disabled")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
  });

  it("Should render select component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Select"));
    });
    expect(getByText("Select component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Multiple")).toBeTruthy();
    expect(getByText("Disabled")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
  });

  it("Should render sidenav component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Sidenav"));
    });
    expect(getByText("Sidenav component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
    expect(getAllByText("arrowBaseColor").length).toBe(2);
    expect(getAllByText("arrowAccentColor").length).toBe(2);
  });

  it("Should render slider component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Slider"));
    });
    expect(getByText("Slider component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("With marks")).toBeTruthy();
    expect(getByText("Disabled")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
  });

  it("Should render spinner component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Spinner"));
    });
    expect(getByText("Spinner component")).toBeTruthy();
    expect(getByText("Undeterminate default")).toBeTruthy();
    expect(getByText("Determinate default")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("accentColor").length).toBe(8);
    expect(getAllByText("baseColor").length).toBe(18);
  });

  it("Should render switch component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Switch"));
    });
    expect(getByText("Switch component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Disabled")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("checkedBaseColor").length).toBe(2);
  });

  it("Should render table component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Table"));
    });
    expect(getByText("Table component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
    expect(getAllByText("fontColor").length).toBe(9);
  });

  it("Should render tabs component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Tabs"));
    });
    expect(getByText("Tabs component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Disabled")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
  });

  it("Should render inputText component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("InputText"));
    });
    expect(getByText("InputText component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Disabled")).toBeTruthy();
    expect(getByText("Required")).toBeTruthy();
    expect(getByText("Invalid")).toBeTruthy();
    expect(getAllByText("Autocomplete").length).toBe(2);
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("selectedBaseColor").length).toBe(3);
  });

  it("Should render wizard component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("Wizard"));
    });
    expect(getByText("Wizard component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Icons")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("baseColor").length).toBe(18);
    expect(getAllByText("fontColor").length).toBe(9);
  });

  it("Should render toggle group component", async () => {
    const { getByText, getAllByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText('next');
    act(() => {
      fireEvent.click(getByText("ToggleGroup"));
    });
    expect(getByText("ToggleGroup component")).toBeTruthy();
    expect(getByText("Default")).toBeTruthy();
    expect(getByText("Default with icons")).toBeTruthy();
    expect(getByText("Theme inputs")).toBeTruthy();
    expect(getAllByText("selectedBaseColor").length).toBe(3);
    expect(getAllByText("selectedFontColor").length).toBe(2);
    expect(getAllByText("selectedHoverFontColor").length).toBe(2);
    expect(getAllByText("unselectedBaseColor").length).toBe(2);
    expect(getAllByText("unselectedHoverBaseColor").length).toBe(2);
    expect(getAllByText("unselectedFontColor").length).toBe(2);
    expect(getAllByText("unselectedHoverFontColor").length).toBe(2);
  });
});