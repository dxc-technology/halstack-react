import { act, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcCheckbox from "../checkbox/Checkbox";
import DxcResultsetTable from "./ResultsetTable";

(global as any).globalThis = global;
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const icon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
  </svg>
);

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
  ],
];

const rowsMissingSortValues = [
  [
    {
      displayValue: "001",
    },
    {
      displayValue: "Peter",
    },
    {
      displayValue: "Oviedo",
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
  ],
  [
    {
      displayValue: "003",
    },
    {
      displayValue: "Lana",
    },
    {
      displayValue: "Albacete",
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
    },
    {
      displayValue: "Mark",
    },
    {
      displayValue: "Madrid",
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
  ],
  [
    {
      displayValue: "007",
    },
    {
      displayValue: "Susan",
    },
    {
      displayValue: "Madrid",
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
    },
    {
      displayValue: "Kevin",
    },
    {
      displayValue: "Oviedo",
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
  ],
];

const columnsWithCheckbox = [
  { displayValue: "Id", isSortable: true },
  { displayValue: "Checkbox", isSortable: false },
  { displayValue: "Name", isSortable: false },
  { displayValue: "City", isSortable: false },
];

const rowsWithCheckbox = [
  [
    { displayValue: "001", sortValue: "001" },
    {
      displayValue: <DxcCheckbox size="fillParent" defaultChecked />,
    },
    { displayValue: "Peter" },
    { displayValue: "Miami" },
  ],
  [
    { displayValue: "002", sortValue: "002" },
    {
      displayValue: <DxcCheckbox size="fillParent" />,
    },
    { displayValue: "Louis" },
    { displayValue: "London" },
  ],
  [
    { displayValue: "003", sortValue: "003" },
    {
      displayValue: <DxcCheckbox size="fillParent" />,
    },
    { displayValue: "Lana" },
    { displayValue: "Amsterdam" },
  ],
];

const rows2 = [...rows].slice(0, -1);

describe("Resultset table component tests", () => {
  test("Resultset table rendered correctly", () => {
    const { getByText } = render(<DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3} />);
    expect(getByText("Peter")).toBeTruthy();
  });

  test("Resultset table shows as many rows as itemsPerPage", () => {
    const { getAllByRole } = render(<DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3} />);
    expect(getAllByRole("row").length - 1).toEqual(3);
  });

  test("Resultset table shows rows on second page", () => {
    const { getByText, getAllByRole } = render(<DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3} />);
    expect(getByText("Peter")).toBeTruthy();
    expect(getByText("Louis")).toBeTruthy();
    expect(getByText("Lana")).toBeTruthy();
    expect(getAllByRole("row").length - 1).toEqual(3);
    const nextButton = getAllByRole("button")[3];
    if (nextButton) {
      fireEvent.click(nextButton);
    }
    expect(getByText("4 to 6 of 10")).toBeTruthy();
    expect(getByText("Rick")).toBeTruthy();
    expect(getByText("Mark")).toBeTruthy();
    expect(getByText("Cris")).toBeTruthy();
    expect(getAllByRole("row").length - 1).toEqual(3);
  });

  test("Resultset table goToPage works as expected", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const { getByText, getAllByRole } = render(
      <DxcResultsetTable columns={columns} showGoToPage rows={rows} itemsPerPage={3} />
    );
    expect(getByText("Peter")).toBeTruthy();
    expect(getByText("Louis")).toBeTruthy();
    expect(getByText("Lana")).toBeTruthy();
    expect(getAllByRole("row").length - 1).toEqual(3);
    const goToPageSelect = getAllByRole("button")[3];
    if (goToPageSelect) {
      userEvent.click(goToPageSelect);
    }
    const goToPageOption = getByText("2");
    userEvent.click(goToPageOption);
    expect(getByText("4 to 6 of 10")).toBeTruthy();
    expect(getByText("Rick")).toBeTruthy();
    expect(getByText("Mark")).toBeTruthy();
    expect(getByText("Cris")).toBeTruthy();
    expect(getAllByRole("row").length - 1).toEqual(3);
  });

  test("Resultset table going to the last page shows only one row", () => {
    const { getByText, getAllByRole } = render(<DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3} />);
    const lastButton = getAllByRole("button")[4];
    if (lastButton) {
      fireEvent.click(lastButton);
    }
    expect(getByText("10 to 10 of 10")).toBeTruthy();
    expect(getAllByRole("row")).toHaveLength(2);
    expect(getByText("Cosmin")).toBeTruthy();
  });

  test("Resultset table sort rows by column", () => {
    const component = render(<DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3} />);
    const name = component.queryByText("Name");
    expect(component.queryByText("Peter")).toBeTruthy();
    if (name) {
      fireEvent.click(name);
    }
    expect(component.queryByText("Tina")).not.toBeTruthy();
    expect(component.queryByText("Cosmin")).toBeTruthy();

    if (name) {
      fireEvent.click(name);
    }
    expect(component.queryByText("Tina")).toBeTruthy();
    expect(component.queryByText("Cosmin")).not.toBeTruthy();
  });

  test("Resultset table sort rows by column even if they are missing sortValues", () => {
    const component = render(<DxcResultsetTable columns={columns} rows={rowsMissingSortValues} itemsPerPage={3} />);
    const name = component.queryByText("Name");
    expect(component.queryByText("Peter")).toBeTruthy();
    if (name) {
      fireEvent.click(name);
    }
    expect(component.queryByText("Tina")).not.toBeTruthy();
    expect(component.queryByText("Cosmin")).toBeTruthy();

    if (name) {
      fireEvent.click(name);
    }
    expect(component.queryByText("Tina")).toBeTruthy();
    expect(component.queryByText("Cosmin")).not.toBeTruthy();
  });

  test("Resultset table should go one page back when removing the last page data", () => {
    const { getAllByRole, queryByText, rerender } = render(
      <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3} />
    );
    expect(queryByText("1 to 3 of 10")).toBeTruthy();
    const lastButton = getAllByRole("button")[4];
    expect(queryByText("Peter")).toBeTruthy();
    if (lastButton) {
      fireEvent.click(lastButton);
    }
    expect(queryByText("10 to 10 of 10")).toBeTruthy();
    rerender(<DxcResultsetTable columns={columns} rows={rows2} itemsPerPage={3} />);
    expect(queryByText("7 to 9 of 9")).toBeTruthy();
  });

  test("Resultset table shouldn't go one page back when there is data left in the last page", () => {
    const { getAllByRole, queryByText, rerender } = render(
      <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={2} />
    );
    expect(queryByText("1 to 2 of 10")).toBeTruthy();
    const lastButton = getAllByRole("button")[4];
    expect(queryByText("Peter")).toBeTruthy();
    if (lastButton) {
      fireEvent.click(lastButton);
    }
    expect(queryByText("9 to 10 of 10")).toBeTruthy();
    rerender(<DxcResultsetTable columns={columns} rows={rows2} itemsPerPage={2} />);
    expect(queryByText("9 to 9 of 9")).toBeTruthy();
  });

  test("Resultset table uncontrolled components maintain its value when sorting", () => {
    const { getAllByRole } = render(
      <DxcResultsetTable columns={columnsWithCheckbox} rows={rowsWithCheckbox} itemsPerPage={3} />
    );
    const columnHeader = getAllByRole("columnheader")[0];
    const sortButton = getAllByRole("button")[0];

    expect(getAllByRole("checkbox")[0]?.getAttribute("aria-checked")).toBe("true");

    expect(columnHeader?.getAttribute("aria-sort")).toBe("none");

    if (sortButton) {
      fireEvent.click(sortButton);
    }

    expect(columnHeader?.getAttribute("aria-sort")).toBe("ascending");

    if (sortButton) {
      fireEvent.click(sortButton);
    }

    expect(columnHeader?.getAttribute("aria-sort")).toBe("descending");

    expect(getAllByRole("checkbox")[0]?.getAttribute("aria-checked")).toBe("false");
  });

  test("Resultset table change itemsPerPage should go to first page", () => {
    const { getAllByRole } = render(
      <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={3} itemsPerPageOptions={[2, 3]} />
    );
    const lastButton = getAllByRole("button")[4];
    expect(getAllByRole("row").length - 1).toEqual(3);
    if (lastButton) {
      fireEvent.click(lastButton);
    }
    expect(getAllByRole("row").length - 1).toEqual(1);
  });

  test("Resultset table may not use the paginator", () => {
    const { getAllByRole } = render(<DxcResultsetTable columns={columns} rows={rows} hidePaginator />);
    const nextButton = getAllByRole("button")[3];
    expect(nextButton).not.toBeTruthy();
  });

  test("Resultset table with ActionsCell", () => {
    const onSelectOption = jest.fn();
    const onClick = jest.fn();
    const actions = [
      {
        title: "icon1",
        onClick: onSelectOption,
        options: [
          {
            value: "1",
            label: "Amazon",
          },
          {
            value: "2",
            label: "Ebay",
          },
          {
            value: "3",
            label: "Aliexpress",
          },
        ],
      },
      {
        icon,
        title: "icon2",
        onClick,
      },
    ];
    const actionRows = [
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
          displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
          sortValue: "Actions",
        },
      ],
    ];
    const { getAllByRole, getByRole, getByText } = render(
      <DxcResultsetTable columns={columns} rows={actionRows} itemsPerPage={3} />
    );
    const dropdown = getAllByRole("button")[2];
    act(() => {
      if (dropdown) {
        userEvent.click(dropdown);
      }
    });
    expect(getByRole("menu")).toBeTruthy();
    const option = getByText("Aliexpress");
    userEvent.click(option);
    expect(onSelectOption).toHaveBeenCalledWith("3");
    const action = getAllByRole("button")[1];
    if (action) {
      userEvent.click(action);
    }
    expect(onClick).toHaveBeenCalled();
  });
});
