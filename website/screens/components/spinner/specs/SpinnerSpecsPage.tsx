import { DxcTable, DxcStack } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import specsImage from "./images/spinner_specs.png";
import Figure from "../../../common/Figure";
import Code from "../../../common/Code";
import DocFooter from "../../../common/DocFooter";

const SpinnerSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Spinner design specifications">
          <Image src={specsImage} alt="Spinner design specifications" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Design tokens</HeadingLink>
        <HeadingLink level={4}>Color</HeadingLink>
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
                <Code>trackCircleColorOverlay</Code>
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
        <HeadingLink level={4}>Size</HeadingLink>
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
        <HeadingLink level={4}>Typography</HeadingLink>
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
        <HeadingLink level={4}>Border</HeadingLink>
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
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/spinner/specs/SpinnerSpecsPage.tsx" />
    </DxcStack>
  );
};

export default SpinnerSpecsPage;
