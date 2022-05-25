import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const tabPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>active: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>Whether the tab is active or not.</td>
      </tr>
      <tr>
        <td>disabled: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>Whether the tab is disabled or not.</td>
      </tr>
      <tr>
        <td>href: string</td>
        <td></td>
        <td>Page to be opened when the user clicks on the tab.</td>
      </tr>
      <tr>
        <td>icon: node | string</td>
        <td></td>
        <td>
          Element or path used as the icon that will be displayed in the tab.
        </td>
      </tr>
      <tr>
        <td>notificationNumber: boolean | number</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If the value is 'true', an empty badge will appear. If it is 'false',
          no badge will appear. If a number is put it will be shown as the label
          of the notification in the tab, taking into account that if that
          number is greater than 99, it will appear as '+99' in the badge.
        </td>
      </tr>
      <tr>
        <td>children: string | node</td>
        <td></td>
        <td>
          Content of the tab. To use the component with other libraries (such as
          React Router or Next.js Link) pass the custom link wrapped in{" "}
          <code>React.forwardRef</code>. Check last example to see how it works.
        </td>
      </tr>
    </DxcTable>
  );
};

export default tabPropsTable;
