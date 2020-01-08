import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const buttonPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed next inside the tag.</td>
      </tr>
      <tr>
        <td>labelPosition: string</td>
        <td>
          <code>'after'</code>
        </td>
        <td>Whether the label should appear after or before the icon.</td>
      </tr>
      <tr>
        <td>iconSrc: string</td>
        <td></td>
        <td>URL of the icon.</td>
      </tr>
      <tr>
        <td>iconBgColor: string</td>
        <td>
          <code>"black"</code>
        </td>
        <td>Background color of the icon section of the tag.</td>
      </tr>
      <tr>
        <td>linkHref: string</td>
        <td></td>
        <td>
          If defined, the tag will be displayed as an anchor, using this prop as
          "href". Component will show some visual feedback on hover.
        </td>
      </tr>
      <tr>
        <td>onClick: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the tag.
          Component will show some visual feedback on hover.
        </td>
      </tr>
      <tr>
        <td>margin: string | object</td>
        <td></td>
        <td>
          Size of the margin to be applied to the component ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different margin sizes.
        </td>
      </tr>
    </DxcTable>
  );
};

export default buttonPropsTable;
