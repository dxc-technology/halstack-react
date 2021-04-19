import React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, act, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import App from "../../../App";
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
    const { getByText, getAllByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
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
    const { getByText, getAllByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
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
    const { getByText, getAllByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
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
    const { getByText, getAllByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
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
    const { getByText, getAllByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
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
    const { getByText, getAllByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
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
    const { getByText, getAllByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
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
    const { getByText, getAllByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
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
    const { getByText, getAllByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
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
    const { getByText, getAllByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
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

  // it("Should render radio component", async () => {
  //   const { getByText } = render(
  //     <ComponentPreview componentId="radio" customTheme={themeMocks} />
  //   );
  //   expect(getByText("Radio component")).toBeTruthy();
  //   expect(getByText("Default")).toBeTruthy();
  //   expect(getByText("Disabled")).toBeTruthy();
  //   expect(getByText("baseColor")).toBeTruthy();
  // });

  // it("Should render select component", async () => {
  //   const { getByText } = render(
  //     <ComponentPreview componentId="select" customTheme={themeMocks} />
  //   );
  //   expect(getByText("Select component")).toBeTruthy();
  //   expect(getByText("Default")).toBeTruthy();
  //   expect(getByText("Multiple")).toBeTruthy();
  //   expect(getByText("Disabled")).toBeTruthy();
  //   expect(getByText("baseColor")).toBeTruthy();
  // });

  // it("Should render sidenav component", async () => {
  //   const { getByText } = render(
  //     <ComponentPreview componentId="sidenav" customTheme={themeMocks} />
  //   );
  //   expect(getByText("Sidenav component")).toBeTruthy();
  //   expect(getByText("Default")).toBeTruthy();
  //   expect(getByText("baseColor")).toBeTruthy();
  //   expect(getByText("arrowBaseColor")).toBeTruthy();
  //   expect(getByText("arrowAccentColor")).toBeTruthy();
  // });

  // it("Should render slider component", async () => {
  //   const { getByText } = render(
  //     <ComponentPreview componentId="slider" customTheme={themeMocks} />
  //   );
  //   expect(getByText("Slider component")).toBeTruthy();
  //   expect(getByText("Default")).toBeTruthy();
  //   expect(getByText("With marks")).toBeTruthy();
  //   expect(getByText("Disabled")).toBeTruthy();
  //   expect(getByText("baseColor")).toBeTruthy();
  // });

  // it("Should render spinner component", async () => {
  //   const { getByText } = render(
  //     <ComponentPreview componentId="spinner" customTheme={themeMocks} />
  //   );
  //   expect(getByText("Spinner component")).toBeTruthy();
  //   expect(getByText("Undeterminate default")).toBeTruthy();
  //   expect(getByText("Determinate default")).toBeTruthy();
  //   expect(getByText("accentColor")).toBeTruthy();
  //   expect(getByText("baseColor")).toBeTruthy();
  // });

  // it("Should render switch component", async () => {
  //   const { getByText } = render(
  //     <ComponentPreview componentId="switch" customTheme={themeMocks} />
  //   );
  //   expect(getByText("Switch component")).toBeTruthy();
  //   expect(getByText("Default")).toBeTruthy();
  //   expect(getByText("Disabled")).toBeTruthy();
  //   expect(getByText("checkedBaseColor")).toBeTruthy();
  // });

  // it("Should render table component", async () => {
  //   const { getByText } = render(
  //     <ComponentPreview componentId="table" customTheme={themeMocks} />
  //   );
  //   expect(getByText("Table component")).toBeTruthy();
  //   expect(getByText("Default")).toBeTruthy();
  //   expect(getByText("baseColor")).toBeTruthy();
  //   expect(getByText("fontColor")).toBeTruthy();
  // });

  // it("Should render tabs component", async () => {
  //   const { getByText } = render(
  //     <ComponentPreview componentId="tabs" customTheme={themeMocks} />
  //   );
  //   expect(getByText("Tabs component")).toBeTruthy();
  //   expect(getByText("Default")).toBeTruthy();
  //   expect(getByText("Disabled")).toBeTruthy();
  //   expect(getByText("baseColor")).toBeTruthy();
  // });

  // it("Should render inputText component", async () => {
  //   const { getByText, getAllByText } = render(
  //     <ComponentPreview componentId="inputText" customTheme={themeMocks} />
  //   );
  //   expect(getByText("InputText component")).toBeTruthy();
  //   expect(getByText("Default")).toBeTruthy();
  //   expect(getByText("Disabled")).toBeTruthy();
  //   expect(getByText("Required")).toBeTruthy();
  //   expect(getByText("Invalid")).toBeTruthy();
  //   expect(getAllByText("Autocomplete").length).toBe(2);
  //   expect(getByText("selectedBaseColor")).toBeTruthy();
  // });

  // it("Should render wizard component", async () => {
  //   const { getByText } = render(
  //     <ComponentPreview componentId="wizard" customTheme={themeMocks} />
  //   );
  //   expect(getByText("Wizard component")).toBeTruthy();
  //   expect(getByText("Default")).toBeTruthy();
  //   expect(getByText("Icons")).toBeTruthy();
  //   expect(getByText("baseColor")).toBeTruthy();
  //   expect(getByText("fontColor")).toBeTruthy();
  // });

  // it("Should render toggle group component", async () => {
  //   const { getByText } = render(
  //     <ComponentPreview componentId="toggleGroup" customTheme={themeMocks} />
  //   );

  //   expect(getByText("ToggleGroup component")).toBeTruthy();
  //   expect(getByText("Default")).toBeTruthy();
  //   expect(getByText("Default with icons")).toBeTruthy();
  //   expect(getByText("selectedBaseColor")).toBeTruthy();
  //   expect(getByText("selectedHoverBaseColor")).toBeTruthy();
  //   expect(getByText("selectedFontColor")).toBeTruthy();
  //   expect(getByText("selectedHoverFontColor")).toBeTruthy();
  //   expect(getByText("unselectedBaseColor")).toBeTruthy();
  //   expect(getByText("unselectedHoverBaseColor")).toBeTruthy();
  //   expect(getByText("unselectedFontColor")).toBeTruthy();
  //   expect(getByText("unselectedHoverFontColor")).toBeTruthy();
  // });
});
