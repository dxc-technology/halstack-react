import { DxcDataGrid, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const columns = [
    {
      key: "id",
      label: "ID",
      resizable: true,
      draggable: true,
    },
    {
      key: "complete",
      label: "% Complete",
      resizable: true,
      draggable: true,
      alignment: "right",
    },
  ];
  
  const rows = [
    {
      id: "Row 1",
      complete: 46, 
    },
    {
      id: "Row 2",
      complete: 51,
    },
    {
      id: "Row 3",
      complete: 40,
    },
    {
      id: "Row 4",
      complete: 10,
    },
  ];
  
  return (
    <DxcInset space="var(--spacing-gap-xl)"-spacing-gap-xl)">
      <DxcDataGrid columns={columns} rows={rows} uniqueRowId="id" showPaginator itemsPerPage={2} />
    </DxcInset>
  );
}`;

const scope = {
  DxcDataGrid,
  DxcInset,
};

export default { code, scope };
