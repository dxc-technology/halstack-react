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
        <td>color</td>
        <td>
          <SampleComponent color="#D9D9D9"></SampleComponent>
        </td>
        <td>Applies to color.</td>
      </tr>
      <tr>
        <td>hoverColor</td>
        <td>
          <SampleComponent color="#EEEEEE"></SampleComponent>
        </td>
        <td>Applies to hoverColor.</td>
      </tr>
      <tr>
        <td>fontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to fontColor.</td>
      </tr>
      <tr>
        <td>hoverFontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to hoverFontColor.</td>
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
    </DxcTable>
  );
};

export default toggleGroupTokensTable;
