import { DxcTable, DxcStack } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import specsImage from "./images/spinner_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Spinner design specifications">
        <Image src={specsImage} alt="Spinner design specifications" />
      </Figure>
    ),
  },
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Color",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Component token</th>
                <th>Element</th>
                <th>Token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>trackCircleColor</Code>
                </td>
                <td>Spinner circle (track)</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>trackCircleColorOnDark</Code>
                </td>
                <td>Spinner circle (track)</td>
                <td>
                  <Code>color-purple-500</Code>
                </td>
                <td>#a46ede</td>
              </tr>
              <tr>
                <td>
                  <Code>totalCircleColor</Code>
                </td>
                <td>Spinner circle (total)</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>fontColor</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>fontColorOnDark</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>fontColor</Code>
                </td>
                <td>Percentage</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>overlayColor</Code>
                </td>
                <td>Overlay</td>
                <td>
                  <Code>color-grey-800-a</Code>
                </td>
                <td>#000000b3</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Size",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Property</th>
                <th>Element</th>
                <th>Token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>width</Code>
                </td>
                <td>Spinner container (large)</td>
                <td>-</td>
                <td>140px</td>
              </tr>
              <tr>
                <td>
                  <Code>height</Code>
                </td>
                <td>Spinner container (large)</td>
                <td>-</td>
                <td>140px</td>
              </tr>
              <tr>
                <td>
                  <Code>width</Code>
                </td>
                <td>Spinner container (small)</td>
                <td>-</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>
                  <Code>height</Code>
                </td>
                <td>Spinner container (small)</td>
                <td>-</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>
                  <Code>max-width</Code>
                </td>
                <td>Overlay</td>
                <td>-</td>
                <td>100vw</td>
              </tr>
              <tr>
                <td>
                  <Code>max-height</Code>
                </td>
                <td>Overlay</td>
                <td>-</td>
                <td>100vh</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Typography",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Property</th>
                <th>Element</th>
                <th>Token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>font-size</Code>
                </td>
                <td>Loading label</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>14px</td>
              </tr>
              <tr>
                <td>
                  <Code>font-weight</Code>
                </td>
                <td>Loading label</td>
                <td>
                  <Code>font-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>font-size</Code>
                </td>
                <td>Percentage</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>14px</td>
              </tr>
              <tr>
                <td>
                  <Code>font-weight</Code>
                </td>
                <td>Percentage</td>
                <td>
                  <Code>font-bold</Code>
                </td>
                <td>600</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Border",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>focusBorderStyle</Code>
                </td>
                <td>Header:focus border</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
              </tr>
              <tr>
                <td>
                  <Code>focusBorderThickness</Code>
                </td>
                <td>Header:focus border</td>
                <td>
                  <Code>border-width-2</Code>
                </td>
                <td>2px</td>
              </tr>
              <tr>
                <td>
                  <Code>borderRadius</Code>
                </td>
                <td>Accordion container</td>
                <td>
                  <Code>border-radius-medium</Code>
                </td>
                <td>0.25rem / 4px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Border",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Property</th>
                <th>Element</th>
                <th>Token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>stroke</Code>
                </td>
                <td>Spinner circle (large)</td>
                <td>-</td>
                <td>8.5px solid</td>
              </tr>
              <tr>
                <td>
                  <Code>stroke</Code>
                </td>
                <td>Spinner circle (small)</td>
                <td>-</td>
                <td>2px solid</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
];

const SpinnerSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Specifications"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/spinner/specs/SpinnerSpecsPage.tsx" />
    </DxcStack>
  );
};

export default SpinnerSpecsPage;
