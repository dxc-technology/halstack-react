import { DxcFlex, DxcTable, DxcParagraph, DxcLink } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Link from "next/link";
import Code, { ExtendedTableCode, TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

const logoTypeString = `{
  href?: string;
  src: string;
  title?: string;
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
            <td>content</td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>
              Content shown in the header. Take into account that the component applies styles for the first child in
              the content, so we recommend the use of <Code>React.Fragment</Code> to be applied correctly. Otherwise,
              the styles can be modified.
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
              <td>
                <TableCode>{"Logo"}</TableCode>
                <p>
                  being <Code>Logo</Code> an object with the following properties:
                </p>
                <ExtendedTableCode>{logoTypeString}</ExtendedTableCode>
              </td>
            </td>
            <td>Logo to be displayed inside the header.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>margin</td>
            <td>
              <TableCode>'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'</TableCode>
            </td>
            <td>Size of the bottom margin to be applied to the header.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>This function will be called when the user clicks the header logo.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>responsiveContent</td>
            <td>
              <TableCode>{"(closeHandler: () => void) => React.ReactNode"}</TableCode>
            </td>
            <td>
              Content shown in responsive version. It receives the close menu handler that can be used to add that
              functionality when a element is clicked.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Value of the tabindex for all interactive elements, except those inside the custom area.</td>
            <td>
              <TableCode>0</TableCode>
            </td>
          </tr>
          <tr>
            <td>underlined</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Whether a contrast line should appear at the bottom of the header.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "DxcHeader.Dropdown",
    content: (
      <DxcParagraph>
        Everything between the tags will be displayed as a dropdown. If you want to show a{" "}
        <Link href="/components/dropdown" passHref legacyBehavior>
          <DxcLink>DxcDropdown</DxcLink>
        </Link>
        , as a shortcut, you can also use it as a direct child of the DxcHeader without the tags, but we recommend to
        use it with the tags since some styles will be applied for a better fit in the header.
      </DxcParagraph>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Header in application layout",
        content: (
          <iframe
            src="https://codesandbox.io/embed/rough-https-9oduyh?fontsize=14&hidenavigation=1&theme=dark"
            style={{
              width: "100%",
              minHeight: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            title="Footer and header"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        ),
      },
    ],
  },
];

const HeaderCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/header/code/HeaderCodePage.tsx" />
    </DxcFlex>
  );
};

export default HeaderCodePage;
