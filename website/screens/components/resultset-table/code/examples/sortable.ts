import {
  DxcResultsetTable,
  DxcInset,
} from "@dxc-technology/halstack-react";
import { deleteIcon } from "./Icons";

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

  const actions = [
    {
      icon: deleteIcon,
      title: "icon",
      onClick: () => {},
    },
  ];
  
  const rows = [
    [
      { displayValue: "001", sortValue: "001" },
      { displayValue: showName(), sortValue: sortName() },
      { displayValue: "Miami", sortValue: "Miami" },
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "002", sortValue: "002" },
      { displayValue: "Louis", sortValue: "Louis" },
      { displayValue: "London", sortValue: "London" },
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "003", sortValue: "003" },
      { displayValue: "Lana", sortValue: "Lana" },
      { displayValue: "Amsterdam", sortValue: "Amsterdam" },
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
  ];

  return (
    <DxcInset space="2rem">
      <DxcResultsetTable columns={columns} rows={rows}></DxcResultsetTable>
    </DxcInset>
  );
}`;

const scope = {
  DxcResultsetTable,
  DxcInset,
  deleteIcon,
};

export default { code, scope };
