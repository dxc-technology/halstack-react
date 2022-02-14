import React from "react";
import DxcResultsetTable from "./ResultsetTable";
import DxcButton from "../button/Button";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Resultset Table",
  component: DxcResultsetTable,
};

const deleteIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

const columns = [{ displayValue: "Id" }, { displayValue: "Name" }, { displayValue: "City" }];

const rows = [
  [{ displayValue: "001" }, { displayValue: "Peter" }, { displayValue: "Miami" }],
  [{ displayValue: "002" }, { displayValue: "Louis" }, { displayValue: "London" }],
  [{ displayValue: "003" }, { displayValue: "Lana" }, { displayValue: "Amsterdam" }],
  [{ displayValue: "004" }, { displayValue: "Rick" }, { displayValue: "London" }],
  [{ displayValue: "005" }, { displayValue: "Mark" }, { displayValue: "Miami" }],
  [{ displayValue: "006" }, { displayValue: "Cris" }, { displayValue: "Paris" }],
];

const rowsIcon = [
  [
    { displayValue: "001", sortValue: "001" },
    { displayValue: "Peter" },
    { displayValue: <DxcButton icon={deleteIcon} /> },
  ],
  [{ displayValue: "002", sortValue: "002" }, { displayValue: "Louis" }, { displayValue: "" }],
  [
    { displayValue: "003", sortValue: "003" },
    { displayValue: "Mark" },
    { displayValue: <DxcButton icon={deleteIcon} /> },
  ],
];

const columnsSortable = [
  { displayValue: "Id", isSortable: true },
  { displayValue: "Name", isSortable: true },
  { displayValue: "City", isSortable: false },
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

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Sortable table" theme="light" level={4} />
      <DxcResultsetTable columns={columnsSortable} rows={rowsSortable}></DxcResultsetTable>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With action" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rowsIcon}></DxcResultsetTable>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With items per page option" theme="light" level={4} />
      <DxcResultsetTable
        columns={columns}
        rows={rows}
        itemsPerPage={2}
        itemsPerPageOptions={[2, 3]}
      ></DxcResultsetTable>
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"xxsmall"}></DxcResultsetTable>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"xsmall"}></DxcResultsetTable>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"small"}></DxcResultsetTable>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"medium"}></DxcResultsetTable>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"large"}></DxcResultsetTable>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"xlarge"}></DxcResultsetTable>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcResultsetTable columns={columns} rows={rows} margin={"xxlarge"}></DxcResultsetTable>
    </ExampleContainer>
  </>
);

const ResultsetTableAsc = () => (
  <ExampleContainer>
    <Title title="Ascendant sorting" theme="light" level={4} />
    <DxcResultsetTable columns={columnsSortable} rows={rowsSortable}></DxcResultsetTable>
  </ExampleContainer>
);

export const AscendentSorting = ResultsetTableAsc.bind({});
AscendentSorting.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.queryByText("Name"));
};

const ResultsetTableDesc = () => (
  <ExampleContainer>
    <Title title="Descendant sorting" theme="light" level={4} />
    <DxcResultsetTable columns={columnsSortable} rows={rowsSortable}></DxcResultsetTable>
  </ExampleContainer>
);

export const DescendantSorting = ResultsetTableDesc.bind({});
DescendantSorting.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.queryByText("Name"));
  await userEvent.click(canvas.queryByText("Name"));
};

const ResultsetTableMiddle = () => (
  <ExampleContainer>
    <Title title="Middle page" theme="light" level={4} />
    <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={2}></DxcResultsetTable>
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
    <DxcResultsetTable columns={columns} rows={rows} itemsPerPage={2}></DxcResultsetTable>
  </ExampleContainer>
);

export const LastPage = ResultsetTableLast.bind({});
LastPage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const nextButton = canvas.getAllByRole("button")[3];
  await userEvent.click(nextButton);
};
