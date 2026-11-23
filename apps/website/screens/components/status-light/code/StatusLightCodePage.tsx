import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import { TableCode } from "@/common/Code";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";

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
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              An auxiliary text that will add some context to the status. It is the only accessible text of the
              component: without it, the status light is only a colored dot and it must be accompanied by a visible
              element or by surrounding context that explains its meaning. Screen readers only announce the status when
              a label is provided.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>mode</td>
            <td>
              <TableCode>'default' | 'info' | 'success' | 'warning' | 'error'</TableCode>
            </td>
            <td>It will define the color of the light based on its semantic meaning.</td>
            <td>
              <TableCode>'default'</TableCode>
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>'small' | 'medium' | 'large'</TableCode>
            </td>
            <td>Size of the component. Should be defined based on its importance and/or available space.</td>
            <td>
              <TableCode>'medium'</TableCode>
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
    ],
  },
];

const StatusLightCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/status-light/code/StatusLightCodePage.tsx" />
  </DxcFlex>
);

export default StatusLightCodePage;
