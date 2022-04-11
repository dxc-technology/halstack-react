import PageLayout from "../../common/PageLayout";
import {
  DxcHeading,
  DxcText,
  DxcStack,
  DxcTable,
} from "@dxc-technology/halstack-react";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import Code from "@/common/Code";
import HeadingLink from "../../common/HeadingLink";
import DocFooter from "../../common/DocFooter";
import spacingOverview from "./images/spacing_overview.png";
import spacingTypes from "./images/spacing_types.png";
import spacingPadding from "./images/spacing_padding.png";

const Spacing = () => {
  return (
    <PageLayout>
      <DxcStack gutter="xxxlarge">
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Spacing" weight="bold"></DxcHeading>
          <DxcText as="p">
            In the search of consistent alignment between the elements we
            provide a spacing scale based on a root values of 8px and 4px. The
            numbers 4 and 8 are easily multiplied, they provide flexible and
            consistent, yet distinct enough, steps between them.
          </DxcText>
          <Image src={spacingOverview} alt="Spacing overview" />
          <DxcText as="p">
            The spacing scale can be applied to <Code>margin</Code> or{" "}
            <Code>padding</Code> properties, as well as to both vertical and
            horizontal edges. The token takes the place of the values normally
            assigned to this properties.
          </DxcText>
        </DxcStack>
        <DxcStack gutter="large">
          <HeadingLink level={2}>Spacing methods</HeadingLink>
          <HeadingLink level={3}>Fixed spacing</HeadingLink>
          <DxcText as="p">
            Althouhg the fixed spacing scale is most commonly used for vertical
            spacing, it can also be applied for horizontal spacing, especially
            in the case of spacing inside components.
          </DxcText>
          <Figure
            caption={
              <>
                <DxcText as="p">
                  <strong>Left</strong>: Horizontal: Used for smaller, more
                  refined spacing needs, inside components.
                </DxcText>
                <DxcText as="p">
                  <strong>Right</strong>: Vertical: Used for positioning
                  components on a page.
                </DxcText>
              </>
            }
          >
            <Image src={spacingTypes} alt="Spacing methods" />
          </Figure>
          <HeadingLink level={3}>Fluid spacing</HeadingLink>
          <DxcText as="p">
            The use of percentages (e.g. 50% or 33%) is a recommended way to
            divide a page or to control a component <Code>max-width</Code> and{" "}
            <Code>min-width</Code>. Using percentages for top and bottom values
            of <Code>padding</Code> or <Code>margin</Code> inside of a component
            or element should be avoided.
          </DxcText>
        </DxcStack>
        <DxcStack gutter="large">
          <HeadingLink level={2}>Core spacing tokens</HeadingLink>
          <DxcText as="p">
            The core spacing scale is used to create space relationships for
            detail-level designs.
          </DxcText>
          <DxcTable>
            <thead>
              <tr>
                <th>Token</th>
                <th>rem</th>
                <th>px</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>spacing-0</Code>
                </td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-2</Code>
                </td>
                <td>0.125</td>
                <td>2</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-4</Code>
                </td>
                <td>0.25</td>
                <td>4</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5</td>
                <td>8</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-12</Code>
                </td>
                <td>0.75</td>
                <td>12</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1</td>
                <td>16</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5</td>
                <td>24</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-32</Code>
                </td>
                <td>2</td>
                <td>32</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-40</Code>
                </td>
                <td>2.5</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-48</Code>
                </td>
                <td>3</td>
                <td>48</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-56</Code>
                </td>
                <td>3.5</td>
                <td>56</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-64</Code>
                </td>
                <td>4</td>
                <td>64</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-80</Code>
                </td>
                <td>5</td>
                <td>80</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-96</Code>
                </td>
                <td>6</td>
                <td>96</td>
              </tr>
              <tr>
                <td>
                  <Code>spacing-112</Code>
                </td>
                <td>7</td>
                <td>112</td>
              </tr>
            </tbody>
          </DxcTable>
        </DxcStack>
        <DxcStack gutter="large">
          <HeadingLink level={2}>Component spacing tokens</HeadingLink>
          <DxcText as="p">
            Most components across Halstack can adopt our component spacing
            tokens as <Code>margin</Code> or <Code>padding</Code> in every
            direction in order to create white space between components.
          </DxcText>
          <Figure
            caption={
              <>
                <DxcText as="p">
                  Usage of the <Code>medium</Code> token for <Code>left</Code>,{" "}
                  <Code> right</Code>, <Code>bottom</Code> and <Code>top</Code>{" "}
                  <Code>padding</Code> properties.
                </DxcText>
              </>
            }
          >
            <Image src={spacingPadding} alt="Padding properties" />
          </Figure>
          <DxcTable>
            <thead>
              <tr>
                <th>Component token</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>xxsmall</Code>
                </td>
                <td>
                  <Code>spacing-4</Code>
                </td>
                <td>4px</td>
              </tr>
              <tr>
                <td>
                  <Code>xsmall</Code>
                </td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>8px</td>
              </tr>
              <tr>
                <td>
                  <Code>small</Code>
                </td>
                <td>
                  <Code>spacing-12</Code>
                </td>
                <td>12px</td>
              </tr>
              <tr>
                <td>
                  <Code>medium</Code>
                </td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>16px</td>
              </tr>
              <tr>
                <td>
                  <Code>large</Code>
                </td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>24px</td>
              </tr>
              <tr>
                <td>
                  <Code>xlarge</Code>
                </td>
                <td>
                  <Code>spacing-32</Code>
                </td>
                <td>32px</td>
              </tr>
              <tr>
                <td>
                  <Code>xxlarge</Code>
                </td>
                <td>
                  <Code>spacing-48</Code>
                </td>
                <td>48px</td>
              </tr>
            </tbody>
          </DxcTable>
        </DxcStack>
        <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/principles/spacing/SpacingPage.tsx" />
      </DxcStack>
    </PageLayout>
  );
};

export default Spacing;
