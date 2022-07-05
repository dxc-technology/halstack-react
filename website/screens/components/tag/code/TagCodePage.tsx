import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import icons from "./examples/icons";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <HeaderDescriptionCell>Description</HeaderDescriptionCell>
        </tr>
        <tr>
          <td>label: string</td>
          <td></td>
          <td>Text to be placed next inside the tag.</td>
        </tr>
        <tr>
          <td>labelPosition: 'before' | 'after'</td>
          <td>
            <Code>'after'</Code>
          </td>
          <td>Whether the label should appear after or before the icon.</td>
        </tr>
        <tr>
          <td>icon: node | string</td>
          <td></td>
          <td>
            Element or path used as the icon that will be placed next to the
            label.
          </td>
        </tr>
        <tr>
          <td>iconBgColor: string</td>
          <td>
            <Code>'#5f249f'</Code>
          </td>
          <td>Background color of the icon section of the tag.</td>
        </tr>
        <tr>
          <td>linkHref: string</td>
          <td></td>
          <td>
            If defined, the tag will be displayed as an anchor, using this prop
            as "href". Component will show some visual feedback on hover.
          </td>
        </tr>
        <tr>
          <td>newWindow: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>If true, the page is opened in a new browser tab.</td>
        </tr>
        <tr>
          <td>onClick: function</td>
          <td></td>
          <td>
            If defined, the tag will be displayed as a button. This function
            will be called when the user clicks the tag. Component will show
            some visual feedback on hover.
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
          <td>size: string</td>
          <td>
            <Code>'fitContent'</Code>
          </td>
          <td>
            Size of the component ('small' | 'medium' | 'large' | 'fillParent' |
            'fitContent').
          </td>
        </tr>
        <tr>
          <td>tabIndex: number</td>
          <td>
            <Code>0</Code>
          </td>
          <td>Value of the tabindex attribute.</td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
      {
        title: "Icons",
        content: <Example example={icons} defaultIsVisible />,
      },
    ],
  },
];

const TagCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/tag/code/TagCodePage.tsx" />
    </DxcStack>
  );
};

export default TagCodePage;
