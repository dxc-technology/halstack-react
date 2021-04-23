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

describe("JSON view", () => {
  const history = createMemoryHistory();
  history.push("/themeBuilder");
  window.location.pathname = "/tools/react/next/";

  it("Should modify the current theme if submit is pressed", async () => {
    const { container, getAllByText, getByRole, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(container.querySelector(".click-to-edit-icon"));
    });
    act(() => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: "#fabada" },
      });
    });
    act(() => {
      fireEvent.click(container.querySelector(".edit-check"));
    });
    expect(getAllByText(/#fabada/).length).toBe(1);
  });

  it("Should reset modified theme after json view is changed", async () => {
    const {
      container,
      getAllByText,
      getByRole,
      findByText,
      getByText,
      queryByText,
    } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(container.querySelector(".click-to-edit-icon"));
    });
    act(() => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: "#fabada" },
      });
    });
    act(() => {
      fireEvent.click(container.querySelector(".edit-check"));
    });
    expect(getAllByText(/#fabada/).length).toBe(1);
    act(() => {
      fireEvent.click(getByText("Reset").closest("button"));
    });
    expect(queryByText(/#fabada/)).toBeFalsy();
    expect(queryByText(/#777777/)).toBeFalsy();
  });

  it("Should not modify the current theme if cancel is pressed", async () => {
    const { container, queryByText, getByRole, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(container.querySelector(".click-to-edit-icon"));
    });
    act(() => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: "#fabada" },
      });
    });
    act(() => {
      fireEvent.click(container.querySelector(".edit-cancel"));
    });
    expect(queryByText(/#fabada/)).toBeFalsy();
  });

  it("Should modify the current theme if a non hexadecimal value (integer) is inserted", async () => {
    const { container, getAllByText, getByRole, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(container.querySelector(".click-to-edit-icon"));
    });
    act(() => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: 2222 },
      });
    });
    act(() => {
      fireEvent.click(container.querySelector(".edit-check"));
    });
    expect(getAllByText(/2222/).length).toBe(1);
  });

  it("Should modify the current theme if a non hexadecimal value (boolean) is inserted", async () => {
    const { container, getAllByText, getByRole, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(container.querySelector(".click-to-edit-icon"));
    });
    act(() => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: false },
      });
    });
    act(() => {
      fireEvent.click(container.querySelector(".edit-check"));
    });
    expect(getAllByText(/false/).length).toBe(1);
  });
});
