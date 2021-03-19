import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const progressBarTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>accentColor</td>
        <td>
          <SampleComponent color="#6F2C91"></SampleComponent>
        </td>
        <td>Applies to the trackLine token.</td>
      </tr>
      <tr>
        <td>baseColor</td>
        <td>
          <SampleComponent color="#666666"></SampleComponent>
        </td>
        <td>Applies to the totalLine token.</td>
      </tr>
    </DxcTable>
  );
};

export default progressBarTokensTable;
