import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code, { ExtendedTableCode, TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

const brandingTypeString = `{
  logo : {
    src: string | SVG;
    alt: string;
    href?: string;
    onClick?: () => void;
    };
  appTitle?: string;
}`;

const navItemsTypeString = `(GroupItem | Item)[]`;

const commonItemTypeString = `{
  badge?: ReactElement;
  icon?: string | SVG;
  label: string;
}`;

const itemTypeString = `{ 
  ${commonItemTypeString}
  onSelect?: () => void;
  selected?: boolean;
}`;

const groupItemTypeString = `{ 
  ${commonItemTypeString}
  items: (Item)[];
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
                <StatusBadge status="required" />
                branding
              </DxcFlex>
            </td>
            <td>
              <ExtendedTableCode>{brandingTypeString}</ExtendedTableCode>
            </td>
            <td>Object used to configure the header branding, including logo and application title.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>navItems</td>
            <td>
              <TableCode>{navItemsTypeString}</TableCode>
            </td>
            <td>
              Array of navigation items to be displayed in the header navigation menu. Each item can be a single/simple
              item or a group item.
              <p>
                Being <Code>Item</Code> an object with the following properties:
              </p>
              <ExtendedTableCode>{itemTypeString}</ExtendedTableCode>
              <p>
                and <Code>GroupItem</Code> an object with the following properties:
              </p>
              <ExtendedTableCode>{groupItemTypeString}</ExtendedTableCode>
              Group items will ignore any nested group items to maintain a maximum of two levels in the navigation menu.
              When responsive, navigation items will be displayed in a vertical menu below the header in a vertical
              layout.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>responsiveBottomContent</td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>
              The content rendered in the bottom part of the header menu under the navigation items when in responsive
              mode.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>sideContent</td>
            <td>
              <TableCode>{"React.ReactNode | (isResponsive: boolean) => React.ReactNode"}</TableCode>
            </td>
            <td>
              Content to be displayed on the right side of the header. It can be a React node or a function that
              receives a boolean indicating if the header is in responsive mode and returns a React node.
            </td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  // UPDATE to new sandbox link when available
  // {
  //   title: "Examples",
  //   subSections: [
  //     {
  //       title: "Header in application layout",
  //       content: (
  //         <iframe
  //           src="https://codesandbox.io/embed/rough-https-9oduyh?fontsize=14&hidenavigation=1&theme=dark"
  //           style={{
  //             width: "100%",
  //             minHeight: "500px",
  //             border: "0",
  //             borderRadius: "4px",
  //             overflow: "hidden",
  //           }}
  //           title="Footer and header"
  //           sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  //           allowFullScreen
  //         />
  //       ),
  //     },
  //   ],
  // },
];

const HeaderCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/header/code/HeaderCodePage.tsx" />
    </DxcFlex>
  );
};

export default HeaderCodePage;
