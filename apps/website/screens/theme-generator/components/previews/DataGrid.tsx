import React, { useState } from "react";
import { DxcContainer, DxcDataGrid } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

type DataGridPropsType = React.ComponentProps<typeof DxcDataGrid>;
type DataGridColumnsPropsType = DataGridPropsType["columns"];
type DataGridRowsPropsType = DataGridPropsType["rows"];

const columns: DataGridColumnsPropsType = [
  {
    key: "id",
    label: "ID",
    resizable: true,
    sortable: true,
    draggable: false,
    alignment: "left",
  },
  {
    key: "task",
    label: "Title",
    resizable: true,
    sortable: true,
    draggable: true,
    textEditable: true,
    alignment: "left",
  },
  {
    key: "complete",
    label: " % Complete",
    resizable: true,
    sortable: true,
    draggable: true,
    alignment: "right",
    summaryKey: "label",
  },
  {
    key: "priority",
    label: "Priority",
    resizable: true,
    draggable: true,
    alignment: "center",
    summaryKey: "total",
  },
];

const expandableRows = [
  {
    id: 1,
    task: "Task 1",
    complete: 46,
    priority: "High",
    issueType: "Bug",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
  },
  {
    id: 2,
    task: "Task 2",
    complete: 51,
    priority: "High",
    issueType: "Epic",
    expandedContent: <DxcContainer>Custom content 2</DxcContainer>,
  },
  {
    id: 3,
    task: "Task 3",
    complete: 40,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 3</DxcContainer>,
  },
  {
    id: 4,
    task: "Task 4",
    complete: 10,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 4</DxcContainer>,
  },
  {
    id: 5,
    task: "Task 5",
    complete: 68,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 5</DxcContainer>,
  },
  {
    id: 6,
    task: "Task 6",
    complete: 37,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 6</DxcContainer>,
  },
  {
    id: 7,
    task: "Task 7",
    complete: 73,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer>Custom content 7</DxcContainer>,
  },
  {
    id: 8,
    task: "Task 8",
    complete: 27,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer>Custom content 8</DxcContainer>,
  },
  {
    id: 9,
    task: "Task 9",
    complete: 36,
    priority: "Critical",
    issueType: "Epic",
    expandedContent: <DxcContainer>Custom content 9</DxcContainer>,
  },
];

const childColumns: DataGridColumnsPropsType = [
  {
    key: "name",
    label: "Name",
    resizable: true,
    sortable: true,
    alignment: "center",
  },
  {
    key: "value",
    label: "Value",
    resizable: true,
    sortable: true,
    draggable: true,
    textEditable: true,
    alignment: "right",
  },
];

const childRows: DataGridRowsPropsType = [
  {
    name: "Root Node 1",
    value: "1",
    id: "a",
    childRows: [
      {
        name: "Child Node 1.1",
        value: "1.1",
        id: "aa",
        childRows: [
          {
            name: "Grandchild Node 1.1.1",
            value: "1.1.1",
            id: "aaa",
          },
          {
            name: "Grandchild Node 1.1.2",
            value: "1.1.2",
            id: "aab",
          },
        ],
      },
      {
        name: "Child Node 1.2",
        value: "1.2",
        id: "ab",
      },
    ],
  },
  {
    name: "Root Node 2",
    value: "2",
    id: "b",
    childRows: [
      {
        name: "Child Node 2.1",
        value: "2.1",
        id: "ba",
        childRows: [
          {
            name: "Grandchild Node 2.1.1",
            value: "2.1.1",
            id: "baa",
          },
        ],
      },
      {
        name: "Child Node 2.2",
        value: "2.2",
        id: "bb",
      },
      {
        name: "Child Node 2.3",
        value: "2.3",
        id: "bc",
      },
    ],
  },
] as DataGridRowsPropsType;

const DataGridPreview = () => {
  const [selectedRows, setSelectedRows] = useState((): Set<number | string> => new Set());

  return (
    <PreviewContainer>
      <Mode text="Default">
        <DxcDataGrid columns={columns} rows={expandableRows} uniqueRowId="id" />
      </Mode>
      <Mode text="Expandable">
        <DxcDataGrid columns={columns} rows={expandableRows} uniqueRowId="id" expandable />
      </Mode>
      <Mode text="Selectable">
        <DxcDataGrid
          columns={columns}
          rows={expandableRows}
          uniqueRowId="task"
          selectable
          selectedRows={selectedRows}
          onSelectRows={setSelectedRows}
        />
      </Mode>
      <Mode text="With child rows">
        <DxcDataGrid columns={childColumns} rows={childRows} uniqueRowId="id" />
      </Mode>
      <Mode text="With summary row">
        <DxcDataGrid
          columns={childColumns}
          rows={childRows}
          uniqueRowId="value"
          summaryRow={{ label: "Total", total: 100, value: "summary" }}
        />
      </Mode>
    </PreviewContainer>
  );
};

export default DataGridPreview;
