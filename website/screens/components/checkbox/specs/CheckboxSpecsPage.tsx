import {
  DxcStack,
  DxcText,
  DxcList,
  DxcTable,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import checkboxAnatomy from "./images/checkbox_anatomy.png";
import checkboxSpecs from "./images/checkbox_specs.png";
import checkboxStates from "./images/checkbox_states.png";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";
import Code from "../../../common/Code";

const CheckboxSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Component design specifications">
          <Image src={checkboxSpecs} alt="Component design specifications" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <DxcText as="p">
          The following states are defined in the life cycle of the component:{" "}
          <strong>unselected enabled</strong>, <strong>unselected hover</strong>
          , <strong>unselected focus</strong>,{" "}
          <strong>unselected disabled</strong>,{" "}
          <strong>selected enabled</strong>, <strong>selected hover</strong>,{" "}
          <strong>selected focus</strong> and{" "}
          <strong>selected disabled.</strong>
        </DxcText>
        <Figure caption="Checkbox component states.">
          <Image src={checkboxStates} alt="Checkbox component states." />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
        <Image src={checkboxAnatomy} alt="Checkbox anatomy" />
        <DxcList type="number">
          <DxcText>Checkbox input</DxcText>
          <DxcText>Label</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Design tokens</HeadingLink>
        <HeadingLink level={4}>Color</HeadingLink>
        <HeadingLink level={5}>On-light</HeadingLink>
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
                <Code>selectedBackgroundColor</Code>
              </td>
              <td>Fill</td>
              <td>
                <Code>color-blue-800</Code>
              </td>
              <td>#0067b3</td>
            </tr>
            <tr>
              <td>
                <Code>selectedHoverBackgroundColor</Code>
              </td>
              <td>Fill:hover</td>
              <td>
                <Code>color-blue-900</Code>
              </td>
              <td>#003c66</td>
            </tr>
            <tr>
              <td>
                <Code>selectedDisabledBackgroundColor</Code>
              </td>
              <td>Fill:disabled</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
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
                <Code>color-blue-700</Code>
              </td>
              <td>#0095ff</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>On-dark</HeadingLink>
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
                <Code>selectedBackgroundColorOnDark</Code>
              </td>
              <td>Fill</td>
              <td>
                <Code>color-grey-200</Code>
              </td>
              <td>#e6e6e6</td>
            </tr>
            <tr>
              <td>
                <Code>selectedHoverBackgroundColorOnDark</Code>
              </td>
              <td>Fill:hover</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>selectedDisabledBackgroundColorOnDark</Code>
              </td>
              <td>Fill:disabled</td>
              <td>
                <Code>color-grey-800</Code>
              </td>
              <td>#4d4d4d</td>
            </tr>
            <tr>
              <td>
                <Code>borderColorOnDark</Code>
              </td>
              <td>Border</td>
              <td>
                <Code>color-grey-200</Code>
              </td>
              <td>#e6e6e6</td>
            </tr>
            <tr>
              <td>
                <Code>hoverBorderColorOnDark</Code>
              </td>
              <td>Border:hover</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>disabledBorderColorOnDark</Code>
              </td>
              <td>Border:disabled</td>
              <td>
                <Code>color-grey-800</Code>
              </td>
              <td>#4d4d4d</td>
            </tr>
            <tr>
              <td>
                <Code>checkColorOnDark</Code>
              </td>
              <td>Check mark</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>disabledCheckOnDark</Code>
              </td>
              <td>Check mark:disabled</td>
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
            <tr>
              <td>
                <Code>focusColorOnDark</Code>
              </td>
              <td>Outline:focus</td>
              <td>
                <Code>color-blue-600</Code>
              </td>
              <td>#0095ff</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Spacing</HeadingLink>
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
        <HeadingLink level={4}>Typography</HeadingLink>
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
        <HeadingLink level={4}>Border</HeadingLink>
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
        <HeadingLink level={4}>Margin</HeadingLink>
        <DxcText as="p">
          Margin can be set independently for <Code>top</Code>,{" "}
          <Code>right</Code>, <Code>bottom</Code>, <Code>left</Code>.
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
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accessibility</HeadingLink>
        <HeadingLink level={4}>WCAG 2.2</HeadingLink>
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
              href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html"
              newWindow
            >
              SC 4.1.2: Name, Role, Value
            </DxcLink>
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>WAI-ARIA 1.2</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#checkbox"
              newWindow
            >
              3.7 Checkbox
            </DxcLink>
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/checkbox/specs/CheckboxSpecsPage.tsx" />
    </DxcStack>
  );
};

export default CheckboxSpecsPage;
