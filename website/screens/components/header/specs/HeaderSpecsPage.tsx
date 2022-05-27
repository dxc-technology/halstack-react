import {
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import headerSpecs from "./images/header_specs.png";
import headerAnatomy from "./images/header_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Header design specifications">
        <Image src={headerSpecs} alt="Header design specifications" />
      </Figure>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Figure caption="Header distribution example">
          <Image src={headerAnatomy} alt="Header distribution example" />
        </Figure>
        <DxcList type="number">
          <DxcText>Brand image</DxcText>
          <DxcText>Application name</DxcText>
          <DxcText>Navigation links</DxcText>
          <DxcText>Header dropdown</DxcText>
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
                  <Code>contentColor</Code>
                </td>
                <td>Content</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>underlinedColor</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>hamburguerHoverColor</Code>
                </td>
                <td>Menu:hover</td>
                <td>
                  <Code>color-grey-200</Code>
                </td>
                <td>#e6e6e6</td>
              </tr>
              <tr>
                <td>
                  <Code>hamburguerFocusColor</Code>
                </td>
                <td>Menu:focus</td>
                <td>
                  <Code>color-blue-600</Code>
                </td>
                <td>#0095ff</td>
              </tr>
              <tr>
                <td>
                  <Code>hamburguerFontColor</Code>
                </td>
                <td>Menu label</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>hamburguerIconColor</Code>
                </td>
                <td>Menu icon</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>menuBackgroundColor</Code>
                </td>
                <td>Menu</td>
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
                  <Code>hamburguerFontFamily</Code>
                </td>
                <td>Menu label</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>hamburguerFontStyle</Code>
                </td>
                <td>Menu label</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>hamburguerFontSize</Code>
                </td>
                <td>Menu label</td>
                <td>
                  <Code>font-scale-01</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>hamburguerFontWeight</Code>
                </td>
                <td>Menu label</td>
                <td>
                  <Code>font-weight-semibold</Code>
                </td>
                <td>600</td>
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
                <td>Underline</td>
                <td>
                  <Code>border-width-2</Code>
                </td>
                <td>2px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Underline</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
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
                <th>Poperty</th>
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
                <td>Container</td>
                <td>-</td>
                <td>64px</td>
              </tr>
              <tr>
                <td>
                  <Code>width</Code>
                </td>
                <td>Container</td>
                <td>-</td>
                <td>100%</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Margin",
        content: (
          <>
            <DxcText as="p">
              The margin only applies to the <Code>margin-bottom</Code> of the
              header component.
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
              The variable padding only applies to the content area, the{" "}
              <Code>padding-left</Code> applied to the brand area is fixed
              (20px).
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
            <DxcText as="p">
              Different values can be applied to each side of the component:{" "}
              <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code>,{" "}
              <Code>right</Code>.
            </DxcText>
          </>
        ),
      },
    ],
  },
];

const HeaderSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/header/specs/HeaderSpecsPage.tsx" />
    </DxcStack>
  );
};

export default HeaderSpecsPage;
