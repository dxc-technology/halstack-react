import {
  DxcResultsetTable,
  DxcButton,
  DxcInset,
} from "@dxc-technology/halstack-react";
import { deleteIcon } from "./Icons";

const code = `() => {
    const showName = () =>{
        return "Peter Smith";
    };
    const sortName = () =>{
        return "Smith, Peter";
    };
    const columns = [
      { displayValue: "Id", isSortable: false },
      { displayValue: "Name", isSortable: true },
      { displayValue: "City", isSortable: false },
      { displayValue: "Actions", isSortable: true },
    ];
  
    const rows = [
      [
        { displayValue: "001", sortValue: "001" },
        { displayValue: showName(), sortValue: sortName() },
        { displayValue: "Miami", sortValue: "Miami" },
        { displayValue: <DxcButton icon={deleteIcon} /> },
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
        { displayValue: <DxcButton icon={deleteIcon} /> },
      ],
      [
        { displayValue: "004", sortValue: "004" },
        { displayValue: "Rick", sortValue: "Rick" },
        { displayValue: "London", sortValue: "London" },
        { displayValue: <DxcButton icon={deleteIcon} /> },
      ],
      [
        { displayValue: "005", sortValue: "005" },
        { displayValue: "Mark", sortValue: "Mark" },
        { displayValue: "Miami", sortValue: "Miami" },
        { displayValue: <DxcButton icon={deleteIcon} /> },
      ],
      [
        { displayValue: "006", sortValue: "006" },
        { displayValue: "Cris", sortValue: "Cris" },
        { displayValue: "Paris", sortValue: "Paris" },
        { displayValue: "" },
      ],
    ];
  
    return (
      <DxcInset space="large">
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
