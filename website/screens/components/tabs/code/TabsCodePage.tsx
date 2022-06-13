import {
  DxcText,
  DxcList,
  DxcStack,
  DxcTable,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>tabs: object[]</td>
          <td></td>
          <td>
            An array of objects representing the tabs. Each of them has the
            following properties:
            <ul>
              <li>
                <b>label</b>: Tab label.
              </li>
              <li>
                <b>icon</b>: Element or path used as the icon that will be
                displayed in the tab.
              </li>
              <li>
                <b>isDisabled</b>: Whether the tab is disabled or not.
              </li>
              <li>
                <b>notificationNumber</b>: It can have boolean type or number
                type. If the value is 'true', an empty badge will appear. If it
                is 'false', no badge will appear. If a number is put it will be
                shown as the label of the notification in the tab, taking into
                account that if that number is greater than 99, it will appear
                as '+99' in the badge.
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>iconPosition: 'top' | 'left'</td>
          <td>
            <Code>'top'</Code>
          </td>
          <td>
            Whether the icon should appear above or to the left of the label.
          </td>
        </tr>
        <tr>
          <td>defaultActiveTabIndex: number</td>
          <td></td>
          <td>Initially active tab, only when it is uncontrolled.</td>
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
            This function will be called when the user clicks on a tab. The
            index of the clicked tab will be passed as a parameter.
          </td>
        </tr>
        <tr>
          <td>onTabHover: function</td>
          <td></td>
          <td>
            This function will be called when the user hovers a tab.The index of
            the hovered tab will be passed as a parameter.
          </td>
        </tr>
        <tr>
          <td>margin: string | object</td>
          <td></td>
          <td>
            Size of the margin to be applied to the component ('xxsmall' |
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
            can pass an object with 'top', 'bottom', 'left' and 'right'
            properties in order to specify different margin sizes.
          </td>
        </tr>
        <tr>
          <td>tabIndex: number</td>
          <td>
            <Code>0</Code>
          </td>
          <td>Value of the tabindex for each tab.</td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: (
          <>
            <Example example={basicUsage} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const TabsUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/tabs/usage/TabsUsagePage.tsx" />
    </DxcStack>
  );
};

export default TabsUsagePage;
