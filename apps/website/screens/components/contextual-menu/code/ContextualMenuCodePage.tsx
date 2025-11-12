import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code, { TableCode, ExtendedTableCode } from "@/common/Code";
import Example from "@/common/example/Example";
import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import actionMenu from "./examples/actionMenu";
import navigationMenu from "./examples/navigationMenu";
import StatusBadge from "@/common/StatusBadge";

const itemTypeString = `{
    badge?: React.ReactElement;
    icon?: string | SVG;
    label: string;
    onSelect?: () => void;
    selected?: boolean;
}`;

const groupItemTypeString = `{
    badge?: React.ReactElement;
    icon?: string | SVG;
    items: (Item | GroupItem)[];
    label: string;
}`;

const sectionTypeString = `{
    items: (Item | GroupItem)[];
    title?: string
}`;

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th style={{ minWidth: "200px" }}>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                items
              </DxcFlex>
            </td>
            <td>
              <TableCode>(Item | GroupItem)[] | Section[]</TableCode>
              <p>
                being an <Code>Item</Code> an object with the following properties:
              </p>
              <ExtendedTableCode>{itemTypeString}</ExtendedTableCode>
              <p>
                a <Code>GroupItem</Code> another object with the following properties:
              </p>
              <ExtendedTableCode>{groupItemTypeString}</ExtendedTableCode>
              <p>
                and a <Code>Section</Code> another object with the following properties:
              </p>
              <ExtendedTableCode>{sectionTypeString}</ExtendedTableCode>
            </td>
            <td>
              Array of items to be displayed in the Contextual menu. Each item can be a single/simple item, a group item
              or a section.
            </td>
            <td>-</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Action menu",
        content: <Example example={actionMenu} defaultIsVisible />,
      },
      // TODO: We should remove this example as it is not the intended usage right? (Navigation is handled inside ApplicationLayout)
      {
        title: "Navigation menu",
        content: <Example example={navigationMenu} defaultIsVisible />,
      },
    ],
  },
];

const ContextualMenuCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/contextual-menu/code/ContextualMenuCodePage.tsx" />
  </DxcFlex>
);

export default ContextualMenuCodePage;
