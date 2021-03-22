import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const dropdownTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>baseColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>
          Applies to the backgroundColor, hoverBackgroundColor and
          hoverBackgroundOption.
        </td>
      </tr>
      <tr>
        <td>fontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to fontColor.</td>
      </tr>
    </DxcTable>
  );
};

export default dropdownTokensTable;
