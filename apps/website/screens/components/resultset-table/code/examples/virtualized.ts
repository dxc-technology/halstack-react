import { DxcResultsetTable, DxcButton, DxcInset } from "@dxc-technology/halstack-react";
import { rows } from "./rows";

const code = `() => {
  const columns = [
    { displayValue: "Id", isSortable: true },
    { displayValue: "Name", isSortable: true },
    { displayValue: "City", isSortable: true },
    { displayValue: "Actions", isSortable: false },
  ];

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcResultsetTable columns={columns} rows={rows} virtualizedHeight="500px" itemsPerPage={10000}/>
    </DxcInset>
  );
}`;

const scope = {
  DxcResultsetTable,
  DxcButton,
  DxcInset,
  rows,
};

export default { code, scope };
