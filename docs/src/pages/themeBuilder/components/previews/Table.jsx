import React, { useState } from "react";
import styled from "styled-components";
import { DxcTable, DxcResultsetTable, DxcButton } from "@dxc-technology/halstack-react";
import Mode from "../Mode";

const iconSVG = () => {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

const Table = () => {
  const [myItemsPerPage, setMyItemsPerPage] = useState(2);
  const itemsPerPageFunction = (value) => {
    setMyItemsPerPage(value);
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
      { displayValue: "Peter", sortValue: "Peter" },
      { displayValue: "Miami", sortValue: "Miami" },
      { displayValue: <DxcButton mode="secondary" icon={iconSVG} /> },
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
      { displayValue: <DxcButton mode="secondary" icon={iconSVG} /> },
    ],
    [
      { displayValue: "004", sortValue: "004" },
      { displayValue: "Rick", sortValue: "Rick" },
      { displayValue: "London", sortValue: "London" },
      { displayValue: <DxcButton mode="secondary" icon={iconSVG} /> },
    ],
    [
      { displayValue: "005", sortValue: "005" },
      { displayValue: "Mark", sortValue: "Mark" },
      { displayValue: "Miami", sortValue: "Miami" },
      { displayValue: <DxcButton mode="secondary" icon={iconSVG} /> },
    ],
    [
      { displayValue: "006", sortValue: "006" },
      { displayValue: "Cris", sortValue: "Cris" },
      { displayValue: "Paris", sortValue: "Paris" },
      { displayValue: "" },
    ],
  ];

  return (
    <TableContainer>
      <Mode text="Default">
        <DxcTable margin={{ top: "small", bottom: "xsmall" }}>
          <tr>
            <th>header 1</th>
            <th>header 2</th>
            <th>header 3</th>
          </tr>
          <tr>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
          <tr>
            <td>cell 4</td>
            <td>cell 5</td>
            <td>cell 6</td>
          </tr>
        </DxcTable>
      </Mode>
      <Mode text="Resultset Table">
        <DxcResultsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={myItemsPerPage}
          itemsPerPageOptions={[2, 3]}
          itemsPerPageFunction={itemsPerPageFunction}
          margin={{ top: "small", bottom: "xsmall" }}
        ></DxcResultsetTable>
      </Mode>
    </TableContainer>
  );
};

const TableContainer = styled.div``;

export default Table;
