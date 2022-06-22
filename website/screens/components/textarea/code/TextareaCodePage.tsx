import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import errorHandling from "./examples/errorHandling";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>defaultValue: string</td>
          <td></td>
          <td>Initial value of the textarea, only when it is uncontrolled.</td>
        </tr>
        <tr>
          <td>value: string</td>
          <td></td>
          <td>
            Value of the textarea. If undefined, the component will be
            uncontrolled and the value will be managed internally.
          </td>
        </tr>
        <tr>
          <td>label: string</td>
          <td></td>
          <td>Text to be placed above the textarea.</td>
        </tr>
        <tr>
          <td>name: string</td>
          <td></td>
          <td>Name attribute of the textarea element.</td>
        </tr>
        <tr>
          <td>helperText: string</td>
          <td></td>
          <td>Helper text to be placed above the textarea.</td>
        </tr>
        <tr>
          <td>placeholder: string</td>
          <td></td>
          <td>Text to be put as placeholder of the textarea.</td>
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
            If true, the textarea will be optional, showing{" "}
            <Code>(Optional)</Code> next to the label. Otherwise, the field will
            be considered required and an error will be passed as a parameter to
            the OnBlur and onChange functions when it has not been filled.
          </td>
        </tr>
        <tr>
          <td>verticalGrow: 'auto' | 'manual' | 'none'</td>
          <td>
            <Code>'auto'</Code>
          </td>
          <td>
            Defines the textarea's ability to resize vertically. It can be:
            <ul>
              <li>
                <b>'auto'</b>: The textarea grows or shrinks automatically in
                order to fit the content.
              </li>
              <li>
                <b>'manual'</b>: The height of the textarea is enabled to be
                manually modified.
              </li>
              <li>
                <b>'none'</b>: The textarea has a fixed height and can't be
                modified.
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>rows: number</td>
          <td>
            <Code>4</Code>
          </td>
          <td>Number of rows of the textarea.</td>
        </tr>
        <tr>
          <td>onChange: function</td>
          <td></td>
          <td>
            This function will be called when the user types within the
            textarea. An object including the current value and the error (if
            the value entered is not valid) will be passed to this function. An
            example of this object is: {"{ "}
            <Code>value: value, error: error</Code>
            {" }"}. If there is no error, error will not be defined.
          </td>
        </tr>
        <tr>
          <td>onBlur: function</td>
          <td></td>
          <td>
            This function will be called when the textarea loses the focus. An
            object including the textarea value and the error (if the value
            entered is not valid) will be passed to this function. An example of
            this object is: {"{ "}
            <Code>value: value, error: error</Code>
            {" }"}. If there is no error, error will not be defined.
          </td>
        </tr>
        <tr>
          <td>error: string</td>
          <td></td>
          <td>
            If it is a defined value and also a truthy string, the component
            will change its appearance, showing the error below the textarea. If
            the defined value is an empty string, it will reserve a space below
            the component for a future error, but it would not change its look.
            In case of being undefined or null, both the appearance and the
            space for the error message would not be modified.
          </td>
        </tr>
        <tr>
          <td>pattern: string</td>
          <td></td>
          <td>
            Regular expression that defines the valid format allowed by the
            textarea. This will be checked both when the textarea loses the
            focus and while typing within it. If the string entered does not
            match the pattern, the onBlur and onChange functions will be called
            with the current value and an internal error informing that this
            value does not match the pattern. If the pattern is met, the error
            parameter of both events will not be defined.
          </td>
        </tr>
        <tr>
          <td>minLength: number</td>
          <td></td>
          <td>
            Specifies the minimun length allowed by the textarea. This will be
            checked both when the input element loses the focus and while typing
            within it. If the string entered does not comply the minimum length,
            the onBlur and onChange functions will be called with the current
            value and an internal error informing that the value length does not
            comply the specified range. If a valid length is reached, the error
            parameter of both events will not be defined.
          </td>
        </tr>
        <tr>
          <td>maxLength: number</td>
          <td></td>
          <td>
            Specifies the maximum length allowed by the textarea. This will be
            checked both when the input element loses the focus and while typing
            within it. If the string entered does not comply the maximum length,
            the onBlur and onChange functions will be called with the current
            value and an internal error informing that the value length does not
            comply the specified range. If a valid length is reached, the error
            parameter of both events will not be defined.
          </td>
        </tr>
        <tr>
          <td>autocomplete: string</td>
          <td>
            <Code>'off'</Code>
          </td>
          <td>
            HTML autocomplete attribute. Lets the user specify if any permission
            the user agent has to provide automated assistance in filling out
            the textarea value. Its value must be one of all the possible values
            of the HTML autocomplete attribute: 'on', 'off', 'email',
            'username', 'new-password', ...
          </td>
        </tr>
        <tr>
          <td>margin: string | object</td>
          <td></td>
          <td>
            Size of the margin to be applied to the component ('xxsmall' |
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
            can pass an object with 'top', 'bottom', 'left' and 'right'
            properties in order to specify different margin sizes.
          </td>
        </tr>
        <tr>
          <td>size: string</td>
          <td>
            <Code>'medium'</Code>
          </td>
          <td>
            Size of the component ('small' | 'medium' | 'large' | 'fillParent').
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
    ],
  },
];

const TextareaCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/textarea/code/TextareaCodePage.tsx" />
    </DxcStack>
  );
};

export default TextareaCodePage;
