import { DxcParagraph, DxcBulletedList, DxcTable, DxcFlex, DxcLink } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import Link from "next/link";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Code from "@/common/Code";

const sections = [
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
                  <Code>rowSeparatorColor</Code>
                </td>
                <td>Separator</td>
                <td>
                  <Code>color-grey-300</Code>
                </td>
                <td>#cccccc</td>
              </tr>
              <tr>
                <td>
                  <Code>dataBackgroundColor</Code>
                </td>
                <td>Data grid</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>dataFontColor</Code>
                </td>
                <td>Data grid</td>
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
                <td>Header</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>headerCheckboxBackgroundColorChecked</Code>
                </td>
                <td>Header checkbox</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>headerCheckboxHoverBackgroundColorChecked</Code>
                </td>
                <td>Header checkbox:hover</td>
                <td>
                  <Code>color-grey-200</Code>
                </td>
                <td>#e6e6e6</td>
              </tr>
              <tr>
                <td>
                  <Code>headerCheckboxBorderColor</Code>
                </td>
                <td>Header checkbox</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>headerCheckboxHoverBorderColor</Code>
                </td>
                <td>Header checkbox:hover</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>headerCheckboxCheckColor</Code>
                </td>
                <td>Header checkbox</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>focusColor</Code>
                </td>
                <td>Data grid</td>
                <td>
                  <Code>color-blue-600</Code>
                </td>
                <td>#0095ff</td>
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
                <td>Data grid</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>dataFontSize</Code>
                </td>
                <td>Data grid</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>dataFontStyle</Code>
                </td>
                <td>Data grid</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>dataFontWeight</Code>
                </td>
                <td>Data grid</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>dataFontTextTransform</Code>
                </td>
                <td>Data grid</td>
                <td>-</td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>dataTextLineHeight</Code>
                </td>
                <td>Data grid</td>
                <td>-</td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>headerFontFamily</Code>
                </td>
                <td>Header</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>headerFontSize</Code>
                </td>
                <td>Header</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>headerFontSize</Code>
                </td>
                <td>Header</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>headerFontWeight</Code>
                </td>
                <td>Header</td>
                <td>
                  <Code>font-weight-bold</Code>
                </td>
                <td>bold</td>
              </tr>
              <tr>
                <td>
                  <Code>headerFontTextTransform</Code>
                </td>
                <td>Header</td>
                <td>-</td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>headerTextLineHeight</Code>
                </td>
                <td>Header</td>
                <td>-</td>
                <td>normal</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Separator",
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
                <td>Separator</td>
                <td>-</td>
                <td>1px</td>
              </tr>
              <tr>
                <td>
                  <Code>rowSeparatorStyle</Code>
                </td>
                <td>Separator</td>
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
                  <Code>dataPaddingRight</Code>
                </td>
                <td>Data grid</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>dataPaddingLeft</Code>
                </td>
                <td>Data grid</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>headerPaddingRight</Code>
                </td>
                <td>Header</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>headerPaddingLeft</Code>
                </td>
                <td>Header</td>
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
        title: "Size",
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
                  <Code>dataRowHeight</Code>
                </td>
                <td>Data grid</td>
                <td>-</td>
                <td>36</td>
              </tr>
              <tr>
                <td>
                  <Code>headerRowHeight</Code>
                </td>
                <td>Header</td>
                <td>-</td>
                <td>36</td>
              </tr>
              <tr>
                <td>
                  <Code>summaryRowHeight</Code>
                </td>
                <td>Summary row</td>
                <td>-</td>
                <td>36</td>
              </tr>
              <tr>
                <td>
                  <Code>headerBorderRadius</Code>
                </td>
                <td>Header</td>
                <td>-</td>
                <td>4px</td>
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
        title: "WAI-ARIA",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                WAI-ARIA authoring practices -{" "}
                <DxcLink href="https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/data-grids/" newWindow>
                  Data Grid Examples
                </DxcLink>
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
];

const DataGridSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/data-grid/specs/DataGridSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default DataGridSpecsPage;
