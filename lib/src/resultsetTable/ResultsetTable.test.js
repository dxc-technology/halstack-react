import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DxcResultsetTable from "./ResultsetTable";

// Mocking DOMRect for Radix Primitive Popover
global.globalThis = global;
global.ResizeObserver = class ResizeObserver {
  constructor(cb) {
    this.cb = cb;
  }
  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }
  unobserve() {}
};

global.DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};

const columns = [
  {
    displayValue: "Id",
    isSortable: false,
  },
  {
    displayValue: "Name",
    isSortable: true,
  },
  {
    displayValue: "City",
    isSortable: false,
  },
];

const rows = [
  [
    {
      displayValue: "001",
      sortValue: "001",
    },
    {
      displayValue: "Peter",
      sortValue: "Peter",
    },
    {
      displayValue: "Oviedo",
      sortValue: "Oviedo",
    },
  ],
  [
    {
      displayValue: "002",
      sortValue: "002",
    },
    {
      displayValue: "Louis",
      sortValue: "Louis",
    },
    {
      displayValue: "Oviedo",
      sortValue: "Oviedo",
    },
    {
      displayValue: "",
    },
  ],
  [
    {
      displayValue: "003",
      sortValue: "003",
    },
    {
      displayValue: "Lana",
      sortValue: "Lana",
    },
    {
      displayValue: "Albacete",
      sortValue: "Albacete",
    },
  ],
  [
    {
      displayValue: "004",
      sortValue: "004",
    },
    {
      displayValue: "Rick",
      sortValue: "Rick",
    },
    {
      displayValue: "Albacete",
      sortValue: "Albacete",
    },
  ],
  [
    {
      displayValue: "005",
      sortValue: "005",
    },
    {
      displayValue: "Mark",
      sortValue: "Mark",
    },
    {
      displayValue: "Madrid",
      sortValue: "Madrid",
    },
  ],
  [
    {
      displayValue: "006",
      sortValue: "006",
    },
    {
      displayValue: "Cris",
      sortValue: "Cris",
    },
    {
      displayValue: "Barcelona",
      sortValue: "Barcelona",
    },
    {
      displayValue: "",
    },
  ],
  [
    {
      displayValue: "007",
      sortValue: "007",
    },
    {
      displayValue: "Susan",
      sortValue: "Susan",
    },
    {
      displayValue: "Madrid",
      sortValue: "Madrid",
    },
  ],
  [
    {
      displayValue: "008",
      sortValue: "008",
    },
    {
      displayValue: "Tina",
      sortValue: "Tina",
    },
    {
      displayValue: "Barcelona",
      sortValue: "Barcelona",
    },
  ],
  [
    {
      displayValue: "009",
      sortValue: "009",
    },
    {
      displayValue: "Kevin",
      sortValue: "Kevin",
    },
    {
      displayValue: "Oviedo",
      sortValue: "Oviedo",
    },
    {
      displayValue: "",
    },
  ],
  [
    {
      displayValue: "010",
      sortValue: "010",
    },
    {
      displayValue: "Cosmin",
      sortValue: "Cosmin",
    },
    {
      displayValue: "Barcelona",
      sortValue: "Barcelona",
    },
    {
      displayValue: "",
    },
  ],
];

const rows2 = [
  [
    {
      displayValue: "546",
      sortValue: "465",
    },
    {
      displayValue: "OtherValue",
      sortValue: "OtherValue",
    },
    {
      displayValue: "OtherValue",
      sortValue: "OtherValue",
    },
  ],
  [
    {
      displayValue: "978",
      sortValue: "465",
    },
    {
      displayValue: "OtherValue",
      sortValue: "OtherValue",
    },
    {
      displayValue: "OtherValue",
      sortValue: "OtherValue",
    },
    {
      displayValue: "",
    },
  ],
  [
    {
      displayValue: "678",
      sortValue: "344",
    },
    {
      displayValue: "OtherValue",
      sortValue: "OtherValue",
    },
    {
      displayValue: "OtherValue",
      sortValue: "OtherValue",
    },
  ],
];

