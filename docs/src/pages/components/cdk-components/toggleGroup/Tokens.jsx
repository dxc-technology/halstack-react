import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const toggleGroupTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>selectedColor</td>
        <td>
          <SampleComponent color="#6F2C91"></SampleComponent>
        </td>
        <td>Applies to selectedColor.</td>
      </tr>
      <tr>
        <td>selectedHoverColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to selectedHoverColor.</td>
      </tr>
      <tr>
        <td>selectedFontColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to selectedFontColor.</td>
      </tr>
      <tr>
        <td>selectedHoverFontColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to selectedHoverFontColor.</td>
      </tr>
      <tr>
        <td>unselectedColor</td>
        <td>
          <SampleComponent color="#F6F6F6"></SampleComponent>
        </td>
        <td>Applies to unselectedColor.</td>
      </tr>
      <tr>
        <td>unselectedHoverColor</td>
        <td>
          <SampleComponent color="#EEEEEE"></SampleComponent>
        </td>
        <td>Applies to unselectedHoverColor.</td>
      </tr>
      <tr>
        <td>unselectedFontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to unselectedFontColor.</td>
      </tr>
      <tr>
        <td>unselectedHoverFontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to unselectedHoverFontColor.</td>
      </tr>
    </DxcTable>
  );
};

export default toggleGroupTokensTable;
