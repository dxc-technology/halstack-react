import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const paginatorTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>paginatorBackgroundColor</td>
        <td>
          <SampleComponent color="#EEEEEE"></SampleComponent>
        </td>
        <td>
          Applies to the paginatorBackgroundColor.
        </td>
      </tr>
      <tr>
        <td>paginatorFontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>
          Applies to paginatorFontColor.
        </td>
      </tr>
    </DxcTable>
  );
};

export default paginatorTokensTable;
