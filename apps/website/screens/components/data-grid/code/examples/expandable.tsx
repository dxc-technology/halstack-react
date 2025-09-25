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
      expandedContent: "Expanded content"
    },
    {
      id: "Row 2",
      complete: 51,
      expandedContent: "Expanded content",
      expandedContentHeight: 100
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
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcDataGrid columns={columns} rows={rows} expandable uniqueRowId="id" />
    </DxcInset>
  );
}`;

const scope = {
  DxcDataGrid,
  DxcInset,
};

export default { code, scope };
