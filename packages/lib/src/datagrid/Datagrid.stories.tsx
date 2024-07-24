import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcDataGrid from "./Datagrid";
import DxcContainer from "../container/Container";
import { GridColumn } from "./types";
import { useState } from "react";

export default {
  title: "Datagrid",
  component: DxcDataGrid,
};

const columns: GridColumn[] = [
  {
    key: "id",
    name: "ID",
    resizable: true,
    sortable: true,
    draggable: false,
    alignment: "left",
  },
  {
    key: "task",
    name: "Title",
    resizable: true,
    sortable: true,
    draggable: true,
    textEditable: true,
    alignment: "left",
  },
  {
    key: "complete",
    name: " % Complete",
    resizable: true,
    sortable: true,
    draggable: true,
    alignment: "right",
  },
  {
    key: "priority",
    name: "Priority",
    resizable: true,
    sortable: true,
    draggable: true,
    alignment: "center",
  },
];

const expandableRows = [
  {
    id: 1,
    task: "Task 1",
    complete: 46,
    priority: "High",
    issueType: "Bug",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
    expandedContentHeight: 470,
  },
  {
    id: 2,
    task: "Task 2",
    complete: 51,
    priority: "High",
    issueType: "Epic",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 3,
    task: "Task 3",
    complete: 40,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 4,
    task: "Task 4",
    complete: 10,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 5,
    task: "Task 5",
    complete: 68,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 6,
    task: "Task 6",
    complete: 37,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 7,
    task: "Task 7",
    complete: 73,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 8,
    task: "Task 8",
    complete: 27,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 9,
    task: "Task 9",
    complete: 36,
    priority: "Critical",
    issueType: "Epic",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
];

export const Chromatic = () => {
  const [selectedRows, setSelectedRows] = useState((): Set<number | string> => new Set());
  return (
    <>
      <ExampleContainer>
        <Title title="Default" theme="light" level={4} />
        <DxcDataGrid columns={columns} rows={expandableRows} uniqueRowId="id" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Expandable" theme="light" level={4} />
        <DxcDataGrid columns={columns} rows={expandableRows} uniqueRowId="id" expandable />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Selectable" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={expandableRows}
          uniqueRowId="id"
          selectable
          selectedRows={selectedRows}
          onSelectRows={setSelectedRows}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Selectable" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={expandableRows}
          uniqueRowId="id"
          expandable
          selectable
          selectedRows={selectedRows}
          onSelectRows={setSelectedRows}
        />
      </ExampleContainer>
    </>
  );
};
