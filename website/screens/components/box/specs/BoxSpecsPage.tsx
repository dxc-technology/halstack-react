import { DxcStack, DxcTable, DxcText } from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import Code from "../../../common/Code";
import Figure from "../../../common/Figure";
import Image from "@/common/Image";
import boxSpecs from "./images/box_specs.png";
import DocFooter from "../../../common/DocFooter";

const BoxSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Component design specifications">
          <Image src={boxSpecs} alt="Component design specifications" />
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
              <td>#transparent</td>
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
              <td>-</td>
              <td>#00000033</td>
            </tr>
            <tr>
              <td>
                <Code>twoShadowDepthShadowColor</Code>
              </td>
              <td>Shadow</td>
              <td>-</td>
              <td>#00000033</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Border</HeadingLink>
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
              <td>0</td>
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
              <td>none</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Shadow</HeadingLink>
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
              <td>none</td>
            </tr>
            <tr>
              <td>
                <Code>noneShadowDepthShadowOffsetY</Code>
              </td>
              <td>Container shadow</td>
              <td>-</td>
              <td>none</td>
            </tr>
            <tr>
              <td>
                <Code>noneShadowDepthShadowBlur</Code>
              </td>
              <td>Container shadow</td>
              <td>-</td>
              <td>none</td>
            </tr>
            <tr>
              <td>
                <Code>noneShadowDepthShadowSpread</Code>
              </td>
              <td>Container shadow</td>
              <td>-</td>
              <td>none</td>
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
        <HeadingLink level={4}>Width</HeadingLink>
        <DxcText as="p">
          In the cases of <Code>fillParent</Code> and <Code>fillContent</Code>{" "}
          the box is going to behave as a fluid container occupying the space
          the parent leaves for its children or adapting its size to the
          children it the box has. Instead of using a fluid approach, you can
          set a fixed size, choosing between <Code>small</Code>,{" "}
          <Code>medium</Code> and <Code>large</Code> properties.
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
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
        <HeadingLink level={4}>Margin</HeadingLink>
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
          And also apply different values to each side of the component:{" "}
          <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code> and{" "}
          <Code>right</Code>.
        </DxcText>
        <HeadingLink level={4}>Padding</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>padding</th>
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
          And also apply different values to each side of the component:{" "}
          <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code> and{" "}
          <Code>right</Code>.
        </DxcText>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/box/specs/BoxSpecsPage.tsx" />
    </DxcStack>
  );
};

export default BoxSpecsPage;
