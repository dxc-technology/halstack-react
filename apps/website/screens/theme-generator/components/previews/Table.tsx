import { useState } from "react";
import styled from "styled-components";
import { DxcTable, DxcResultsetTable } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const actions = [
  {
    icon: "delete",
    title: "icon",
    onClick: () => {},
  },
];

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
    { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
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
    { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
  ],
  [
    { displayValue: "004", sortValue: "004" },
    { displayValue: "Rick", sortValue: "Rick" },
    { displayValue: "London", sortValue: "London" },
    { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
  ],
  [
    { displayValue: "005", sortValue: "005" },
    { displayValue: "Mark", sortValue: "Mark" },
    { displayValue: "Miami", sortValue: "Miami" },
    { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
  ],
  [
    { displayValue: "006", sortValue: "006" },
    { displayValue: "Cris", sortValue: "Cris" },
    { displayValue: "Paris", sortValue: "Paris" },
    { displayValue: "" },
  ],
];

const Table = () => {
  const [myItemsPerPage, setMyItemsPerPage] = useState(2);
  const itemsPerPageFunction = (value: number) => {
    setMyItemsPerPage(value);
  };

  return (
    <PreviewContainer>
      <Mode text="Default">
        <DxcTable>
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
        />
      </Mode>
      <Mode text="With scroll">
        <Container>
          <DxcTable>
            <tr>
              <th>
                header<br></br>subheader
              </th>
              <th>
                header<br></br>subheader
              </th>
              <th>
                header<br></br>subheader
              </th>
            </tr>
            <tr>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </td>
              <td>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </td>
              <td>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </td>
            </tr>
            <tr>
              <td>cell data</td>
              <td>cell data</td>
              <td>cell data</td>
            </tr>
            <tr>
              <td>cell data</td>
              <td>cell data</td>
              <td>cell data</td>
            </tr>
            <tr>
              <td>cell data</td>
              <td>cell data</td>
              <td>cell data</td>
            </tr>
            <tr>
              <td>cell data</td>
              <td>cell data</td>
              <td>cell data</td>
            </tr>
            <tr>
              <td>cell data</td>
              <td>cell data</td>
              <td>cell data</td>
            </tr>
            <tr>
              <td>cell data</td>
              <td>cell data</td>
              <td>cell data</td>
            </tr>
            <tr>
              <td>cell data</td>
              <td>cell data</td>
              <td>cell data</td>
            </tr>
            <tr>
              <td>cell data</td>
              <td>cell data</td>
              <td>cell data</td>
            </tr>
          </DxcTable>
        </Container>
      </Mode>
    </PreviewContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  width: 100%;
`;

export default Table;
