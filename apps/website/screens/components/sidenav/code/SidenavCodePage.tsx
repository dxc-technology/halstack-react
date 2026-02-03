import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code, { ExtendedTableCode, TableCode } from "@/common/Code";
import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import StatusBadge from "@/common/StatusBadge";

const commonItemTypeString = `badge?: ReactElement;
  icon?: string | SVG;
  label: string;`;

const itemTypeString = `{ 
  ${commonItemTypeString}
  onSelect?: () => void;
  selected?: boolean;
}`;

const groupItemTypeString = `{ 
  ${commonItemTypeString}
  defaultOpen?: boolean;
  items: (Item | GroupItem)[];
}`;

const sectionTypeString = `{ 
  items: (Item | GroupItem)[];
  title?: string };
}`;

const searchBarTypeString = `{
  onBlur: (value: string) => void;
  onChange: (value: string) => void;
  onEnter: (value: string) => void;
  placeholder?: string;
}`;

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
                <StatusBadge status="new" />
                appTitle
              </DxcFlex>
            </td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>Object used to configure the header application title.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                bottomContent
              </DxcFlex>
            </td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>The content rendered in the bottom part of the sidenav, under the navigation menu.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                defaultExpanded
              </DxcFlex>
            </td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Initial state of the expansion of the sidenav, only when it is uncontrolled.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                displayGroupLines
              </DxcFlex>
            </td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true the nav menu will have lines marking the groups.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                expanded
              </DxcFlex>
            </td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the sidenav is expanded. If undefined the component will be uncontrolled and the value will be
              managed internally by the component.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                navItems
              </DxcFlex>
            </td>
            <td>
              <TableCode>{"(Item | GroupItem)[] | Section[]"}</TableCode>
              <p>
                being <Code>Item</Code> an object with the following properties:
              </p>
              <ExtendedTableCode>{itemTypeString}</ExtendedTableCode>
              <p>
                , <Code>GroupItem</Code> an object with the following properties:
              </p>
              <ExtendedTableCode>{groupItemTypeString}</ExtendedTableCode>
              <p>
                and <Code>Section</Code> an object with the following properties:
              </p>
              <ExtendedTableCode>{sectionTypeString}</ExtendedTableCode>
            </td>
            <td>
              Array of items to be displayed in the navigation menu. Each item can be a single/simple item, a group item
              or a section.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                onExpandedChange
              </DxcFlex>
            </td>
            <td>
              <TableCode>{"(value: boolean) => void"}</TableCode>
            </td>
            <td>Function called when the expansion state of the sidenav changes.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                searchBar
              </DxcFlex>
            </td>
            <td>
              <ExtendedTableCode>{searchBarTypeString}</ExtendedTableCode>
            </td>
            <td>When provided, a search bar will be rendered at the top of the sidenav.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                topContent
              </DxcFlex>
            </td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>The content rendered in the upper part of the sidenav, under the branding.</td>
            <td>-</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    // TODO: Update the sandbox link
    subSections: [
      {
        title: "Application layout with sidenav",
        content: (
          <iframe
            src="https://codesandbox.io/embed/ysg7l5?view=editor+%2B+preview&hidenavigation=1"
            style={{
              width: "100%",
              minHeight: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            title="Application layout with sidenav"
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
