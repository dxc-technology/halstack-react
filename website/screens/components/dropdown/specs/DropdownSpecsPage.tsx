import {
  DxcTable,
  DxcStack,
  DxcText,
  DxcList,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import specsImage from "./images/dropdown_specs.png";
import statesImage from "./images/dropdown_states.png";
import optionListStatesImage from "./images/dropdown_option_list_states.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Dropdown component specifications">
        <Image src={specsImage} alt="Dropdown component specifications" />
      </Figure>
    ),
  },
  {
    title: "States",
    subSections: [
      {
        title: "Dropdown button",
        content: (
          <>
            <DxcText as="p">
              States: <strong>Enabled</strong>, <strong>hover</strong>,{" "}
              <strong>focus</strong>, <strong>active</strong> and{" "}
              <strong>disabled</strong>.
            </DxcText>
            <Figure caption="Example of the dropdown component states">
              <Image
                src={statesImage}
                alt="Example of the dropdown component states"
              />
            </Figure>
          </>
        ),
      },
      {
        title: "Option list",
        content: (
          <>
            {" "}
            <DxcText as="p">
              States: <strong>Enabled</strong>, <strong>hover</strong>,{" "}
              <strong>focus</strong> and <strong>selected</strong>.
            </DxcText>
            <Figure caption="Example of the option list states">
              <Image
                src={optionListStatesImage}
                alt="Example of the option list states"
              />
            </Figure>
          </>
        ),
      },
    ],
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
                <th>Token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>backgroundColor</Code>
                </td>
                <td>#FFFFFF</td>
              </tr>
              <tr>
                <td>
                  <Code>fontColor</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>dropdownBackgroundColor</Code>
                </td>
                <td>#FFFFFF</td>
              </tr>
              <tr>
                <td>
                  <Code>dropdownFontColor</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverBackgroundOption</Code>
                </td>
                <td>#F2F2F2</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverBackgroundColor</Code>
                </td>
                <td>#F2F2F2</td>
              </tr>
              <tr>
                <td>
                  <Code>scrollBarThumbColor</Code>
                </td>
                <td>#666666</td>
              </tr>
              <tr>
                <td>
                  <Code>scrollBarTrackColor</Code>
                </td>
                <td>#D9D9D9</td>
              </tr>
              <tr>
                <td>
                  <Code>focusColor</Code>
                </td>
                <td>#005FCC</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Width",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Token</th>
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
                  <Code>medium</Code> <em>(default)</em>
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
                  <Code>fitContent</Code>
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <Code>fillParent</Code>
                </td>
                <td>-</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Margin",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Token</th>
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
        ),
      },
      {
        title: "Padding",
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
                  <Code>padding-left</Code>
                </td>
                <td>Dropdown button</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-left</Code>
                </td>
                <td>Options list</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-right</Code>
                </td>
                <td>Dropdown button</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-right</Code>
                </td>
                <td>Options list</td>
                <td>16px</td>
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
                <td>Dropdown button</td>
                <td>
                  <Code>border-width-0</Code>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Dropdown button</td>
                <td>
                  <Code>border-style-none</Code>
                </td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Dropdown button</td>
                <td>
                  <Code>border-radius-medium</Code>
                </td>
                <td>0.25rem / 4px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-width</Code>
                </td>
                <td>Options list</td>
                <td>
                  <Code>border-width-0</Code>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Options list</td>
                <td>
                  <Code>border-style-none</Code>
                </td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Options list</td>
                <td>
                  <Code>border-radius-medium</Code>
                </td>
                <td>0.25rem / 4px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-width</Code>
                </td>
                <td>Focus outline</td>
                <td>
                  <Code>border-width-2</Code>
                </td>
                <td>2px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Focus outline</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Focus outline</td>
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
                <th>Property</th>
                <th>Element</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>font-size</Code>
                </td>
                <td>Dropdown button</td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>font-size</Code>
                </td>
                <td>List item</td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>font-weight</Code>
                </td>
                <td>Dropdown button</td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>font-weight</Code>
                </td>
                <td>List item</td>
                <td>400</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Iconography",
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
                  <Code>height</Code> / <Code>width</Code>
                </td>
                <td>Caret</td>
                <td>24 / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>height</Code> / <Code>width</Code>
                </td>
                <td>Custom icon</td>
                <td>20 / 20px</td>
              </tr>
            </tbody>
          </DxcTable>
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
            <DxcList>
              <DxcText>
                Understanding WCAG 2.2 -{" "}
                <DxcLink
                  newWindow
                  href="https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html"
                >
                  SC 1.4.13: Content on Hover or Focus
                </DxcLink>
              </DxcText>
              <DxcText>
                Understanding WCAG 2.2 -{" "}
                <DxcLink
                  newWindow
                  href="https://www.w3.org/WAI/WCAG22/Understanding/on-input.html"
                >
                  SC 3.2.2: On Input
                </DxcLink>
              </DxcText>
            </DxcList>
          </>
        ),
      },
      {
        title: "WAI-ARIA 1.2",
        content: (
          <DxcList>
            <DxcText>
              WAI-ARIA Authoring Practices 1.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton"
              >
                3.16 Menu button
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const DropdownSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/dropdown/specs/DropdownSpecsPage.tsx" />
    </DxcStack>
  );
};

export default DropdownSpecsPage;
