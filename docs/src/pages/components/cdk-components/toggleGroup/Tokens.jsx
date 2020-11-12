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
        <td>unselectedBackgroundColor</td>
        <td>
          <SampleComponent color="#D9D9D9"></SampleComponent>
        </td>
        <td>Applies to unselectedBackgroundColor.</td>
      </tr>
      <tr>
        <td>unselectedBackgroundHoverColor</td>
        <td>
          <SampleComponent color="#EEEEEE"></SampleComponent>
        </td>
        <td>Applies to unselectedBackgroundHoverColor.</td>
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
      <tr>
        <td>selectedBackgroundColor</td>
        <td>
          <SampleComponent color="#6F2C91"></SampleComponent>
        </td>
        <td>Applies to selectedBackgroundColor.</td>
      </tr>
      <tr>
        <td>selectedBackgroundHoverColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to selectedBackgroundHoverColor.</td>
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
    </DxcTable>
  );
};

export default toggleGroupTokensTable;
