import {
  DxcLink,
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import Figure from "@/common/Figure";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import radioStates from "./images/radio_states.png";
import radioAnatomy from "./images/radio_anatomy.png";
import radioSpecs from "./images/radio_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Component design specifications">
        <Image src={radioSpecs} alt="Component design specifications" />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcText as="p">
          The following states are defined in the life cycle of the component:{" "}
          <strong>unselected enabled</strong>, <strong>unselected hover</strong>
          , <strong>unselected focus</strong>,{" "}
          <strong>unselected disabled</strong>,{" "}
          <strong>selected enabled</strong>, <strong>selected hover</strong>,{" "}
          <strong>selected focus</strong> and <strong>selected disabled</strong>
          .
        </DxcText>
        <Figure caption="Radio button component states">
          <Image src={radioStates} alt="Radio button component states" />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={radioAnatomy} alt="Radio button component anatomy" />
        <DxcList type="number">
          <DxcText>Radio input</DxcText>
          <DxcText>Label</DxcText>
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
                    <th>Core token</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>color</Code>
                    </td>
                    <td>Radio input</td>
                    <td>
                      <Code>color-blue-800</Code>
                    </td>
                    <td>#0067b3</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>hoverColor</Code>
                    </td>
                    <td>Radio input:hover</td>
                    <td>
                      <Code>color-blue-900</Code>
                    </td>
                    <td>#003c66</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>focusColor</Code>
                    </td>
                    <td>Radio input:focus</td>
                    <td>
                      <Code>color-blue-600</Code>
                    </td>
                    <td>#0095ff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledColor</Code>
                    </td>
                    <td>Radio input:disabled</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>fontColor</Code>
                    </td>
                    <td>Label</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledFontColor</Code>
                    </td>
                    <td>Label:disabled</td>
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
                    <th>Core token</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>colorOnDark</Code>
                    </td>
                    <td>Radio input</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#e6e6e6</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>hoverColor</Code>
                    </td>
                    <td>Radio input:hover</td>
                    <td>
                      <Code>color-blue-900</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>focusColorOnDark</Code>
                    </td>
                    <td>Radio input:focus</td>
                    <td>
                      <Code>color-blue-600</Code>
                    </td>
                    <td>#0095ff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledColorOnDark</Code>
                    </td>
                    <td>Radio input:disabled</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>fontColorOnDark</Code>
                    </td>
                    <td>Label</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledFontColorOnDark</Code>
                    </td>
                    <td>Label:disabled</td>
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
                  <Code>fontWeight</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>fontStyle</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>400</td>
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
                <td>Radio input</td>
                <td>
                  <Code>border-width-2</Code>
                </td>
                <td>2px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Radio input</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
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
                  <Code>labelMargin</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>groupVerticalSpacing</Code>
                </td>
                <td>Radio</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>groupHorizontalSpacing</Code>
                </td>
                <td>Radio</td>
                <td>
                  <Code>spacing-32</Code>
                </td>
                <td>2rem / 32px</td>
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
                <th>Property</th>
                <th>Element</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>width</Code>
                </td>
                <td>Radio input</td>
                <td>18px</td>
              </tr>
              <tr>
                <td>
                  <Code>width</Code>
                </td>
                <td>focus outline</td>
                <td>24px</td>
              </tr>
              <tr>
                <td>
                  <Code>height</Code>
                </td>
                <td>Radio input</td>
                <td>18px</td>
              </tr>
              <tr>
                <td>
                  <Code>height</Code>
                </td>
                <td>focus outline</td>
                <td>26px</td>
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
              Margin can be set independently for <Code>top</Code>,{" "}
              <Code>right</Code>,<Code>bottom</Code>, <Code>left</Code>.
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
    ],
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WCAG 2.2",
        content: (
          <DxcList>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html"
                newWindow
              >
                SC 1.3.1: Info and Relationships
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html"
                newWindow
              >
                SC 3.3.2: Labels or Instructions
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html"
                newWindow
              >
                SC 2.4.6: Headings and Labels
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
      {
        title: "WAI-ARIA 1.2",
        content: (
          <DxcList>
            <DxcText>
              WAI-ARIA Authoring Practices 1.2 -{" "}
              <DxcLink
                href="https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton"
                newWindow
              >
                3.12 Radio group
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const RadioSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/radio/specs/RadioSpecsPage.tsx" />
    </DxcStack>
  );
};

export default RadioSpecsPage;
