import React from "react";
import PropsTable from "../../common/PropsTable";

const dropdownPropsTable = () => {
  return (
    <PropsTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>tabs: object[]</td>
        <td>
          <code>[]</code>
        </td>
        <td>
          An array of objects representing the tabs. Each of them has the
          following properties:
          <ul>
            <li>
              <b>label</b>: Tab label.
            </li>
            <li>
              <b>iconSrc</b>: URL of the icon to be displayed in the tab.
              (Optional)
            </li>
            <li>
              <b>isDisabled</b>: Whether the tab is disabled.
            </li>
          </ul>
        </td>
      </tr>

      <tr>
        <td>mode: 'filled' | 'underlined'</td>
        <td>
          <code>'filled'</code>
        </td>
        <td>Uses one of the available component modes.</td>
      </tr>
      <tr>
        <td>theme: 'light' | 'dark'</td>
        <td>
          <code>'light'</code>
        </td>
        <td>Uses one of the available component themes.</td>
      </tr>
      <tr>
        <td>disableRipple: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the ripple effect will be disabled.</td>
      </tr>
      <tr>
        <td>activeTabIndex: number</td>
        <td></td>
        <td>The index of the active tab.</td>
      </tr>
      <tr>
        <td>onTabClick: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks on a tab. The index
          of the clicked tab will be passed as a parameter.
        </td>
      </tr>
    </PropsTable>
  );
};

export default dropdownPropsTable;
