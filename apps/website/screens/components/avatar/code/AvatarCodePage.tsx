import { TableCode } from "@/common/Code";
import Example from "@/common/example/Example";
import DxcQuickNavContainer from "@/common/QuickNavContainer";
import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import basicUsage from "./examples/basicUsage";
import color from "./examples/color";
import clickable from "./examples/clickable";
import tooltip from "./examples/tooltip";
import status from "./examples/status";

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
            <td>color</td>
            <td>
              <TableCode>'grey' | 'blue' | 'green' | 'orange' | 'red' | 'yellow' | 'purple'</TableCode>
            </td>
            <td>Affects the visual style of the badge. It can be used following semantic purposes or not.</td>
            <td>'grey'</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <TableCode>string | SVG</TableCode>
            </td>
            <td>Material Symbol name or SVG element as the icon that will be placed as avatar.</td>
            <td>'person'</td>
          </tr>
          <tr>
            <td>imageSrc</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>URL of the image.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Full name of the user. Used to generate and display initials inside the avatar.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>linkHref</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>If defined, the avatar will be displayed as an anchor, using this prop as "href".</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks the avatar. This will enable all the button states, if
              not passed it will be treated as a readonly element.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>shape</td>
            <td>
              <TableCode>'circle' | 'square'</TableCode>
            </td>
            <td>This will determine if the avatar will be a rounded square or a circle.</td>
            <td>'circle'</td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>'small' | 'medium' | 'large'</TableCode>
            </td>
            <td>Size of the component.</td>
            <td>'medium'</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{"mode: 'default' | 'info' | 'success' | 'warning' | 'error'; position: 'top' | 'bottom';"}</td>
            <td>
              Defines the color of the status indicator displayed on the avatar and where it will be placed. If not
              provided, no indicator will be rendered.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Value of the tabindex attribute. It will only apply when the onClick property is passed.</td>
            <td>0</td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be displayed inside a tooltip when hovering the avatar.</td>
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
        title: "Clickable",
        content: <Example example={clickable} defaultIsVisible />,
      },
      {
        title: "Status",
        content: <Example example={status} defaultIsVisible />,
      },
      {
        title: "Tooltip",
        content: <Example example={tooltip} defaultIsVisible />,
      },
    ],
  },
];

const AvatarCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <DxcQuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/avatar/code/AvatarCodePage.tsx" />
  </DxcFlex>
);

export default AvatarCodePage;
