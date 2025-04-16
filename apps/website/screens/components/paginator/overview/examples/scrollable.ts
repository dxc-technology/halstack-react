import { DxcPaginator, DxcInset, DxcDataGrid, DxcContainer } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const columns = [
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
    }
  ];

  const expandableRows = [
    {
        id: 1,
        task: "Task 1",
        complete: 46,
        priority: "High",
        issueType: "Bug",
        expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
        expandedContentHeight: 470
    },
    {
        id: 2,
        task: "Task 2",
        complete: 51,
        priority: "High",
        issueType: "Epic",
        expandedContent: <DxcContainer>Custom content 1</DxcContainer>
    },
    {
        id: 3,
        task: "Task 3",
        complete: 40,
        priority: "High",
        issueType: "Improvement",
        expandedContent: <DxcContainer>Custom content 1</DxcContainer>
    },
    {
        id: 4,
        task: "Task 4",
        complete: 10,
        priority: "High",
        issueType: "Improvement",
        expandedContent: <DxcContainer>Custom content 1</DxcContainer>
    },
    {
        id: 5,
        task: "Task 5",
        complete: 68,
        priority: "High",
        issueType: "Improvement",
        expandedContent: <DxcContainer> Custom content 1</DxcContainer>
    },
    {
        id: 6,
        task: "Task 6",
        complete: 37,
        priority: "High",
        issueType: "Improvement",
        expandedContent: <DxcContainer>Custom content 1</DxcContainer>
    },
    {
        id: 7,
        task: "Task 7",
        complete: 73,
        priority: "Medium",
        issueType: "Story",
        expandedContent: <DxcContainer>Custom content 1</DxcContainer>
    },
    {
        id: 8,
        task: "Task 8",
        complete: 27,
        priority: "Medium",
        issueType: "Story",
        expandedContent: <DxcContainer>Custom content 1</DxcContainer>
    },
    {
        id: 9,
        task: "Task 9",
        complete: 36,
        priority: "Critical",
        issueType: "Epic",
        expandedContent: <DxcContainer>Custom content 1</DxcContainer>
    },
  ];

  return (
    <DxcInset space="var(--spacing-padding-m)">>
      <DxcContainer height="200px">
        <DxcDataGrid showPaginator columns={columns} rows={expandableRows} uniqueRowId="id" />
      </DxcContainer>
    </DxcInset>
  );
}`;

const scope = {
  DxcContainer,
  DxcDataGrid,
  DxcPaginator,
  DxcInset,
  useState,
};

export default { code, scope };
