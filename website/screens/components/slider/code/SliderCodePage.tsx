import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import Code from "@/common/Code";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import formatLabel from "./examples/formatLabel";
import HeaderCell from "@/common/HeaderCell";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <HeaderCell>Description</HeaderCell>
        </tr>
        <tr>
          <td>defaultValue: number</td>
          <td></td>
          <td>Initial value of the slider, only when it is uncontrolled.</td>
        </tr>
        <tr>
          <td>value: number</td>
          <td></td>
          <td>
            The selected value. If undefined, the component will be uncontrolled
            and the value will be managed internally by the component.
          </td>
        </tr>
        <tr>
          <td>label: string</td>
          <td></td>
          <td>Text to be placed above the slider.</td>
        </tr>
        <tr>
          <td>name: string</td>
          <td></td>
          <td>Name attribute of the input element.</td>
        </tr>
        <tr>
          <td>helperText: string</td>
          <td></td>
          <td>Helper text to be placed above the slider.</td>
        </tr>
        <tr>
          <td>minValue: number</td>
          <td>
            <Code>0</Code>
          </td>
          <td>The minimum value available for selection.</td>
        </tr>
        <tr>
          <td>maxValue: number</td>
          <td>
            <Code>100</Code>
          </td>
          <td>The maximum value available for selection.</td>
        </tr>
        <tr>
          <td>step: number</td>
          <td>
            <Code>1</Code>
          </td>
          <td>The step interval between values available for selection.</td>
        </tr>
        <tr>
          <td>showLimitsValues: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>
            Whether the min/max value labels should be displayed next to the
            slider.
          </td>
        </tr>
        <tr>
          <td>showInput: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>
            Whether the input element for displaying/controlling the slider
            value should be displayed next to the slider.
          </td>
        </tr>
        <tr>
          <td>disabled: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>If true, the component will be disabled.</td>
        </tr>
        <tr>
          <td>marks: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>Whether the marks between each step should be shown or not.</td>
        </tr>
        <tr>
          <td>onChange: function</td>
          <td></td>
          <td>
            This function will be called when the slider changes its value, as
            it&#39;s being dragged. The new value will be passed as a parameter
            when this function is executed.
          </td>
        </tr>
        <tr>
          <td>onDragEnd: function</td>
          <td></td>
          <td>
            This function will be called when the slider changes its value, but
            only when the thumb is released. The new value will be passed as a
            parameter when this function is executed.
          </td>
        </tr>
        <tr>
          <td>labelFormatCallback: function</td>
          <td></td>
          <td>
            This function will be used to format the labels displayed next to
            the slider. The value will be passed as parameter and the function
            must return the formatted value.
          </td>
        </tr>
        <tr>
          <td>margin: string | object</td>
          <td></td>
          <td>
            Size of the margin to be applied to the component (&#39;xxsmall&#39;
            | &#39;xsmall&#39; | &#39;small&#39; | &#39;medium&#39; |
            &#39;large&#39; | &#39;xlarge&#39; | &#39;xxlarge&#39;). You can
            pass an object with &#39;top&#39;, &#39;bottom&#39;, &#39;left&#39;
            and &#39;right&#39; properties in order to specify different margin
            sizes.
          </td>
        </tr>
        <tr>
          <td>size: string</td>
          <td>
            <Code>&#39;fillParent&#39;</Code>
          </td>
          <td>
            Size of the component (&#39;medium&#39; | &#39;large&#39; |
            &#39;fillParent&#39;).
          </td>
        </tr>
        <tr>
          <td>tabIndex: number</td>
          <td>
            <Code>0</Code>
          </td>
          <td>Value of the tabindex attribute.</td>
        </tr>
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
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/slider/code/SliderCodePage.tsx" />
    </DxcStack>
  );
};

export default SliderCodePage;
