import { userEvent, within } from "@storybook/test";
import styled from "styled-components";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import preview from "../../.storybook/preview";
import { disabledRules } from "../../test/accessibility/rules/specific/resultset-table/disabledRules";
import DxcResultsetTable from "./ResultsetTable";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Resultset Table",
  component: DxcResultsetTable,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...disabledRules.map((ruleId) => ({ id: ruleId, reviewOnFail: true })),
          ...preview?.parameters?.a11y?.config?.rules,
        ],
      },
    },
  },
} as Meta<typeof DxcResultsetTable>;

const deleteIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const columns = [{ displayValue: "Id" }, { displayValue: "Name" }, { displayValue: "City" }];

const rows = [
  [{ displayValue: "001" }, { displayValue: "Peter" }, { displayValue: "Miami" }],
  [{ displayValue: "002" }, { displayValue: "Louis" }, { displayValue: "London" }],
  [{ displayValue: "003" }, { displayValue: "Lana" }, { displayValue: "Amsterdam" }],
  [{ displayValue: "004" }, { displayValue: "Rick" }, { displayValue: "London" }],
  [{ displayValue: "005" }, { displayValue: "Mark" }, { displayValue: "Miami" }],
  [{ displayValue: "006" }, { displayValue: "Cris" }, { displayValue: "Paris" }],
];

const actions = [
  {
    title: "icon",
    onClick: (value?: string) => {
      console.log(value);
    },
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
    icon: "filled_edit",
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

const rowsIcon = [
  [
    { displayValue: "001", sortValue: "001" },
    { displayValue: "Peter" },
    {
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
    },
  ],
  [
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis" },
    {
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
    },
  ],
  [
    { displayValue: "003", sortValue: "003" },
    { displayValue: "Mark" },
    {
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
    },
  ],
];

const columnsSortable = [
  { displayValue: "Id", isSortable: true },
  { displayValue: "Name", isSortable: true },
  { displayValue: "City", isSortable: false },
];

const longValues = [
  [
    { displayValue: "000000000000000001", sortValue: "000000000000000001" },
    { displayValue: "Peter Larsson González", sortValue: "Peter" },
    { displayValue: "Miami: The city that never sleeps", sortValue: "Miami" },
  ],
  [
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
  ],
  [
    { displayValue: "003", sortValue: "003" },
    { displayValue: "Aida", sortValue: "Aida" },
    { displayValue: "Wroclaw", sortValue: "Wroclaw" },
  ],
];

const rowsSortable = [
  [
    { displayValue: "001", sortValue: "001" },
    { displayValue: "Peter", sortValue: "Peter" },
    { displayValue: "Miami", sortValue: "Miami" },
  ],
  [
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
  ],
  [
    { displayValue: "003", sortValue: "003" },
    { displayValue: "Aida", sortValue: "Aida" },
    { displayValue: "Wroclaw", sortValue: "Wroclaw" },
  ],
  [
    { displayValue: "004", sortValue: "004" },
    { displayValue: "Lana", sortValue: "Lana" },
    { displayValue: "Amsterdam", sortValue: "Amsterdam" },
  ],
];

const rowsSortableMissingSortValues = [
  [{ displayValue: "001" }, { displayValue: "Peter" }, { displayValue: "Miami" }],
  [{ displayValue: "002" }, { displayValue: "Louis" }, { displayValue: "London" }],
  [
    { displayValue: "003", sortValue: "003" },
    { displayValue: "Aida", sortValue: "Aida" },
    { displayValue: "Wroclaw", sortValue: "Wroclaw" },
  ],
  [
    { displayValue: "004", sortValue: "004" },
    { displayValue: "Lana", sortValue: "Lana" },
    { displayValue: "Amsterdam", sortValue: "Amsterdam" },
  ],
];

const longColumns = [
  { displayValue: "Column1" },
  { displayValue: "Column2" },
  { displayValue: "Column3" },
  { displayValue: "Column4" },
  { displayValue: "Column5" },
  { displayValue: "Column6" },
  { displayValue: "Column7" },
  { displayValue: "Column8" },
  { displayValue: "Column9" },
  { displayValue: "Column10" },
  { displayValue: "Column11" },
  { displayValue: "Column12" },
  { displayValue: "Column13" },
  { displayValue: "Column14" },
  { displayValue: "Column15" },
  { displayValue: "Column16" },
  { displayValue: "Column17" },
  { displayValue: "Column18" },
  { displayValue: "Column19" },
  { displayValue: "Column20" },
];

const longRows = [
  [
    { displayValue: "001", sortValue: "001" },
    { displayValue: "Peter", sortValue: "Peter" },
    { displayValue: "Miami", sortValue: "Miami" },
    { displayValue: "001", sortValue: "001" },
    { displayValue: "Peter", sortValue: "Peter" },
    { displayValue: "Miami", sortValue: "Miami" },
    { displayValue: "Miami", sortValue: "Miami" },
    { displayValue: "001", sortValue: "001" },
    { displayValue: "Peter", sortValue: "Peter" },
    { displayValue: "Miami", sortValue: "Miami" },
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "London", sortValue: "London" },
  ],
  [
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "London", sortValue: "London" },
  ],
  [
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "002", sortValue: "002" },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "London", sortValue: "London" },
  ],
];

