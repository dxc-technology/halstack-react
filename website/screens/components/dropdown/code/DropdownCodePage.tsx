import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import icons from "./examples/icons";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Props",
    content: (
      <>
        <DxcTable>
          <tr>
            <th>Name</th>
            <th>Default</th>
            <HeaderDescriptionCell>Description</HeaderDescriptionCell>
          </tr>
          <tr>
            <td>options: object[]</td>
            <td></td>
            <td>
              An array of objects representing the options. Each object has the
              following properties:
              <ul>
                <li>
                  <b>label</b>: Option display value.
                </li>
                <li>
                  <b>icon</b>: Element or path used as the icon that will be
                  placed next to the option label.
                </li>
                <li>
                  <b>value</b>: Option inner value.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>optionsIconPosition: 'before' | 'after'</td>
            <td>
              <Code>'before'</Code>
            </td>
            <td>
              In case options include icons, whether the icon should appear
              after or before the label.
            </td>
          </tr>
          <tr>
            <td>icon: node | string</td>
            <td></td>
            <td>
              Element or path used as the icon that will be placed next to the
              dropdown label.
            </td>
          </tr>
          <tr>
            <td>iconPosition: 'before' | 'after'</td>
            <td>
              <Code>'before'</Code>
            </td>
            <td>Whether the icon should appear after or before the label.</td>
          </tr>
          <tr>
            <td>label: string</td>
            <td></td>
            <td>Text to be placed within the dropdown.</td>
          </tr>
          <tr>
            <td>caretHidden: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>
              Whether the arrow next to the label must be displayed or not.
            </td>
          </tr>
          <tr>
            <td>onSelectOption: function</td>
            <td></td>
            <td>
              This function will be called every time the selection changes. The
              value of the selected option will be passed as a parameter.
            </td>
          </tr>
          <tr>
            <td>expandOnHover: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>If true, the options are showed when the dropdown is hover.</td>
          </tr>
          <tr>
            <td>margin: string | object</td>
            <td></td>
            <td>
              Size of the margin to be applied to the component ('xxsmall' |
              'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
              You can pass an object with 'top', 'bottom', 'left' and 'right'
              properties in order to specify different margin sizes.
            </td>
          </tr>
          <tr>
            <td>size: string</td>
            <td>
              <Code>'fitContent'</Code>
            </td>
            <td>
              Size of the component ('small' | 'medium' | 'large' | 'fitContent'
              | 'fillParent' ).
            </td>
          </tr>
          <tr>
            <td>tabIndex: number</td>
            <td>
              <Code>0</Code>
            </td>
            <td>Value of the tabindex.</td>
          </tr>
          <tr>
            <td>disabled: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>If true, the component will be disabled.</td>
          </tr>
        </DxcTable>
      </>
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
      {
        title: "Icons",
        content: (
          <>
            <Example example={icons} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const DropdownCodePage = () => {
  return (
    <DxcStack gutter="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/dropdown/code/DropdownCodePage.tsx" />
    </DxcStack>
  );
};

export default DropdownCodePage;
