import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import {
  DxcLink,
  DxcFlex,
  DxcTable,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import Link from "next/link";
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
          <td>children: node</td>
          <td></td>
          <td>
            The area inside the sidenav. The content will be placed inside a
            stack with a divider between each element.
          </td>
        </tr>
        <tr>
          <td>title: node</td>
          <td></td>
          <td>
            The area assigned to render the title. It is highly recommended to
            use the sidenav title.
          </td>
        </tr>
      </DxcTable>
    ),
    subSections: [
      {
        title: "DxcSidenav.Title",
        content: (
          <DxcParagraph>
            The title should be only used in the sidenav title prop.
          </DxcParagraph>
        ),
        subSections: [
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
                  <td>children: node</td>
                  <td></td>
                  <td>
                    The area inside the sidenav title. This area can be used to
                    render custom content.
                  </td>
                </tr>
              </DxcTable>
            ),
          },
        ],
      },
      {
        title: "DxcSidenav.Section",
        content: (
          <DxcParagraph>
            This must be defined as children of the Sidenav. It helps to
            separate groups and links into different agroupations. It has the
            following props:
          </DxcParagraph>
        ),
        subSections: [
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
              <DxcParagraph>
                Even though any children are accepted in the group we recommend
                using only the DxcSidenav.Link or any react based router with
                the DxcSidenav.Link.
              </DxcParagraph>
            ),
            subSections: [
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
                      <td>icon: SVG | string</td>
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
              <DxcParagraph>
                As the DxcLink component, we decided to make our link component
                in the sidenav just a styled HTML anchor element which allows it
                to be used in any React based router. You can check the{" "}
                <Link href={"/components/link/"} passHref>
                  <DxcLink>Link</DxcLink>
                </Link>{" "}
                for more information regarding this.
              </DxcParagraph>
            ),
            subSections: [
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
                      <td>icon: SVG | string</td>
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
                      <td>children: string</td>
                      <td></td>
                      <td>The area inside the sidenav link.</td>
                    </tr>
                    <tr>
                      <td>onClick: function</td>
                      <td></td>
                      <td>
                        This function will be called when the user clicks the
                        link and the event will be passed to this function.
                      </td>
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
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/sidenav/code/SidenavCodePage.tsx" />
    </DxcFlex>
  );
};

export default SidenavCodePage;
