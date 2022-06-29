import {
  DxcResultsetTable,
  DxcButton,
  DxcInset,
} from "@dxc-technology/halstack-react";
import { deleteIcon } from "./Icons";

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
      { displayValue: <DxcButton icon={deleteIcon} /> },
    ],
    [
      { displayValue: "002"},
      { displayValue: "Louis"},
      { displayValue: "London"},
      { displayValue: <DxcButton icon={deleteIcon} /> },
    ],
    [
      { displayValue: "003"},
      { displayValue: "Lana"},
      { displayValue: "Amsterdam"},
      { displayValue: <DxcButton icon={deleteIcon} /> },
    ],
    [
      { displayValue: "004"},
      { displayValue: "Rick"},
      { displayValue: "London"},
      { displayValue: <DxcButton icon={deleteIcon} /> },
    ],
    [
      { displayValue: "005"},
      { displayValue: "Mark"},
      { displayValue: "Miami"},
      { displayValue: <DxcButton icon={deleteIcon} /> },
    ],
    [
      { displayValue: "006"},
      { displayValue: "Cris"},
      { displayValue: "Paris"},
      { displayValue: <DxcButton icon={deleteIcon} /> },
    ],
  ];

  return (
    <DxcInset space="2rem">
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
  deleteIcon,
};

export default { code, scope };
