import React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, act, fireEvent, waitFor } from "@testing-library/react";
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

describe("Successful color picker tests", () => {
  const history = createMemoryHistory();
  history.push("/themeBuilder");
  window.location.pathname = "/tools/react/next/";

  it("Change accordion property value", async () => {
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
    expect(getAllByRole("color-container")[0].getAttribute("color")).toBe(
      "#6f2c91"
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
    expect(getByText(/#555555/)).toBeTruthy();
  });

  it("Change accordion property value and reset", async () => {
    const {
      getByText,
      queryByText,
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
    expect(getAllByRole("color-container")[0].getAttribute("color")).toBe(
      "#6f2c91"
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
    expect(getByText(/#555555/)).toBeTruthy();
    act(() => {
      fireEvent.click(getByText("Reset").closest("button"));
    });
    expect(queryByText(/#555555/)).toBeFalsy();
  });

  it("Change button property value", async () => {
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
    expect(getAllByRole("color-container")[1].getAttribute("color")).toBe(
      "#000000"
    );
    act(() => {
      fireEvent.click(getAllByRole("color-container")[1]);
    });
    act(() => {
      fireEvent.change(getByDisplayValue("000000"), {
        target: { value: "333333" },
      });
    });
    act(() => {
      fireEvent.click(getByRole("picker-cover"));
    });
    expect(getByText(/#333333/)).toBeTruthy();
  });
});
