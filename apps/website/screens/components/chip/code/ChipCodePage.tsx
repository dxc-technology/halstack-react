import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import icons from "./examples/icons";
import Code, { ExtendedTableCode, TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";
import avatar from "./examples/avatar";
import Link from "next/link";

const actionTypeString = `{
  icon?: string | (React.ReactNode 
    & React.SVGProps<SVGSVGElement>); 
  onClick: () => void; 
  title?: string;
}`;

const prefixTypeString = `
| string 
| SVG
| AvatarProps`;

const avatarPropsString = `{
  color: 'primary' | 'secondary' | 'tertiary'
    | 'success' | 'info' | 'neutral' | 'warning'
    | 'error';
  icon?: string | SVG;
  imgSrc?: string;
  label?: string;
};`;

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
                action
              </DxcFlex>
            </td>
            <td>
              <ExtendedTableCode>{actionTypeString}</ExtendedTableCode>
            </td>
            <td>Action to be displayed on the right side of the chip after the label.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the component will be disabled.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                label
              </DxcFlex>
            </td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed on the chip.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>margin</td>
            <td>
              <TableCode>'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | Margin</TableCode>
            </td>
            <td>
              Size of the margin to be applied to the component. You can pass an object with 'top', 'bottom', 'left' and
              'right' properties in order to specify different margin sizes.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                prefix
              </DxcFlex>
            </td>
            <td>
              <ExtendedTableCode>{prefixTypeString}</ExtendedTableCode>
              <p>
                being <Code>AvatarProps</Code> an object with the following properties:
              </p>
              <ExtendedTableCode>{avatarPropsString}</ExtendedTableCode>
            </td>
            <td>
              <DxcLink newWindow href="https://fonts.google.com/icons">
                Material Symbol
              </DxcLink>{" "}
              name or SVG element used as the icon. When using Material Symbols, replace spaces with underscores. By
              default, symbols are outlined; to use the filled version, prefix the symbol name with{" "}
              <TableCode>"filled_"</TableCode>. If a string or SVG is provided, it will be rendered as an icon placed
              before the chip label. If an avatar props object is provided, a{" "}
              <Link href="/components/avatar" passHref legacyBehavior>
                <DxcLink>DxcAvatar</DxcLink>
              </Link>{" "}
              will be displayed to the left of the label, only when the chip size is medium or large.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> attribute applied to both the component and the prefix and suffix icons
              when a function is given.
            </td>
            <td>
              <TableCode>0</TableCode>
            </td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
      {
        title: "Icons",
        content: (
          <>
            <Example example={icons} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Avatar",
        content: (
          <>
            <Example example={avatar} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const ChipCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/chip/code/ChipCodePage.tsx" />
    </DxcFlex>
  );
};

export default ChipCodePage;
