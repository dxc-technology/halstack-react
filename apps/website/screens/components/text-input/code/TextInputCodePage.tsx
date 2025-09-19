import { DxcLink, DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import action from "./examples/action";
import functionSuggestions from "./examples/functionSuggestions";
import errorHandling from "./examples/errorHandling";
import TableCode from "@/common/TableCode";
import StatusBadge from "@/common/StatusBadge";

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
            <td>
              <DxcFlex direction="column" gap="1rem" alignItems="baseline">
                <StatusBadge status="new" />
                alignment
              </DxcFlex>
            </td>
            <td>
              <TableCode>'left' | 'right'</TableCode>
            </td>
            <td>
              Sets <Code>text-align</Code> CSS property inside the input. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'left'</TableCode>
            </td>
          </tr>
          <tr>
            <td>defaultValue</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Initial value of the input, only when it is uncontrolled.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>value</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Value of the input. If undefined, the component will be uncontrolled and the value will be managed
              internally by the component.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Text to be placed above the input. Under the hood, this prop also serves as an accessible label for the
              list of suggestions.
            </td>
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
            <td>Helper text to be placed above the input.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be put as placeholder of the input.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>action</td>
            <td>
              <TableCode>
                {
                  "{ icon: string | (React.ReactNode & React.SVGProps <SVGSVGElement>); onClick: () => void; title?: string }"
                }
              </TableCode>
            </td>
            <td>
              Action to be shown in the input. It has the following properties:
              <ul>
                <li>
                  <b>icon</b>: Icon to be placed in the action. It can be either an icon from{" "}
                  <DxcLink newWindow href="https://fonts.google.com/icons">
                    Material Symbols
                  </DxcLink>{" "}
                  (string) or a SVG component.
                </li>
                <li>
                  <b>onClick</b>: Function to be called when the action button is clicked.
                </li>
                <li>
                  <b>title</b>: Text representing advisory information related to the button's action. Under the hood,
                  this prop also serves as an accessible label for the component.
                </li>
              </ul>
              Note that if the icon is an URL (string), the component's color styling tokens will not be applied to the
              image.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>clearable</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the input will have an action to clear the entered value.</td>
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
            <td>optional</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the input will be optional, showing '(Optional)' next to the label. Otherwise, the field will be
              considered required and an error will be passed as a parameter to the <Code>onBlur</Code> and{" "}
              <Code>onChange</Code> functions when it has not been filled.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>readOnly</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the component will not be mutable, meaning the user can not edit the control. In addition, the
              clear action will not be displayed even if the flag is set to true and the custom action will not execute
              its <Code>onClick</Code> event.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>prefix</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Prefix to be placed before the input value.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>suffix</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Suffix to be placed after the input value.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>
              <TableCode>{"(val: { value: string; error?: string }) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user types within the input element of the component. An object
              including the current value and the error (if the value entered is not valid) will be passed to this
              function. If there is no error, <Code>error</Code> will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onBlur</td>
            <td>
              <TableCode>{"(val: { value: string; error?: string }) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the input element loses the focus. An object including the input value
              and the error (if the value entered is not valid) will be passed to this function. If there is no error,{" "}
              <Code>error</Code> will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>error</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              If it is a defined value and also a truthy string, the component will change its appearance, showing the
              error below the input component. If the defined value is an empty string, it will reserve a space below
              the component for a future error, but it would not change its look. In case of being undefined or null,
              both the appearance and the space for the error message would not be modified.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>suggestions</td>
            <td>
              <TableCode>{"string[] | ((value: string) => Promise <string[]>)"}</TableCode>
            </td>
            <td>
              These are the options to be displayed as suggestions. It can be either an array or a function:
              <ul>
                <li>
                  <b>Array</b>: List of options that will be filtered by the user's input.
                </li>
                <li>
                  <b>Function</b>: This function will be called when the user changes the value. It will receive the new
                  value as a parameter and should return a promise that resolves to an array with the filtered options.
                </li>
              </ul>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>pattern</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Regular expression that defines the valid format allowed by the input. This will be checked both when the
              input element loses the focus and while typing within it. If the string entered does not match the
              pattern, the <Code>onBlur</Code> and <Code>onChange</Code> functions will be called with the current value
              and an internal error informing that this value does not match the pattern. If the pattern is met, the
              error parameter of both events will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>minLength</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Specifies the minimum length allowed by the input. This will be checked both when the input element loses
              the focus and while typing within it. If the string entered does not comply the minimum length, the{" "}
              <Code>onBlur</Code> and <Code>onChange</Code> functions will be called with the current value and an
              internal error informing that the value length does not comply the specified range. If a valid length is
              reached, the error parameter of both events will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>maxLength</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Specifies the maximum length allowed by the input. This will be checked both when the input element loses
              the focus and while typing within it. If the string entered does not comply the maximum length, the{" "}
              <Code>onBlur</Code> and <Code>onChange</Code> functions will be called with the current value and an
              internal error informing that the value length does not comply the specified range. If a valid length is
              reached, the error parameter of both events will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>autocomplete</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              HTML <Code>autocomplete</Code> attribute. Lets the user specify if any permission the user agent has to
              provide automated assistance in filling out the input value. Its value must be one of all the possible
              values of the HTML autocomplete attribute. See{" "}
              <DxcLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">MDN</DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'off'</TableCode>
            </td>
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
            <td>ref</td>
            <td>
              <TableCode>{"React.Ref<HTMLDivElement>"}</TableCode>
            </td>
            <td>Reference to the component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>ariaLabel</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Specifies a string to be used as the name for the textInput element when no <Code>label</Code> is
              provided.
            </td>
            <td>'Text input'</td>
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
        title: "Action",
        content: <Example example={action} defaultIsVisible />,
      },
      {
        title: "Autosuggest",
        content: <Example example={functionSuggestions} defaultIsVisible />,
      },
      {
        title: "Error handling",
        content: <Example example={errorHandling} defaultIsVisible />,
      },
    ],
  },
];

const TextInputCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/text-input/code/TextInputCodePage.tsx" />
    </DxcFlex>
  );
};

export default TextInputCodePage;
