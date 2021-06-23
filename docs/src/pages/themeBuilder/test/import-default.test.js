import React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, act, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { versionsResponse } from "./mocks/VersionsMock";
import ThemeBuilder from "../ThemeBuilder";

const portalUrl = "https://developer.dxc.com/tools/react/versions.json";

const validThemeInputString = JSON.stringify({
  accordion: {
    accentColor: "#fabada",
    fontColor: "#777777",
  },
  button: {
    baseColor: "#fabada",
    hoverBaseColor: "#777777",
    primaryFontColor: "",
  },
});

const wrongComponentNameString = JSON.stringify({
  accordion: {
    accentColor: "#fabada",
    fontColor: "#777777",
  },
  box: {
    baseColor: "#fabada",
    hoverBaseColor: "#777777",
    mal: "#ffffff",
  },
});

const wrongThemeInputString = JSON.stringify({
  accordion: {
    backgroundColor: "#fabada",
  },
  button: {
    baseColor: "#fabada",
    random: "#777777",
  },
});

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

describe("Import default theme", () => {
  const history = createMemoryHistory();
  history.push("/themeBuilder");
  window.location.pathname = "/tools/react/next/";

  it("Should open a dialog when Import button is clicked", async () => {
    const { getByText, getAllByText, getByRole, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Import"));
    });
    expect(getByText("Import theme")).toBeTruthy();
    expect(getAllByText("Import")[1].closest("button").disabled).toBeTruthy();
    expect(getByText("Cancel").closest("button").disabled).toBeFalsy();
    expect(getByRole("textbox").value).toBe("");
  });

  it("Should close the import dialog when Cancel button is clicked", async () => {
    const { getByText, queryByText, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Import"));
    });
    expect(queryByText("Import theme")).toBeTruthy();
    act(() => {
      fireEvent.click(getByText("Cancel"));
    });
    expect(queryByText("Import theme")).toBeFalsy();
    expect(getByText("Accordion component")).toBeTruthy();
  });

  it("Should show the JSON error message", async () => {
    const { getByText, getByRole, getAllByText, queryByText, findByText } =
      render(
        <Router history={history}>
          <Route>
            <ThemeBuilder />
          </Route>
        </Router>
      );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Import"));
    });
    expect(queryByText("Import theme")).toBeTruthy();
    act(() => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: "prueba" },
      });
    });
    expect(getAllByText("Import")[1].closest("button").disabled).toBeFalsy();
    act(() => {
      fireEvent.click(getAllByText("Import")[1].closest("button"));
    });
    expect(getByText("Invalid JSON input.")).toBeTruthy();
    expect(getAllByText("Import")[1].closest("button").disabled).toBeTruthy();
  });

  it("Should show the component error message", async () => {
    const { getByText, getByRole, getAllByText, queryByText, findByText } =
      render(
        <Router history={history}>
          <Route>
            <ThemeBuilder />
          </Route>
        </Router>
      );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Import"));
    });
    expect(queryByText("Import theme")).toBeTruthy();
    act(() => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: wrongComponentNameString },
      });
    });
    expect(getAllByText("Import")[1].closest("button").disabled).toBeFalsy();
    act(() => {
      fireEvent.click(getAllByText("Import")[1].closest("button"));
    });
    expect(getByText("Invalid component name.")).toBeTruthy();
    expect(getAllByText("Import")[1].closest("button").disabled).toBeTruthy();
  });

  it("Should show the theme input error message", async () => {
    const { getByText, getByRole, getAllByText, queryByText, findByText } =
      render(
        <Router history={history}>
          <Route>
            <ThemeBuilder />
          </Route>
        </Router>
      );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Import"));
    });
    expect(queryByText("Import theme")).toBeTruthy();
    act(() => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: wrongThemeInputString },
      });
    });
    expect(getAllByText("Import")[1].closest("button").disabled).toBeFalsy();
    act(() => {
      fireEvent.click(getAllByText("Import")[1].closest("button"));
    });
    expect(
      getByText("Invalid theme input name in component accordion.")
    ).toBeTruthy();
    expect(getAllByText("Import")[1].closest("button").disabled).toBeTruthy();
  });

  it("Should import a valid json and update the current theme of the builder", async () => {
    const {
      getByText,
      getByRole,
      getAllByText,
      queryByText,
      findByText,
      getAllByRole,
    } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Import"));
    });
    expect(queryByText("Import theme")).toBeTruthy();
    act(() => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: validThemeInputString },
      });
    });
    expect(getAllByText("Import")[1].closest("button").disabled).toBeFalsy();
    act(() => {
      fireEvent.click(getAllByText("Import")[1].closest("button"));
    });
    expect(getByText("Accordion component")).toBeTruthy();
    expect(getAllByRole("color-container")[0].getAttribute("color")).toBe(
      "#fabada"
    );
    expect(getAllByRole("color-container")[1].getAttribute("color")).toBe(
      "#777777"
    );
  });

  it("Should reset an imported json and update the current theme of the builder", async () => {
    const {
      getByText,
      getByRole,
      getAllByRole,
      getAllByText,
      queryByText,
      findByText,
    } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");

    act(() => {
      fireEvent.click(getByText("Import"));
    });
    expect(queryByText("Import theme")).toBeTruthy();
    act(() => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: validThemeInputString },
      });
    });
    expect(getAllByText("Import")[1].closest("button").disabled).toBeFalsy();
    act(() => {
      fireEvent.click(getAllByText("Import")[1].closest("button"));
    });

    expect(getByText("Accordion component")).toBeTruthy();
    expect(getAllByRole("color-container")[0].getAttribute("color")).toBe(
      "#fabada"
    );
    expect(getAllByRole("color-container")[1].getAttribute("color")).toBe(
      "#777777"
    );

    act(() => {
      fireEvent.click(getByText("Reset").closest("button"));
    });
    expect(getAllByRole("color-container")[0].getAttribute("color")).toBe(
      "#6f2c91"
    );
    expect(getAllByRole("color-container")[1].getAttribute("color")).toBe(
      "#666666"
    );
  });
});
