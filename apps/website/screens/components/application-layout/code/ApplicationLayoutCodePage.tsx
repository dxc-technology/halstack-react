import { DxcParagraph, DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Link from "next/link";
import Code, { TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

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
      <tr>
        <td>visibilityToggleLabel</td>
        <td>
          <TableCode>string</TableCode>
        </td>
        <td>Text to be placed next to the hamburger button that toggles the visibility of the sidenav.</td>
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
    title: "DxcApplicationLayout.useResponsiveSidenavVisibility",
    content: (
      <DxcParagraph>
        Custom hook that returns a function to manually change the visibility of the sidenav in responsive mode. This
        can be very useful for cases where a custom sidenav is being used and some of its inner elements can close it
        (for example, a navigation link).
      </DxcParagraph>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: (
          <iframe
            src="https://codesandbox.io/embed/basic-usage-pi619r?fontsize=14&hidenavigation=1&theme=dark"
            style={{
              width: "100%",
              minHeight: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            title="Basic usage"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        ),
      },
      {
        title: "With sidenav",
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
            title="With sidenav"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        ),
      },
      {
        title: "Custom header and footer",
        content: (
          <iframe
            src="https://codesandbox.io/embed/custom-footer-and-header-lt3gkv?fontsize=14&hidenavigation=1&theme=dark"
            style={{
              width: "100%",
              minHeight: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            title="Custom footer and header"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        ),
      },
    ],
  },
];

const ApplicationLayoutCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/application-layout/code/ApplicationLayoutCodePage.tsx" />
  </DxcFlex>
);

export default ApplicationLayoutCodePage;
