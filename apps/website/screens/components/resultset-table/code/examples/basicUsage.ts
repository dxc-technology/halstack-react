import { DxcResultsetTable, DxcButton, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const columns = [
    { displayValue: "Id"},
    { displayValue: "Name"},
    { displayValue: "City"},
    { displayValue: "Actions"},
  ];

  const rows = [
    [
      { displayValue: "001"},
      { displayValue: "Peter"},
      { displayValue: "Miami"},
      { displayValue: <DxcButton icon="delete" /> },
    ],
    [
      { displayValue: "002"},
      { displayValue: "Louis"},
      { displayValue: "London"},
      { displayValue: <DxcButton icon="delete" /> },
    ],
    [
      { displayValue: "003"},
      { displayValue: "Lana"},
      { displayValue: "Amsterdam"},
      { displayValue: <DxcButton icon="delete" /> },
    ],
    [
      { displayValue: "004"},
      { displayValue: "Rick"},
      { displayValue: "London"},
      { displayValue: <DxcButton icon="delete" /> },
    ],
    [
      { displayValue: "005"},
      { displayValue: "Mark"},
      { displayValue: "Miami"},
      { displayValue: <DxcButton icon="delete" /> },
    ],
    [
      { displayValue: "006"},
      { displayValue: "Cris"},
      { displayValue: "Paris"},
      { displayValue: <DxcButton icon="delete" /> },
    ],
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcResultsetTable
        columns={columns}
        rows={rows}
      ></DxcResultsetTable>
    </DxcInset>
  );
}`;

const scope = {
  DxcResultsetTable,
  DxcButton,
  DxcInset,
};

export default { code, scope };
