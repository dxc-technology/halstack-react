import { render } from "@testing-library/react";
import { axe, formatRules } from "../../test/accessibility/axe-helper";
import DxcResultsetTable from "./ResultsetTable";

// TODO: REMOVE
import rules from "../../test/accessibility/rules/specific/resultset-table/disabledRules";

const disabledRules = {
  rules: formatRules(rules),
};

const deleteIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const actions = [
  {
    title: "icon",
    onClick: () => {},
    options: [
      {
        value: "1",
        label: "Amazon with a very long text",
      },
      {
        value: "2",
        label: "Ebay",
      },
      {
        value: "3",
        label: "Apple",
      },
    ],
  },
  {
    icon: "https://www.freepnglogos.com/uploads/facebook-logo-design-1.png",
    title: "icon",
    onClick: () => {},
  },
  {
    icon: deleteIcon,
    title: "icon",
    onClick: () => {},
    disabled: true,
  },
  {
    icon: deleteIcon,
    title: "icon",
    onClick: () => {},
  },
];

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
    {
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
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
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
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
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
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
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
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
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
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
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
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
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
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
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
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
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
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
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
    },
  ],
];

describe("Resultset Table input component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcResultsetTable
        columns={columns}
        rows={rows}
        itemsPerPage={2}
        margin="medium"
        mode="default"
        itemsPerPageOptions={[2, 3]}
        showGoToPage
      />
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for reduced mode", async () => {
    const { container } = render(
      <DxcResultsetTable
        columns={columns}
        rows={rows}
        itemsPerPage={2}
        margin="medium"
        mode="reduced"
        itemsPerPageOptions={[2, 3]}
        showGoToPage
      />
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
});
