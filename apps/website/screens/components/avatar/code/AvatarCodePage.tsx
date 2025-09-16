import { ExtendedTableCode, TableCode } from "@/common/Code";
import Example from "@/common/example/Example";
import DxcQuickNavContainer from "@/common/QuickNavContainer";
import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import basicUsage from "./examples/basicUsage";
import clickable from "./examples/clickable";
import tooltip from "./examples/tooltip";
import status from "./examples/status";

const statusTypeString = `{
  mode: 'default' | 'info' |
  'success' | 'warning' | 'error';
  position: 'top' | 'bottom';
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
            <td>color</td>
            <td>
              <TableCode>'grey' | 'blue' | 'green' | 'orange' | 'red' | 'yellow' | 'purple'</TableCode>
            </td>
            <td>Affects the visual style of the avatar. It can be used following semantic purposes or not.</td>
            <td><TableCode>'grey'</TableCode></td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the componente will be disabled.</td>
            <td><TableCode>false</TableCode></td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <TableCode>string | SVG</TableCode>
            </td>
            <td>Material Symbol name or SVG element as the icon that will be placed as avatar.</td>
            <td>
              <TableCode>'person'</TableCode>
            </td>
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
            <td>Text label associated with the avatar. Used to generate and display initials inside the avatar.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>linkHref</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Page to be opened when the user clicks on the link.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>This function will be called when the user clicks the avatar. Makes it behave as a button.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>shape</td>
            <td>
              <TableCode>'circle' | 'square'</TableCode>
            </td>
            <td>This will determine if the avatar will be a rounded square or a circle.</td>
            <td>
              <TableCode>'circle'</TableCode>
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>'small' | 'medium' | 'large'</TableCode>
            </td>
            <td>Size of the component.</td>
            <td>
              <TableCode>'medium'</TableCode>
            </td>
          </tr>
          <tr>
            <td>status</td>
            <td>
              <ExtendedTableCode>{statusTypeString}</ExtendedTableCode>
            </td>
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
            <td>
              <TableCode>0</TableCode>
            </td>
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
