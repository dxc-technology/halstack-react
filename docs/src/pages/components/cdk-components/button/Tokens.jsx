import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const buttonTokensTable = () => {
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
          <SampleComponent color="#FFED00"></SampleComponent>
        </td>
        <td>
          Applies to the primaryBackgroundColor and secondaryOutlinedColor.
        </td>
      </tr>
      <tr>
        <td>hoverColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>
          Applies to hoverBackgroundColor, hoverOutlinedColor and
          hoverBackgroundColor in the text mode.
        </td>
      </tr>
      <tr>
        <td>primaryFontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to primaryTextColor.</td>
      </tr>
      <tr>
        <td>primaryHoverFontColor</td>
        <td>
          <SampleComponent color="#FFED00"></SampleComponent>
        </td>
        <td>Applies to hoverTextColor for the primary mode.</td>
      </tr>
      <tr>
        <td>secondaryFontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to secondaryTextColor.</td>
      </tr>
      <tr>
        <td>secondaryHoverFontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to hoverTextColor for the secondary mode.</td>
      </tr>
      <tr>
        <td>textFontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to textTextColor.</td>
      </tr>
      <tr>
        <td>textHoverFontColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to textHoverTextColor.</td>
      </tr>
    </DxcTable>
  );
};

export default buttonTokensTable;
