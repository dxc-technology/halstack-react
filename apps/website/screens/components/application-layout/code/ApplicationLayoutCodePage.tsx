import { DxcParagraph, DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Link from "next/link";
import Code, { ExtendedTableCode, TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

const logoTypeString = `{
  src: string | SVG;
  alt: string;
  href?: string;
  onClick?: () => void;
}`;

const ApplicationLayoutPropsTable = () => (
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
        <td>
          Use the <Code>DxcApplicationLayout.Main</Code> provided to render main content.
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>footer</td>
        <td>
          <TableCode>React.ReactNode</TableCode>
        </td>
        <td>
          Footer of the application layout shown at the bottom of the screen. It is optional and if it is not specified,
          the default header will be shown. Please check the Footer documentation{" "}
          <Link href="/components/footer" passHref legacyBehavior>
            <DxcLink>here</DxcLink>
          </Link>
          .
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>header</td>
        <td>
          <TableCode>React.ReactNode</TableCode>
        </td>
        <td>
          Header of the application layout shown at the top of the screen. It is optional and if it is not specified,
          the default header will be shown. Please check the Header documentation{" "}
          <Link href="/components/header" passHref legacyBehavior>
            <DxcLink>here</DxcLink>
          </Link>
          .
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>
          <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
            <StatusBadge status="new" />
            logo
          </DxcFlex>
        </td>
        <td>
          <ExtendedTableCode>{logoTypeString}</ExtendedTableCode>
        </td>
        <td>
          Object used to configure the header logo. The logo will be placed in the header, but if no global app header
          exists, it will be shown in the sidenav instead.
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>sidenav</td>
        <td>
          <TableCode>React.ReactNode</TableCode>
        </td>
        <td>
          Sidenav of the application layout shown at the left side of the screen. Please check the Sidenav documentation{" "}
          <Link href="/components/sidenav" passHref legacyBehavior>
            <DxcLink>here</DxcLink>
          </Link>
          .
        </td>
        <td>-</td>
      </tr>
    </tbody>
  </DxcTable>
);

const sections = [
  {
    title: "Props",
    content: <ApplicationLayoutPropsTable />,
  },
  {
    title: "DxcApplicationLayout.Main",
    content: (
      <DxcParagraph>
        Everything between the tags will be displayed as the main content of the application layout.
      </DxcParagraph>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Application layout with components",
        content: (
          <iframe
            src="https://codesandbox.io/embed/p4xxm3?view=editor+%2B+preview&module=%2Fsrc%2FApp.js"
            style={{
              width: "100%",
              minHeight: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            title="Application layout with components"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        ),
      },
    ],
  },
];

const ApplicationLayoutCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/application-layout/code/ApplicationLayoutCodePage.tsx" />
  </DxcFlex>
);

export default ApplicationLayoutCodePage;
