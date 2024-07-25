import { DxcLink, DxcBulletedList, DxcFlex, DxcTable, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import buttonSpecsImage from "./images/button_specs.png";
import buttonStatesImage from "./images/button_states.png";
import buttonAnatomyImage from "./images/button_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Button design specifications">
        <Image src={buttonSpecsImage} alt="Button design specifications" />
      </Figure>
    ),
  },
  {
    title: "States and semantics",
    content: (
      <>
        <DxcParagraph>
          The states are the different behaviors of the button component based on the interaction of the user. For the
          desktop version, we contemplate five different states by which can pass.
        </DxcParagraph>
        <DxcParagraph>
          States: <strong>enabled</strong>, <strong>hover</strong>, <strong>focus</strong>, <strong>active</strong> and{" "}
          <strong>disabled</strong>.
        </DxcParagraph>
        <DxcParagraph>
          Semantics: <strong>default</strong>, <strong>error</strong>, <strong>warning</strong>,{" "}
          <strong>success</strong> and <strong>info</strong>.
        </DxcParagraph>
        <Figure caption="Button states and semantics">
          <Image src={buttonStatesImage} alt="Button states and semantics" />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={buttonAnatomyImage} alt="Button anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Container</DxcBulletedList.Item>
          <DxcBulletedList.Item>Icon</DxcBulletedList.Item>
          <DxcBulletedList.Item>Label</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Design tokens",
    subSections: [
      {
        title: "General",
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
                      <Code>focusBorderColor</Code>
                    </td>
                    <td>Container border:focus</td>
                    <td>
                      <Code>color-blue-500</Code>
                    </td>
                    <td>#33aaff</td>
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
                      <Code>paddingSmallTop</Code>
                    </td>
                    <td>Container (small height)</td>
                    <td>
                      <Code>spacing-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingSmallLeft</Code>
                    </td>
                    <td>Container (small height)</td>
                    <td>
                      <Code>spacing-08</Code>
                    </td>
                    <td>0.5rem / 8px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingSmallBottom</Code>
                    </td>
                    <td>Container (small height)</td>
                    <td>
                      <Code>spacing-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingSmallRight</Code>
                    </td>
                    <td>Container (small height)</td>
                    <td>
                      <Code>spacing-08</Code>
                    </td>
                    <td>0.5rem / 8px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingSmallOnlyIconTop</Code>
                    </td>
                    <td>Container (small height)</td>
                    <td>
                      <Code>spacing-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingSmallOnlyIconLeft</Code>
                    </td>
                    <td>Container (small height)</td>
                    <td>
                      <Code>spacing-04</Code>
                    </td>
                    <td>0.25rem / 4px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingSmallOnlyIconBottom</Code>
                    </td>
                    <td>Container (small height)</td>
                    <td>
                      <Code>spacing-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingSmallOnlyIconRight</Code>
                    </td>
                    <td>Container (small height)</td>
                    <td>
                      <Code>spacing-04</Code>
                    </td>
                    <td>0.25rem / 4px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingMediumTop</Code>
                    </td>
                    <td>Container (medium height)</td>
                    <td>
                      <Code>spacing-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingMediumLeft</Code>
                    </td>
                    <td>Container (medium height)</td>
                    <td>
                      <Code>spacing-08</Code>
                    </td>
                    <td>0.5rem / 8px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingMediumBottom</Code>
                    </td>
                    <td>Container (medium height)</td>
                    <td>
                      <Code>spacing-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingMediumRight</Code>
                    </td>
                    <td>Container (medium height)</td>
                    <td>
                      <Code>spacing-08</Code>
                    </td>
                    <td>0.5rem / 8px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingMediumOnlyIconTop</Code>
                    </td>
                    <td>Container (medium height)</td>
                    <td>
                      <Code>spacing-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingMediumOnlyIconLeft</Code>
                    </td>
                    <td>Container (medium height)</td>
                    <td>
                      <Code>spacing-08</Code>
                    </td>
                    <td>0.5rem / 8px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingMediumOnlyIconBottom</Code>
                    </td>
                    <td>Container (medium height)</td>
                    <td>
                      <Code>spacing-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingMediumOnlyIconRight</Code>
                    </td>
                    <td>Container (medium height)</td>
                    <td>
                      <Code>spacing-08</Code>
                    </td>
                    <td>0.5rem / 8px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingLargeTop</Code>
                    </td>
                    <td>Container (large height)</td>
                    <td>
                      <Code>spacing-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingLargeLeft</Code>
                    </td>
                    <td>Container (large height)</td>
                    <td>
                      <Code>spacing-16</Code>
                    </td>
                    <td>1rem / 16px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingLargeBottom</Code>
                    </td>
                    <td>Container (large height)</td>
                    <td>
                      <Code>spacing-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingLargeRight</Code>
                    </td>
                    <td>Container (large height)</td>
                    <td>
                      <Code>spacing-16</Code>
                    </td>
                    <td>1rem / 16px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingLargeOnlyIconTop</Code>
                    </td>
                    <td>Container (large height)</td>
                    <td>
                      <Code>spacing-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingLargeOnlyIconLeft</Code>
                    </td>
                    <td>Container (large height)</td>
                    <td>
                      <Code>spacing-08</Code>
                    </td>
                    <td>0.5rem / 8px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingLargeOnlyIconBottom</Code>
                    </td>
                    <td>Container (large height)</td>
                    <td>
                      <Code>spacing-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>paddingLargeOnlyIconRight</Code>
                    </td>
                    <td>Container (large height)</td>
                    <td>
                      <Code>spacing-08</Code>
                    </td>
                    <td>0.5rem / 8px</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
          {
            title: "Width",
            content: (
              <>
                <DxcParagraph>
                  The component <Code>width</Code> can adopt the following values:
                </DxcParagraph>
                <DxcTable>
                  <thead>
                    <tr>
                      <th>Width</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Code>small</Code>
                      </td>
                      <td>60px</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>medium</Code>
                      </td>
                      <td>240px</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>large</Code>
                      </td>
                      <td>480px</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>fillParent</Code>
                      </td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>fitContent</Code>
                      </td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </DxcTable>
                <DxcParagraph>
                  The component <Code>height</Code> is fixed:
                </DxcParagraph>
                <DxcTable>
                  <thead>
                    <tr>
                      <th>Height</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Code>min-height</Code>
                      </td>
                      <td>40px</td>
                    </tr>
                  </tbody>
                </DxcTable>
              </>
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
                  These values can be applied independently to each side of the component: <Code>top</Code>,{" "}
                  <Code>bottom</Code>, <Code>left</Code>,<Code>right</Code>.
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
                    <th>Component token</th>
                    <th>Property</th>
                    <th>Core token</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>labelFontLineHeight</Code>
                    </td>
                    <td>line-height</td>
                    <td>
                      <Code>font-leading-normal</Code>
                    </td>
                    <td>1.5em</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>labelLetterSpacing</Code>
                    </td>
                    <td>letter-spacing</td>
                    <td>
                      <Code>font-spacing-wide-01</Code>
                    </td>
                    <td>0.025em</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
        ],
      },
      {
        title: "Primary",
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
                      <Code>primaryDefaultBackgroundColor</Code>
                    </td>
                    <td>Button container (default)</td>
                    <td>
                      <Code>color-purple-700</Code>
                    </td>
                    <td>#5f249f</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryErrorBackgroundColor</Code>
                    </td>
                    <td>Button container (error)</td>
                    <td>
                      <Code>color-red-700</Code>
                    </td>
                    <td>#d0011b</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryWarningBackgroundColor</Code>
                    </td>
                    <td>Button container (warning)</td>
                    <td>
                      <Code>color-orange-700</Code>
                    </td>
                    <td>#c26c0a</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primarySuccessBackgroundColor</Code>
                    </td>
                    <td>Button container (success)</td>
                    <td>
                      <Code>color-green-700</Code>
                    </td>
                    <td>#24a148</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryInfoBackgroundColor</Code>
                    </td>
                    <td>Button container (info)</td>
                    <td>
                      <Code>color-blue-700</Code>
                    </td>
                    <td>#0086e6</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryDefaultFontColor</Code>
                    </td>
                    <td>Label (default)</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryErrorFontColor</Code>
                    </td>
                    <td>Label (error)</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryWarningFontColor</Code>
                    </td>
                    <td>Label (warning)</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primarySuccessFontColor</Code>
                    </td>
                    <td>Label (success)</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryInfoFontColor</Code>
                    </td>
                    <td>Label (info)</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryHoverDefaultBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (default)</td>
                    <td>
                      <Code>color-purple-800</Code>
                    </td>
                    <td>#4b1c7d</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryHoverErrorBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (error)</td>
                    <td>
                      <Code>color-red-800</Code>
                    </td>
                    <td>#980115</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryHoverWarningBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (warning)</td>
                    <td>
                      <Code>color-orange-800</Code>
                    </td>
                    <td>#915108</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryHoverSuccessBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (success)</td>
                    <td>
                      <Code>color-green-800</Code>
                    </td>
                    <td>#1c7d38</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryHoverInfoBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (info)</td>
                    <td>
                      <Code>color-blue-800</Code>
                    </td>
                    <td>#0067b3</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryActiveDefaultBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (default)</td>
                    <td>
                      <Code>color-purple-900</Code>
                    </td>
                    <td>#321353</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryActiveErrorBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (error)</td>
                    <td>
                      <Code>color-red-900</Code>
                    </td>
                    <td>#65010e</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryActiveWarningBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (warning)</td>
                    <td>
                      <Code>color-orange-900</Code>
                    </td>
                    <td>#613605</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryActiveSuccessBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (success)</td>
                    <td>
                      <Code>color-green-900</Code>
                    </td>
                    <td>#135325</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryActiveInfoBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (info)</td>
                    <td>
                      <Code>color-blue-900</Code>
                    </td>
                    <td>#003c66</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryDisabledDefaultBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (default)</td>
                    <td>
                      <Code>color-purple-100</Code>
                    </td>
                    <td>#f2eafa</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryDisabledErrorBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (error)</td>
                    <td>
                      <Code>color-red-100</Code>
                    </td>
                    <td>#ffe6e9</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryDisabledWarningBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (warning)</td>
                    <td>
                      <Code>color-orange-100</Code>
                    </td>
                    <td>#fef3e7</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryDisabledSuccessBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (success)</td>
                    <td>
                      <Code>color-green-100</Code>
                    </td>
                    <td>#eafaef</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryDisabledInfoBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (info)</td>
                    <td>
                      <Code>color-blue-100</Code>
                    </td>
                    <td>#e6f4ff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryDisabledDefaultFontColor</Code>
                    </td>
                    <td>Label:disabled (default)</td>
                    <td>
                      <Code>color-purple-300</Code>
                    </td>
                    <td>#cbacec</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryDisabledErrorFontColor</Code>
                    </td>
                    <td>Label:disabled (error)</td>
                    <td>
                      <Code>color-red-300</Code>
                    </td>
                    <td>#fe9aa7</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryDisabledWarningFontColor</Code>
                    </td>
                    <td>Label:disabled (warning)</td>
                    <td>
                      <Code>color-orange-300</Code>
                    </td>
                    <td>#facf9e</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryDisabledSuccessFontColor</Code>
                    </td>
                    <td>Label:disabled (success)</td>
                    <td>
                      <Code>color-green-300</Code>
                    </td>
                    <td>#acecbe</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryDisabledInfoFontColor</Code>
                    </td>
                    <td>Label:disabled (info)</td>
                    <td>
                      <Code>color-blue-300</Code>
                    </td>
                    <td>#99d5ff</td>
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
                      <Code>primaryBorderThickness</Code>
                    </td>
                    <td>Container</td>
                    <td>
                      <Code>border-width-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryBorderStyle</Code>
                    </td>
                    <td>Container</td>
                    <td>
                      <Code>border-style-none</Code>
                    </td>
                    <td>none</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryBorderRadius</Code>
                    </td>
                    <td>Container</td>
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
                      <Code>primaryFontFamily</Code>
                    </td>
                    <td>Label</td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primarySmallFontSize</Code>
                    </td>
                    <td>Label (small height)</td>
                    <td>
                      <Code>font-scale-02</Code>
                    </td>
                    <td>0.875 rem / 14px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryMediumFontSize</Code>
                    </td>
                    <td>Label (medium height)</td>
                    <td>
                      <Code>font-scale-02</Code>
                    </td>
                    <td>0.875 rem / 14px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryLargeFontSize</Code>
                    </td>
                    <td>Label (large height)</td>
                    <td>
                      <Code>font-scale-03</Code>
                    </td>
                    <td>1 rem / 16px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>primaryFontWeight</Code>
                    </td>
                    <td>Label</td>
                    <td>
                      <Code>font-semibold</Code>
                    </td>
                    <td>600</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
        ],
      },
      {
        title: "Secondary",
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
                      <Code>secondaryDefaultBackgroundColor</Code>
                    </td>
                    <td>Container fill (default)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryErrorBackgroundColor</Code>
                    </td>
                    <td>Container fill (error)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryWarningBackgroundColor</Code>
                    </td>
                    <td>Container fill (warning)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondarySuccessBackgroundColor</Code>
                    </td>
                    <td>Container fill (success)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryInfoBackgroundColor</Code>
                    </td>
                    <td>Container fill (info)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDefaultFontColor</Code>
                    </td>
                    <td>Label (default)</td>
                    <td>
                      <Code>color-purple-700</Code>
                    </td>
                    <td>#5f249f</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryErrorFontColor</Code>
                    </td>
                    <td>Label (error)</td>
                    <td>
                      <Code>color-red-700</Code>
                    </td>
                    <td>#d0011b</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryWarningFontColor</Code>
                    </td>
                    <td>Label (warning)</td>
                    <td>
                      <Code>color-orange-700</Code>
                    </td>
                    <td>#c26c0a</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondarySuccessFontColor</Code>
                    </td>
                    <td>Label (success)</td>
                    <td>
                      <Code>color-green-700</Code>
                    </td>
                    <td>#24a148</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryInfoFontColor</Code>
                    </td>
                    <td>Label (info)</td>
                    <td>
                      <Code>color-blue-700</Code>
                    </td>
                    <td>#0086e6</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDefaultBorderColor</Code>
                    </td>
                    <td>Container border (default)</td>
                    <td>
                      <Code>color-purple-700</Code>
                    </td>
                    <td>#5f249f</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryErrorBorderColor</Code>
                    </td>
                    <td>Container border (error)</td>
                    <td>
                      <Code>color-red-700</Code>
                    </td>
                    <td>#d0011b</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryWarningBorderColor</Code>
                    </td>
                    <td>Container border (warning)</td>
                    <td>
                      <Code>color-orange-700</Code>
                    </td>
                    <td>#c26c0a</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondarySuccessBorderColor</Code>
                    </td>
                    <td>Container border (success)</td>
                    <td>
                      <Code>color-green-700</Code>
                    </td>
                    <td>#24a148</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryInfoBorderColor</Code>
                    </td>
                    <td>Container border (info)</td>
                    <td>
                      <Code>color-blue-700</Code>
                    </td>
                    <td>#0086e6</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryHoverDefaultBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (default)</td>
                    <td>
                      <Code>color-purple-700</Code>
                    </td>
                    <td>#5f249f</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryHoverErrorBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (error)</td>
                    <td>
                      <Code>color-red-700</Code>
                    </td>
                    <td>#d0011b</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryHoverWarningBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (warning)</td>
                    <td>
                      <Code>color-orange-700</Code>
                    </td>
                    <td>#c26c0a</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryHoverSuccessBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (success)</td>
                    <td>
                      <Code>color-green-700</Code>
                    </td>
                    <td>#24a148</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryHoverInfoBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (info)</td>
                    <td>
                      <Code>color-blue-700</Code>
                    </td>
                    <td>#0086e6</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryHoverDefaultFontColor</Code>
                    </td>
                    <td>Label:hover (default)</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryHoverErrorFontColor</Code>
                    </td>
                    <td>Label:hover (error)</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryHoverWarningFontColor</Code>
                    </td>
                    <td>Label:hover (warning)</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryHoverSuccessFontColor</Code>
                    </td>
                    <td>Label:hover (success)</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryHoverInfoFontColor</Code>
                    </td>
                    <td>Label:hover (info)</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryActiveDefaultBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (default)</td>
                    <td>
                      <Code>color-purple-800</Code>
                    </td>
                    <td>#4b1c7d</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryActiveErrorBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (error)</td>
                    <td>
                      <Code>color-red-800</Code>
                    </td>
                    <td>#980115</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryActiveWarningBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (warning)</td>
                    <td>
                      <Code>color-orange-800</Code>
                    </td>
                    <td>#915108</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryActiveSuccessBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (success)</td>
                    <td>
                      <Code>color-green-800</Code>
                    </td>
                    <td>#1c7d38</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryActiveInfoBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (info)</td>
                    <td>
                      <Code>color-blue-800</Code>
                    </td>
                    <td>#0067b3</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledDefaultBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (default)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledErrorBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (error)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledWarningBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (warning)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledSuccessBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (success)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledInfoBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (info)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledDefaultFontColor</Code>
                    </td>
                    <td>Label:disabled (default)</td>
                    <td>
                      <Code>color-purple-300</Code>
                    </td>
                    <td>#cbacec</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledErrorFontColor</Code>
                    </td>
                    <td>Label:disabled (error)</td>
                    <td>
                      <Code>color-red-300</Code>
                    </td>
                    <td>#fe9aa7</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledWarningFontColor</Code>
                    </td>
                    <td>Label:disabled (warning)</td>
                    <td>
                      <Code>color-orange-300</Code>
                    </td>
                    <td>#facf9e</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledSuccessFontColor</Code>
                    </td>
                    <td>Label:disabled (success)</td>
                    <td>
                      <Code>color-green-300</Code>
                    </td>
                    <td>#acecbe</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledInfoFontColor</Code>
                    </td>
                    <td>Label:disabled (info)</td>
                    <td>
                      <Code>color-blue-300</Code>
                    </td>
                    <td>#99d5ff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledDefaultBorderColor</Code>
                    </td>
                    <td>Container border:disabled (default)</td>
                    <td>
                      <Code>color-purple-300</Code>
                    </td>
                    <td>#cbacec</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledErrorBorderColor</Code>
                    </td>
                    <td>Container border:disabled (error)</td>
                    <td>
                      <Code>color-red-300</Code>
                    </td>
                    <td>#fe9aa7</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledWarningBorderColor</Code>
                    </td>
                    <td>Container border:disabled (warning)</td>
                    <td>
                      <Code>color-orange-300</Code>
                    </td>
                    <td>#facf9e</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledSuccessBorderColor</Code>
                    </td>
                    <td>Container border:disabled (success)</td>
                    <td>
                      <Code>color-green-300</Code>
                    </td>
                    <td>#acecbe</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryDisabledInfoBorderColor</Code>
                    </td>
                    <td>Container border:disabled (info)</td>
                    <td>
                      <Code>color-blue-300</Code>
                    </td>
                    <td>#99d5ff</td>
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
                      <Code>secondaryBorderThickness</Code>
                    </td>
                    <td>Container</td>
                    <td>
                      <Code>border-width-1 </Code>
                    </td>
                    <td>1px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryBorderStyle</Code>
                    </td>
                    <td>Container</td>
                    <td>
                      <Code>border-style-solid</Code>
                    </td>
                    <td>solid</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryBorderRadius</Code>
                    </td>
                    <td>Container</td>
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
                      <Code>secondaryFontFamily</Code>
                    </td>
                    <td>Label</td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondarySmallFontSize</Code>
                    </td>
                    <td>Label (small height)</td>
                    <td>
                      <Code>font-scale-02</Code>
                    </td>
                    <td>0.875rem / 14px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryMediumFontSize</Code>
                    </td>
                    <td>Label (small height)</td>
                    <td>
                      <Code>font-scale-02</Code>
                    </td>
                    <td>0.875rem / 14px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryLargeFontSize</Code>
                    </td>
                    <td>Label</td>
                    <td>
                      <Code>font-scale-03</Code>
                    </td>
                    <td>1rem / 16px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>secondaryFontWeight</Code>
                    </td>
                    <td>Label</td>
                    <td>
                      <Code>font-semibold</Code>
                    </td>
                    <td>600</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
        ],
      },
      {
        title: "Tertiary",
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
                      <Code>tertiaryDefaultBackgroundColor</Code>
                    </td>
                    <td>Container fill (default)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryErrorBackgroundColor</Code>
                    </td>
                    <td>Container fill (error)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryWarningBackgroundColor</Code>
                    </td>
                    <td>Container fill (warning)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiarySuccessBackgroundColor</Code>
                    </td>
                    <td>Container fill (success)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryInfoBackgroundColor</Code>
                    </td>
                    <td>Container fill (info)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryDefaultFontColor</Code>
                    </td>
                    <td>Label (default)</td>
                    <td>
                      <Code>color-purple-700</Code>
                    </td>
                    <td>#5f249f</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryErrorFontColor</Code>
                    </td>
                    <td>Label (error)</td>
                    <td>
                      <Code>color-red-700</Code>
                    </td>
                    <td>#d0011b</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryWarningFontColor</Code>
                    </td>
                    <td>Label (warning)</td>
                    <td>
                      <Code>color-orange-700</Code>
                    </td>
                    <td>#c26c0a</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiarySuccessFontColor</Code>
                    </td>
                    <td>Label (success)</td>
                    <td>
                      <Code>color-green-700</Code>
                    </td>
                    <td>#24a148</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryInfoFontColor</Code>
                    </td>
                    <td>Label (info)</td>
                    <td>
                      <Code>color-blue-700</Code>
                    </td>
                    <td>#0086e6</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryHoverDefaultBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (default)</td>
                    <td>
                      <Code>color-purple-100</Code>
                    </td>
                    <td>#f2eafa</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryHoverErrorBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (error)</td>
                    <td>
                      <Code>color-red-100</Code>
                    </td>
                    <td>#ffe6e9</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryHoverWarningBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (warning)</td>
                    <td>
                      <Code>color-orange-100</Code>
                    </td>
                    <td>#fef3e7</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryHoverSuccessBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (Success)</td>
                    <td>
                      <Code>color-green-100</Code>
                    </td>
                    <td>#eafaef</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryHoverInfoBackgroundColor</Code>
                    </td>
                    <td>Container fill:hover (info)</td>
                    <td>
                      <Code>color-blue-100</Code>
                    </td>
                    <td>#e6f4ff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryActiveDefaultBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (default)</td>
                    <td>
                      <Code>color-purple-200</Code>
                    </td>
                    <td>#e5d5f6</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryActiveErrorBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (error)</td>
                    <td>
                      <Code>color-red-200</Code>
                    </td>
                    <td>#ffccd3</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryActiveWarningBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (warning)</td>
                    <td>
                      <Code>color-orange-200</Code>
                    </td>
                    <td>#fce7cf</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryActiveSuccessBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (success)</td>
                    <td>
                      <Code>color-green-200</Code>
                    </td>
                    <td>#d5f6df</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryActiveInfoBackgroundColor</Code>
                    </td>
                    <td>Container fill:active (info)</td>
                    <td>
                      <Code>color-blue-200</Code>
                    </td>
                    <td>#cceaff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryDisabledDefaultBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (default)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryDisabledErrorBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (error)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryDisabledWarningBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (warning)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryDisabledSuccessBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (success)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryDisabledInfoBackgroundColor</Code>
                    </td>
                    <td>Container fill:disabled (info)</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryDisabledDefaultFontColor</Code>
                    </td>
                    <td>Label:disabled (default)</td>
                    <td>
                      <Code>color-purple-300</Code>
                    </td>
                    <td>#cbacec</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryDisabledErrorFontColor</Code>
                    </td>
                    <td>Label:disabled (error)</td>
                    <td>
                      <Code>color-red-300</Code>
                    </td>
                    <td>#fe9aa7</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryDisabledWarningFontColor</Code>
                    </td>
                    <td>Label:disabled (warning)</td>
                    <td>
                      <Code>color-orange-300</Code>
                    </td>
                    <td>#facf9e</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryDisabledSuccessFontColor</Code>
                    </td>
                    <td>Label:disabled (success)</td>
                    <td>
                      <Code>color-green-300</Code>
                    </td>
                    <td>#acecbe</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryDisabledInfoFontColor</Code>
                    </td>
                    <td>Label:disabled (info)</td>
                    <td>
                      <Code>color-blue-300</Code>
                    </td>
                    <td>#99d5ff</td>
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
                      <Code>tertiaryBorderThickness</Code>
                    </td>
                    <td>Container</td>
                    <td>
                      <Code>border-width-0</Code>
                    </td>
                    <td>0rem / 0px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryBorderStyle</Code>
                    </td>
                    <td>Container</td>
                    <td>
                      <Code>border-style-none</Code>
                    </td>
                    <td>none</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryBorderRadius</Code>
                    </td>
                    <td>Container</td>
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
                      <Code>tertiaryFontFamily</Code>
                    </td>
                    <td>Label</td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiarySmallFontSize</Code>
                    </td>
                    <td>Label (small height)</td>
                    <td>
                      <Code>font-scale-02</Code>
                    </td>
                    <td>0.875rem / 14px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryMediumFontSize</Code>
                    </td>
                    <td>Label (medium height)</td>
                    <td>
                      <Code>font-scale-03</Code>
                    </td>
                    <td>0.875rem / 14px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryLargeFontSize</Code>
                    </td>
                    <td>Label (large height)</td>
                    <td>
                      <Code>font-scale-03</Code>
                    </td>
                    <td>1 rem / 16px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>tertiaryFontWeight</Code>
                    </td>
                    <td>Label</td>
                    <td>
                      <Code>font-semibold</Code>
                    </td>
                    <td>600</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Accessibility",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Understanding WCAG 2.2 -{" "}
          <DxcLink href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible" newWindow>
            2.4.7: Focus Visible
          </DxcLink>
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Understanding WCAG 2.2 -{" "}
          <DxcLink href="https://www.w3.org/WAI/WCAG22/Understanding/on-input" newWindow>
            3.2.2: On Input
          </DxcLink>
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          WAI-ARIA Authoring Practices Guide (APG) -{" "}
          <DxcLink href="https://www.w3.org/WAI/ARIA/apg/patterns/button/" newWindow>
            Button Pattern
          </DxcLink>
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const ButtonSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/button/specs/ButtonSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default ButtonSpecsPage;
