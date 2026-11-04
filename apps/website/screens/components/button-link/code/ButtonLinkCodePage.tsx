import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code, { TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import icons from "./examples/icons";
import semantic from "./examples/semantic";
import sizes from "./examples/sizes";

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
            <td>disabled</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the link will be disabled.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                href
              </DxcFlex>
            </td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Page to be opened when the user clicks on the link.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <TableCode>string | {"(React.ReactNode & React.SVGProps <SVGSVGElement>)"}</TableCode>
            </td>
            <td>
              <DxcLink newWindow href="https://fonts.google.com/icons">
                Material Symbol
              </DxcLink>{" "}
              name or SVG element as the icon that will be placed next to the link text. When using Material Symbols,
              replace spaces with underscores. By default they are outlined if you want it to be filled prefix the
              symbol name with <TableCode>"filled_"</TableCode>. Required if no <TableCode>label</TableCode> is
              provided.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>iconPosition</td>
            <td>
              <TableCode>'before' | 'after'</TableCode>
            </td>
            <td>Indicates the position of the icon in the component.</td>
            <td>
              <TableCode>'before'</TableCode>
            </td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Text to be placed in the button link. Required if no <TableCode>icon</TableCode> is provided.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>mode</td>
            <td>
              <TableCode>'primary' | 'secondary' | 'tertiary'</TableCode>
            </td>
            <td>The available button link modes.</td>
            <td>
              <TableCode>'primary'</TableCode>
            </td>
          </tr>
          <tr>
            <td>newWindow</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the page is opened in a new browser tab.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>
              <TableCode>{"(event: React.MouseEvent<HTMLAnchorElement>) => void"}</TableCode>
            </td>
            <td>
              If defined, the link will be displayed as a button. This function will be called when the user clicks the
              link.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>ref</td>
            <td>
              <TableCode>{"React.Ref<HTMLAnchorElement>"}</TableCode>
            </td>
            <td>Ref of the link element.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>
                {
                  "{ height: 'small' | 'medium' | 'large'; width: 'small' | 'medium' | 'large' | 'fillParent' | 'fitContent' }"
                }
              </TableCode>
            </td>
            <td>Object used to define the dimensions of the button in terms of height and width. </td>
            <td>
              <TableCode>{"{ height: 'large'; width: 'fitContent' }"}</TableCode>
            </td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> attribute.
            </td>
            <td>
              <TableCode>0</TableCode>
            </td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Text to be displayed as a tooltip when hovering over the link. If there is no label, the title will be
              used as the aria-label.
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
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
      {
        title: "Icons",
        content: <Example example={icons} defaultIsVisible />,
      },
      {
        title: "Semantic",
        content: <Example example={semantic} defaultIsVisible />,
      },
      {
        title: "Size",
        content: <Example example={sizes} defaultIsVisible />,
      },
    ],
  },
];

const ButtonLinkCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/button-link/code/ButtonLinkCodePage.tsx" />
  </DxcFlex>
);

export default ButtonLinkCodePage;
