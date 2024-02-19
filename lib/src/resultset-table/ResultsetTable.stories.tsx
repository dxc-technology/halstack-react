import React from "react";
import DxcResultsetTable from "./ResultsetTable";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { userEvent, within } from "@storybook/testing-library";
import styled from "styled-components";

export default {
  title: "Resultset Table",
  component: DxcResultsetTable,
};

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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" />
      </svg>
    ),
    title: "icon",
    onClick: (value?) => {
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
      </svg>
    ),
    title: "icon",
    onClick: () => {},
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    ),
    title: "icon",
    onClick: () => {},
    disabled: true,
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

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Sortable table" theme="light" level={4} />
      <DxcResultsetTable columns={columnsSortable} rows={rowsSortable} />
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

const SmallContainer = styled.div`
  width: 500px;
`;

const ResultsetTableAsc = () => (
  <ExampleContainer>
    <Title title="Ascendant sorting" theme="light" level={4} />
    <DxcResultsetTable columns={columnsSortable} rows={rowsSortable} />
  </ExampleContainer>
);

export const AscendentSorting = ResultsetTableAsc.bind({});
AscendentSorting.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const idHeader = canvas.getAllByRole("button")[0];
  await userEvent.click(idHeader);
};

const ResultsetTableDesc = () => (
  <ExampleContainer>
    <Title title="Descendant sorting" theme="light" level={4} />
    <DxcResultsetTable columns={columnsSortable} rows={rowsSortable} />
  </ExampleContainer>
);

export const DescendantSorting = ResultsetTableDesc.bind({});
DescendantSorting.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const nameHeader = canvas.getAllByRole("button")[1];
  await userEvent.click(nameHeader);
  await userEvent.click(nameHeader);
};

const ResultsetTableMiddle = () => (
  <ExampleContainer>
    <Title title="Middle page" theme="light" level={4} />
    <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={2} />
  </ExampleContainer>
);

export const MiddlePage = ResultsetTableMiddle.bind({});
MiddlePage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const nextButton = canvas.getAllByRole("button")[2];
  await userEvent.click(nextButton);
};

const ResultsetTableLast = () => (
  <ExampleContainer>
    <Title title="Last page" theme="light" level={4} />
    <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={2} />
  </ExampleContainer>
);

export const LastPage = ResultsetTableLast.bind({});
LastPage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const nextButton = canvas.getAllByRole("button")[3];
  await userEvent.click(nextButton);
};

const ResultsetActionsCellDropdown = () => (
  <ExampleContainer>
    <Title title="Dropdown Action" theme="light" level={4} />
    <DxcResultsetTable columns={columns} rows={rowsIcon} itemsPerPage={2} />
  </ExampleContainer>
);

export const DropdownAction = ResultsetActionsCellDropdown.bind({});
DropdownAction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const nextButton = canvas.getAllByRole("button")[3];
  await userEvent.click(nextButton);
};
