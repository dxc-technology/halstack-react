import { DxcTable, DxcBulletedList, DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import specsImage from "./images/progress_specs.png";
import anatomyImage from "./images/progress_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Progress bar design specifications">
        <Image src={specsImage} alt="Progress bar design specifications" />
      </Figure>
    ),
  },

  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomyImage} alt="Progress bar anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            Label <em>(Optional)</em>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Progress track line</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Helper text <em>(Optional)</em>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Progress total line</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Progress indicator <em>(Optional)</em>{" "}
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
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
                <th>Core token</th>
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
                  <Code>overlayColor</Code>
                </td>
                <td>Overlay</td>
                <td>
                  <Code>color-grey-800-a</Code>
                </td>
                <td>#000000b3</td>
              </tr>
              <tr>
                <td>
                  <Code>overlayFontColor</Code>
                </td>
                <td>Overlay font color</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
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
                <th>Core token</th>
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
        ),
      },
      {
        title: "Internal spacing",
        content: (
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
        ),
      },
      {
        title: "Margin",
        content: (
          <>
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
            <DxcParagraph>
              And also apply different values to each side of the component:
              <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code>, <Code>right</Code>.
            </DxcParagraph>
          </>
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
                <th>Core token</th>
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
                  <Code>font-scale-01</Code>
                </td>
                <td>12px</td>
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
                  <Code>text-transform</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-transform-uppercase</Code>
                </td>
                <td>uppercase</td>
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
                <td>0rem / 0px</td>
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
        ),
      },
    ],
  },
];

const ProgressBarSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/progress-bar/specs/ProgressBarSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default ProgressBarSpecsPage;
