import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import TableCode from "@/common/TableCode";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import customMode from "./examples/customMode";
import customSize from "./examples/customSize";

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
            <td>mode</td>
            <td>
              <TableCode>
                'default' | 'info' | 'success' | 'warning' | 'error'
              </TableCode>
            </td>
            <td>
              It will define the color of the light based on its semantic
              meaning.
            </td>
            <td>
              <TableCode>'default'</TableCode>
            </td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              An auxiliar text that will add some context to the status.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>'small' | 'medium' | 'large'</TableCode>
            </td>
            <td>
              Size of the component. Should be defined based on its importance
              and/or available space.
            </td>
            <td><TableCode>'medium'</TableCode></td>
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
        content: <Example example={basicUsage} defaultIsVisible />
      },
      {
        title: "Custom mode",
        content: <Example example={customMode} defaultIsVisible />
      },
      {
        title: "Custom size",
        content: <Example example={customSize} defaultIsVisible />
      },
    ],
  },
];

const StatusLightCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/status-light/code/StatusLightCodePage.tsx" />
    </DxcFlex>
  );
};

export default StatusLightCodePage;
