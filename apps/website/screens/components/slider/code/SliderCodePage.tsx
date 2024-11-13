import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import Code from "@/common/Code";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import formatLabel from "./examples/formatLabel";
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
            <td>defaultValue</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Initial value of the slider, only when it is uncontrolled.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>value</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              The selected value. If undefined, the component will be uncontrolled and the value will be managed
              internally by the component.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed above the slider.</td>
            <td>-</td>
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
            <td>helperText</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Helper text to be placed above the slider.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>minValue</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>The minimum value available for selection.</td>
            <td>
              <TableCode>0</TableCode>
            </td>
          </tr>
          <tr>
            <td>maxValue</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>The maximum value available for selection.</td>
            <td>
              <TableCode>100</TableCode>
            </td>
          </tr>
          <tr>
            <td>step</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>The step interval between values available for selection.</td>
            <td>
              <TableCode>1</TableCode>
            </td>
          </tr>
          <tr>
            <td>showLimitsValues</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Whether the min/max value labels should be displayed next to the slider.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>showInput</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              Whether the input element for displaying/controlling the slider value should be displayed next to the
              slider.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
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
            <td>marks</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Whether the marks between each step should be shown or not.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>
              <TableCode>{"(value: number) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the slider changes its value, as it&#39;s being dragged. The new value
              will be passed as a parameter when this function is executed.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onDragEnd</td>
            <td>
              <TableCode>{"(value: number) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the slider changes its value, but only when the thumb is released. The
              new value will be passed as a parameter when this function is executed.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>labelFormatCallback</td>
            <td>
              <TableCode>{"(value: number) => string"}</TableCode>
            </td>
            <td>
              This function will be used to format the labels displayed next to the slider. The value will be passed as
              parameter and the function must return the formatted value.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>margin</td>
            <td>
              <TableCode>'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | Margin</TableCode>
            </td>
            <td>
              Size of the margin to be applied to the component. You can pass an object with 'top', 'bottom', 'left' and
              'right' properties in order to specify different margin sizes.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>'medium' | 'large' | 'fillParent'</TableCode>
            </td>
            <td>Size of the component.</td>
            <td>
              <TableCode>'fillParent'</TableCode>
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
            <td>ref</td>
            <td>
              <TableCode>{"React.Ref<HTMLDivElement>"}</TableCode>
            </td>
            <td>Reference to the component.</td>
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
        title: "Format label",
        content: <Example example={formatLabel} defaultIsVisible />,
      },
    ],
  },
];

const SliderCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/slider/code/SliderCodePage.tsx" />
    </DxcFlex>
  );
};

export default SliderCodePage;
