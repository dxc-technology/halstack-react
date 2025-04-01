import { DxcTable, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import specsImage from "./images/quickNav_specs.png";
import anatomyImage from "./images/quickNav_anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <Figure caption="Quick nav design specifications">
        <Image src={specsImage} alt="Quicknav design specifications" />
      </Figure>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomyImage} alt="Quick nav anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            Title <em>(Optional)</em>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Links</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Sublinks <em>(Optional)</em>
          </DxcBulletedList.Item>
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
                  <Code>fontColor</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>color-grey-700</Code>
                </td>
                <td>#666666</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverFontColor</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>color-purple-600</Code>
                </td>
                <td>#7d2fd0</td>
              </tr>
              <tr>
                <td>
                  <Code>dividerBorderColor</Code>
                </td>
                <td>Divider</td>
                <td>
                  <Code>color-grey-400</Code>
                </td>
                <td>#bfbfbf</td>
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
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>fontFamily</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>Open Sans, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>fontSize</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem</td>
              </tr>
              <tr>
                <td>
                  <Code>fontStyle</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>font-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>fontWeight</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>font-regular</Code>
                </td>
                <td>400</td>
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
                  <Code>paddingTop</Code>
                </td>
                <td>Content</td>
                <td>
                  <Code>spacing-3</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>paddingBottom</Code>
                </td>
                <td>Content</td>
                <td>
                  <Code>spacing-3</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>paddingLeft</Code>
                </td>
                <td>Content</td>
                <td>
                  <Code>spacing-5</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>paddingRight</Code>
                </td>
                <td>Content</td>
                <td>
                  <Code>spacing-5</Code>
                </td>
                <td>1rem / 16px</td>
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
                  <Code>focusBorderColor</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>color-blue-600</Code>
                </td>
                <td>#0095ff</td>
              </tr>
              <tr>
                <td>
                  <Code>focusBorderStyle</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
              </tr>
              <tr>
                <td>
                  <Code>focusBorderThickness</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>border-radius-small</Code>
                </td>
                <td>0.125rem / 2px</td>
              </tr>
              <tr>
                <td>
                  <Code>focusBorderRadius</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>border-radius-small</Code>
                </td>
                <td>0.125rem / 2px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
];

const QuickNavOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/quick-nav/overview/QuickNavOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default QuickNavOverviewPage;
