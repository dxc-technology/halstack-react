import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import {
  DxcLink,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import Link from "next/link";

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
          <td>children: node</td>
          <td></td>
          <td></td>
        </tr>
      </DxcTable>
    ),
    subSections: [
      {
        title: "DxcSidenav.Title",
        content: (
          <DxcText as="p">
            The title will always be positioned over the sections.
          </DxcText>
        ),
        subSections: [
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
                  <td>children: node</td>
                  <td></td>
                  <td>
                    The area inside the sidenav title. This area can be used to
                    render custom content.
                  </td>
                </tr>
                <tr>
                  <td>icon: SVG</td>
                  <td></td>
                  <td>The icon to be displayed in the sidenav title.</td>
                </tr>
              </DxcTable>
            ),
          },
        ],
      },
      {
        title: "DxcSidenav.Section",
        content: (
          <DxcText as="p">
            This must be defined as children of the Sidenav. It will wrap each
            of its children in a DxcStack component with space small and a
            divider. It has the following props:
          </DxcText>
        ),
        subSections: [
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
                  <td>children: node</td>
                  <td></td>
                  <td>
                    The area inside the sidenav section. This area can be used
                    to render sidenav groups, links and custom content.
                  </td>
                </tr>
              </DxcTable>
            ),
          },
          {
            title: "DxcSidenav.Group",
            content: (
              <DxcText as="p">
                Even though any children are accepted we recommend using only
                the DxcSidenav.Link or any react based router with the
                DxcSidenav.Link.
              </DxcText>
            ),
            subSections: [
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
                      <td>children: node</td>
                      <td></td>
                      <td>
                        The area inside the sidenav group. This area can be used
                        to render sidenav links.
                      </td>
                    </tr>
                    <tr>
                      <td>title: string</td>
                      <td></td>
                      <td>The title of the sidenav group.</td>
                    </tr>
                    <tr>
                      <td>collapsable: boolean</td>
                      <td>
                        <Code>false</Code>
                      </td>
                      <td>
                        If true the sidenav group title will be considered a
                        button and the group will be collapsable.
                      </td>
                    </tr>
                    <tr>
                      <td>icon: SVG</td>
                      <td></td>
                      <td>
                        The icon to be displayed next to the title of the group.
                      </td>
                    </tr>
                  </DxcTable>
                ),
              },
            ],
          },
          {
            title: "DxcSidenav.Link",
            content: (
              <DxcText as="p">
                As the our link component, we decided to make our link component
                just a styled HTML anchor element which allows it to be used in
                any React based router. You can check the{" "}
                <Link href={"/components/link/"} passHref>
                  <DxcLink>Link</DxcLink>
                </Link>{" "}
                for more information regarding this.
              </DxcText>
            ),
            subSections: [
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
                      <td>tabIndex: number</td>
                      <td>
                        <Code>0</Code>
                      </td>
                      <td>Value of the tabindex.</td>
                    </tr>
                    <tr>
                      <td>href: string</td>
                      <td></td>
                      <td>
                        Page to be opened when the user clicks on the link.
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
                      <td>icon: SVG</td>
                      <td></td>
                      <td>
                        Element or path used as the icon that will be placed to
                        the left of the link text.
                      </td>
                    </tr>
                    <tr>
                      <td>selected: boolean</td>
                      <td>
                        <Code>false</Code>
                      </td>
                      <td>If true, the link will be marked as selected.</td>
                    </tr>
                    <tr>
                      <td>onClick: function</td>
                      <td></td>
                      <td>
                        This function will be called when the user clicks the
                        link.
                      </td>
                    </tr>
                    <tr>
                      <td>children: string</td>
                      <td></td>
                      <td>The area inside the sidenav link.</td>
                    </tr>
                  </DxcTable>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
];

const SidenavCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/sidenav/code/SidenavCodePage.tsx" />
    </DxcStack>
  );
};

export default SidenavCodePage;
