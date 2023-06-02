import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import Code from "@/common/Code";
import basicUsage from "./examples/basicUsage";
import icons from "./examples/icons";
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
            <td>label: string</td>
            <td></td>
            <td>Text to be placed on the chip.</td>
          </tr>
          <tr>
            <td>prefixIcon: node | string</td>
            <td></td>
            <td>
              Element used as icon, placed before the chip label. Note that if
              the passed value is an URL (string), the component's color styling
              tokens will not be applied to the image.
            </td>
          </tr>
          <tr>
            <td>suffixIcon: node | string</td>
            <td></td>
            <td>
              Element used as icon, placed after the chip label. Note that if
              the passed value is an URL (string), the component's color styling
              tokens will not be applied to the image.
            </td>
          </tr>
          <tr>
            <td>onClickPrefix: function</td>
            <td></td>
            <td>
              If defined, the prefix icon will be considered a button element.
              This function will be called when it is clicked.
            </td>
          </tr>
          <tr>
            <td>onClickSuffix: function</td>
            <td></td>
            <td>
              If defined, the suffix icon will be considered a button element.
              This function will be called when it is clicked.
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
            <td>tabIndex: number</td>
            <td>
              <Code>0</Code>
            </td>
            <td>
              Value of the tabindex, it also applies to prefix and suffix icons
              when a function is given.
            </td>
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
        title: "Icons",
        content: (
          <>
            <Example example={icons} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const ChipCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/chip/code/ChipCodePage.tsx" />
    </DxcFlex>
  );
};

export default ChipCodePage;
