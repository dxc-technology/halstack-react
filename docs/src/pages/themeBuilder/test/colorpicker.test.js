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

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
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
    const { getByText, getAllByRole, getByRole, getByDisplayValue } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    expect(getByText("Accordion component")).toBeTruthy();
    expect(getByText("Accent color")).toBeTruthy();
    expect(getAllByRole("color-container")[0].getAttribute("color")).toBe(
      "#6f2c91"
    );
    act(() => {
      fireEvent.click(getAllByRole("color-container")[0]);
    });
    act(() => {
      fireEvent.change(getByDisplayValue("6F2C91"), {
        target: { value: "cecece" },
      });
    });
    act(() => {
      fireEvent.click(getByRole("picker-cover"));
    });
    expect(getAllByRole("color-container")[0].getAttribute("color")).toBe(
      "#cecece"
    );
  });

  it("Change button component property value", async () => {
    const { getByText, getAllByRole, getByRole, getByDisplayValue } = render(
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
    expect(getByText("Primary font color")).toBeTruthy();
    expect(getAllByRole("color-container")[1].getAttribute("color")).toBe(
      "#ffffff"
    );
    act(() => {
      fireEvent.click(getAllByRole("color-container")[1]);
    });
    act(() => {
      fireEvent.change(getByDisplayValue("FFFFFF"), {
        target: { value: "fabada" },
      });
    });
    act(() => {
      fireEvent.click(getByRole("picker-cover"));
    });
    expect(getAllByRole("color-container")[1].getAttribute("color")).toBe(
      "#fabada"
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
    const { getByText, getAllByRole, getByRole, getByDisplayValue } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    act(() => {
      fireEvent.click(getByText("Alert"));
    });
    expect(getByText("Alert component")).toBeTruthy();
    expect(getByText("Title font color")).toBeTruthy();
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
