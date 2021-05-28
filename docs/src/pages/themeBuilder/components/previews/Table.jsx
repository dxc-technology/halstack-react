import React from "react";
import styled from "styled-components";
import { DxcTable } from "@dxc-technology/halstack-react";
import Mode from "../Mode";

const Table = () => {
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
      <Mode text="With scroll">
        <Container>
          <DxcTable margin={{ top: "small", bottom: "xsmall" }}>
            <tr>
              <th>header<br></br>subheader</th>
              <th>header<br></br>subheader</th>
              <th>header<br></br>subheader</th>
            </tr>
            <tr>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </td>
              <td>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
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
    </TableContainer>
  );
};

const TableContainer = styled.div``;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  width: 100%;
  margin-bottom: 50px;
`;

export default Table;
