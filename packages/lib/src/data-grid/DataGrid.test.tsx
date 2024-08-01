import { findAllByRole, fireEvent, getAllByRole, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcDataGrid from "./DataGrid";
import { screen } from "@storybook/test";
import { GridColumn } from "./types";

const columns: GridColumn[] = [
  {
    key: "id",
    name: "ID",
    resizable: true,
    sortable: true,
    draggable: false,
    alignment: "left",
  },
  {
    key: "complete",
    name: " % Complete",
    resizable: true,
    sortable: true,
    draggable: true,
  },
];

const expandableRows = [
  {
    id: 1,
    complete: 46,
    expandedContent: <div> Custom content 1</div>,
  },
  {
    id: 2,
    complete: 51,
    expandedContent: <div> Custom content 2</div>,
  },
  {
    id: 3,
    complete: 40,
    expandedContent: <div> Custom content 3</div>,
  },
  {
    id: 4,
    complete: 10,
    expandedContent: <div> Custom content 4</div>,
  },
  {
    id: 5,
    complete: 1,
    expandedContent: <div> Custom content 5</div>,
  },
];

describe("Data grid component tests", () => {
  beforeAll(() => {
    global.CSS = {
      escape: (str) => str,
    };
    window.HTMLElement.prototype.scrollIntoView = jest.fn;
  });
  test("Renders with correct content", async () => {
    const { getByText, getAllByRole } = await render(<DxcDataGrid columns={columns} rows={expandableRows} />);
    expect(getByText("46")).toBeTruthy();
    const rows = getAllByRole("row");
    expect(rows.length).toBe(5);
  });
  // test("Content is sorted correctly", async () => {
  //   const { getByText, getAllByRole } = await render(<DxcDataGrid columns={columns} rows={expandableRows} />);
  //   expect(getByText("% Complete")).toBeTruthy();
  //   const headerCell = screen.getAllByRole("columnheader")[1];
  //   expect(getAllByRole("gridcell")[0].textContent).toBe("1");
  //   expect(headerCell.textContent).toBe(" % Complete");
  //   await fireEvent.click(headerCell);
  //   expect(headerCell.getAttribute("aria-sort")).toBe("ascending");
  //   expect(getByText("5")).toBeTruthy();
  //   // await waitFor(() => expect(getAllByRole("gridcell")[0].textContent).toBe("4"));
  //   //waitFor(() => expect(getAllByRole("gridcell").length).toBe(8));
  // });
});
