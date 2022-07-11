import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const SidenavPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>

      <tr>
        <td>title: node </td>
        <td></td>
        <td>
          The area assigned to render the sidenav title. It is highly
          recommended to use the sidenav title.
        </td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>
          The area inside the sidenav. This area can be used to render the
          content inside the sidenav.
        </td>
      </tr>
    </DxcTable>
  );
};

export const SidenavGroupPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>

      <tr>
        <td>title: string </td>
        <td></td>
        <td>
          If true the sidenav group title will be considered a button and the
          group will be collapsable.
        </td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>
          The area inside the sidenav group. This area can be used to render
          sidenav links.
        </td>
      </tr>
      <tr>
        <td>collapsable: boolean </td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true the sidenav group title will be considered a button and the
          group will be collapsable.
        </td>
      </tr>
      <tr>
        <td>icon: string | SVG </td>
        <td></td>
        <td>The icon to be displayed next to the title of the group.</td>
      </tr>
    </DxcTable>
  );
};

export const SidenavLinkPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>

      <tr>
        <td>href: string</td>
        <td></td>
        <td>Page to be opened when the user clicks on the link.</td>
      </tr>
      <tr>
        <td>onClick: function</td>
        <td></td>
        <td>This function will be called when the user clicks the link.</td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>Value of the tabindex attribute.</td>
      </tr>
      <tr>
        <td>children: string</td>
        <td></td>
        <td>The area inside the sidenav link.</td>
      </tr>
      <tr>
        <td>newWindow: boolean</td>
        <td></td>
        <td>If true, the page is opened in a new browser tab.</td>
      </tr>
      <tr>
        <td>icon: string | SVG</td>
        <td></td>
        <td>
          Element or path used as the icon that will be placed to the left of
          the link text.
        </td>
      </tr>
      <tr>
        <td>selected: boolean</td>
        <td></td>
        <td>
          Element or path used as the icon that will be placed to the left of
          the link text.
        </td>
      </tr>
    </DxcTable>
  );
};

export const SidenavTitlePropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>children: node | string</td>
        <td></td>
        <td>
          The area inside the sidenav title. This area can be used to render
          custom content.
        </td>
      </tr>
    </DxcTable>
  );
};

export default SidenavPropsTable;
