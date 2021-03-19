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
        <td>baseColor</td>
        <td>
          <SampleComponent color="#6F2C91"></SampleComponent>
        </td>
        <td>Applies to the selectedBackgroundColor.</td>
      </tr>
      <tr>
        <td>fontColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to selectedFont.</td>
      </tr>
    </DxcTable>
  );
};

export default wizardTokensTable;
