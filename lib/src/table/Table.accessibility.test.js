import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcTable from "./Table.tsx";

global.globalThis = global;
global.DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Table component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcTable>
        <thead>
          <tr>
            <th>header-1</th>
            <th>header-2</th>
            <th>header-3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cell-1</td>
            <td>cell-2</td>
            <td>cell-3</td>
          </tr>
          <tr>
            <td>cell-4</td>
            <td>cell-5</td>
            <td>cell-6</td>
          </tr>
        </tbody>
      </DxcTable>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
