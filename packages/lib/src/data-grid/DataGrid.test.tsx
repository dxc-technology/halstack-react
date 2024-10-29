import { render } from "@testing-library/react";
import DxcDataGrid from "./DataGrid";
import { GridColumn } from "./types";

const columns: GridColumn[] = [
  {
    key: "id",
    label: "ID",
    resizable: true,
    sortable: true,
    draggable: false,
    alignment: "left",
  },
  {
    key: "complete",
    label: " % Complete",
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
    (global as any).CSS = {
      escape: (str: string) => str,
    };
    window.HTMLElement.prototype.scrollIntoView = jest.fn;
  });
  test("Renders with correct content", async () => {
    const { getByText, getAllByRole } = await render(
      <DxcDataGrid columns={columns} rows={expandableRows} />
    );
    expect(getByText("46")).toBeTruthy();
    const rows = getAllByRole("row");
    expect(rows.length).toBe(5);
  });
});
