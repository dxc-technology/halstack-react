import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import StatusBadge from "@/common/StatusBadge";
import Code, { TableCode } from "@/common/Code";
import { DxcLink, DxcFlex, DxcTable, DxcParagraph } from "@dxc-technology/halstack-react";
import Link from "next/link";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                children
              </DxcFlex>
            </td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>The area inside the sidenav.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>The area assigned to render the title. It is highly recommended to use the sidenav title.</td>
            <td>-</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "DxcSidenav.Title",
    content: (
      <DxcParagraph>
        This compound component should only be used inside the <Code>title</Code> prop.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Props",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                    <StatusBadge status="required" />
                    children
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>React.ReactNode</TableCode>
                </td>
                <td>The area inside the sidenav title. This area can be used to render custom content.</td>
                <td>-</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "DxcSidenav.Section",
    content: (
      <DxcParagraph>
        Sections must be defined as direct children of the <Code>DxcSidenav</Code> and serve to group links, groups
        and/or custom content into different and distinguishable parts of the component. Consecutive sections are
        separated by a divider.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Props",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                    <StatusBadge status="required" />
                    children
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>React.ReactNode</TableCode>
                </td>
                <td>The area inside the sidenav section. Child items will be stacked inside a flex container.</td>
                <td>-</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "DxcSidenav.Group",
    content: (
      <DxcParagraph>
        Even though any children are accepted in a group, we recommend using only the <Code>DxcSidenav.Link</Code> or
        any React-based router, complemented with this one, as links to the different pages.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Props",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                    <StatusBadge status="required" />
                    children
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>React.ReactNode</TableCode>
                </td>
                <td>The area inside the sidenav group. This area can be used to render sidenav links.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>collapsable</td>
                <td>
                  <TableCode>boolean</TableCode>
                </td>
                <td>
                  If true, the sidenav group will be a button that will allow you to collapse the links contained within
                  it. In addition, if it's collapsed and contains the currently selected link, the group title will also
                  be marked as selected.
                </td>
                <td>
                  <TableCode>false</TableCode>
                </td>
              </tr>
              <tr>
                <td>icon</td>
                <td>
                  <TableCode>string | {"(React.ReactNode & React.SVGProps <SVGSVGElement>)"}</TableCode>
                </td>
                <td>
                  A{" "}
                  <DxcLink newWindow href="https://fonts.google.com/icons">
                    Material Symbol
                  </DxcLink>{" "}
                  or a SVG element to be displayed next to the title of the group as an icon.
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>title</td>
                <td>
                  <TableCode>string</TableCode>
                </td>
                <td>The title of the sidenav group.</td>
                <td>-</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "DxcSidenav.Link",
    content: (
      <DxcParagraph>
        As with the <Code>DxcLink</Code> component, we decided to make our Sidenav link component a styled HTML anchor
        that can be used with any React-based router. You can check the{" "}
        <Link href={"/components/link/"} passHref legacyBehavior>
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
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                    <StatusBadge status="required" />
                    children
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>React.ReactNode</TableCode>
                </td>
                <td>The area inside the sidenav link.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>href</td>
                <td>
                  <TableCode>string</TableCode>
                </td>
                <td>Page to be opened when the user clicks on the link.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>icon</td>
                <td>
                  <TableCode>string | {"(React.ReactNode & React.SVGProps <SVGSVGElement>)"}</TableCode>
                </td>
                <td>
                  A{" "}
                  <DxcLink newWindow href="https://fonts.google.com/icons">
                    Material Symbol
                  </DxcLink>{" "}
                  or a SVG element to be displayed left to the link as an icon.
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>newWindow</td>
                <td>
                  <TableCode>boolean</TableCode>
                </td>
                <td>If true, the page is opened in a new browser tab.</td>
                <td>
                  <TableCode>false</TableCode>
                </td>
              </tr>
              <tr>
                <td>onClick</td>
                <td>
                  <TableCode>{"(event: React.MouseEvent <HTMLAnchorElement>) => void"}</TableCode>
                </td>
                <td>
                  This function will be called when the user clicks the link and the event will be passed to this
                  function.
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>selected</td>
                <td>
                  <TableCode>boolean</TableCode>
                </td>
                <td>
                  If true, the link will be marked as selected. Moreover, in that same case, if it is contained within a
                  collapsed group, and consequently, the currently selected link is not visible, the group title will
                  appear as selected too.
                </td>
                <td>
                  <TableCode>false</TableCode>
                </td>
              </tr>
              <tr>
                <td>tabIndex</td>
                <td>
                  <TableCode>number</TableCode>
                </td>
                <td>
                  Value of the <Code>tabindex</Code> attribute.
                </td>
                <td>
                  <TableCode>0</TableCode>
                </td>
              </tr>
            </tbody>
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
          />
        ),
      },
    ],
  },
];

const SidenavCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/sidenav/code/SidenavCodePage.tsx" />
  </DxcFlex>
);

export default SidenavCodePage;
