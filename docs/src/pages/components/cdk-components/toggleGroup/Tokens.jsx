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
        <td>unselectedBaseColor</td>
        <td>
          <SampleComponent color="#D9D9D9"></SampleComponent>
        </td>
        <td>
          Applies to unselectedBackgroundColor and
          disabledUnselectedBackgroundColor.
        </td>
      </tr>
      <tr>
        <td>unselectedHoverBaseColor</td>
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
        <td>Applies to unselectedFontColor and disabledUnselectedFontColor.</td>
      </tr>
      <tr>
        <td>unselectedHoverFontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to unselectedHoverFontColor.</td>
      </tr>
      <tr>
        <td>selectedBaseColor</td>
        <td>
          <SampleComponent color="#6F2C91"></SampleComponent>
        </td>
        <td>
          Applies to selectedBackgroundColor and
          disabledSelectedBackgroundColor.
        </td>
      </tr>
      <tr>
        <td>selectedHoverBaseColor</td>
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
        <td>Applies to selectedFontColor and disabledSelectedFontColor.</td>
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