const SmallContainer = styled.div`
  width: 500px;
`;

const ResultsetTable = () => (
  <>
    <ExampleContainer>
      <Title title="Sortable table" theme="light" level={4} />
      <DxcResultsetTable columns={columnsSortable} rows={rowsSortable} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Sortable table with missing sortValues" theme="light" level={4} />
      <DxcResultsetTable columns={columnsSortable} rows={rowsSortableMissingSortValues} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With action" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rowsIcon} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With items per page option" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={2} itemsPerPageOptions={[2, 3]} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Scroll resultset table" theme="light" level={4} />
      <DxcResultsetTable columns={longColumns} rows={longRows} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Without paginator" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} hidePaginator />
    </ExampleContainer>
    <ExampleContainer>
      <SmallContainer>
        <Title title="Small container and text overflow" theme="light" level={4} />
        <DxcResultsetTable columns={columnsSortable} rows={longValues} />
      </SmallContainer>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Reduced sortable table" theme="light" level={4} />
      <DxcResultsetTable columns={columnsSortable} rows={rowsSortable} mode="reduced" />
    </ExampleContainer>
    {/* PENDING SMALL ICON VERSION */}
    <ExampleContainer>
      <Title title="Reduced with items per page option" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={2} itemsPerPageOptions={[2, 3]} mode="reduced" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Reduced scroll resultset table" theme="light" level={4} />
      <DxcResultsetTable columns={longColumns} rows={longRows} mode="reduced" />
    </ExampleContainer>
    <ExampleContainer>
      <SmallContainer>
        <Title title="Reduced small container and text overflow" theme="light" level={4} />
        <DxcResultsetTable columns={columnsSortable} rows={longValues} mode="reduced" />
      </SmallContainer>
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"xxsmall"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"xsmall"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"small"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"medium"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"large"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"xlarge"} />
    </ExampleContainer>
    <ExampleContainer expanded>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"xxlarge"} />
    </ExampleContainer>
  </>
);

const ResultsetTableAsc = () => (
  <ExampleContainer>
    <Title title="Ascendant sorting" theme="light" level={4} />
    <DxcResultsetTable columns={columnsSortable} rows={rowsSortable} />
    <DxcResultsetTable columns={columnsSortable} rows={rowsSortableMissingSortValues} />
  </ExampleContainer>
);

const ResultsetTableDesc = () => (
  <ExampleContainer>
    <Title title="Descendant sorting" theme="light" level={4} />
    <DxcResultsetTable columns={columnsSortable} rows={rowsSortable} />
    <DxcResultsetTable columns={columnsSortable} rows={rowsSortableMissingSortValues} />
  </ExampleContainer>
);

const ResultsetTableMiddle = () => (
  <ExampleContainer>
    <Title title="Middle page" theme="light" level={4} />
    <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={2} />
  </ExampleContainer>
);

const ResultsetTableLast = () => (
  <ExampleContainer>
    <Title title="Last page" theme="light" level={4} />
    <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={2} />
  </ExampleContainer>
);

const ResultsetActionsCellDropdown = () => (
  <ExampleContainer>
    <Title title="Dropdown Action" theme="light" level={4} />
    <DxcResultsetTable columns={columns} rows={rowsIcon} itemsPerPage={2} />
  </ExampleContainer>
);

type Story = StoryObj<typeof DxcResultsetTable>;

export const Chromatic: Story = {
  render: ResultsetTable,
};

export const AscendentSorting: Story = {
  render: ResultsetTableAsc,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const idHeader = canvas.getAllByRole("button")[0];
    const idHeader2 = canvas.getAllByRole("button")[2];
    idHeader && (await userEvent.click(idHeader));
    idHeader2 && (await userEvent.click(idHeader2));
  },
};

export const DescendantSorting: Story = {
  render: ResultsetTableDesc,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameHeader = canvas.getAllByRole("button")[1];
    const nameHeader2 = canvas.getAllByRole("button")[3];
    nameHeader && (await userEvent.click(nameHeader));
    nameHeader && (await userEvent.click(nameHeader));
    nameHeader2 && (await userEvent.click(nameHeader2));
    nameHeader2 && (await userEvent.click(nameHeader2));
  },
};

export const MiddlePage: Story = {
  render: ResultsetTableMiddle,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nextButton = canvas.getAllByRole("button")[2];
    nextButton && (await userEvent.click(nextButton));
  },
};

export const LastPage: Story = {
  render: ResultsetTableLast,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nextButton = canvas.getAllByRole("button")[3];
    nextButton && (await userEvent.click(nextButton));
  },
};

export const DropdownAction: Story = {
  render: ResultsetActionsCellDropdown,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown = canvas.getAllByRole("button")[5];
    dropdown && userEvent.click(dropdown);
  },
};
