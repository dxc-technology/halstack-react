import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const dropdownPropsTable = () => {
  return (
    <DxcTable>
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
            </li>
            <li>
              <b>isDisabled</b>: Whether the tab is disabled or not.
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
        <td>
          The index of the active tab. If undefined, the component will be
          uncontrolled and the active tab will be managed internally by the
          component.
        </td>
      </tr>
      <tr>
        <td>onTabClick: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks on a tab. The index
          of the clicked tab will be passed as a parameter.
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

export default dropdownPropsTable;
