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
    </TableContainer>
  );
};

const TableContainer = styled.div``;

export default Table;
