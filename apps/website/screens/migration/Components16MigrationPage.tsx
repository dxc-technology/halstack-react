import { DxcFlex, DxcParagraph, DxcHeading, DxcTable, DxcLink, DxcBulletedList } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import Code from "@/common/Code";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Version <Code>16.0.0</Code> introduces major breaking changes, including redesigned components, API updates, and
        the removal of deprecated elements. This guide details the main differences and how to migrate components from{" "}
        <Code>15.x.x</Code> to <Code>16.0.0</Code>.
      </DxcParagraph>
    ),
  },
  {
    title: "Added components",
    content: (
      <>
        <DxcParagraph>The following component is now available to be used in your applications:</DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Component</th>
              <th>Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Avatar</td>
              <td>
                Visual element used to identify users, teams, or entities across the interface. It helps create a
                recognizable and consistent user experience by visually representing people or objects through images,
                icons, or initials.
              </td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcParagraph>
          For more information about its usage and features, refer to{" "}
          <Link href="/components/avatar" passHref legacyBehavior>
            <DxcLink>its documentation</DxcLink>
          </Link>
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Modified components",
    content: (
      <DxcParagraph>
        Several components were redesigned and now have a different API or behavior. See below for details.
      </DxcParagraph>
    ),
    // TODO: ADD AN EXAMPLE CONVERTING THE OLD APIs TO THE NEW ONES OR REDIRECT TO THE COMPONENTS' PAGES?
    subSections: [
      {
        title: "ApplicationLayout",
        content: (
          <DxcParagraph>
            The <Code>ApplicationLayout</Code> component and its compound components have been redesigned. The new API
            focuses on improved flexibility, better responsiveness, and easier customization. The <Code>header</Code>{" "}
            prop is no longer required, however it is highly encouraged to have either a <Code>Sidenav</Code> or a{" "}
            <Code>Header</Code> in your application. The following sections will explain the changes in more depth.
          </DxcParagraph>
        ),
        subSections: [
          {
            title: "ApplicationLayout.Header",
            content: (
              <>
                <DxcParagraph>
                  The <Code>Header</Code> component has been redesigned. The new API provides a simpler and more
                  flexible approach:
                </DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <b>v15 (old)</b>: The header was configured using props like <Code>underlined</Code>,
                    <Code>content</Code>, and <Code>responsiveContent</Code>. Dropdowns were rendered using{" "}
                    <Code>DxcHeader.Dropdown</Code>.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <b>v16</b>: The new header uses <Code>branding</Code> for logo/app title, <Code>navItems</Code> for
                    navigation links (with optional nested groups), <Code>sideContent</Code> for side elements, and
                    <Code>responsiveBottomContent</Code> for mobile-specific content.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
                <DxcParagraph>
                  When migrating, move your old <Code>content</Code> and dropdowns into the new <Code>branding</Code>{" "}
                  and
                  <Code>navItems</Code> props. Replace <Code>responsiveContent</Code> with
                  <Code>responsiveBottomContent</Code> and use <Code>sideContent</Code> as needed for further required
                  interaction.
                </DxcParagraph>
                <DxcParagraph>
                  For further information regarding the new API, please refer to{" "}
                  <Link href="/components/header" passHref legacyBehavior>
                    <DxcLink>updated documentation</DxcLink>
                  </Link>
                </DxcParagraph>
              </>
            ),
          },
          {
            title: "ApplicationLayout.Sidenav",
            content: (
              <>
                <DxcParagraph>
                  The <Code>Sidenav</Code> component has also changed from a compound component structure to a
                  declarative
                  <Code>navItems</Code> prop. This new API also features changes that improve the responsiveness and
                  flexibility of the component.
                </DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <b>v15 (old)</b>: Nested components like <Code>DxcSidenav.Title</Code>,{" "}
                    <Code>DxcSidenav.Section</Code>,<Code>DxcSidenav.Group</Code>, and <Code>DxcSidenav.Link</Code>{" "}
                    defined the structure and links.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <b>v16</b>: The <Code>navItems</Code> prop accepts an array of <Code>Item</Code> and
                    <Code>GroupItem</Code> objects. Each <Code>GroupItem</Code> can have a title, icon, collapsible
                    flag, and children <Code>Item</Code> objects. Each <Code>Item</Code> has a <Code>label</Code>,
                    optional <Code>icon</Code>, <Code>selected</Code>
                    state, and an <Code>onSelect</Code> callback.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
                <DxcParagraph>
                  This is the main changes but there are some new additional props that have been added in this version:
                </DxcParagraph>
                <DxcParagraph>
                  To migrate, flatten your old <Code>Title</Code>, <Code>Section</Code>, <Code>Group</Code>, and
                  <Code>Link</Code> structure into a single <Code>items</Code> array following the new typing.
                </DxcParagraph>
                <DxcParagraph>
                  When migrating:{" "}
                  <DxcBulletedList>
                    <DxcBulletedList.Item>
                      Flatten your old <Code>Title</Code>, <Code>Section</Code>, <Code>Group</Code>, and
                      <Code>Link</Code> structure into a single <Code>items</Code> array following the new typing.
                    </DxcBulletedList.Item>
                    <DxcBulletedList.Item>
                      Move your old logo/app title into the new <Code>branding</Code>
                    </DxcBulletedList.Item>
                    <DxcBulletedList.Item>
                      Include <Code>topContent</Code> and <Code>bottomContent</Code> as needed for further interaction
                      and handle the expanded state for responsive layouts with <Code>defaultExpanded</Code> for
                      uncontrolled behavior or <Code>expanded</Code> and <Code>onExpandedChange</Code> for controlled
                      behavior
                    </DxcBulletedList.Item>
                  </DxcBulletedList>
                </DxcParagraph>
              </>
            ),
          },
          // TODO: CHECK PELAYO PR FOR THE NEW FOOTER API
          {
            title: "ApplicationLayout.Footer",
            content: <DxcParagraph>TBD</DxcParagraph>,
          },
        ],
      },
      {
        title: "Badge",
        content: (
          <DxcParagraph>
            Due to the recent token updates, we have aligned the <Code>color</Code> prop with a semantic color approach.
            The available values are now <Code>'primary'</Code>, <Code>'secondary'</Code>, <Code>'tertiary'</Code>,
            <Code>'success'</Code>, <Code>'info'</Code>, <Code>'neutral'</Code>, <Code>'warning'</Code>, and
            <Code>'error'</Code>, replacing the previous functional options (<Code>'grey'</Code>, <Code>'blue'</Code>,{" "}
            <Code>'green'</Code>, <Code>'orange'</Code>, <Code>'red'</Code>,<Code>'yellow'</Code>, <Code>'purple'</Code>
            ).
          </DxcParagraph>
        ),
      },
      {
        title: "DataGrid",
        content: (
          <DxcParagraph>
            This component has exited the experimental phase and is now fully supported, featuring new functionalities
            like on-demand loading (thanks to the <Code>childrenTrigger</Code> prop), possibility to have rows expanded
            by default and the possibility to render any page by default. To know more about these new features, please
            refer to the updated documentation.
          </DxcParagraph>
        ),
      },
      {
        title: "Heading",
        content: (
          <DxcParagraph>
            The weight options have been refactored, from <Code>'light' | 'normal' | 'bold'</Code> to{" "}
            <Code>'default' | 'regular' | 'light'</Code>. Additionally, a heading level 6 is now supported.
          </DxcParagraph>
        ),
      },
      {
        title: "Slider",
        content: (
          <DxcParagraph>
            <Code>tabIndex</Code> prop has been removed. The prop was not having any effect in the component and was not
            included on purpose, so it is now removed.
          </DxcParagraph>
        ),
      },
      {
        title: "Tabs",
        content: (
          <DxcParagraph>
            The <Code>Tabs</Code> component no longer supports the legacy API. A more flexible approach using a Compound
            Component Pattern is now used instead to maintain a higher consistency with our existing{" "}
            <Code>NavTabs</Code> and make the API much simpler.
          </DxcParagraph>
        ),
      },
      {
        title: "ToggleGroup",
        content: (
          <DxcParagraph>
            The <Code>ToggleGroup</Code> component API has been updated, including the possibility to have a custom
            orientation (horizontal or vertical) and a redesign of the way options are structured. Please refer to the
            <Link href="/components/toggle-group" passHref legacyBehavior>
              <DxcLink>updated documentation</DxcLink>
            </Link>{" "}
            for more details.
          </DxcParagraph>
        ),
      },
    ],
  },
  {
    title: "Removed components",
    content: (
      <>
        <DxcParagraph>
          The following components are no longer available and must be replaced or removed from your application:
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Component</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tag</td>
              <td>
                Removed completely. Replace with <Code>Badge</Code>, a <Code>Chip</Code> or <Code>StatusLight</Code>{" "}
                based on the context.
              </td>
            </tr>
          </tbody>
        </DxcTable>

        <DxcParagraph>The following table describes which component to use depending on the use case:</DxcParagraph>

        <DxcTable>
          <thead>
            <tr>
              <th>Replacement</th>
              <th>Recommended use case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>Badge</Code>
              </td>
              <td>
                Use when you need to display a compact piece of information such as a count, short label, or status
                indicator inside or near another component (e.g., notification count, "New", "Beta").
              </td>
            </tr>
            <tr>
              <td>
                <Code>Chip</Code>
              </td>
              <td>
                Use for interactive labels or items representing filters, selections, or categories that users can
                select, deselect, or remove.
              </td>
            </tr>
            <tr>
              <td>
                <Code>StatusLight</Code>
              </td>
              <td>
                Use for simple, non-interactive visual indicators of state or system status (e.g., success, warning,
                error, inactive).
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
];

const Components16MigrationPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Components' update in v16" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/migration/Components16Page.tsx" />
  </DxcFlex>
);

export default Components16MigrationPage;
