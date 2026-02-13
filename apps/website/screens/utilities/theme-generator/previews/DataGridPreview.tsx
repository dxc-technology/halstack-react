import { useState } from "react";
import { DxcDataGrid, DxcInset, DxcContainer } from "@dxc-technology/halstack-react";

const actions = [
  {
    icon: "filled_edit",
    title: "icon",
    onClick: () => {},
  },
  {
    icon: "filled_delete",
    title: "icon",
    onClick: () => {},
    disabled: true,
  },
];

const columns = [
  {
    key: "id",
    label: "ID",
    resizable: true,
    sortable: true,
    draggable: false,
    alignment: "left" as const,
  },
  {
    key: "task",
    label: "Title",
    resizable: true,
    sortable: true,
    draggable: true,
    textEditable: true,
    alignment: "left" as const,
  },
  {
    key: "complete",
    label: " % Complete",
    resizable: true,
    sortable: true,
    draggable: true,
    alignment: "right" as const,
    summaryKey: "label",
  },
  {
    key: "priority",
    label: "Priority",
    resizable: true,
    draggable: true,
    alignment: "center" as const,
    summaryKey: "total",
  },
  {
    key: "actions",
    label: "Actions",
    alignment: "center" as const,
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
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 2,
    task: "Task 2",
    complete: 51,
    priority: "High",
    issueType: "Epic",
    expandedContent: <DxcContainer>Custom content 2</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 3,
    task: "Task 3",
    complete: 40,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 3</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 4,
    task: "Task 4",
    complete: 10,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 4</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 5,
    task: "Task 5",
    complete: 68,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 5</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 6,
    task: "Task 6",
    complete: 37,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 6</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 7,
    task: "Task 7",
    complete: 73,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer>Custom content 7</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 8,
    task: "Task 8",
    complete: 27,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer>Custom content 8</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 9,
    task: "Task 9",
    complete: 36,
    priority: "Critical",
    issueType: "Epic",
    expandedContent: <DxcContainer>Custom content 9</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
];

const DatagridPreview = () => {
  const [selectedRows, setSelectedRows] = useState(() => new Set<string | number>());

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcDataGrid
        columns={columns}
        rows={expandableRows}
        uniqueRowId="id"
        selectable
        selectedRows={selectedRows}
        onSelectRows={setSelectedRows}
      />
    </DxcInset>
  );
};

export default DatagridPreview;
