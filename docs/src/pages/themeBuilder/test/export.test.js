import React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import {
  render,
  cleanup,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import routeData from "react-router";
import { versionsResponse } from "./mocks/VersionsMock";
import defaultTheme from "../themes/DefaultTheme.json";
import advancedTheme from "../themes/AdvancedTheme.json";
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

describe("Import advanced theme", () => {
  const history = createMemoryHistory();
  history.push("/themeBuilder");
  const createObjectMock = jest.fn();
  global.URL.createObjectURL = createObjectMock;

  it("Should create download anchor when Export button is clicked", async () => {
    const { getByText, getAllByRole, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Export"));
    });

    await waitFor(() => {
      const anchors = getAllByRole("link");
      expect(anchors[anchors.length - 1].download).toBe("theme.json");
    });
  });

  it("Should create download anchor when Export button is clicked when it is advanced theme", async () => {
    jest
      .spyOn(routeData, "useParams")
      .mockReturnValue({ type: "advancedTheme" });

    const { getByText, getAllByRole, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Export"));
    });

    await waitFor(() => {
      const anchors = getAllByRole("link");
      expect(anchors[anchors.length - 1].download).toBe("theme.json");
    });
  });

  it("Should generate a valid JSON file", async () => {
    const defaultJSONFile = new Blob(
      [JSON.stringify(defaultTheme, null, "\t")],
      {
        type: "application/json",
      }
    );

    const { getByText, getAllByRole, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Export"));
    });

    await waitFor(() => {
      const anchors = getAllByRole("link");
      expect(anchors[anchors.length - 1].download).toBe("theme.json");
    });

    expect(createObjectMock).toHaveBeenLastCalledWith(defaultJSONFile);
  });

  it("Should generate a valid JSON file when it is advanced theme", async () => {
    jest
      .spyOn(routeData, "useParams")
      .mockReturnValue({ type: "advancedTheme" });
    const advancedJSONFile = new Blob(
      [JSON.stringify(advancedTheme, null, "\t")],
      {
        type: "application/json",
      }
    );

    const { getByText, getAllByRole, findByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    await findByText("next");
    act(() => {
      fireEvent.click(getByText("Export"));
    });

    await waitFor(() => {
      const anchors = getAllByRole("link");
      expect(anchors[anchors.length - 1].download).toBe("theme.json");
    });

    expect(createObjectMock).toHaveBeenLastCalledWith(advancedJSONFile);
  });
});
