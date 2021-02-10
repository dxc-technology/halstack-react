import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcResultsetTable from "../src/resultsetTable/ResultsetTable";

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
  }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  ],
];

describe("ResultsetTable component tests", () => {
  test("ResultsetTable rendered correctly", () => {
    const { getByText } = render(<DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResultsetTable>);
    expect(getByText("Peter")).toBeTruthy();
  });
  test("Resultsettable shows as many rows as itemsPerPage", () => {
    const { getAllByRole } = render(
      <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResultsetTable>
    );
    expect(getAllByRole("row").length-1).toEqual(3);
  });

  test("Resultsettable shows rows on second page", () => {
    const { getByText, getAllByRole } = render(
      <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResultsetTable>
    );
    expect(getByText("Peter")).toBeTruthy();
    expect(getByText("Louis")).toBeTruthy();
    expect(getByText("Lana")).toBeTruthy();
    expect(getAllByRole("row").length-1).toEqual(3);
    const nextButton = getAllByRole("button")[2];
    fireEvent.click(nextButton);
    expect(getByText("4 to 6 of 10")).toBeTruthy();
    expect(getByText("Page: 2 of 4")).toBeTruthy();
    expect(getByText("Rick")).toBeTruthy();
    expect(getByText("Mark")).toBeTruthy();
    expect(getByText("Cris")).toBeTruthy();
    expect(getAllByRole("row").length-1).toEqual(3);
  });

  test("Resultsettable going to the last page shows only one row", () => {
    const { getByText, getAllByRole } = render(
      <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResultsetTable>
    );
    const lastButton = getAllByRole("button")[3];
    fireEvent.click(lastButton);
    expect(getByText("10 to 10 of 10")).toBeTruthy();
    expect(getByText("Page: 4 of 4")).toBeTruthy();
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
    const {queryByText, rerender} = render(<DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResultsetTable>);
    expect(queryByText("Peter")).toBeTruthy();
    rerender(<DxcResultsetTable columns={columns} rows={rows2} itemsPerPage={3}></DxcResultsetTable>);
    expect(queryByText("1 to 3 of 3")).toBeTruthy();
  });

  test("Resultsettable change itemsPerPage should go to first page", () => {
    const {getAllByRole, queryByText, rerender} = render(<DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResultsetTable>);
    const lastButton = getAllByRole("button")[3];
    fireEvent.click(lastButton);
    expect(getAllByRole("row").length-1).toEqual(1);
    expect(queryByText("Page: 4 of 4")).toBeTruthy();
    rerender(<DxcResultsetTable columns={columns} rows={rows} itemsPerPage={6}></DxcResultsetTable>);
    expect(getAllByRole("row").length-1).toEqual(6);
    expect(queryByText("Page: 1 of 2")).toBeTruthy();
  });
});
