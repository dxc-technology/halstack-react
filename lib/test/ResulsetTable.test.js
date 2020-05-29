import React from "react";
import { render, fireEvent} from "@testing-library/react";
import DxcResulsetTable from "../src/resulsetTable/ResulsetTable";

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
    {
      displayValue: "Actions",
      isSortable: true,
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
      {
        displayValue: (
          <DxcButton
            mode="flat"
            iconSrc={deleteIcon}
            onClick={() => console.log("Clicked")}
          />
        ),
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
      {
        displayValue: <DxcButton mode="flat" iconSrc={deleteIcon} />,
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
      {
        displayValue: <DxcButton mode="flat" iconSrc={deleteIcon} />,
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
      {
        displayValue: <DxcButton mode="flat" iconSrc={deleteIcon} />,
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
      {
        displayValue: <DxcButton mode="flat" iconSrc={deleteIcon} />,
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
      {
        displayValue: <DxcButton mode="flat" iconSrc={deleteIcon} />,
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


describe("ResulsetTable component tests", () => {
    
  test("ResulsetTable rendered correctly", () => {
    const { getByText } = render(<DxcResulsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResulsetTable>);
    expect(getByText("Peter")).toBeTruthy();
  });
  test("Resulsettable shows as many rows as itemsPerPage", () => {
    const { getByText, queryByText } = render(
      <DxcResulsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResulsetTable>
    );
    expect(getByText("Peter")).toBeTruthy();
    expect(queryByText("Rick")).toBeFalsy();
  });

  test("Resulsettable shows rows on second page", () => {
    const {getByText, getAllByRole} = render(
      <DxcResulsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResulsetTable>
    );
    expect(getByText("Peter")).toBeTruthy();
    expect(getByText("Louis")).toBeTruthy();
    expect(getByText("Lana")).toBeTruthy();
     const nextButton = getAllByRole("button")[2];
     fireEvent.click(nextButton);
     expect(getByText("4 to 6 of 10")).toBeTruthy();
     expect(getByText("Page: 2 of 4")).toBeTruthy();
     expect(getByText("Rick")).toBeTruthy();
     expect(getByText("Mark")).toBeTruthy();
     expect(getByText("Cris")).toBeTruthy();
  });

  test("Resulsettable going to the last page shows only one row", () => {
    const {getByText, getAllByRole} = render(
      <DxcResulsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResulsetTable>
    );
     const lastButton = getAllByRole("button")[3];
     fireEvent.click(lastButton);
     expect(getByText("10 to 10 of 10")).toBeTruthy();
     expect(getByText("Page: 4 of 4")).toBeTruthy();
     expect(getAllByRole("row")).toHaveLength(2);
     expect(getByText("Cosmin")).toBeTruthy();
  });


  test("Resulsettable sort rows by column", () => {
    const component = render(
      <DxcResulsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResulsetTable>
    );
    expect(component.queryByText("Peter")).toBeTruthy();
    fireEvent.click(component.queryByText("Name"));
    expect(component.queryByText("Tina")).not.toBeTruthy();
    expect(component.queryByText("Cosmin")).toBeTruthy();

    fireEvent.click(component.queryByText("Name"));
    expect(component.queryByText("Tina")).toBeTruthy();
    expect(component.queryByText("Cosmin")).not.toBeTruthy();
  });

  test("Resulsettable filtering by name", () => {
    const { getByRole, queryByText } = render(
      <DxcResulsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResulsetTable>
    );
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "lan" } });
    expect(queryByText("Lana")).toBeTruthy();
    expect(queryByText("Cosmin")).not.toBeTruthy();

  });

  test("Resulsettable filtering with no results", () => {
    const { getByRole, queryByText } = render(
      <DxcResulsetTable columns={columns} rows={rows} itemsPerPage={3}></DxcResulsetTable>
    );
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "lans" } });
    expect(queryByText("No records found")).toBeTruthy();

  });
});
