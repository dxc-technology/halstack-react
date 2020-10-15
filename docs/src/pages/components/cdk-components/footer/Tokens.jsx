import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const footerTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>backgroundColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to the backgroundColor.</td>
      </tr>
      <tr>
        <td>fontColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to fontColor.</td>
      </tr>
      <tr>
        <td>lineColor</td>
        <td>
          <SampleComponent color="#0067B3"></SampleComponent>
        </td>
        <td>Applies to lineColor.</td>
      </tr>
      <tr>
        <td>logo</td>
        <td>DXC Logo</td>
        <td>Applies to logo token.</td>
      </tr>
    </DxcTable>
  );
};

export default footerTokensTable;
