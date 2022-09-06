import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import Code from "@/common/Code";
import basicUsage from "./examples/basicUsage";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Props",
    content: (
      <>
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
              <td>imageSrc: string</td>
              <td></td>
              <td>
                URL of the image that will be placed in the card component. In
                case of omission, the image container will not appear and the
                content will occupy its space.
              </td>
            </tr>
            <tr>
              <td>imageBgColor: string</td>
              <td>
                <Code>black</Code>
              </td>
              <td>Color of the image background.</td>
            </tr>
            <tr>
              <td>imagePadding: string | object </td>
              <td></td>
              <td>
                Size of the padding to be applied to the image section of the
                component (`xxsmall` | `xsmall` | `small` | `medium` | `large` |
                `xlarge` | `xxlarge`). You can pass an object with `top`,
                `bottom`, `left` and `right` properties in order to specify
                different padding sizes.
              </td>
            </tr>
            <tr>
              <td>imagePosition: `after` | `before`</td>
              <td>
                <Code>`before`</Code>
              </td>
              <td>
                Whether the image should appear in relation to the content.
              </td>
            </tr>
            <tr>
              <td>linkHref: string</td>
              <td></td>
              <td>
                If defined, the card will be displayed as an anchor, using this
                prop as `href`. Component will show some visual feedback on
                hover.
              </td>
            </tr>
            <tr>
              <td>onClick: function</td>
              <td></td>
              <td>
                This function will be called when the user clicks the card.
                Component will show some visual feedback on hover.
              </td>
            </tr>
            <tr>
              <td>imageCover: boolean</td>
              <td>
                <Code>false</Code>
              </td>
              <td>
                Whether the image must cover the whole image area of the card.
              </td>
            </tr>
            <tr>
              <td>margin: string | object</td>
              <td></td>
              <td>
                Size of the margin to be applied to the component (`xxsmall` |
                `xsmall` | `small` | `medium` | `large` | `xlarge` | `xxlarge`).
                You can pass an object with `top`, `bottom`, `left` and `right`
                properties in order to specify different margin sizes.
              </td>
            </tr>
            <tr>
              <td>contentPadding: string | object</td>
              <td></td>
              <td>
                Size of the padding to be applied to the content area (`xxsmall`
                | `xsmall` | `small` | `medium` | `large` | `xlarge` |
                `xxlarge`). You can pass an object with `top`, `bottom`, `left`
                and `right` properties in order to specify different padding
                sizes.
              </td>
            </tr>
            <tr>
              <td>tabIndex: number</td>
              <td>0</td>
              <td>Value of the tabindex given when there is an href.</td>
            </tr>
            <tr>
              <td>outlined: boolean</td>
              <td>
                <Code>true</Code>
              </td>
              <td>Whether the card must be outlined.</td>
            </tr>
            <tr>
              <td>children: node</td>
              <td></td>
              <td>Custom content that will be placed in the card component.</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
    ],
  },
];

const SelectCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/card/code/CardCodePage.tsx" />
    </DxcFlex>
  );
};

export default SelectCodePage;
