import { DxcText, DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import Example from "@/common/example/Example";
import quickNav from "./examples/quickNav";

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
          <td>title: string</td>
          <td></td>
          <td>Title of the quick nav component.</td>
        </tr>
        <tr>
          <td>links: Link[]</td>
          <td></td>
          <td>
            Links of the quick nav component. Each link has the following
            properties:
            <ul>
              <li>
                <b>label: string</b>: Text to be shown in the link. The content
                must be wrapped with an id equals to the slugified label (in
                lower case and the white spaces replaced by &#39;-&#39;) in
                order to be able to navigate to the section that the label
                references.
              </li>
              <li>
                <b>links: Link[]</b>: Sublinks of the link.
              </li>
            </ul>
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
            <Example example={quickNav} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const QuickNavCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/quick-nav/code/QuickNavCodePage.tsx" />
    </DxcStack>
  );
};

export default QuickNavCodePage;
