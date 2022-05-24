import Image from "@/common/Image";
import {
  DxcLink,
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import AlertAnatomyImage from "./images/alert_anatomy.png";
import AlertStatesImage from "./images/alert_states.png";
import AlertSpecsImage from "./images/alert_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Component design specifications">
        <Image src={AlertSpecsImage} alt="Component design specifications" />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcText as="p">
          States for the close action of the alert component:{" "}
          <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, and <strong>active</strong>.
        </DxcText>
        <Figure caption="Alert action specs">
          <Image src={AlertStatesImage} alt="Alert action specs" />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={AlertAnatomyImage} alt="Alert anatomy" />
        <DxcList type="number">
          <DxcText>Container</DxcText>
          <DxcText>Icon</DxcText>
          <DxcText>Title</DxcText>
          <DxcText>Inline text</DxcText>
          <DxcText>Close action</DxcText>
          <DxcText>
            Content <em>(Optional)</em>
          </DxcText>
        </DxcList>
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
                  <Code>infoIconColor</Code>
                </td>
                <td>Icon</td>
                <td>
                  <Code>color-blue-800</Code>
                </td>
                <td>#0067b3</td>
              </tr>
              <tr>
                <td>
                  <Code>successIconColor</Code>
                </td>
                <td>Icon</td>
                <td>
                  <Code>color-green-700</Code>
                </td>
                <td>#24a148</td>
              </tr>
              <tr>
                <td>
                  <Code>warningIconColor</Code>
                </td>
                <td>Icon</td>
                <td>
                  <Code>color-yellow-700</Code>
                </td>
                <td>#c59f07</td>
              </tr>
              <tr>
                <td>
                  <Code>errorIconColor</Code>
                </td>
                <td>Icon</td>
                <td>
                  <Code>color-red-700</Code>
                </td>
                <td>#d0011b</td>
              </tr>
              <tr>
                <td>
                  <Code>infoBackgroundColor</Code>
                </td>
                <td>Container background</td>
                <td>
                  <Code>color-blue-100</Code>
                </td>
                <td>#e6f4ff</td>
              </tr>
              <tr>
                <td>
                  <Code>successBackgroundColor</Code>
                </td>
                <td>Container background</td>
                <td>
                  <Code>color-green-100</Code>
                </td>
                <td>#eafaef</td>
              </tr>
              <tr>
                <td>
                  <Code>warningBackgroundColor</Code>
                </td>
                <td>Container background</td>
                <td>
                  <Code>color-yellow-100</Code>
                </td>
                <td>#fef9e6</td>
              </tr>
              <tr>
                <td>
                  <Code>errorBackgroundColor</Code>
                </td>
                <td>Container background</td>
                <td>
                  <Code>color-red-100</Code>
                </td>
                <td>#ffe6e9</td>
              </tr>
              <tr>
                <td>
                  <Code>infoBorderColor</Code>
                </td>
                <td>Container border</td>
                <td>
                  <Code>color-blue-800</Code>
                </td>
                <td>#0067b3</td>
              </tr>
              <tr>
                <td>
                  <Code>successBorderColor</Code>
                </td>
                <td>Container border</td>
                <td>
                  <Code>color-green-700</Code>
                </td>
                <td>#24a148</td>
              </tr>
              <tr>
                <td>
                  <Code>warningBorderColor</Code>
                </td>
                <td>Container border</td>
                <td>
                  <Code>color-yellow-700</Code>
                </td>
                <td>#c59f07</td>
              </tr>
              <tr>
                <td>
                  <Code>errorBorderColor</Code>
                </td>
                <td>Container border</td>
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
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>inlineTextFontColor</Code>
                </td>
                <td>Inline text</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverActionBackgroundColor</Code>
                </td>
                <td>Action:hover</td>
                <td>
                  <Code>color-grey-100-a</Code>
                </td>
                <td>#0000000d</td>
              </tr>
              <tr>
                <td>
                  <Code>activeActionBackgroundColor</Code>
                </td>
                <td>Action:active</td>
                <td>
                  <Code>color-grey-200-a</Code>
                </td>
                <td>#0000001a</td>
              </tr>
              <tr>
                <td>
                  <Code>focusActionBorderColor</Code>
                </td>
                <td>Action:focus</td>
                <td>
                  <Code>color-blue-600</Code>
                </td>
                <td>#0095ff</td>
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
                <td>&#39;Open Sans&#39;, sans-serif;</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontSize</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-scale-01</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontWeight</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-bold</Code>
                </td>
                <td>600</td>
              </tr>
              <tr>
                <td>
                  <Code>inlineTextFontFamily</Code>
                </td>
                <td>Inline text</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif;</td>
              </tr>
              <tr>
                <td>
                  <Code>inlineTextFontSize</Code>
                </td>
                <td>Inline text</td>
                <td>
                  <Code>font-scale-01</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>inlineTextFontWeight</Code>
                </td>
                <td>Inline text</td>
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
                  <Code>borderThickness</Code>
                </td>
                <td>Container border</td>
                <td>
                  <Code>border-width-1</Code>
                </td>
                <td>1px</td>
              </tr>
              <tr>
                <td>
                  <Code>borderStyle</Code>
                </td>
                <td>Container border</td>
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
                  <Code>containerPaddingLeft</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-12</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>containerPaddingRight</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-12</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>iconMarginRight</Code>
                </td>
                <td>Icon</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>inlineTextPaddingLeft</Code>
                </td>
                <td>Inline text</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>titlePaddingLeft</Code>
                </td>
                <td>Title</td>
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
                <td>
                  <Code>-</Code>
                </td>
                <td>24x24px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Width",
        content: (
          <>
            <DxcText as="p">
              The alert component has a property that is customizable depending
              on the context and the scenario where the component is used. This
              property defines the size of the alert and it can get multiple
              values according to the needs of the application.
            </DxcText>
            <DxcText as="p">
              Widths for alert component: <strong>fill content</strong>,{" "}
              <strong>fit parent</strong>, <strong>small</strong>,{" "}
              <strong>medium</strong> and <strong>large</strong>.
            </DxcText>
            <DxcTable>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>small</Code>
                  </td>
                  <td>280px</td>
                </tr>
                <tr>
                  <td>
                    <Code>medium</Code>
                  </td>
                  <td>480px</td>
                </tr>
                <tr>
                  <td>
                    <Code>large</Code>
                  </td>
                  <td>820px</td>
                </tr>
                <tr>
                  <td>
                    <Code>fillParent</Code>
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <Code>fitContent</Code>
                  </td>
                  <td>-</td>
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
        title: "WCWAG",
        content: (
          <DxcList>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"
              >
                SC 4.1.3 Status Messages
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
      {
        title: "WAI-ARIA",
        content: (
          <DxcList>
            <DxcText>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/TR/wai-aria-practices-1.2/#alert"
              >
                3.2 Alert
              </DxcLink>
            </DxcText>
            <DxcText>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/TR/wai-aria-practices-1.2/#alertdialog"
              >
                3.3 Alert and Message dialogs
              </DxcLink>
            </DxcText>
            <DxcText>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/TR/wai-aria-practices/examples/alert/alert.html"
              >
                Alert design pattern
              </DxcLink>
            </DxcText>
            <DxcText>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/dialog-modal/alertdialog.html"
              >
                Alert Dialog design pattern
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const AlertSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/alert/specs/AlertSpecsPage.tsx" />
    </DxcStack>
  );
};

export default AlertSpecsPage;
