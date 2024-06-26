import { DxcTable, DxcParagraph, DxcBulletedList, DxcFlex, DxcLink } from "@repo/ui";
import Image from "@/common/Image";
import Link from "next/link";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import anatomyImage from "./images/table_anatomy.png";
import specsImage from "./images/table_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Resultset table design specifications">
        <Image src={specsImage} alt="Resultset table design specifications" />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <DxcParagraph>
        Some other components defined in the Design System are used in the table component as the{" "}
        <Link href="/components/checkbox" passHref legacyBehavior>
          <DxcLink>checkbox</DxcLink>
        </Link>
        ,{" "}
        <Link href="/components/button" passHref legacyBehavior>
          <DxcLink>button</DxcLink>
        </Link>{" "}
        or{" "}
        <Link href="/components/select" passHref legacyBehavior>
          <DxcLink>select</DxcLink>
        </Link>
        . For concrete specifications about states, please, consider to see the documentation of each component.
      </DxcParagraph>
    ),
  },

  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomyImage} alt="Resultset table anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Header</DxcBulletedList.Item>
          <DxcBulletedList.Item>Header title</DxcBulletedList.Item>
          <DxcBulletedList.Item>Sorting action</DxcBulletedList.Item>
          <DxcBulletedList.Item>Body</DxcBulletedList.Item>
          <DxcBulletedList.Item>Cell</DxcBulletedList.Item>
          <DxcBulletedList.Item>Cell value</DxcBulletedList.Item>
          <DxcBulletedList.Item>Paginator</DxcBulletedList.Item>
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
                  <Code>dataBackgroundColor</Code>
                </td>
                <td>Cell</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>dataFontColor</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>headerBackgroundColor</Code>
                </td>
                <td>Header</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>headerFontColor</Code>
                </td>
                <td>Header title</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>scrollBarThumbColor</Code>
                </td>
                <td>Scroll bar</td>
                <td>
                  <Code>color-grey-700</Code>
                </td>
                <td>#666666</td>
              </tr>
              <tr>
                <td>
                  <Code>scrollBarTrackColor</Code>
                </td>
                <td>Scroll bar</td>
                <td>
                  <Code>color-grey-300</Code>
                </td>
                <td>#cccccc</td>
              </tr>
              <tr>
                <td>
                  <Code>sortIconColor</Code>
                </td>
                <td>Sort</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>rowSeparatorColor</Code>
                </td>
                <td>Divider</td>
                <td>
                  <Code>color-grey-300</Code>
                </td>
                <td>#cccccc</td>
              </tr>
              <tr>
                <td>
                  <Code>actionIconColor</Code>
                </td>
                <td>Actions cell</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledActionIconColor</Code>
                </td>
                <td>Actions cell</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverActionIconColor</Code>
                </td>
                <td>Actions cell</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>focusActionIconColor</Code>
                </td>
                <td>Actions cell</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>activeActionIconColor</Code>
                </td>
                <td>Actions cell</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>actionBackgroundColor</Code>
                </td>
                <td>Actions cell</td>
                <td>
                  <Code>color-transparent</Code>
                </td>
                <td>transparent</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledActionBackgroundColor</Code>
                </td>
                <td>Actions cell</td>
                <td>
                  <Code>color-transparent</Code>
                </td>
                <td>transparent</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverActionBackgroundColor</Code>
                </td>
                <td>Actions cell</td>
                <td>
                  <Code>color-grey-100</Code>
                </td>
                <td>#f2f2f2</td>
              </tr>
              <tr>
                <td>
                  <Code>focusActionBorderColor</Code>
                </td>
                <td>Actions cell</td>
                <td>
                  <Code>color-blue-600</Code>
                </td>
                <td>#0095ff</td>
              </tr>
              <tr>
                <td>
                  <Code>activeActionBackgroundColor</Code>
                </td>
                <td>Actions cell</td>
                <td>
                  <Code>color-grey-300</Code>
                </td>
                <td>#cccccc</td>
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
                  <Code>dataFontFamily</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>'Open Sans', sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>dataFontSize</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>dataFontStyle</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>dataFontWeight</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>dataFontTextTransform</Code>
                </td>
                <td>Cell value</td>
                <td>-</td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>dataTextLineHeight</Code>
                </td>
                <td>Cell value</td>
                <td>-</td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>dataTextAlign</Code>
                </td>
                <td>Cell value</td>
                <td>-</td>
                <td>left</td>
              </tr>
              <tr>
                <td>
                  <Code>headerFontFamily</Code>
                </td>
                <td>Header title</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>'Open Sans', sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>headerFontSize</Code>
                </td>
                <td>Header title</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>headerFontStyle</Code>
                </td>
                <td>Header title</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>headerFontWeight</Code>
                </td>
                <td>Header title</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>headerFontTextTransform</Code>
                </td>
                <td>Header title</td>
                <td>-</td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>headerTextLineHeight</Code>
                </td>
                <td>Header title</td>
                <td>-</td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>headerTextAlign</Code>
                </td>
                <td>Header title</td>
                <td>-</td>
                <td>left</td>
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
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>rowSeparatorThickness</Code>
                </td>
                <td>Divider</td>
                <td>
                  <Code>border-width-1</Code>
                </td>
                <td>1px</td>
              </tr>
              <tr>
                <td>
                  <Code>rowSeparatorStyle</Code>
                </td>
                <td>Divider</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
              </tr>
              <tr>
                <td>
                  <Code>headerBorderRadius</Code>
                </td>
                <td>Header</td>
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
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>dataPaddingTop</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>dataPaddingBottom</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>dataPaddingRight</Code>
                </td>
                <td>Cell value</td>
                <td>-</td>
                <td>20px</td>
              </tr>
              <tr>
                <td>
                  <Code>dataPaddingLeft</Code>
                </td>
                <td>Cell value</td>
                <td>-</td>
                <td>20px</td>
              </tr>
              <tr>
                <td>
                  <Code>dataPaddingTopReduced</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>dataPaddingBottomReduced</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>dataPaddingRightReduced</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>dataPaddingLeftReduced</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>firstChildPaddingLeft</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>lastChildPaddingRight</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>firstChildPaddingLeftReduced</Code>
                </td>
                <td>Cell value</td>
                <td>-</td>
                <td>20px</td>
              </tr>
              <tr>
                <td>
                  <Code>lastChildPaddingRightReduced</Code>
                </td>
                <td>Cell value</td>
                <td>-</td>
                <td>20px</td>
              </tr>
              <tr>
                <td>
                  <Code>dataPaddingBottomReduced</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>dataPaddingRightReduced</Code>
                </td>
                <td>Cell value</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>headerPaddingTop</Code>
                </td>
                <td>Header title</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>headerPaddingBottom</Code>
                </td>
                <td>Header title</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>headerPaddingRight</Code>
                </td>
                <td>Header title</td>
                <td>-</td>
                <td>20px</td>
              </tr>
              <tr>
                <td>
                  <Code>headerPaddingLeft</Code>
                </td>
                <td>Header title</td>
                <td>
                  <Code>spacing-40</Code>
                </td>
                <td>2.5rem / 40px</td>
              </tr>
              <tr>
                <td>
                  <Code>headerPaddingTopReduced</Code>
                </td>
                <td>Header title</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>headerPaddingBottomReduced</Code>
                </td>
                <td>Header title</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>headerPaddingRightReduced</Code>
                </td>
                <td>Header title</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>headerPaddingLeftReduced</Code>
                </td>
                <td>Header title</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
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
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>width</Code>
                </td>
                <td>Sorting action</td>
                <td>-</td>
                <td>14px</td>
              </tr>
              <tr>
                <td>
                  <Code>height</Code>
                </td>
                <td>Sorting action</td>
                <td>-</td>
                <td>14px</td>
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
        title: "WCAG",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships" newWindow>
                Success Criterion 1.3.1: Info and Relationships
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink href="https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence" newWindow>
                Success Criterion 1.3.2: Meaningful Sequence
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard" newWindow>
                Success Criterion 2.1.1: Keyboard
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink href="https://www.w3.org/WAI/WCAG22/Understanding/focus-order" newWindow>
                Success Criterion 2.4.3: Focus Order
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels" newWindow>
                Success Criterion 2.4.6: Headings and Labels
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible" newWindow>
                Success Criterion 2.4.7: Focus Visible
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value" newWindow>
                Success Criterion 4.1.2: Name, Role, Value
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "WAI-ARIA",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring Practices 1.2 -{" "}
              <DxcLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#table" newWindow>
                3.23 Table
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring Practices 1.2 -{" "}
              <DxcLink href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/table/sortable-table.html" newWindow>
                Sortable Table Example
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const ResultsetTableSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/resultset-table/specs/ResultsetTableSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default ResultsetTableSpecsPage;
