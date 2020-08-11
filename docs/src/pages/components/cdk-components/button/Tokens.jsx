import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

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
          <code>#FFED00</code>
        </td>
        <td>This token affects the background of the primary mode and the outline of the secondary mode.</td>
      </tr>
      <tr>
        <td>hoverColor</td>
        <td>
          <code>#000000</code>
        </td>
        <td>This token affects the background of the primary mode and the outline of the secondary mode when hovering over the button.</td>
      </tr>
      <tr>
        <td>primaryFontColor</td>
        <td><code>#000000</code></td>
        <td>This token affects the color of the text in the primary mode.</td>
      </tr>
      <tr>
        <td>primaryHoverFontColor</td>
        <td><code>#FFED00</code></td>
        <td>This token affects the color of the text in the primary mode while hovering over the button.</td>
      </tr>
      <tr>
        <td>secondaryFontColor</td>
        <td><code>#000000</code></td>
        <td>This token affects the color of the text in the secondary mode.</td>
      </tr>
      <tr>
        <td>primaryHoverFontColor</td>
        <td><code>#000000</code></td>
        <td>This token affects the color of the text in the secondary mode while hovering over the button.</td>
      </tr>
      <tr>
        <td>textFontColor</td>
        <td><code>#000000</code></td>
        <td>This token affects the color of the text in the text mode.</td>
      </tr>
      <tr>
        <td>textHoverFontColor</td>
        <td><code>#FFFFFF</code></td>
        <td>This token affects the color of the text in the text mode while hovering iver the button.</td>
      </tr>
      
    </DxcTable>
  );
};

export default buttonTokensTable;
