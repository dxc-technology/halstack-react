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
          <td>title: node</td>
          <td></td>
          <td>
            The area assigned to render the title. It is highly recommended to
            use the sidenav title.
          </td>
        </tr>
        <tr>
          <td>children: node</td>
          <td></td>
          <td>
            The area inside the sidenav. The content will be placed inside a
            stack with a divider between each element.
          </td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "DxcSidenav.Title",
    content: (
      <DxcParagraph>
        This compound component should only be used inside the{" "}
        <Code>title</Code> prop.
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
        Sections must be defined as direct children of the{" "}
        <Code>DxcSidenav</Code> and serve to group links, groups and/or custom
        content into different and distinguishable parts of the component.
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
                The area inside the sidenav section. This area can be used to
                render sidenav groups, links and custom content.
              </td>
            </tr>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "DxcSidenav.Group",
    content: (
      <DxcParagraph>
        Even though any children are accepted in a group, we recommend using
        only the <Code>DxcSidenav.Link</Code> or any React-based router,
        complemented with this one, as links to the different pages.
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
                If true the sidenav group title will be a button and the group
                will become collapsable. In addition, if it appears collapsed
                and contains the currently selected link, the group title will
                also be marked as selected.
              </td>
            </tr>
            <tr>
              <td>icon: SVG | string</td>
              <td></td>
              <td>The icon to be displayed next to the title of the group.</td>
            </tr>
            <tr>
              <td>children: node</td>
              <td></td>
              <td>
                The area inside the sidenav group. This area can be used to
                render sidenav links.
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
        As with the <Code>DxcLink</Code> component, we decided to make our
        Sidenav link component a styled HTML anchor that can be used with any
        React-based router. You can check the{" "}
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
              <td>href: string</td>
              <td></td>
              <td>Page to be opened when the user clicks on the link.</td>
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
                Element or path used as the icon that will be placed to the left
                of the link text.
              </td>
            </tr>
            <tr>
              <td>selected: boolean</td>
              <td>
                <Code>false</Code>
              </td>
              <td>
                If true, the link will be marked as selected. Moreover, in that
                same case, if it is contained within a collapsed group, and
                consequently, the currently selected link is not visible, the
                group title will appear as selected too.
              </td>
            </tr>
            <tr>
              <td>onClick: function</td>
              <td></td>
              <td>
                This function will be called when the user clicks the link and
                the event will be passed to this function.
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
              <td>children: node</td>
              <td></td>
              <td>The area inside the sidenav link.</td>
            </tr>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Application layout with sidenav",
        content: (
          <iframe
            src="https://codesandbox.io/embed/with-sidenav-xce9s2?fontsize=14&hidenavigation=1&theme=dark"
            style={{
              width: "100%",
              minHeight: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            title="Application layout with sidenav"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        ),
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
