import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import errorUsage from "./examples/errorHandling";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Default</th>
            <HeaderDescriptionCell>Description</HeaderDescriptionCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>defaultValue: string</td>
            <td></td>
            <td>
              Initial value of the input element, only when it is uncontrolled.
            </td>
          </tr>
          <tr>
            <td>value: string</td>
            <td></td>
            <td>
              Value of the input element. If undefined, the component will be
              uncontrolled and the value will be managed internally by the
              component.
            </td>
          </tr>
          <tr>
            <td>label: string</td>
            <td></td>
            <td>Text to be placed above the number.</td>
          </tr>
          <tr>
            <td>name: string</td>
            <td></td>
            <td>Name attribute of the input element.</td>
          </tr>
          <tr>
            <td>helperText: string</td>
            <td></td>
            <td>Helper text to be placed above the number.</td>
          </tr>
          <tr>
            <td>placeholder: string</td>
            <td></td>
            <td>Text to be put as placeholder of the number.</td>
          </tr>
          <tr>
            <td>disabled: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>If true, the component will be disabled.</td>
          </tr>
          <tr>
            <td>optional: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>
              If true, the number will be optional, showing{" "}
              <Code>(Optional)</Code> next to the label. Otherwise, the field
              will be considered required and an error will be passed as a
              parameter to the OnBlur and onChange functions when it has not
              been filled.
            </td>
          </tr>
          <tr>
            <td>prefix: string</td>
            <td></td>
            <td>Prefix to be placed before the number value.</td>
          </tr>
          <tr>
            <td>suffix: string</td>
            <td></td>
            <td>Suffix to be placed after the number value.</td>
          </tr>
          <tr>
            <td>min: number</td>
            <td></td>
            <td>
              Minimum value allowed by the number input. If the typed value by
              the user is lower than min, the onBlur and onChange functions will
              be called with the current value and an internal error informing
              that the current value is not correct. If a valid state is
              reached, the error parameter will not be defined in both events.
            </td>
          </tr>
          <tr>
            <td>max: number</td>
            <td></td>
            <td>
              Maximum value allowed by the number input. If the typed value by
              the user surpasses max, the onBlur and onChange functions will be
              called with the current value and an internal error informing that
              the current value is not correct. If a valid state is reached, the
              error parameter will not be defined in both events.
            </td>
          </tr>
          <tr>
            <td>step: number</td>
            <td></td>
            <td>
              The step interval to use when using the up and down arrows to
              adjust the value.
            </td>
          </tr>
          <tr>
            <td>onChange: function</td>
            <td></td>
            <td>
              This function will be called when the user types within the input
              element of the component. An object including the current value
              and the error (if the value entered is not valid) will be passed
              to this function. An example of this object is: {"{ "}
              <Code>value: value, error: error</Code>
              {" }"}. If there is no error, error will not be defined.
            </td>
          </tr>
          <tr>
            <td>onBlur: function</td>
            <td></td>
            <td>
              This function will be called when the input element loses the
              focus. An object including the input value and the error (if the
              value entered is not valid) will be passed to this function. An
              example of this object is: {"{ "}
              <Code>value: value, error: error</Code>
              {" }"}. If there is no error, error will not be defined.
            </td>
          </tr>
          <tr>
            <td>error: string</td>
            <td></td>
            <td>
              If it is a defined value and also a truthy string, the component
              will change its appearance, showing the error below the input
              component. If the defined value is an empty string, it will
              reserve a space below the component for a future error, but it
              would not change its look. In case of being undefined or null,
              both the appearance and the space for the error message would not
              be modified.
            </td>
          </tr>
          <tr>
            <td>autocomplete: string</td>
            <td>
              <Code>'off'</Code>
            </td>
            <td>
              HTML autocomplete attribute. Lets the user specify if any
              permission the user agent has to provide automated assistance in
              filling out the input value. Its value must be one of all the
              possible values of the HTML autocomplete attribute: 'on', 'off',
              'email', 'username', 'new-password', ...
            </td>
          </tr>
          <tr>
            <td>margin: string | object</td>
            <td></td>
            <td>
              Size of the margin to be applied to the component ('xxsmall' |
              'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
              You can pass an object with 'top', 'bottom', 'left' and 'right'
              properties in order to specify different margin sizes.
            </td>
          </tr>
          <tr>
            <td>size: string | object</td>
            <td>
              <Code>'medium'</Code>
            </td>
            <td>
              Size of the component ('small' | 'medium' | 'large' |
              'fillParent').
            </td>
          </tr>
          <tr>
            <td>tabIndex: number</td>
            <td>
              <Code>0</Code>
            </td>
            <td>Value of the tabindex attribute.</td>
          </tr>
          <tr>
            <td>ref: object</td>
            <td></td>
            <td>Reference to the component.</td>
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
        content: <Example example={errorUsage} defaultIsVisible />,
      },
    ],
  },
];

const NumberInputCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/number-input/code/NumberInputCodePage.tsx" />
    </DxcStack>
  );
};

export default NumberInputCodePage;
