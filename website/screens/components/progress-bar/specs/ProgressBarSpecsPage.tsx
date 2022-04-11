import {
  DxcTable,
  DxcStack,
  DxcList,
  DxcText,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import specsImage from "./images/progress_specs.png";
import anatomyImage from "./images/progress_anatomy.png";
import Figure from "../../../common/Figure";
import Code from "../../../common/Code";
import DocFooter from "../../../common/DocFooter";

const ProgressBarSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Component design specifications">
          <Image src={specsImage} alt="Component design specifications" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
        <Image src={anatomyImage} alt="Component anatomy" />
        <DxcList type="number">
          <DxcText>
            Label <em>(Optional)</em>
          </DxcText>
          <DxcText>Progress track line</DxcText>
          <DxcText>
            Helper text <em>(Optional)</em>
          </DxcText>
          <DxcText>Progress total line</DxcText>
          <DxcText>
            Progress indicator <em>(Optional)</em>{" "}
          </DxcText>
        </DxcList>
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
                <Code>trackLineColor</Code>
              </td>
              <td>Track line</td>
              <td>
                <Code>color-purple-700</Code>
              </td>
              <td>#5f249f</td>
            </tr>
            <tr>
              <td>
                <Code>trackLineColorOnDark</Code>
              </td>
              <td>Track line</td>
              <td>
                <Code>color-purple-500</Code>
              </td>
              <td>#a46ede</td>
            </tr>
            <tr>
              <td>
                <Code>totalLineColor</Code>
              </td>
              <td>Total line</td>
              <td>
                <Code>color-grey-200</Code>
              </td>
              <td>#e6e6e6</td>
            </tr>
            <tr>
              <td>
                <Code>labelFontColor</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>labelFontColor</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>labelFontColorOnDark</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>indicatorFontColor</Code>
              </td>
              <td>Indicator</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>indicatorFontColorOnDark</Code>
              </td>
              <td>Indicator</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>helperFontColor</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>helperFontColorOnDark</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
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
                <Code>height</Code>
              </td>
              <td>Track line</td>
              <td>-</td>
              <td>8px</td>
            </tr>
            <tr>
              <td>
                <Code>height</Code>
              </td>
              <td>Total line</td>
              <td>-</td>
              <td>8px</td>
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
        <HeadingLink level={4}>Internal spacing</HeadingLink>
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
                <Code>margin-bottom</Code>
              </td>
              <td>Label</td>
              <td>-</td>
              <td>8px</td>
            </tr>
            <tr>
              <td>
                <Code>margin-top</Code>
              </td>
              <td>Helper text</td>
              <td>-</td>
              <td>8px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Margin</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Margin</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>xxsmall</Code>
              </td>
              <td>6px</td>
            </tr>
            <tr>
              <td>
                <Code>xsmall</Code>
              </td>
              <td>16px</td>
            </tr>
            <tr>
              <td>
                <Code>small</Code>
              </td>
              <td>24px</td>
            </tr>
            <tr>
              <td>
                <Code>medium</Code>
              </td>
              <td>36px</td>
            </tr>
            <tr>
              <td>
                <Code>large</Code>
              </td>
              <td>48px</td>
            </tr>
            <tr>
              <td>
                <Code>xlarge</Code>
              </td>
              <td>64px</td>
            </tr>
            <tr>
              <td>
                <Code>xxlarge</Code>
              </td>
              <td>100px</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcText as="p">
          And also apply different values to each side of the component:
          <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code>,{" "}
          <Code>right</Code>.
        </DxcText>
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
              <td>Label</td>
              <td>
                <Code>font-scale-02</Code>
              </td>
              <td>14px</td>
            </tr>
            <tr>
              <td>
                <Code>font-weight</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-regular</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>font-size</Code>
              </td>
              <td>Indicator</td>
              <td>
                <Code>font-scale-02</Code>
              </td>
              <td>14px</td>
            </tr>
            <tr>
              <td>
                <Code>font-weight</Code>
              </td>
              <td>Indicator</td>
              <td>
                <Code>font-bold</Code>
              </td>
              <td>600</td>
            </tr>
            <tr>
              <td>
                <Code>font-size</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>font-scale-01</Code>
              </td>
              <td>12px</td>
            </tr>
            <tr>
              <td>
                <Code>font-weight</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>font-regular</Code>
              </td>
              <td>400</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Border</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>border-width</Code>
              </td>
              <td>Track line</td>
              <td>
                <Code>border-width-0</Code>
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <Code>border-style</Code>
              </td>
              <td>Track line</td>
              <td>
                <Code>border-style-none</Code>
              </td>
              <td>none</td>
            </tr>
            <tr>
              <td>
                <Code>border-radius</Code>
              </td>
              <td>Track line</td>
              <td>
                <Code>border-radius-full</Code>
              </td>
              <td>9999px</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/progress-bar/specs/ProgressBarSpecsPage.tsx" />
    </DxcStack>
  );
};

export default ProgressBarSpecsPage;
