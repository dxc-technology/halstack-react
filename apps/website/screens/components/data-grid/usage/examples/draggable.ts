import { DxcDataGrid, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const columns = [
    {
      key: "label",
      label: "Name",
      draggable: true,
    },
    {
      key: "id",
      label: "ID",
      draggable: true,
    },
    {
      key: "complete",
      label: "% Complete",
      draggable: true,
      alignment: "right",
    },
  ];
  
  const rows = [
    {
      label: "Task 1",
      id: "ID-1",
      complete: 46, 
    },
    {
      label: "Task 2",
      id: "ID-2",
      complete: 51,
    },
    {
      label: "Task 3",
      id: "ID-3",
      complete: 40,
    },
    {
      label: "Task 4",
      id: "ID-4",
      complete: 10,
    },
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcDataGrid columns={columns} rows={rows} uniqueRowId="id" />
    </DxcInset>
  );
}`;

const scope = {
  DxcDataGrid,
  DxcInset,
};

export default { code, scope };
