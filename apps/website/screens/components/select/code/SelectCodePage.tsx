import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import errorHandling from "./examples/errorHandling";
import groups from "./examples/groupedOptions";
import icons from "./examples/icons";
import TableCode, { ExtendedTableCode } from "@/common/TableCode";
import StatusBadge from "@/common/StatusBadge";

const optionsType = `{ 
    label: string;
    value: string; 
    icon: string | Icon;
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
            <td>ariaLabel</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Specifies a string to be used as the name for the select element when no <Code>label</Code> is provided.
            </td>
            <td>
              <TableCode>'Select'</TableCode>
            </td>
          </tr>
          <tr>
            <td>defaultValue</td>
            <td>
              <TableCode>string | string[]</TableCode>
            </td>
            <td>Initial value of the select, only when it is uncontrolled.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the component will be disabled.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>error</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Handles the error message and appearance of the select component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>helperText</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Helper text to be placed above the select.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed above the select.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>margin</td>
            <td>
              <TableCode>'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | Margin</TableCode>
            </td>
            <td>Size of the margin to be applied to the component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the select supports multiple selected options.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>name</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Name attribute of the input element.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onBlur</td>
            <td>
              <TableCode>{"(val: { value: string | string[]; error?: string }) => void"}</TableCode>
            </td>
            <td>Called when the select loses focus.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>
              <TableCode>{"(val: { value: string | string[]; error?: string }) => void"}</TableCode>
            </td>
            <td>Called when the user selects an option.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>optional</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the select will be optional, adding a default empty option.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                <StatusBadge status="required" />
                options
              </DxcFlex>
            </td>
            <td>
              <TableCode>{"Option[] | ({ label: string, options: Option[] })[]"}</TableCode>
            </td>
            <td>Array of objects representing the selectable options.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be put as placeholder of the select.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>ref</td>
            <td>
              <TableCode>{"React.Ref<HTMLDivElement>"}</TableCode>
            </td>
            <td>Reference to the component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>searchable</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, enables search functionality.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>'small' | 'medium' | 'large' | 'fillParent'</TableCode>
            </td>
            <td>Size of the component.</td>
            <td>
              <TableCode>'medium'</TableCode>
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
            <td>value</td>
            <td>
              <TableCode>string | string[]</TableCode>
            </td>
            <td>Value of the select, or undefined if uncontrolled.</td>
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
        title: "Controlled",
        content: <Example example={controlled} defaultIsVisible />,
      },
      {
        title: "Uncontrolled",
        content: <Example example={uncontrolled} defaultIsVisible />,
      },
      {
        title: "Error handling",
        content: <Example example={errorHandling} defaultIsVisible />,
      },
      {
        title: "Grouped options",
        content: <Example example={groups} defaultIsVisible />,
      },
      {
        title: "Icons",
        content: <Example example={icons} defaultIsVisible />,
      },
    ],
  },
];

const SelectCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/select/code/SelectCodePage.tsx" />
    </DxcFlex>
  );
};

export default SelectCodePage;
