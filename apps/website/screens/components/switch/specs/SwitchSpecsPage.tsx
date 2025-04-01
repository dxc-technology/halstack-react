import { DxcTable, DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import specsImage from "./images/switch_specs.png";
import stackingImage from "./images/switch_stacking.png";
import statesImage from "./images/switch_states.png";
import anatomyImage from "./images/switch_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
        <Figure caption="Switch design specifications">
          <Image src={specsImage} alt="Switch design specifications" />
        </Figure>
        <Figure caption="Switch stacking design specifications">
          <Image src={stackingImage} alt="Switch stacking design specifications" />
        </Figure>
      </>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcParagraph>
          Five different states are defined in the life cycle of the component: <strong>unselected enabled</strong>,{" "}
          <strong>unselected focus</strong>, <strong>unselected disabled</strong>, <strong>selected enabled</strong>,{" "}
          <strong>selected focus</strong> and <strong>selected disabled</strong>.
        </DxcParagraph>
        <Figure caption="Switch states">
          <Image src={statesImage} alt="Switch states" />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomyImage} alt="Switch anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Label</DxcBulletedList.Item>
          <DxcBulletedList.Item>Thumb</DxcBulletedList.Item>
          <DxcBulletedList.Item>Track</DxcBulletedList.Item>
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
                  <Code>checkedThumbBackgroundColor</Code>
                </td>
                <td>Thumb checked</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
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
                  <Code>uncheckedThumbBackgroundColor</Code>
                </td>
                <td>Thumb unchecked</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
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
                  <Code>disabledCheckedThumbBackgroundColor</Code>
                </td>
                <td>Thumb:disabled checked</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
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
                  <Code>disabledUncheckedThumbBackgroundColor</Code>
                </td>
                <td>Thumb:disabled unchecked</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>thumbFocusColor</Code>
                </td>
                <td>Thumb:focus</td>
                <td>
                  <Code>color-blue-600</Code>
                </td>
                <td>#0095ff</td>
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
                <td>36px</td>
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
                <td>0rem / 0px</td>
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
                <td>0rem / 0px</td>
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
              And also apply different values to each side of the component: <Code>top</Code>, <Code>bottom</Code>,{" "}
              <Code>left</Code> and <Code>right</Code>.
            </DxcParagraph>
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
            <DxcParagraph>
              <em>* Depending on the position of the label</em>
            </DxcParagraph>
          </>
        ),
      },
    ],
  },
];

const SwitchSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/switch/specs/SwitchSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default SwitchSpecsPage;
