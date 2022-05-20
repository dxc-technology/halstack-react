import {
  DxcTable,
  DxcStack,
  DxcText,
  DxcList,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import specsImage from "./images/switch_specs.png";
import statesImage from "./images/switch_states.png";
import anatomyImage from "./images/switch_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Switch design specifications">
        <Image src={specsImage} alt="Switch design specifications" />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcText as="p">
          Five different states are defined in the life cycle of the component:{" "}
          <strong>unselected enabled</strong>, <strong>unselected focus</strong>
          , <strong>unselected disabled</strong>,{" "}
          <strong>selected enabled</strong>, <strong>selected focus</strong> and{" "}
          <strong>selected disabled</strong>.
        </DxcText>
        <Figure caption="Switch component states">
          <Image src={statesImage} alt="Switch component states" />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Figure caption="Switch component anatomy">
          <Image src={anatomyImage} alt="Switch component anatomy" />
        </Figure>
        <DxcList type="number">
          <DxcText>Label</DxcText>
          <DxcText>Thumb</DxcText>
          <DxcText>Track</DxcText>
        </DxcList>
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
                  <Code>disabledLabelFontColor</Code>
                </td>
                <td>Label:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>thumbBackgroundColor</Code>
                </td>
                <td>Thumb</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>focusThumbBorderColor</Code>
                </td>
                <td>Thumb:focus</td>
                <td>
                  <Code>color-blue-600</Code>
                </td>
                <td>#0095ff</td>
              </tr>
              <tr>
                <td>
                  <Code>uncheckedTrackBackgroundColor</Code>
                </td>
                <td>Track unchecked</td>
                <td>
                  <Code>color-grey-400</Code>
                </td>
                <td>#bfbfbf</td>
              </tr>
              <tr>
                <td>
                  <Code>checkedTrackBackgroundColor</Code>
                </td>
                <td>Track checked</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledUncheckedTrackBackgroundColor</Code>
                </td>
                <td>Track:disabled unchecked</td>
                <td>
                  <Code>color-grey-100</Code>
                </td>
                <td>#f2f2f2</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledCheckedTrackBackgroundColor</Code>
                </td>
                <td>Track:disabled checked</td>
                <td>
                  <Code>color-purple-100</Code>
                </td>
                <td>#f2eafa</td>
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
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>labelFontFamily</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>Open sans</td>
              </tr>
              <tr>
                <td>
                  <Code>labelFontSize</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>labelFontWeight</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>labelFontStyle</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
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
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>thumbHeight</Code>
                </td>
                <td>Thumb</td>
                <td>-</td>
                <td>24px</td>
              </tr>
              <tr>
                <td>
                  <Code>thumbWidth</Code>
                </td>
                <td>Thumb</td>
                <td>-</td>
                <td>24px</td>
              </tr>
              <tr>
                <td>
                  <Code>trackHeight</Code>
                </td>
                <td>Track</td>
                <td>-</td>
                <td>12px</td>
              </tr>
              <tr>
                <td>
                  <Code>trackWidth</Code>
                </td>
                <td>Track</td>
                <td>-</td>
                <td>60px</td>
              </tr>
              <tr>
                <td>
                  <Code>focusHeight</Code>
                </td>
                <td>Focus indicator</td>
                <td>-</td>
                <td>40px</td>
              </tr>
              <tr>
                <td>
                  <Code>focusWidth</Code>
                </td>
                <td>Focus indicator</td>
                <td>-</td>
                <td>40px</td>
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
                <td>Track</td>
                <td>
                  <Code>border-width-0</Code>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Track</td>
                <td>
                  <Code>border-style-none</Code>
                </td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Track</td>
                <td>
                  <Code>border-radius-full</Code>
                </td>
                <td>9999px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-width</Code>
                </td>
                <td>Thumb</td>
                <td>
                  <Code>border-width-0</Code>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Thumb</td>
                <td>
                  <Code>border-style-none</Code>
                </td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Thumb</td>
                <td>
                  <Code>border-radius-full</Code>
                </td>
                <td>9999px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-width</Code>
                </td>
                <td>Focus border</td>
                <td>
                  <Code>border-width-2</Code>
                </td>
                <td>2px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Focus border</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Focus border</td>
                <td>
                  <Code>border-radius-full</Code>
                </td>
                <td>9999px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Margin",
        content: (
          <>
            {" "}
            <DxcTable>
              <thead>
                <tr>
                  <th>margin</th>
                  <th>value</th>
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
                    <Code>medium</Code> default
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
              And also apply different values to each side of the component:{" "}
              <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code> and{" "}
              <Code>right</Code>.
            </DxcText>
          </>
        ),
      },
      {
        title: "Spacing",
        content: (
          <>
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
                    <Code>padding</Code>
                  </td>
                  <td>Thumb</td>
                  <td>
                    <Code>spacing-8</Code>
                  </td>
                  <td>0.5rem / 8px</td>
                </tr>
                <tr>
                  <td>
                    <Code>margin-left/right</Code>*
                  </td>
                  <td>Switch</td>
                  <td>
                    <Code>spacing-8</Code>
                  </td>
                  <td>0.5rem / 8px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding</Code>
                  </td>
                  <td>Track</td>
                  <td>
                    <Code>spacing-12</Code>
                  </td>
                  <td>0.75rem / 12px</td>
                </tr>
              </tbody>
            </DxcTable>
            <DxcText as="p">
              <em>*Depending on the position of the label</em>
            </DxcText>
          </>
        ),
      },
    ],
  },
];

const SwitchSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Specifications"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/switch/specs/SwitchSpecsPage.tsx" />
    </DxcStack>
  );
};

export default SwitchSpecsPage;
