import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import Example from "@/common/example/Example";
import basic from "./examples/basicUsage";

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
          <td>socialLinks: object[]</td>
          <td>
            <Code>[]</Code>
          </td>
          <td>
            An array of objects representing the links that will be rendered as
            icons at the top-right side of the footer. Each object has the
            following properties:
            <ul>
              <li>
                <b>logo</b>: Element or path used as the icon for the link.
              </li>
              <li>
                <b>href</b>: URL of the page the link goes to.
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>bottomLinks: object[]</td>
          <td>
            <Code>[]</Code>
          </td>
          <td>
            An array of objects representing the links that will be rendered at
            the bottom part of the footer. Each object has the following
            properties:
            <ul>
              <li>
                <b>text</b>: Text for the link.
              </li>
              <li>
                <b>href</b>: URL of the page the link goes to.
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>copyright: string</td>
          <td></td>
          <td>The text that will be displayed as copyright disclaimer.</td>
        </tr>
        <tr>
          <td>children: node</td>
          <td></td>
          <td>
            The center section of the footer. Can be used to render custom
            content in this area.
          </td>
        </tr>
        <tr>
          <td>margin: string</td>
          <td></td>
          <td>
            Size of the top margin to be applied to the footer ('xxsmall' |
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
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: (
          <>
            <Example example={basic} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const FooterCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/footer/code/FooterCodePage.tsx" />
    </DxcStack>
  );
};

export default FooterCodePage;
