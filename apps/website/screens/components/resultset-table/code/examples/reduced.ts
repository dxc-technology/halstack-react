import { DxcResultsetTable, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const columns = [
    { displayValue: "Id"},
    { displayValue: "Name"},
    { displayValue: "City"},
    { displayValue: "Actions"},
  ];

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

  const rows = [
    [
      { displayValue: "001"},
      { displayValue: "Peter"},
      { displayValue: "Miami"},
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "002"},
      { displayValue: "Louis"},
      { displayValue: "London"},
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "003"},
      { displayValue: "Lana"},
      { displayValue: "Amsterdam"},
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "004"},
      { displayValue: "Rick"},
      { displayValue: "London"},
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "005"},
      { displayValue: "Mark"},
      { displayValue: "Miami"},
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "006"},
      { displayValue: "Cris"},
      { displayValue: "Paris"},
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
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
  DxcInset,
};

export default { code, scope };
