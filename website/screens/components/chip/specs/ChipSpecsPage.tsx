import {
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import Code from "@/common/Code";
import specsImage from "./images/chip_specs.png";
import statesImage from "./images/chip_states_container.png";
import prefixSuffixStatesImage from "./images/chip_states_action.png";
import anatomyImage from "./images/chip_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Component chip design specifications">
        <Image src={specsImage} alt="Component chip design specifications" />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcText as="p">
          The chip component container states are <strong>enabled</strong> and{" "}
          <strong>disabled</strong>:
        </DxcText>
        <Figure caption="Chip container states">
          <Image src={statesImage} alt="Chip container states" />
        </Figure>
        <DxcText as="p">
          The chip action item has the following states:{" "}
          <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>active</strong> and{" "}
          <strong>disabled</strong>:
        </DxcText>
        <Figure caption="Chip prefix and suffix states">
          <Image
            src={prefixSuffixStatesImage}
            alt="Chip prefix and suffix states"
          />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomyImage} alt="Component anatomy" />
        <DxcList type="number">
          <DxcText>Container</DxcText>
          <DxcText>
            Prefix <em>(Optional)</em>
          </DxcText>
          <DxcText>Label</DxcText>
          <DxcText>
            Suffix <em>(Optional)</em>
          </DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Color",
        subSections: [
          {
            title: "On-light",
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
                      <Code>backgroundColor</Code>
                    </td>
                    <td>Chip container</td>
                    <td>
                      <Code>color-grey-200</Code>
                    </td>
                    <td>#e6e6e6</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledBackgroundColor</Code>
                    </td>
                    <td>Chip container:disabled</td>
                    <td>
                      <Code>color-grey-100</Code>
                    </td>
                    <td>#f2f2f2</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>fontcolor</Code>
                    </td>
                    <td>Label</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledFontcolor</Code>
                    </td>
                    <td>Label:disabled</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>focusColor</Code>
                    </td>
                    <td>Focus outline</td>
                    <td>
                      <Code>color-blue-600</Code>
                    </td>
                    <td>#0095ff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>iconColor</Code>
                    </td>
                    <td>Icon</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledIconColor</Code>
                    </td>
                    <td>Icon:disabled</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
          {
            title: "On-dark",
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
                      <Code>backgroundColorOnDark</Code>
                    </td>
                    <td>Chip container</td>
                    <td>
                      <Code>color-grey-700</Code>
                    </td>
                    <td>#666666</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledBackgroundColorOnDark</Code>
                    </td>
                    <td>Chip container:disabled</td>
                    <td>
                      <Code>color-grey-800</Code>
                    </td>
                    <td>#4d4d4d</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>fontcolorOnDark</Code>
                    </td>
                    <td>Label</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledfontcolorOnDark</Code>
                    </td>
                    <td>Label:disabled</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>focusColorOnDark</Code>
                    </td>
                    <td>Focus outline</td>
                    <td>
                      <Code>color-blue-600</Code>
                    </td>
                    <td>#0095ff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>iconColorOnDark</Code>
                    </td>
                    <td>Icon</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>iconColorOnDark</Code>
                    </td>
                    <td>Icon:disabled</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
        ],
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
                  <Code>fontFamily</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>fontSize</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-scale-03</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>fontStyle</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>fontWeight</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Spacing",
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
                  <Code>labelMarginLeft</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>labelMarginRight</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>containerPaddingLeft</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>containerPaddingRight</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
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
                <td>Chip container</td>
                <td>
                  <Code>border-width-0</Code>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Chip container</td>
                <td>
                  <Code>border-style-none</Code>
                </td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Chip container</td>
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
                  <Code>border-radius-medium</Code>
                </td>
                <td>0.25rem / 4px</td>
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
                  <Code>iconSize</Code>
                </td>
                <td>Prefix/Suffix</td>
                <td>
                  <Code>size-icon-large</Code>
                </td>
                <td>24x24px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
];

const ChipSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Specifications"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/chip/specs/ChipSpecsPage.tsx" />
    </DxcStack>
  );
};

export default ChipSpecsPage;
