import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Code, { TableCode, ExtendedTableCode } from "@/common/Code";
import controlled from "./examples/controlled";
import Example from "@/common/example/Example";
import currency from "./examples/currency";
import unit from "./examples/unit";
import Link from "next/link";

const configTypeString = `{
  thousandSeparator?: string;
  decimalSeparator?: string;
  symbolPosition?: 'before' | 'after';
} & (
  | {
      currencyConfig?: {
        currency: string;
        currencyDisplay?: 'code' |
            'symbol' |
            'narrowSymbol' |
            'name';
        currencySign?: 'standard' | 'accounting';
      };
      unitsConfig?: never;
    }
  | {
      currencyConfig?: never;
      unitsConfig?: {
        unit: string;
        unitDisplay?: 'short' | 'long' | 'narrow';
      };
    }
)`;

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
            <td>alignment</td>
            <td>
              <TableCode>'left' | 'right'</TableCode>
            </td>
            <td>Sets the alignment inside the input.</td>
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
            <td>-</td>
          </tr>
          <tr>
            <td>clearable</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the input will have an action to clear the entered value.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>config</td>
            <td>
              <ExtendedTableCode>{configTypeString}</ExtendedTableCode>
            </td>
            <td>
              Configuration for the amount input, including currency or units, and formatting options such as thousand
              and decimal separators and the position of the currency symbol. <Code>currencyConfig</Code> and{" "}
              <Code>unitsConfig</Code> are mutually exclusive. To better understand the allowed values for currencies
              and units, please refer to the{" "}
              <Link href="/theme-generator/user-guide" legacyBehavior passHref>
                <DxcLink newWindow>respective documentation.</DxcLink>
              </Link>
            </td>
            <td>-</td>
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
            <td>disabled</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the component will be disabled.</td>
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
            <td>helperText</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Helper text to be placed above the input.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Text to be placed above the input. This label will be used as the aria-label attribute of the list of
              suggestions.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>maxValue</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Specifies the maximum value allowed in the input.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>minValue</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Specifies the minimum value allowed in the input.</td>
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
            <td>numberOfDecimals</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Specifies the number of decimal places allowed in the input. By default it is set to 3 or the permitted
              amount by the currency.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>numberOfIntegers</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Specifies the number of integer places allowed in the input.</td>
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
            <td>optional</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the input will be optional, showing '(Optional)' next to the label. Otherwise, the field will be
              considered required and an error will be passed as a parameter to the <Code>onBlur</Code> and{" "}
              <Code>onChange</Code> functions when it has not been filled.
            </td>
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
            <td>readOnly</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the component will not be mutable, meaning the user can not edit the control. In addition, the
              clear action will not be displayed even if the flag is set to true.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>ref</td>
            <td>
              <TableCode>{"React.Ref<HTMLInputElement>"}</TableCode>
            </td>
            <td>Ref to the input element.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>'small' | 'medium' | 'large' | 'fillParent'</TableCode>
            </td>
            <td>Size of the component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> attribute.
            </td>
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
        title: "Currency",
        content: <Example example={currency} defaultIsVisible />,
      },
      {
        title: "Unit",
        content: <Example example={unit} defaultIsVisible />,
      },
    ],
  },
];

const AmountInputCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/amount-input/code/AmountInputCodePage.tsx" />
  </DxcFlex>
);

export default AmountInputCodePage;
