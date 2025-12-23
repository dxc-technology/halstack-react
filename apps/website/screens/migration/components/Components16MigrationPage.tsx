import { DxcFlex, DxcParagraph, DxcHeading, DxcTable, DxcLink, DxcBulletedList } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import Code, { ExtendedTableCode } from "@/common/Code";
import Link from "next/link";
import Example from "@/common/example/Example";
import previousExample from "./examples/previous";
import newExample from "./examples/new";

const groupItemType = `{
  badge?: ReactElement;
  icon?: string | SVG;
  label: string;
  items: (Item)[];
}`;

const itemType = `{
  badge?: ReactElement;
  icon?: string | SVG;
  label: string;
  onSelect?: () => void;
  selected?: boolean;
}`;

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
    title: "Usage of components",
    content: (
      <>
        <DxcParagraph>
          In our component props, instead of passing hardcoded values such as <Code>2rem</Code>, we should always use an
          alias token whenever possible. Only if no suitable alias token exists, a core token or a hardcoded value may
          be used.
        </DxcParagraph>
        <DxcParagraph>Previous version:</DxcParagraph>
        <Example example={previousExample} defaultIsVisible />
        <Example example={newExample} defaultIsVisible />
        <DxcParagraph>
          For more information about tokens refer to{" "}
          <Link href="/foundations/tokens/overview" passHref legacyBehavior>
            <DxcLink>its documentation</DxcLink>
          </Link>
        </DxcParagraph>
      </>
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
                <DxcTable>
                  <thead>
                    <tr>
                      <th>Version</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>v15 (old)</strong>
                      </td>
                      <td>
                        The header was configured using props like <Code>underlined</Code>,<Code>content</Code>, and{" "}
                        <Code>responsiveContent</Code>. Dropdowns were rendered using <Code>DxcHeader.Dropdown</Code>.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>v16</strong>
                      </td>
                      <td>
                        The new header uses <Code>logo</Code> and <Code>appTitle</Code> for the branding,{" "}
                        <Code>navItems</Code> for navigation links (with optional nested groups),{" "}
                        <Code>sideContent</Code> for side elements, and <Code>responsiveBottomContent</Code> for
                        mobile-specific content.
                      </td>
                    </tr>
                  </tbody>
                </DxcTable>
                <DxcParagraph>
                  When migrating, move your old <Code>content</Code> and dropdowns into the new <Code>logo</Code>,{" "}
                  <Code>appTitle</Code> and <Code>navItems</Code> props. Replace <Code>responsiveContent</Code> with{" "}
                  <Code>responsiveBottomContent</Code> and <Code>sideContent</Code> based on the desired positioning.{" "}
                  <Code>sideContent</Code> can receive a flag parameter that depends on responsiveness.
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
                  declarative <Code>navItems</Code> prop. This new API also features changes that improve the
                  responsiveness and flexibility of the component.
                </DxcParagraph>
                <DxcTable>
                  <thead>
                    <tr>
                      <th>Version</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>v15 (old)</strong>
                      </td>
                      <td>
                        <Code>DxcSidenav.Section</Code>,<Code>DxcSidenav.Group</Code>, and <Code>DxcSidenav.Link</Code>{" "}
                        defined the structure and links.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>v16</strong>
                      </td>
                      <td>
                        <p>
                          The <Code>navItems</Code> prop accepts an array of <Code>Item</Code> and
                          <Code>GroupItem</Code> objects. Each <Code>GroupItem</Code> has the following structure:
                        </p>
                        <ExtendedTableCode>{groupItemType}</ExtendedTableCode>
                        <p>
                          Each <Code>Item</Code> has the following structure:
                        </p>
                        <ExtendedTableCode>{itemType}</ExtendedTableCode>
                      </td>
                    </tr>
                  </tbody>
                </DxcTable>
                <DxcParagraph>
                  These are the main changes but there are some new additional props that have been added in this
                  version.
                </DxcParagraph>
                <DxcParagraph>
                  When migrating:{" "}
                  <DxcBulletedList>
                    <DxcBulletedList.Item>
                      Flatten your old <Code>Title</Code>, <Code>Section</Code>, <Code>Group</Code>, and
                      <Code>Link</Code> structure into a single <Code>items</Code> array following the new typing.
                    </DxcBulletedList.Item>
                    <DxcBulletedList.Item>
                      Move your old logo/app title into the new <Code>logo</Code> and <Code>appTitle</Code> props.
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
          {
            title: "ApplicationLayout.Footer",
            content: (
              <DxcParagraph>
                The <Code>Footer</Code> component no longer accepts children. It now provides two different props,{" "}
                <Code>leftContent</Code> and <Code>rightContent</Code>, for placing custom elements in their respective
                areas. In <Code>reduced</Code> mode, the footer will no longer display custom content on the right side,
                instead it will display the copyright statement. A new <Code>logo</Code> prop has also been added to be
                able to support custom branding.
              </DxcParagraph>
            ),
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
            <Link href="/components/data-grid" passHref legacyBehavior>
              <DxcLink>This component</DxcLink>
            </Link>{" "}
            has exited the experimental phase and is now fully supported, featuring new functionalities like on-demand
            loading (thanks to the <Code>childrenTrigger</Code> prop), possibility to have rows expanded by default and
            the possibility to render any page by default. To know more about these new features, please refer to the
            updated documentation.
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
            <Code>tabIndex</Code> prop has been removed. The prop was not working as we intended, so in the meantime we
            decided to remove it. We believe that, at some point, the component will need to set this prop.
          </DxcParagraph>
        ),
      },
      {
        title: "Tabs",
        content: (
          <DxcParagraph>
            The <Code>Tabs</Code> component no longer supports the legacy API. A more flexible approach using a Compound
            Component Pattern is now used instead to maintain a higher consistency with our existing{" "}
            <Code>NavTabs</Code> and make the API much simpler. Additionally, a few improvements have been made to
            enhance responsiveness and controlled behavior. Please refer to the
            <Link href="/components/tabs" passHref legacyBehavior>
              <DxcLink>updated documentation</DxcLink>
            </Link>{" "}
            for more details.
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
        <DxcHeading level={1} text="Component updates in v16" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/migration/components/Components16MigrationPage.tsx" />
  </DxcFlex>
);

export default Components16MigrationPage;
