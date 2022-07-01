import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const SidenavApplicationLayoutPropsTable = () => {
  return (
    <DxcTable margin={{ top: "medium", bottom: "medium" }}>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>padding: string | object </td>
        <td></td>
        <td>
          Size of the padding to be applied to the custom area ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different padding sizes.
        </td>
      </tr>
      <tr>
        <td>children: React.ReactNode </td>
        <td></td>
        <td>
          The area inside the sidenav. This area can be used to render custom
          content.
        </td>
      </tr>
    </DxcTable>
  );
};

export const ApplicationLayoutPropsTable = () => (
  <DxcTable margin={{ top: "medium", bottom: "medium" }}>
    <tr>
      <th>Name</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>visibilityToggleLabel: string</td>
      <td></td>
      <td>
        Text to be placed next to the hamburger button that toggles the
        visibility of the sidenav.
      </td>
    </tr>
  </DxcTable>
);

export default SidenavApplicationLayoutPropsTable;
