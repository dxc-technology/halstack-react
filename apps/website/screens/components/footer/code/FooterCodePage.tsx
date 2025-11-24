import { DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import StatusBadge from "@/common/StatusBadge";
import Code, { ExtendedTableCode, TableCode } from "@/common/Code";

const bottomLinksTypeString = `{
  href: string;
  text: string;
}[]`;

const logoTypeString = `{
  src: string;
  alt: string;
}`;

const socialLinkTypeString = `{
  href: string;
  title: string;
  logo: string | SVG;
}[]`;

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
            <td>bottomLinks</td>
            <td>
              <ExtendedTableCode>{bottomLinksTypeString}</ExtendedTableCode>
            </td>
            <td>
              An array of objects representing the links that will be rendered at the bottom part of the footer. Each
              object has the following properties:
              <ul>
                <li>
                  <b>text</b>: Text for the link.
                </li>
                <li>
                  <b>href</b>: URL of the page the link goes to.
                </li>
              </ul>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>children</td>
            <td>
              <TableCode>ReactNode</TableCode>
            </td>
            <td>
              Contains DxcFooter.LeftContent and DxcFooter.RightContent components to customize the left and right
              content of the footer respectively.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>copyright</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>The text that will be displayed as copyright disclaimer.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                leftContent
              </DxcFlex>
            </td>
            <td>
              <TableCode>ReactNode</TableCode>
            </td>
            <td>Content to be displayed on the left side of the footer under the logo.</td>
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
                <ExtendedTableCode>{logoTypeString}</ExtendedTableCode>
              </td>
            </td>
            <td>Logo to be displayed inside the footer.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                mode
              </DxcFlex>
            </td>
            <td>
              <TableCode>'default' | 'reduced'</TableCode>
            </td>
            <td>
              The available footer modes:
              <ul>
                <li>
                  <b>default</b>: Footer with full content.
                </li>
                <li>
                  <b>reduced</b>: Smaller footer with minimal content.
                </li>
              </ul>
            </td>
            <td>
              <TableCode>'default'</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                rightContent
              </DxcFlex>
            </td>
            <td>
              <TableCode>ReactNode</TableCode>
            </td>
            <td>Content to be displayed on the right side of the footer before the socialLinks if provided.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>socialLinks</td>
            <td>
              <ExtendedTableCode>{socialLinkTypeString}</ExtendedTableCode>
            </td>
            <td>
              An array of objects representing the links that will be rendered as icons at the top-right side of the
              footer. Each object has the following properties:
              <ul>
                <li>
                  <b>href</b>: URL of the page the link goes to.
                </li>
                <li>
                  <b>title</b>: Text representing advisory information related to the social link. Under the hood, it
                  also serves as an accessible label for the icon.
                </li>
                <li>
                  <b>logo</b>:{" "}
                  <DxcLink newWindow href="https://fonts.google.com/icons">
                    Material Symbol
                  </DxcLink>{" "}
                  name or SVG element as the icon used for the link. When using Material Symbols, replace spaces with
                  underscores. By default they are outlined, if you want it to be filled prefix the symbol name with{" "}
                  <TableCode>"filled_"</TableCode>.
                </li>
              </ul>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> for all interactive elements, except those inside the leftContent and
              rightContent.
            </td>
            <td>
              <TableCode>0</TableCode>
            </td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
];

const FooterCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/footer/code/FooterCodePage.tsx" />
    </DxcFlex>
  );
};

export default FooterCodePage;
