import {
  DxcText,
  DxcList,
  DxcStack,
  DxcTable,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import specsImage from "./images/card_specs.png";
import statesImage from "./images/card_states.png";
import anatomyImage from "./images/card_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Card design specifications">
        <Image src={specsImage} alt="Card design specifications" />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcText as="p">
          Component states: <strong>enabled</strong>, <strong>hover</strong> and{" "}
          <strong>focus</strong>.
        </DxcText>
        <Figure caption="Card component states">
          <Image src={statesImage} alt="Card component states" />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomyImage} alt="Card anatomy" />
        <DxcList type="number">
          <DxcText>Card image</DxcText>
          <DxcText>Custom content</DxcText>
          <DxcText>Container</DxcText>
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
          <>
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
                    <Code>backgroundColor</Code>*
                  </td>
                  <td>Container</td>
                  <td>
                    <Code>color-white</Code>
                  </td>
                  <td>#ffffff</td>
                </tr>
                <tr>
                  <td>
                    <Code>focusColor</Code>*
                  </td>
                  <td>Container:focus</td>
                  <td>
                    <Code>color-blue-600</Code>
                  </td>
                  <td>#0095ff</td>
                </tr>
              </tbody>
            </DxcTable>
            <DxcText as="p">
              The <Code>background-color</Code> token belongs to the box
              component, changes made on that component will affect the card
              element.
            </DxcText>
          </>
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
                <td>Container</td>
                <td>
                  <Code>border-width-0</Code>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>border-style-none</Code>
                </td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
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
        title: "Spacing",
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
                  <Code>margin-top</Code>
                </td>
                <td>Custom content - subtitle</td>
                <td>
                  <Code>spacing-4</Code>
                </td>
                <td>0.25rem / 4px</td>
              </tr>
              <tr>
                <td>
                  <Code>margin-bottom</Code>
                </td>
                <td>Custom content - title</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-left</Code>
                </td>
                <td>Custom content</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-top</Code>
                </td>
                <td>Custom content</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-bottom</Code>
                </td>
                <td>Custom content</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-right</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Size",
        content: (
          <>
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
                    <Code>height</Code>
                  </td>
                  <td>Container height</td>
                  <td>-</td>
                  <td>220px</td>
                </tr>
                <tr>
                  <td>
                    <Code>width</Code>
                  </td>
                  <td>Container width</td>
                  <td>-</td>
                  <td>400px</td>
                </tr>
              </tbody>
            </DxcTable>
            <DxcTable>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Element</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>max-width</Code>
                  </td>
                  <td>Image</td>
                  <td>140px</td>
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
            <DxcText as="p">
              Margin properties can be applied independently to <Code>top</Code>
              , <Code>right</Code>, <Code>bottom</Code> and <Code>left</Code>{" "}
              sides of the card container.
            </DxcText>
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
          </>
        ),
      },
      {
        title: "Padding",
        content: (
          <>
            <DxcText as="p">
              Padding properties can be applied independently to{" "}
              <Code>top</Code>, <Code>right</Code>, <Code>bottom</Code> and{" "}
              <Code>left</Code> sides of the card container.
            </DxcText>
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
          </>
        ),
      },
    ],
  },
];

const CardSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Specifications"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/card/specs/CardSpecsPage.tsx" />
    </DxcStack>
  );
};

export default CardSpecsPage;
