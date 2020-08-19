import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const wizardTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>selectedBackgroundColor</td>
        <td>
          <SampleComponent color="#FFED00"></SampleComponent>
        </td>
        <td>
          Applies to the selectedBackgroundColor.
        </td>
      </tr>
      <tr>
        <td>selectedBackgroundFont</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>
          Applies to selectedBackgroundFont.
        </td>
      </tr>
    </DxcTable>
  );
};

export default wizardTokensTable;
