import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

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
        <td>icon: node</td>
        <td></td>
        <td>Element used as the icon that will be placed next to the label.</td>
      </tr>
      <tr>
        <td>iconSrc: string</td>
        <td></td>
        <td>
          <b>Deprecated.</b> URL of the icon.
        </td>
      </tr>
      <tr>
        <td>iconBgColor: string</td>
        <td>
          <code>'#6f2c91'</code>
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
        <td>newWindow: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the page is opened in a new browser tab.</td>
      </tr>
      <tr>
        <td>onClick: function</td>
        <td></td>
        <td>
          If defined, the tag will be displayed as a button. This function will
          be called when the user clicks the tag. Component will show some
          visual feedback on hover.
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
      <tr>
        <td>size: string | object</td>
        <td>
          <code>'fitContent'</code>
        </td>
        <td>
          Size of the component ('small' | 'medium' | 'large' | 'fillParent' |
          'fitContent').
        </td>
      </tr>
    </DxcTable>
  );
};

export default buttonPropsTable;