describe("ResultsetTable component tests", () => {
  test("ResultsetTable rendered correctly", () => {
    const { getByText } = render(
      <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResultsetTable>
    );
    expect(getByText("Peter")).toBeTruthy();
  });
  test("Resultsettable shows as many rows as itemsPerPage", () => {
    const { getAllByRole } = render(
      <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResultsetTable>
    );
    expect(getAllByRole("row").length - 1).toEqual(3);
  });

  test("Resultsettable shows rows on second page", () => {
    const { getByText, getAllByRole } = render(
      <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResultsetTable>
    );
    expect(getByText("Peter")).toBeTruthy();
    expect(getByText("Louis")).toBeTruthy();
    expect(getByText("Lana")).toBeTruthy();
    expect(getAllByRole("row").length - 1).toEqual(3);
    const nextButton = getAllByRole("button")[2];
    fireEvent.click(nextButton);
    expect(getByText("4 to 6 of 10")).toBeTruthy();
    // expect(getByText("Page: 2 of 4")).toBeTruthy();
    expect(getByText("Rick")).toBeTruthy();
    expect(getByText("Mark")).toBeTruthy();
    expect(getByText("Cris")).toBeTruthy();
    expect(getAllByRole("row").length - 1).toEqual(3);
  });

  test("Resultsettable goToPage works as expected", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const { getByText, getAllByRole, getByRole } = render(
      <DxcResultsetTable columns={columns} showGoToPage={true} rows={rows} itemsPerPage={3}></DxcResultsetTable>
    );
    expect(getByText("Peter")).toBeTruthy();
    expect(getByText("Louis")).toBeTruthy();
    expect(getByText("Lana")).toBeTruthy();
    expect(getAllByRole("row").length - 1).toEqual(3);
    const goToPageSelect = getAllByRole("button")[2];
    act(() => {
      userEvent.click(goToPageSelect);
    });
    const goToPageOption = getByText("2");
    act(() => {
      userEvent.click(goToPageOption);
    });

    expect(getByText("4 to 6 of 10")).toBeTruthy();
    expect(getByText("Rick")).toBeTruthy();
    expect(getByText("Mark")).toBeTruthy();
    expect(getByText("Cris")).toBeTruthy();
    expect(getAllByRole("row").length - 1).toEqual(3);
  });

  test("Resultsettable going to the last page shows only one row", () => {
    const { getByText, getAllByRole } = render(
      <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResultsetTable>
    );
    const lastButton = getAllByRole("button")[3];
    fireEvent.click(lastButton);
    expect(getByText("10 to 10 of 10")).toBeTruthy();
    expect(getAllByRole("row")).toHaveLength(2);
    expect(getByText("Cosmin")).toBeTruthy();
  });

  test("Resultsettable sort rows by column", () => {
    const component = render(<DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResultsetTable>);
    expect(component.queryByText("Peter")).toBeTruthy();
    fireEvent.click(component.queryByText("Name"));
    expect(component.queryByText("Tina")).not.toBeTruthy();
    expect(component.queryByText("Cosmin")).toBeTruthy();

    fireEvent.click(component.queryByText("Name"));
    expect(component.queryByText("Tina")).toBeTruthy();
    expect(component.queryByText("Cosmin")).not.toBeTruthy();
  });
  test("Resultsettable change rows should go to first page", () => {
    const { queryByText, rerender } = render(
      <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResultsetTable>
    );
    expect(queryByText("Peter")).toBeTruthy();
    rerender(<DxcResultsetTable columns={columns} rows={rows2} itemsPerPage={3}></DxcResultsetTable>);
    expect(queryByText("1 to 3 of 3")).toBeTruthy();
  });

  test("Resultsettable change itemsPerPage should go to first page", () => {
    const { getAllByRole, queryByText, rerender } = render(
      <DxcResultsetTable
        columns={columns}
        rows={rows}
        itemsPerPage={3}
        itemsPerPageOptions={[2, 3]}
      ></DxcResultsetTable>
    );
    const lastButton = getAllByRole("button")[3];
    fireEvent.click(lastButton);
    expect(getAllByRole("row").length - 1).toEqual(1);
    rerender(<DxcResultsetTable columns={columns} rows={rows} itemsPerPage={6}></DxcResultsetTable>);
    expect(getAllByRole("row").length - 1).toEqual(6);
    expect(queryByText("Peter")).toBeTruthy();
  });
});
