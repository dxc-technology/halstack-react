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
                  <Code>warningIconColor</Code>
                </td>
                <td>Container border</td>
                <td>
                  <Code>color-yellow-700</Code>
                </td>
                <td>#c59f07</td>
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
                  <Code>titleFontColor</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>color-grey-900</Code>
                </td>
                <td>#333333</td>
              </tr>
              <tr>
                <td>
                  <Code>messageFontColor</Code>
                </td>
                <td>Message</td>
                <td>
                  <Code>color-grey-900</Code>
                </td>
                <td>#333333</td>
              </tr>
              <tr>
                <td>
                  <Code>navigationTextFontColor</Code>
                </td>
                <td>Navigation text</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
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
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>modalTitleFontSize</Code>
                </td>
                <td>Title (modal)</td>
                <td>
                  <Code>font-scale-05</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontStyle</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontWeight</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-bold</Code>
                </td>
                <td>bold</td>
              </tr>
              <tr>
                <td>
                  <Code>messageFontFamily</Code>
                </td>
                <td>Message</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif;</td>
              </tr>
              <tr>
                <td>
                  <Code>messageFontSize</Code>
                </td>
                <td>Message</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>messageFontStyle</Code>
                </td>
                <td>Message</td>
                <td>
                  <Code>font-normal</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>messageFontWeight</Code>
                </td>
                <td>Message</td>
                <td>
                  <Code>font-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>navigationTextFontFamily</Code>
                </td>
                <td>Navigation text</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>navigationTextFontSize</Code>
                </td>
                <td>Navigation text</td>
                <td>
                  <Code>font-scale-01</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>navigationTextFontStyle</Code>
                </td>
                <td>Message</td>
                <td>
                  <Code>font-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>navigationTextFontWeight</Code>
                </td>
                <td>Message</td>
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
                  <Code>borderRadius</Code>
                </td>
                <td>Container border</td>
                <td>
                  <Code>border-radius-medium</Code>
                </td>
                <td>0.25rem / 4px</td>
              </tr>
              <tr>
                <td>
                  <Code>boxShadowOffsetX</Code>
                </td>
                <td>Container shadow</td>
                <td>
                  <Code>-</Code>
                </td>
                <td>1px</td>
              </tr>
              <tr>
                <td>
                  <Code>boxShadowOffsetY</Code>
                </td>
                <td>Container shadow</td>
                <td>
                  <Code>-</Code>
                </td>
                <td>4px</td>
              </tr>
              <tr>
                <td>
                  <Code>boxShadowBlur</Code>
                </td>
                <td>Container shadow</td>
                <td>
                  <Code>-</Code>
                </td>
                <td>6px</td>
              </tr>
              <tr>
                <td>
                  <Code>boxShadowSpreadRadius</Code>
                </td>
                <td>Container shadow</td>
                <td>
                  <Code>-</Code>
                </td>
                <td>0px</td>
              </tr>
              <tr>
                <td>
                  <Code>boxShadowColor</Code>
                </td>
                <td>Container shadow</td>
                <td>
                  <Code></Code>
                </td>
                <td></td>
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
                  <Code>modalPaddingTop</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>modalPaddingRight</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>modalPaddingBottom</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>modalPaddingLeft</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>paddingTop</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>paddingRight</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-12</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>paddingBottom</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>paddingLeft</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-12</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>iconPaddingRight</Code>
                </td>
                <td>Icon</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>titlePaddingRight</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>spacing-4</Code>
                </td>
                <td>0.25rem / 4px</td>
              </tr>
              <tr>
                <td>
                  <Code>messagePaddingLeft</Code>
                </td>
                <td>Message</td>
                <td>
                  <Code>spacing-4</Code>
                </td>
                <td>0.25rem / 4px</td>
              </tr>
              <tr>
                <td>
                  <Code>messagePaddingRight</Code>
                </td>
                <td>Message</td>
                <td>
                  <Code>spacing-12</Code>
                </td>
                <td>0.75rem / 12px</td>
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
                <td>24x24px</td>
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
        title: "WCWAG",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink newWindow href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html">
                SC 4.1.3 Status Messages
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
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink newWindow href="https://www.w3.org/TR/wai-aria-practices-1.2/#alert">
                3.2 Alert
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink newWindow href="https://www.w3.org/TR/wai-aria-practices-1.2/#alertdialog">
                3.3 Alert and Message dialogs
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink newWindow href="https://www.w3.org/TR/wai-aria-practices/examples/alert/alert.html">
                Alert design pattern
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/dialog-modal/alertdialog.html"
              >
                Alert Dialog design pattern
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
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
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/alert/specs/AlertSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default AlertSpecsPage;
