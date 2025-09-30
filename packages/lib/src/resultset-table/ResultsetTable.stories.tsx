import styled from "@emotion/styled";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import disabledRules from "../../test/accessibility/rules/specific/resultset-table/disabledRules";
import preview from "../../.storybook/preview";
import DxcResultsetTable from "./ResultsetTable";
import DxcFlex from "../flex/Flex";
import { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "storybook/internal/test";

export default {
  title: "Resultset Table",
  component: DxcResultsetTable,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...(preview?.parameters?.a11y?.config?.rules || []),
          ...disabledRules.map((ruleId) => ({ id: ruleId, enabled: false })),
        ],
      },
    },
  },
} satisfies Meta<typeof DxcResultsetTable>;

const deleteIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const columns = [
  {
    displayValue: (
      <DxcFlex grow={1} justifyContent="flex-end">
        Id
      </DxcFlex>
    ),
  },
  {
    displayValue: "Name",
  },
  { displayValue: "City" },
];
const rows = [
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          001
        </DxcFlex>
      ),
    },
    { displayValue: "Peter" },
    { displayValue: "Miami" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
    },
    { displayValue: "Louis" },
    { displayValue: "London" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          003
        </DxcFlex>
      ),
    },
    { displayValue: "Lana" },
    { displayValue: "Amsterdam" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          004
        </DxcFlex>
      ),
    },
    { displayValue: "Rick" },
    { displayValue: "London" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          005
        </DxcFlex>
      ),
    },
    { displayValue: "Mark" },
    { displayValue: "Miami" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          006
        </DxcFlex>
      ),
    },
    { displayValue: "Cris" },
    { displayValue: "Paris" },
  ],
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
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          001
        </DxcFlex>
      ),
      sortValue: "001",
    },
    { displayValue: "Peter" },
    {
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
    },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis" },
    {
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
    },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          003
        </DxcFlex>
      ),
      sortValue: "003",
    },
    { displayValue: "Mark" },
    {
      displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
    },
  ],
];

const columnsSortable = [
  {
    displayValue: (
      <DxcFlex grow={1} justifyContent="flex-end">
        Id
      </DxcFlex>
    ),
    isSortable: true,
  },
  {
    displayValue: "Name",
    isSortable: true,
  },
  { displayValue: "City", isSortable: false },
];

const longValues = [
  [
    { displayValue: "000000000000000001", sortValue: "000000000000000001" },
    { displayValue: "Peter Larsson González", sortValue: "Peter" },
    { displayValue: "Miami: The city that never sleeps", sortValue: "Miami" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          003
        </DxcFlex>
      ),
      sortValue: "003",
    },
    { displayValue: "Aida", sortValue: "Aida" },
    { displayValue: "Wroclaw", sortValue: "Wroclaw" },
  ],
];

const rowsSortable = [
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          001
        </DxcFlex>
      ),
      sortValue: "001",
    },
    { displayValue: "Peter", sortValue: "Peter" },
    { displayValue: "Miami", sortValue: "Miami" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          003
        </DxcFlex>
      ),
      sortValue: "003",
    },
    { displayValue: "Aida", sortValue: "Aida" },
    { displayValue: "Wroclaw", sortValue: "Wroclaw" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          004
        </DxcFlex>
      ),
      sortValue: "004",
    },
    { displayValue: "Lana", sortValue: "Lana" },
    { displayValue: "Amsterdam", sortValue: "Amsterdam" },
  ],
];

const rowsSortableHuge = Array.from({ length: 250000 }, (_, i) =>
  rowsSortable.map((row) =>
    row.map((cell) => {
      const newVal = `${cell.sortValue}-${i + 1}`;
      return {
        displayValue: newVal,
        sortValue: newVal,
      };
    })
  )
).flat();

const rowsSortableMissingSortValues = [
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          001
        </DxcFlex>
      ),
    },
    { displayValue: "Peter" },
    { displayValue: "Miami" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
    },
    { displayValue: "Louis" },
    { displayValue: "London" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          003
        </DxcFlex>
      ),
      sortValue: "003",
    },
    { displayValue: "Aida", sortValue: "Aida" },
    { displayValue: "Wroclaw", sortValue: "Wroclaw" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          004
        </DxcFlex>
      ),
      sortValue: "004",
    },
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
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          001
        </DxcFlex>
      ),
      sortValue: "001",
    },
    { displayValue: "Peter", sortValue: "Peter" },
    { displayValue: "Miami", sortValue: "Miami" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          001
        </DxcFlex>
      ),
      sortValue: "001",
    },
    { displayValue: "Peter", sortValue: "Peter" },
    { displayValue: "Miami", sortValue: "Miami" },
    { displayValue: "Miami", sortValue: "Miami" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          001
        </DxcFlex>
      ),
      sortValue: "001",
    },
    { displayValue: "Peter", sortValue: "Peter" },
    { displayValue: "Miami", sortValue: "Miami" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "London", sortValue: "London" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "London", sortValue: "London" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "London", sortValue: "London" },
  ],
  [
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: "London", sortValue: "London" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
    { displayValue: "Louis", sortValue: "Louis" },
    { displayValue: "London", sortValue: "London" },
    {
      displayValue: (
        <DxcFlex grow={1} justifyContent="flex-end">
          002
        </DxcFlex>
      ),
      sortValue: "002",
    },
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
      <DxcResultsetTable columns={columns} rows={rows} margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer expanded>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin="xxlarge" />
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

const ResultsetVirtualized = () => (
  <ExampleContainer>
    <Title title="Virtualized table" theme="light" level={4} />
    <DxcResultsetTable
      columns={columnsSortable}
      rows={rowsSortableHuge}
      itemsPerPage={100000}
      virtualizedHeight={"500px"}
    />
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
    const idHeader = (await canvas.findAllByRole("button"))[0];
    const idHeader2 = (await canvas.findAllByRole("button"))[2];
    if (idHeader) {
      await userEvent.click(idHeader);
    }
    if (idHeader2) {
      await userEvent.click(idHeader2);
    }
  },
};

export const DescendantSorting: Story = {
  render: ResultsetTableDesc,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameHeader = (await canvas.findAllByRole("button"))[1];
    const nameHeader2 = (await canvas.findAllByRole("button"))[3];
    if (nameHeader) {
      await userEvent.click(nameHeader);
    }
    if (nameHeader) {
      await userEvent.click(nameHeader);
    }
    if (nameHeader2) {
      await userEvent.click(nameHeader2);
    }
    if (nameHeader2) {
      await userEvent.click(nameHeader2);
    }
  },
};

export const MiddlePage: Story = {
  render: ResultsetTableMiddle,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nextButton = (await canvas.findAllByRole("button"))[2];
    if (nextButton) {
      await userEvent.click(nextButton);
    }
  },
};

export const LastPage: Story = {
  render: ResultsetTableLast,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nextButton = (await canvas.findAllByRole("button"))[3];
    if (nextButton) {
      await userEvent.click(nextButton);
    }
  },
};

export const DropdownAction: Story = {
  render: ResultsetActionsCellDropdown,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown = (await canvas.findAllByRole("button"))[5];
    if (dropdown) {
      await userEvent.click(dropdown);
    }
  },
};

export const Virtualization: Story = {
  render: ResultsetVirtualized,
};
