import {
  DxcStack,
  DxcTable,
  DxcText,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import customContent from "./examples/customContent";
import dropdownHeader from "./examples/dropdownHeader";
import Link from "next/link";
import React from "react";

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
          <td>underlined: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>
            Wether a contrast line should appear at the bottom of the header.
          </td>
        </tr>
        <tr>
          <td>content: node</td>
          <td></td>
          <td>
            Content showed in the header. Take into account that the component
            applies styles for the first child in the content, so we recommend
            the use of React.Fragment to be applied correctly. Otherwise, the
            styles can be modified.
          </td>
        </tr>
        <tr>
          <td>responsiveContent: function</td>
          <td></td>
          <td>
            Content showed in responsive version. It receives the close menu
            handler that can be used to add that functionality when a element is
            clicked.
          </td>
        </tr>
        <tr>
          <td>onClick: function</td>
          <td></td>
          <td>
            This function will be called when the user clicks the header logo.
          </td>
        </tr>
        <tr>
          <td>margin: string</td>
          <td></td>
          <td>
            Size of the bottom margin to be applied to the header ('xxsmall' |
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
          </td>
        </tr>
        <tr>
          <td>padding: string | object</td>
          <td></td>
          <td>
            Size of the padding to be applied to the custom area of the
            component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' |
            'xlarge' | 'xxlarge'). You can pass an object with 'top', 'bottom',
            'left' and 'right' properties in order to specify different padding
            sizes.
          </td>
        </tr>
        <tr>
          <td>tabIndex: number</td>
          <td>
            <Code>0</Code>
          </td>
          <td>
            Value of the tabindex for all interactuable elements, except those
            inside the custom area.
          </td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "Children",
    subSections: [
      {
        title: "DxcHeader.Dropdown",
        content: (
          <DxcText>
            Everything between this tags will be displayed as a dropdown. If you
            want to show a{" "}
            <Link href="/components/dropdown" passHref>
              <DxcLink>DxcDropdown</DxcLink>
            </Link>
            , as a shortcut, you can also use it as a direct child of the
            DxcHeader without the tags, but we recommend to use it with the tags
            since some styles will be applied for a better fit in the header.
          </DxcText>
        ),
      },
    ],
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
      {
        title: "Custom content",
        content: <Example example={customContent} defaultIsVisible />,
      },
      {
        title: "Dropdown Header",
        content: <Example example={dropdownHeader} defaultIsVisible />,
      },
    ],
  },
];

const HeaderCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/header/code/HeaderCodePage.tsx" />
    </DxcStack>
  );
};

export default HeaderCodePage;
