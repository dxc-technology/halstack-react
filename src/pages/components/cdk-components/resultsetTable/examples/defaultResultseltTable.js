import { DxcResulsetTable, DxcButton } from "@diaas/dxc-react-cdk";
import deleteIcon from "./images/delete-24px.svg";

const code = `() => {
  const columns = [
    { displayValue: "Id", isSortable: false },
    { displayValue: "Name", isSortable: true },
    { displayValue: "City", isSortable: false },
    { displayValue: "Actions", isSortable: true },
  ];

  const rows = [
    [
      { displayValue: "001", sortValue: "001" },
      { displayValue: "Peter", sortValue: "Peter" },
      { displayValue: "Miami", sortValue: "Miami" },
      { displayValue: (<DxcButton mode="flat" iconSrc={deleteIcon}/>)},
    ],
    [
      { displayValue: "002", sortValue: "002" },
      { displayValue: "Louis", sortValue: "Louis" },
      { displayValue: "London", sortValue: "London" },
      { displayValue: "" },
    ],
    [
      { displayValue: "003", sortValue: "003" },
      { displayValue: "Lana", sortValue: "Lana" },
      { displayValue: "Amsterdam", sortValue: "Amsterdam" },
      { displayValue: <DxcButton mode="flat" iconSrc={deleteIcon} /> },
    ],
    [
      { displayValue: "004", sortValue: "004" },
      { displayValue: "Rick", sortValue: "Rick" },
      { displayValue: "London", sortValue: "London" },
      { displayValue: <DxcButton mode="flat" iconSrc={deleteIcon} /> },
    ],
    [
      { displayValue: "005", sortValue: "005" },
      { displayValue: "Mark", sortValue: "Mark" },
      { displayValue: "Miami", sortValue: "Miami" },
      { displayValue: <DxcButton mode="flat" iconSrc={deleteIcon} /> },
    ],
    [
      { displayValue: "006", sortValue: "006" },
      { displayValue: "Cris", sortValue: "Cris" },
      { displayValue: "Paris", sortValue: "Paris" },
      { displayValue: "" },
    ],
  ];
  return (
    <DxcResulsetTable
      columns={columns}
      rows={rows}
      itemsPerPage={2}
    ></DxcResulsetTable>
  );
}`;
const scope = {
  DxcResulsetTable,
  DxcButton,
  deleteIcon,
};

export default { code, scope };
