import { DxcDataGrid, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
const actions = [
    {
      icon: "delete",
      title: "Delete",
      onClick: () => {},
    },
    {
      title: "edit",
      onClick: (value) => {},
      options:[
        {
          value: "1",
          label: "Edit",
        },
        {
          value: "2",
          label: "Mark as selected",
        },
      ]
    },
  ];
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
    {
        key: "actions",
        label: "Actions",
        alignment: "center",
    },
  ];
  
  const rows = [
    {
      id: "Row 1",
      complete: 46,
      actions: <DxcDataGrid.ActionsCell actions={actions} />,
    },
    {
      id: "Row 2",
      complete: 51,
      actions: <DxcDataGrid.ActionsCell actions={actions} />,
    },
    {
      id: "Row 3",
      complete: 40,
      actions: <DxcDataGrid.ActionsCell actions={actions} />,
    },
    {
      id: "Row 4",
      complete: 10,
      actions: <DxcDataGrid.ActionsCell actions={actions} />,
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
