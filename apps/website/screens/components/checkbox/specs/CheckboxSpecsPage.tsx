import { DxcParagraph, DxcBulletedList, DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import checkboxAnatomy from "./images/checkbox_anatomy.png";
import checkboxSpecs from "./images/checkbox_specs.png";
import checkboxStates from "./images/checkbox_states.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Checkbox design specifications">
        <Image src={checkboxSpecs} alt="Checkbox design specifications" />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcParagraph>
          The following states are defined in the life cycle of the component: <strong>unselected enabled</strong>,{" "}
          <strong>unselected hover</strong>, <strong>unselected focus</strong>, <strong>unselected disabled</strong>,{" "}
          <strong>selected enabled</strong>, <strong>selected hover</strong>, <strong>selected focus</strong> and{" "}
          <strong>selected disabled.</strong>
        </DxcParagraph>
        <Figure caption="Checkbox states">
          <Image src={checkboxStates} alt="Checkbox states" />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={checkboxAnatomy} alt="Checkbox anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Checkbox input</DxcBulletedList.Item>
          <DxcBulletedList.Item>Label</DxcBulletedList.Item>
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
                  <Code>backgroundColorChecked</Code>
                </td>
                <td>Fill</td>
                <td>
                  <Code>color-blue-800</Code>
                </td>
                <td>#0067b3</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverBackgroundColorChecked</Code>
                </td>
                <td>Fill:hover</td>
                <td>
                  <Code>color-blue-900</Code>
                </td>
                <td>#003c66</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledBackgroundColorChecked</Code>
                </td>
                <td>Fill:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>readOnlyBackgroundColorChecked</Code>
                </td>
                <td>Fill:readonly</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverReadOnlyBackgroundColorChecked</Code>
                </td>
                <td>Fill:readonly:hover</td>
                <td>
                  <Code>color-grey-600</Code>
                </td>
                <td>#808080</td>
              </tr>
              <tr>
                <td>
                  <Code>borderColor</Code>
                </td>
                <td>Border</td>
                <td>
                  <Code>color-blue-800</Code>
                </td>
                <td>#0067b3</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverBorderColor</Code>
                </td>
                <td>Border:hover</td>
                <td>
                  <Code>color-blue-900</Code>
                </td>
                <td>#003c66</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledBorderColor</Code>
                </td>
                <td>Border:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>readOnlyBorderColor</Code>
                </td>
                <td>Border:readonly</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverReadOnlyBorderColor</Code>
                </td>
                <td>Border:readonly:hover</td>
                <td>
                  <Code>color-grey-600</Code>
                </td>
                <td>#808080</td>
              </tr>
              <tr>
                <td>
                  <Code>checkColor</Code>
                </td>
                <td>Check mark</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledCheckColor</Code>
                </td>
                <td>Check mark:disabled</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>readOnlyCheckColor</Code>
                </td>
                <td>Check mark:readonly</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
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
              <tr>
                <td>
                  <Code>focusColor</Code>
                </td>
                <td>Outline:focus</td>
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
                  <Code>inputMargin</Code>
                </td>
                <td>Checkbox input</td>
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
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
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
                <td>Checkbox input</td>
                <td>
                  <Code>border-width-2</Code>
                </td>
                <td>2px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Checkbox input</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Checkbox input</td>
                <td>
                  <Code>border-radius-small</Code>
                </td>
                <td>0.125rem / 2px</td>
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
        title: "Margin",
        content: (
          <>
            <DxcParagraph>
              Margin can be set independently for <Code>top</Code>, <Code>right</Code>, <Code>bottom</Code>,{" "}
              <Code>left</Code>.
            </DxcParagraph>
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
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Understanding WCAG 2.2 -{" "}
                <DxcLink href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html" newWindow>
                  SC 1.3.1: Info and Relationships
                </DxcLink>
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Understanding WCAG 2.2 -{" "}
                <DxcLink href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html" newWindow>
                  SC 4.1.2: Name, Role, Value
                </DxcLink>
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "WAI-ARIA 1.2",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring Practices 1.2 -{" "}
              <DxcLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#checkbox" newWindow>
                3.7 Checkbox
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const CheckboxSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/checkbox/specs/CheckboxSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default CheckboxSpecsPage;
