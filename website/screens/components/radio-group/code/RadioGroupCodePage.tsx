import { DxcStack, DxcTable, DxcText } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import errorHandling from "./examples/errorHandling";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        {" "}
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>defaultValue: string</td>
          <td></td>
          <td>
            Initial value of the radio group, only when it is uncontrolled.
          </td>
        </tr>
        <tr>
          <td>value: string</td>
          <td></td>
          <td>
            Value of the radio group. If undefined, the component will be
            uncontrolled and the value will be managed internally by the
            component.
          </td>
        </tr>
        <tr>
          <td>label: string</td>
          <td></td>
          <td>Text to be placed above the radio group.</td>
        </tr>
        <tr>
          <td>name: string</td>
          <td></td>
          <td>
            Name attribute of the input element. This attribute will allow users
            to find the component's value during the submit event.
          </td>
        </tr>
        <tr>
          <td>options: Option[]</td>
          <td></td>
          <td>
            An array of objects representing the selectable options. Each object
            Option has the following properties:
            <ul>
              <li>
                <b>label: string</b>: Label of the option placed next to the
                radio input.
              </li>
              <li>
                <b>value: string</b>: Value of the option. It should be unique
                and not an empty string, which is reserved to the optional item
                added by <i>optional</i> prop.
              </li>
              <li>
                <b>disabled: boolean</b>: disables the option.
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>helperText: string</td>
          <td></td>
          <td>Helper text to be placed above the radio group.</td>
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
            If true, the radio group will be optional, showing{" "}
            <Code>(Optional)</Code> next to the label and adding a default last
            option with an empty string as value. Otherwise, the field will be
            considered required and an error will be passed as a parameter to
            the OnBlur functions if an option wasn't selected.
          </td>
        </tr>
        <tr>
          <td>optionalItemLabel: string</td>
          <td>
            <Code>"N/A"</Code>
          </td>
          <td>Label of the optional radio input.</td>
        </tr>
        <tr>
          <td>readonly: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>If true, the component will be marked as readonly.</td>
        </tr>
        <tr>
          <td>stacking: "row" | "column"</td>
          <td>
            <Code>"column"</Code>
          </td>
          <td>Sets the orientation of the options within the radio group.</td>
        </tr>
        <tr>
          <td>onChange: function</td>
          <td></td>
          <td>
            This function will be called when the user chooses an option. The
            new value will be passed to this function.
          </td>
        </tr>
        <tr>
          <td>onBlur: function</td>
          <td></td>
          <td>
            This function will be called when the radio group loses the focus.
            An object including the value and the error will be passed to this
            function. An example of this object is: {"{ "}
            <Code>value: value, error: error</Code>
            {" }"}. If there is no error, error will not be defined.
          </td>
        </tr>
        <tr>
          <td>error: string</td>
          <td></td>
          <td>
            If it is a defined value and also a truthy string, the component
            will change its appearance, showing the error below the radio group.
            If the defined value is an empty string, it will reserve a space
            below the component for a future error, but it would not change its
            look. In case of being undefined or null, both the appearance and
            the space for the error message would not be modified.
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
        title: "Basic usage",
        content: (
          <>
            <Example example={basicUsage} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Controlled",
        content: (
          <>
            <Example example={controlled} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Uncontrolled",
        content: (
          <>
            <Example example={uncontrolled} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Error handling",
        content: (
          <>
            <DxcText as="p">
              For handling errors, we suggest initializing the{" "}
              <Code>error</Code> prop with an empty string. This will reserve
              space for a possible future error message and prevent unintended
              layout changes. Also, the <Code>onBlur</Code> event will send{" "}
              <Code>undefined</Code> when there is no error, so you may also
              need to control this too to avoid the same problem.
            </DxcText>
            <Example example={errorHandling} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const RadioGroupCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/radio-group/code/RadioGroupCodePage.tsx" />
    </DxcStack>
  );
};

export default RadioGroupCodePage;
