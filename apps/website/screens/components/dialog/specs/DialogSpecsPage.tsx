import { DxcLink, DxcBulletedList, DxcFlex, DxcTable, DxcParagraph } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import dialogAnatomyImage from "./images/dialog_anatomy.png";
import dialogSpecsImage from "./images/dialog_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Dialog design specifications">
        <Image src={dialogSpecsImage} alt="Dialog design specifications" />
      </Figure>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={dialogAnatomyImage} alt="Dialog anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Dialog container</DxcBulletedList.Item>
          <DxcBulletedList.Item>Title</DxcBulletedList.Item>
          <DxcBulletedList.Item>Close action</DxcBulletedList.Item>
          <DxcBulletedList.Item>Dialog actions</DxcBulletedList.Item>
          <DxcBulletedList.Item>Content</DxcBulletedList.Item>
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
                  <Code>backgroundColor</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>boxShadowColor</Code>
                </td>
                <td>Container shadow</td>
                <td>
                  <Code>color-grey-300-a</Code>
                </td>
                <td>#00000033</td>
              </tr>
              <tr>
                <td>
                  <Code>closeIconColor</Code>
                </td>
                <td>Icon close</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>closeIconBackgroundColor</Code>
                </td>
                <td>Icon close</td>
                <td>
                  <Code>color-transparent</Code>
                </td>
                <td>transparent</td>
              </tr>
              <tr>
                <td>
                  <Code>closeIconBorderColor</Code>
                </td>
                <td>Icon close</td>
                <td>-</td>
                <td>-</td>
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
                  <Code>font-family</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans, sans-serif&#39;</td>
              </tr>
              <tr>
                <td>
                  <Code>font-size</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-scale-05</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>font-weight</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-weight-semibold</Code>
                </td>
                <td>600</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Border",
        content: (
          <>
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
                    <Code>closeIconBorderThickness</Code>
                  </td>
                  <td>Icon close</td>
                  <td>
                    <Code>border-width-0</Code>
                  </td>
                  <td>0px</td>
                </tr>
                <tr>
                  <td>
                    <Code>closeIconBorderStyle</Code>
                  </td>
                  <td>Icon close</td>
                  <td>
                    <Code>border-style-solid</Code>
                  </td>
                  <td>solid</td>
                </tr>
                <tr>
                  <td>
                    <Code>closeIconBorderRadius</Code>
                  </td>
                  <td>Icon close</td>
                  <td>
                    <Code>border-radius-small</Code>
                  </td>
                  <td>0.125rem / 2px</td>
                </tr>
              </tbody>
            </DxcTable>
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
                  <td>Container</td>
                  <td>
                    <Code>border-width-0</Code>
                  </td>
                  <td>0rem / 0px</td>
                </tr>
                <tr>
                  <td>
                    <Code>border-style</Code>
                  </td>
                  <td>Container</td>
                  <td>
                    <Code>border-style-none</Code>
                  </td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <Code>border-radius</Code>
                  </td>
                  <td>Container</td>
                  <td>
                    <Code>border-radius-medium</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
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
                  <Code>margin-right</Code>
                </td>
                <td>Title icon</td>
                <td>
                  <Code>spacing-12</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>margin-bottom</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
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
                <th>Property</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>min-width</Code>
                </td>
                <td>Container</td>
                <td>-</td>
                <td>696px</td>
              </tr>
              <tr>
                <td>
                  <Code>max-width</Code>
                </td>
                <td>Container</td>
                <td>-</td>
                <td>80%</td>
              </tr>
              <tr>
                <td>
                  <Code>width</Code>
                </td>
                <td>Close action</td>
                <td>-</td>
                <td>24px</td>
              </tr>
              <tr>
                <td>
                  <Code>height</Code>
                </td>
                <td>Close action</td>
                <td>-</td>
                <td>24px</td>
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
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Understanding WCAG 2.2 -{" "}
                <DxcLink newWindow href="https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html">
                  2.1.2 No Keyboard Trap
                </DxcLink>
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Understanding WCAG 2.2 -{" "}
                <DxcLink newWindow href="https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html">
                  2.4.3 Focus Order
                </DxcLink>
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "WAI-ARIA",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink newWindow href="https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal">
                3.9 Dialog (Modal)
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink newWindow href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/dialog-modal/dialog.html">
                Modal Dialog Example
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const DialogSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/dialog/specs/DialogSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default DialogSpecsPage;
