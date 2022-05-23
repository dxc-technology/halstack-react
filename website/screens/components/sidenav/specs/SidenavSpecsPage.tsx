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
import sidenavAnatomy from "./images/sidenav_anatomy.png";
import sidenavSpecs from "./images/sidenav_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Sidenav design specifications">
        <Image src={sidenavSpecs} alt="Sidenav design specifications" />
      </Figure>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={sidenavAnatomy} alt="Sidenav anatomy" />
        <DxcList type="number">
          <DxcText>Title</DxcText>
          <DxcText>Subtitle</DxcText>
          <DxcText>Link</DxcText>
          <DxcText>Container</DxcText>
          <DxcText>Arrow</DxcText>
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
                  <Code>color-grey-100</Code>
                </td>
                <td>#f2f2f2</td>
              </tr>
              <tr>
                <td>
                  <Code>arrowContainerColor</Code>
                </td>
                <td>Arrow container</td>
                <td>
                  <Code>color-grey-200</Code>
                </td>
                <td>#e6e6e6</td>
              </tr>
              <tr>
                <td>
                  <Code>arrowColor</Code>
                </td>
                <td>Arrow</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontColor</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>subtitleFontColor</Code>
                </td>
                <td>Subtitle</td>
                <td>
                  <Code>color-grey-800</Code>
                </td>
                <td>#4d4d4d</td>
              </tr>
              <tr>
                <td>
                  <Code>linkFontColor</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>color-grey-800</Code>
                </td>
                <td>#4d4d4d</td>
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
                  <Code>titleFontFamily</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontSize</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-scale-05</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontWeight</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontStyle</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>subtitleFontFamily</Code>
                </td>
                <td>Subtitle</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>subtitleFontSize</Code>
                </td>
                <td>Subtitle</td>
                <td>
                  <Code>font-scale-03</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>subtitleFontWeight</Code>
                </td>
                <td>Subtitle</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>subtitleFontStyle</Code>
                </td>
                <td>Subtitle</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>subtitleFontLetterSpacing</Code>
                </td>
                <td>Subtitle</td>
                <td>
                  <Code>font-tracking-wide-03</Code>
                </td>
                <td>0.05em</td>
              </tr>
              <tr>
                <td>
                  <Code>subtitleFontTextTransform</Code>
                </td>
                <td>Subtitle</td>
                <td>
                  <Code>font-uppercase</Code>
                </td>
                <td>uppercase</td>
              </tr>
              <tr>
                <td>
                  <Code>linkFontFamily</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontSize</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>linkFontWeight</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>linkFontStyle</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>linkTextDecoration</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>font-no-line</Code>
                </td>
                <td>none</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Spacing",
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
                    <Code>linkMarginTop</Code>
                  </td>
                  <td>Link</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>linkMarginBottom</Code>
                  </td>
                  <td>Link</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>linkMarginLeft</Code>
                  </td>
                  <td>Link</td>
                  <td>
                    <Code>spacing-16</Code>
                  </td>
                  <td>1rem / 16x</td>
                </tr>
                <tr>
                  <td>
                    <Code>linkMarginRight</Code>
                  </td>
                  <td>Link</td>
                  <td>
                    <Code>spacing-16</Code>
                  </td>
                  <td>1rem / 16x</td>
                </tr>
              </tbody>
            </DxcTable>
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
                  <td>Title</td>
                  <td>
                    <Code>spacing-16</Code>
                  </td>
                  <td>1rem / 16px</td>
                </tr>
                <tr>
                  <td>
                    <Code>margin-bottom</Code>
                  </td>
                  <td>Subtitle</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Size",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Property for sidenav</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>width</Code>
                </td>
                <td>300px</td>
              </tr>
              <tr>
                <td>
                  <Code>height</Code> <em>(default)</em>
                </td>
                <td>auto - adapted to the content</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Padding",
        content: (
          <>
            <DxcText as="p">
              Padding can be set through the following values: (xxsmall&#39;,
              &#39;xsmall&#39;, &#39;small&#39;, &#39;medium&#39;,
              &#39;large&#39;, &#39;xlarge&#39;, &#39;xxlarge&#39;) and
              independently for <Code>top</Code>, <Code>right</Code>,{" "}
              <Code>bottom</Code> and <Code>left</Code>.
            </DxcText>
            <DxcTable>
              <thead>
                <tr>
                  <th>property</th>
                  <th>Value(px)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>xxsmall</Code>
                  </td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>
                    <Code>xsmall</Code>
                  </td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>
                    <Code>small</Code>
                  </td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>
                    <Code>medium</Code> <em>(default)</em>
                  </td>
                  <td>36</td>
                </tr>
                <tr>
                  <td>
                    <Code>large</Code>
                  </td>
                  <td>48</td>
                </tr>
                <tr>
                  <td>
                    <Code>xlarge</Code>
                  </td>
                  <td>64</td>
                </tr>
                <tr>
                  <td>
                    <Code>xxlarge</Code>
                  </td>
                  <td>100</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Sidenav-arrow",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Property for sidenav</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arrow display</td>
                <td>true (default value)</td>
              </tr>
              <tr>
                <td>Arrow distance</td>
                <td>50%</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "Responsive version for mobile and tablet",
    content: (
      <>
        <DxcText as="p">
          Some properties regarding width vary, the details are indicated in the
          table below.
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>Property for sidenav</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>width</Code>
              </td>
              <td>60%</td>
            </tr>
            <tr>
              <td>
                <Code>height</Code>
              </td>
              <td>auto - adapted to the content</td>
            </tr>
            <tr>
              <td>
                <Code>padding</Code>
              </td>
              <td>
                <Code>medium</Code> / 36px <em>(default)</em>
              </td>
            </tr>
            <tr>
              <td>Arrow display</td>
              <td>true (it cannot be false)</td>
            </tr>
            <tr>
              <td>Arrow distance</td>
              <td>50%</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
];

const SidenavSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/sidenav/specs/SidenavSpecsPage.tsx" />
    </DxcStack>
  );
};

export default SidenavSpecsPage;
