import { DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";
import TableCode from "@/common/TableCode";

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
              <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                <StatusBadge status="new" />
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
            <td>socialLinks</td>
            <td>
              <TableCode>
                {`{ href: string; title: string; logo: string | (React.ReactNode & React.SVGProps <SVGSVGElement>); }[]`}
              </TableCode>
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
            <td>bottomLinks</td>
            <td>
              <TableCode>{"{ href: string; text: string; }[]"}</TableCode>
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
            <td>copyright</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>The text that will be displayed as copyright disclaimer.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>children</td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>The center section of the footer. Can be used to render custom content in this area.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>margin</td>
            <td>
              <TableCode>'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'</TableCode>
            </td>
            <td>Size of the top margin to be applied to the footer.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> for all interactive elements, except those inside the custom area.
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
        title: "Footer in application layout",
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

const FooterCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/footer/code/FooterCodePage.tsx" />
    </DxcFlex>
  );
};

export default FooterCodePage;
