import {
  DxcLink,
  DxcBulletedList,
  DxcFlex,
  DxcTable,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Image from "@/common/Image";
import Code from "@/common/Code";
import linkSpecs from "./images/link_specs.png";
import linkStatesNoIcon from "./images/link_states_noIcon.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Link design specifications">
        <Image src={linkSpecs} alt="Link design specifications" />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcParagraph>
          States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>active</strong>,{" "}
          <strong>visited</strong> and <strong>disabled</strong>.
        </DxcParagraph>
        <Figure caption="Link states">
          <Image src={linkStatesNoIcon} alt="Link states" />
        </Figure>
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
                  <Code>fontColor</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>color-blue-800</Code>
                </td>
                <td>#0067b3</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverFontColor</Code>
                </td>
                <td>Label:hover</td>
                <td>
                  <Code>color-blue-800</Code>
                </td>
                <td>#0067b3</td>
              </tr>
              <tr>
                <td>
                  <Code>activeFontColor</Code>
                </td>
                <td>Label:active</td>
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
                  <Code>visitedFontColor</Code>
                </td>
                <td>Label:visited</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverUnderlineColor</Code>
                </td>
                <td>Underline:hover</td>
                <td>
                  <Code>color-blue-800</Code>
                </td>
                <td>#0067b3</td>
              </tr>
              <tr>
                <td>
                  <Code>activeUnderlineColor</Code>
                </td>
                <td>Underline:active</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>visitedUnderlineColor</Code>
                </td>
                <td>Underline:visited</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
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
        title: "Margin",
        content: (
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
        ),
      },
      {
        title: "Typography",
        content: (
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
                  <Code>font-size</Code>
                </td>
                <td>1rem/16px</td>
              </tr>
              <tr>
                <td>
                  <Code>font-weight</Code>
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
                  <Code>border-bottom-width</Code>
                </td>
                <td>Link container:hover</td>
                <td>
                  <Code>border-width-1</Code>
                </td>
                <td>1px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Link container:hover</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "Icon specs",
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
              <Code>height/width</Code>
            </td>
            <td>icon</td>
            <td>16/16px</td>
          </tr>
          <tr>
            <td>
              <Code>padding-left</Code>
            </td>
            <td>icon</td>
            <td>4px</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WCAG 2.2",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html"
                newWindow
              >
                2.4.9: Link Purpose (Link Only)
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html"
                newWindow
              >
                2.4.4: Link Purpose (In Context)
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "WAI-ARIA 1.2",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              WAI-ARIA authoring practices 1.2 -{" "}
              <DxcLink
                href="https://www.w3.org/TR/wai-aria-practices-1.2/#link"
                newWindow
              >
                3.13 Link
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const LinkSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/link/specs/LinkSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default LinkSpecsPage;
