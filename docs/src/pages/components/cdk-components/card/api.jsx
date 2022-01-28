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
        <td>imageSrc: string</td>
        <td></td>
        <td>
          URL of the image that will be placed in the card component. In case of
          omission, the image container will not appear and the content will
          occupy its space.
        </td>
      </tr>
      <tr>
        <td>imageBgColor: string</td>
        <td>
          <code>'black'</code>
        </td>
        <td>Color of the image background.</td>
      </tr>
      <tr>
        <td>imagePadding: string | object </td>
        <td></td>
        <td>
          Size of the padding to be applied to the image section of the
          component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' |
          'xlarge' | 'xxlarge'). You can pass an object with 'top', 'bottom',
          'left' and 'right' properties in order to specify different padding
          sizes.
        </td>
      </tr>
      <tr>
        <td>imagePosition: 'after' | 'before'</td>
        <td>
          <code>'before'</code>
        </td>
        <td>Whether the image should appear in relation to the content.</td>
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
          This function will be called when the user clicks the card. Component
          will show some visual feedback on hover.
        </td>
      </tr>
      <tr>
        <td>imageCover: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>Whether the image must cover the whole image area of the card.</td>
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
        <td>contentPadding: string | object</td>
        <td></td>
        <td>
          Size of the padding to be applied to the content area ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different padding sizes.
        </td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>Value of the tabindex given when there is an href.</td>
      </tr>
      <tr>
        <td>outlined: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>Whether the card must be outlined.</td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>Custom content that will be placed in the card component.</td>
      </tr>
    </DxcTable>
  );
};

export default buttonPropsTable;
