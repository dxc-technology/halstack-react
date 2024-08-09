import { DxcDataGrid, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const columns = [
    {
      key: "id",
      label: "ID",
      resizable: true,
      sortable: true,
      draggable: true,
    },
    {
      key: "complete",
      label: "% Complete",
      resizable: true,
      sortable: true,
      draggable: true,
      alignment: "center",
    },
  ];
  
  const rows = [
    {
      id: 1,
      complete: 46, 
    },
    {
      id: 2,
      complete: 51,
    },
    {
      id: 3,
      complete: 40,
    },
    {
      id: 4,
      complete: 10,
    },

  ];
  return (
    <DxcInset space="2rem">
      <DxcDataGrid columns={columns} rows={rows} uniqueRowId="id" />
    </DxcInset>
  );
}`;

const scope = {
  DxcDataGrid,
  DxcInset,
};

export default { code, scope };
