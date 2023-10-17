import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import Code from "@/common/Code";
import basicUsage from "./examples/basicUsage";
import icons from "./examples/icons";
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
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed on the chip.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>prefixIcon</td>
            <td>
              <TableCode>
                string | {"(React.ReactNode & React.SVGProps <SVGSVGElement>)"}
              </TableCode>
            </td>
            <td>
              Element used as icon, placed before the chip label. Note that if
              the passed value is an URL (string), the color styling tokens will
              not be applied to the image. For the icon to display correctly, an
              SVG must be provided to the prop inheriting the component's
              styles.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>suffixIcon</td>
            <td>
              <TableCode>
                string | {"(React.ReactNode & React.SVGProps <SVGSVGElement>)"}
              </TableCode>
            </td>
            <td>
              Element used as icon, placed after the chip label. Note that if
              the passed value is an URL (string), the color styling tokens will
              not be applied to the image. For the icon to display correctly, an
              SVG must be provided to the prop inheriting the component's
              styles.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onClickPrefix</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>
              If defined, the prefix icon will be considered a button element.
              This function will be called when it is clicked.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onClickSuffix</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>
              If defined, the suffix icon will be considered a button element.
              This function will be called when it is clicked.
            </td>
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
            <td>margin</td>
            <td>
              <TableCode>
                'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
                'xxlarge' | Margin
              </TableCode>
            </td>
            <td>
              Size of the margin to be applied to the component ('xxsmall' |
              'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
              You can pass an object with 'top', 'bottom', 'left' and 'right'
              properties in order to specify different margin sizes.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> attribute applied to both the
              component and the prefix and suffix icons when a function is
              given.
            </td>
            <td>
              <TableCode>0</TableCode>
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
