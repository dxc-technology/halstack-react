import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcTable from "../src/table/Table";

describe("Table component tests", () => {
  test("Table renders with correct content", () => {
    const { getByText } = render(
      <DxcTable>
        <tr>
          <th>header-1</th>
          <th>header-2</th>
          <th>header-3</th>
        </tr>
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
      </DxcTable>
    );
    expect(getByText("header-1")).toBeTruthy();
    expect(getByText("header-2")).toBeTruthy();
    expect(getByText("header-3")).toBeTruthy();
    expect(getByText("cell-1")).toBeTruthy();
    expect(getByText("cell-2")).toBeTruthy();
    expect(getByText("cell-3")).toBeTruthy();
    expect(getByText("cell-4")).toBeTruthy();
    expect(getByText("cell-5")).toBeTruthy();
    expect(getByText("cell-6")).toBeTruthy();
  });
});
