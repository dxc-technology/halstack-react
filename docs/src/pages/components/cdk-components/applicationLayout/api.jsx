import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const SidenavApplicationLayoutPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>mode: 'overlay' | 'push' </td>
        <td>
          <code>'overlay'</code>
        </td>
        <td>
          Default action over the content of the page, overlay the content or push to the right
          ('push' | 'overlay'). In lower resolutions the mode will always be overlay.
        </td>
      </tr>
      <tr>
        <td>displayArrow: boolean</td>
        <td>
          <code>true</code>
        </td>
        <td>
          If false, the arrow button is hidden. In lower resolutions the arrow will be always
          displayed.
        </td>
      </tr>
      <tr>
        <td>padding: string | object </td>
        <td></td>
        <td>
          Size of the padding to be applied to the custom area ('xxsmall' | 'xsmall' | 'small' |
          'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an object with 'top', 'bottom',
          'left' and 'right' properties in order to specify different padding sizes.
        </td>
      </tr>
      <tr>
        <td>children: React.ReactNode </td>
        <td></td>
        <td>The area inside the sidenav. This area can be used to render custom content.</td>
      </tr>
    </DxcTable>
  );
};

export default SidenavApplicationLayoutPropsTable;
