import { DxcFlex, DxcTable, DxcText } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import errorHandling from "./examples/errorHandling";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
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
            <td>Text to be placed above the date.</td>
          </tr>
          <tr>
            <td>name: string</td>
            <td></td>
            <td>Name attribute of the input element.</td>
          </tr>
          <tr>
            <td>helperText: string</td>
            <td></td>
            <td>Helper text to be placed above the date.</td>
          </tr>
          <tr>
            <td>placeholder: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>
              If true, the date format will appear as placeholder in the field.
            </td>
          </tr>
          <tr>
            <td>format: string</td>
            <td>
              <Code>'dd-MM-yyyy'</Code>
            </td>
            <td>
              The format in which the date value will be displayed. User must
              follow this format when editing the value or it will be considered
              as an invalid date. In this case, the onBlur and onChange
              functions will be called with an internal error as a parameter
              reporting the situation.
            </td>
          </tr>
          <tr>
            <td>clearable: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>
              If true, the date input will have an action to clear the entered
              value.
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
            <td>optional: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>
              If true, the date will be optional, showing{" "}
              <Code>(Optional)</Code> next to the label. Otherwise, the field
              will be considered required and an error will be passed as a
              parameter to the OnBlur and onChange functions when it has not
              been filled.
            </td>
          </tr>
          <tr>
            <td>onChange: function</td>
            <td></td>
            <td>
              This function will be called when the user types within the input
              element of the component. An object including the string value,
              the error and the date value will be passed to this function. An
              example of this object is: {"{ "}
              <Code>value: value, error: error, date: date</Code>
              {" }"}. If the string value is a valid date, <Code>error</Code>{" "}
              will be undefined. Also, if the string value is not a valid date,{" "}
              <Code>date</Code> will be undefined.
            </td>
          </tr>
          <tr>
            <td>onBlur: function</td>
            <td></td>
            <td>
              This function will be called when the input element loses the
              focus. An object including the string value, the error and the
              date value will be passed to this function. An example of this
              object is: {"{ "}
              <Code>value: value, error: error, date: date</Code>
              {" }"}. If the string value is a valid date, <Code>error</Code>{" "}
              will be undefined. Also, if the string value is not a valid date,{" "}
              <Code>date</Code> will be undefined.
            </td>
          </tr>
          <tr>
            <td>error: string</td>
            <td></td>
            <td>
              If it is a defined value and also a truthy string, the component
              will change its appearance, showing the error below the date input
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
            <td>size: string</td>
            <td>
              <Code>'medium'</Code>
            </td>
            <td>Size of the component ('medium' | 'large' | 'fillParent').</td>
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
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
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
        content: (
          <>
            <DxcText as="p">
              The component behaviour varies depending on the value of the{" "}
              <Code>error</Code>. We recommend reading the description of the
              prop carefully to fully understand the following example.
            </DxcText>
            <Example example={errorHandling} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const DateInputCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/date-input/code/DateInputCodePage.tsx" />
    </DxcFlex>
  );
};

export default DateInputCodePage;
