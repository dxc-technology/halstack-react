import { DxcResultsetTable, DxcButton, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const showName = () => {
    return "Peter Smith";
  };
  const sortName = () => {
    return "Smith, Peter";
  };
  const columns = [
    { displayValue: "Id", isSortable: false },
    { displayValue: "Name", isSortable: true },
    { displayValue: "City", isSortable: false },
    { displayValue: "Actions", isSortable: false },
  ];

  const rows = [
    [
      { displayValue: "001", sortValue: "001" },
      { displayValue: showName(), sortValue: sortName() },
      { displayValue: "Miami", sortValue: "Miami" },
      { displayValue: <DxcButton icon="delete" /> },
    ],
    [
      { displayValue: "002", sortValue: "002" },
      { displayValue: "Louis", sortValue: "Louis" },
      { displayValue: "London", sortValue: "London" },
      { displayValue: <DxcButton icon="delete" /> },
    ],
    [
      { displayValue: "003", sortValue: "003" },
      { displayValue: "Lana", sortValue: "Lana" },
      { displayValue: "Amsterdam", sortValue: "Amsterdam" },
      { displayValue: <DxcButton icon="delete" /> },
    ],
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcResultsetTable columns={columns} rows={rows}></DxcResultsetTable>
    </DxcInset>
  );
}`;

const scope = {
  DxcResultsetTable,
  DxcButton,
  DxcInset,
};

export default { code, scope };
