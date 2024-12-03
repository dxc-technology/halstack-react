import Image from "@/common/Image";
import { DxcLink, DxcBulletedList, DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import AlertAnatomyImage from "./images/alert_anatomy.png";
import BannerAlertSpecsImage from "./images/alert_banner_specs.png";
import InlineAlertSpecsImage from "./images/alert_inline_specs.png";
import ModalAlertSpecsImage from "./images/alert_modal_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
        <Figure caption="Banner alert design specifications">
          <Image src={BannerAlertSpecsImage} alt="Banner alert design specifications" />
        </Figure>
        <Figure caption="Modal alert design specifications">
          <Image src={ModalAlertSpecsImage} alt="Modal alert design specifications" />
        </Figure>
        <Figure caption="Inline alert design specifications">
          <Image src={InlineAlertSpecsImage} alt="Inline alert design specifications" />
        </Figure>
      </>
    ),
  },

  {
    title: "Anatomy",
    content: (
      <>
        <Image src={AlertAnatomyImage} alt="Alert anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Container</DxcBulletedList.Item>
          <DxcBulletedList.Item>Icon</DxcBulletedList.Item>
          <DxcBulletedList.Item>Title</DxcBulletedList.Item>
          <DxcBulletedList.Item>Pagination</DxcBulletedList.Item>
          <DxcBulletedList.Item>Divider</DxcBulletedList.Item>
          <DxcBulletedList.Item>Close action icon</DxcBulletedList.Item>
          <DxcBulletedList.Item>Buttons</DxcBulletedList.Item>
          <DxcBulletedList.Item>Description</DxcBulletedList.Item>
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
                  <Code>errorBackgroundColor</Code>
                </td>
                <td>Container (error)</td>
                <td>
                  <Code>color-red-100</Code>
                </td>
                <td>#ffe6e9</td>
              </tr>
              <tr>
                <td>
                  <Code>errorIconColor</Code>
                </td>
                <td>Icon (error)</td>
                <td>
                  <Code>color-red-700</Code>
                </td>
                <td>#d0011b</td>
              </tr>
              <tr>
                <td>
                  <Code>fontColor</Code>
                </td>
                <td>Alert</td>
                <td>
                  <Code>color-grey-900</Code>
                </td>
                <td>#333333</td>
              </tr>
              <tr>
                <td>
                  <Code>infoBackgroundColor</Code>
                </td>
                <td>Container (info)</td>
                <td>
                  <Code>color-blue-100</Code>
                </td>
                <td>#e6f4ff</td>
              </tr>
              <tr>
                <td>
                  <Code>infoIconColor</Code>
                </td>
                <td>Icon (info)</td>
                <td>
                  <Code>color-blue-700</Code>
                </td>
                <td>#0086e6</td>
              </tr>
              <tr>
                <td>
                  <Code>modalBackgroundColor</Code>
                </td>
                <td>Container (modal)</td>
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
              <tr>
                <td>
                  <Code>successBackgroundColor</Code>
                </td>
                <td>Container (success)</td>
                <td>
                  <Code>color-green-100</Code>
                </td>
                <td>#eafaef</td>
              </tr>
              <tr>
                <td>
                  <Code>successIconColor</Code>
                </td>
                <td>Icon (success)</td>
                <td>
                  <Code>color-green-700</Code>
                </td>
                <td>#24a148</td>
              </tr>
              <tr>
                <td>
                  <Code>warningBackgroundColor</Code>
                </td>
                <td>Container (warning)</td>
                <td>
                  <Code>color-yellow-100</Code>
                </td>
                <td>#fef9e6</td>
              </tr>
              <tr>
                <td>
                  <Code>warningIconColor</Code>
                </td>
                <td>Icon (warning)</td>
                <td>
                  <Code>color-yellow-700</Code>
                </td>
                <td>#c59f07</td>
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
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>iconSize</Code>
                </td>
                <td>Icon</td>
                <td>-</td>
                <td>24px</td>
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
                <td>Alert</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>'Open Sans', sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>fontSize</Code>
                </td>
                <td>Alert</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>fontStyle</Code>
                </td>
                <td>Alert</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>fontWeight</Code>
                </td>
                <td>Alert</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>modalTitleFontSize</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-scale-05</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>modalTitleFontWeight</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-weight-bold</Code>
                </td>
                <td>700</td>
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
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <DxcLink newWindow href="https://w3c.github.io/aria/#alert">
                Alert role
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
        subSections: [
          {
            title: "Authoring Practices Guide (APG)",
            content: (
              <DxcBulletedList>
                <DxcBulletedList.Item>
                  <DxcLink newWindow href="https://www.w3.org/WAI/ARIA/apg/patterns/alert/">
                    Alert pattern
                  </DxcLink>
                </DxcBulletedList.Item>
                <DxcBulletedList.Item>
                  <DxcLink newWindow href="https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/">
                    Alert and message dialogs pattern
                  </DxcLink>
                </DxcBulletedList.Item>
              </DxcBulletedList>
            ),
          },
        ],
      },
    ],
  },
];

const AlertSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/alert/specs/AlertSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default AlertSpecsPage;
