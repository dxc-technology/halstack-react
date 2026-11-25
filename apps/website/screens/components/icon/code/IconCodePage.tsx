import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import customSvg from "./examples/customSvg";
import Code, { TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

const sections = [
  {
    title: "Props",
    content: (
      <>
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
                  ariaLabel
                </DxcFlex>
              </td>
              <td>
                <TableCode>string</TableCode>
              </td>
              <td>
                Accessible name of the icon. Set it only when the icon conveys meaning on its own; otherwise the icon is
                hidden from assistive technologies.
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                  <StatusBadge status="required" />
                  icon
                </DxcFlex>
              </td>
              <td>
                <TableCode>string | SVG</TableCode>
              </td>
              <td>
                Name of the Material Symbols icon to display (for example <Code>"add_card"</Code>). Prefix the name with{" "}
                <Code>"filled_" </Code> (for example <Code>"filled_add_card"</Code>) to render the filled variant. An
                SVG element can also be passed, in which case it is rendered as is.
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>
                <TableCode>string</TableCode>
              </td>
              <td>
                Font size of the icon. Use a design token or a CSS value. For custom SVG icons, it sets the height of
                the SVG. If no size is provided, Material Symbols icons inherit the font size of their parent, and
                custom SVG icons use <TableCode>var(--height-s)</TableCode> as height.
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>color</td>
              <td>
                <TableCode>string</TableCode>
              </td>
              <td>
                Color of the icon. Use a design token or a CSS color. For custom SVG icons, it sets the fill of the SVG.
                If no color is provided, the icon inherits the color of its parent text.
              </td>
              <td>-</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
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
        title: "Custom SVG icon",
        content: <Example example={customSvg} defaultIsVisible />,
      },
    ],
  },
];

const IconCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/icon/code/IconCodePage.tsx" />
  </DxcFlex>
);

export default IconCodePage;
