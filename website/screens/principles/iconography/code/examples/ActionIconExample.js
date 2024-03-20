import { DxcFlex, DxcInset, DxcResultsetTable } from "@dxc-technology/halstack-react";

const code = `() => {
  const columns = [
    { displayValue: "Users"},
    { displayValue: "Actions"},
  ];

  const actions = [
    {
      icon: 'filled_delete',
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

  const rows = [
    [
      { displayValue: "Peter"},
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "Louis"},
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "Lana"},
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "Rick"},
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "Mark"},
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "Cris"},
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
  ];

  return (
    <DxcInset space="2rem">
      <DxcResultsetTable
        columns={columns}
        rows={rows}
        mode="reduced"
      ></DxcResultsetTable>
    </DxcInset>
  );
}`;

const scope = {
  DxcResultsetTable,
  DxcFlex,
  DxcInset,
};

export default { code, scope };
