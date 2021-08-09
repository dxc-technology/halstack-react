import React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, act, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import routeData from "react-router";

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

describe("Successful color picker tests for default theme", () => {
  const history = createMemoryHistory();
  history.push("/themeBuilder");
  window.location.pathname = "/tools/react/next/";

  it("Change accordion component property value", async () => {
    const {
      getByText,
      getAllByRole,
      findByText,
      getByRole,
      getByDisplayValue,
    } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    expect(getByText("Accordion component")).toBeTruthy();
    expect(getByText("Accent color")).toBeTruthy();
    expect(getAllByRole("color-container")[0].getAttribute("color")).toBe(
      "#5f249f"
    );
    act(() => {
      fireEvent.click(getAllByRole("color-container")[0]);
    });
    act(() => {
      fireEvent.change(getByDisplayValue("6F2C91"), {
        target: { value: "555555" },
      });
    });
    act(() => {
      fireEvent.click(getByRole("picker-cover"));
    });
    expect(getAllByRole("color-container")[0].getAttribute("color")).toBe(
      "#555555"
    );
  });

  it("Change button component property value", async () => {
    const {
      getByText,
      getAllByRole,
      findByText,
      getByRole,
      getByDisplayValue,
    } = render(
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
    expect(getByText("Primary font color")).toBeTruthy();
    expect(getAllByRole("color-container")[2].getAttribute("color")).toBe(
      "#ffffff"
    );
    act(() => {
      fireEvent.click(getAllByRole("color-container")[2]);
    });
    act(() => {
      fireEvent.change(getByDisplayValue("FFFFFF"), {
        target: { value: "333333" },
      });
    });
    act(() => {
      fireEvent.click(getByRole("picker-cover"));
    });
    expect(getAllByRole("color-container")[2].getAttribute("color")).toBe(
      "#333333"
    );
  });
});

describe("Successful color picker tests for advanced theme", () => {
  const history = createMemoryHistory();
  history.push("/themeBuilder");

  it("Change alert component property value", async () => {
    jest
      .spyOn(routeData, "useParams")
      .mockReturnValue({ type: "advancedTheme" });
    window.location.pathname = "/tools/react/next/";
    const {
      getByText,
      getAllByRole,
      findByText,
      getByRole,
      getByDisplayValue,
    } = render(
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
    expect(getByText("Alert component")).toBeTruthy();
    expect(getByText("Overlay color")).toBeTruthy();
    expect(getAllByRole("color-container")[0].getAttribute("color")).toBe(
      "#000000"
    );
    act(() => {
      fireEvent.click(getAllByRole("color-container")[0]);
    });
    act(() => {
      fireEvent.change(getByDisplayValue("000000"), {
        target: { value: "fabada" },
      });
    });
    act(() => {
      fireEvent.click(getByRole("picker-cover"));
    });
    expect(getAllByRole("color-container")[0].getAttribute("color")).toBe(
      "#fabada"
    );
  });
});
