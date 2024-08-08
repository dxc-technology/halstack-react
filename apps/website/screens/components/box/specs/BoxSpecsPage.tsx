import { DxcFlex, DxcTable, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import DocFooter from "@/common/DocFooter";
import boxSpecs from "./images/box_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Box design specifications">
        <Image src={boxSpecs} alt="Box design specifications" />
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
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>backgroundColor</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>borderColor</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>color-transparent</Code>
                </td>
                <td>transparent</td>
              </tr>
              <tr>
                <td>
                  <Code>noneShadowDepthShadowColor</Code>
                </td>
                <td>Shadow</td>
                <td>
                  <Code>color-transparent</Code>
                </td>
                <td>transparent</td>
              </tr>
              <tr>
                <td>
                  <Code>oneShadowDepthShadowColor</Code>
                </td>
                <td>Shadow</td>
                <td>
                  <Code>color-grey-300-a</Code>
                </td>
                <td>#00000033</td>
              </tr>
              <tr>
                <td>
                  <Code>twoShadowDepthShadowColor</Code>
                </td>
                <td>Shadow</td>
                <td>
                  <Code>color-grey-300-a</Code>
                </td>
                <td>#00000033</td>
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
                  <Code>borderThickness</Code>
                </td>
                <td>Container border</td>
                <td>
                  <Code>border-width-0</Code>
                </td>
                <td>0rem / 0px</td>
              </tr>
              <tr>
                <td>
                  <Code>borderRadius</Code>
                </td>
                <td>Container border</td>
                <td>
                  <Code>border-radius-medium</Code>
                </td>
                <td>0.25rem / 4px</td>
              </tr>
              <tr>
                <td>
                  <Code>borderStyle</Code>
                </td>
                <td>Container border</td>
                <td>
                  <Code>border-style-none</Code>
                </td>
                <td>-</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Shadow",
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
                  <Code>noneShadowDepthShadowOffsetX</Code>
                </td>
                <td>Container shadow</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <Code>noneShadowDepthShadowOffsetY</Code>
                </td>
                <td>Container shadow</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <Code>noneShadowDepthShadowBlur</Code>
                </td>
                <td>Container shadow</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <Code>noneShadowDepthShadowSpread</Code>
                </td>
                <td>Container shadow</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <Code>oneShadowDepthShadowOffsetX</Code>
                </td>
                <td>Container shadow</td>
                <td>-</td>
                <td>0x</td>
              </tr>
              <tr>
                <td>
                  <Code>oneShadowDepthShadowOffsetY</Code>
                </td>
                <td>Container shadow</td>
                <td>-</td>
                <td>3px</td>
              </tr>
              <tr>
                <td>
                  <Code>oneShadowDepthShadowBlur</Code>
                </td>
                <td>Container shadow</td>
                <td>-</td>
                <td>6px</td>
              </tr>
              <tr>
                <td>
                  <Code>oneShadowDepthShadowSpread</Code>
                </td>
                <td>Container shadow</td>
                <td>-</td>
                <td>0px</td>
              </tr>
              <tr>
                <td>
                  <Code>twoShadowDepthShadowOffsetX</Code>
                </td>
                <td>Container shadow</td>
                <td>-</td>
                <td>0x</td>
              </tr>
              <tr>
                <td>
                  <Code>twoShadowDepthShadowOffsetY</Code>
                </td>
                <td>Container shadow</td>
                <td>-</td>
                <td>3px</td>
              </tr>
              <tr>
                <td>
                  <Code>twoShadowDepthShadowBlur</Code>
                </td>
                <td>Container shadow</td>
                <td>-</td>
                <td>10px</td>
              </tr>
              <tr>
                <td>
                  <Code>twoShadowDepthShadowSpread</Code>
                </td>
                <td>Container shadow</td>
                <td>-</td>
                <td>0px</td>
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
              In the cases of <Code>fillParent</Code> and <Code>fillContent</Code> the box is going to behave as a fluid
              container occupying the space the parent leaves for its children or adapting its size to the children it
              the box has. Instead of using a fluid approach, you can set a fixed size, choosing between{" "}
              <Code>small</Code>, <Code>medium</Code> and <Code>large</Code> properties.
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
                  <td>48px</td>
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
                    <Code>fillContent</Code>
                  </td>
                  <td>-</td>
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
              And also apply different values to each side of the component: <Code>top</Code>, <Code>bottom</Code>,{" "}
              <Code>left</Code> and <Code>right</Code>.
            </DxcParagraph>
          </>
        ),
      },
    ],
  },
];

const BoxSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/box/specs/BoxSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default BoxSpecsPage;
