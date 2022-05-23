import {
  DxcTable,
  DxcStack,
  DxcText,
  DxcList,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import spacingImage from "./images/wizard_specs_spacing.png";
import stepperImage from "./images/wizard_specs_stepper.png";
import statesImage from "./images/wizard_states.png";
import anatomyImage from "./images/wizard_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
        <Figure caption="Wizard stepper specifications">
          <Image src={stepperImage} alt="Wizard stepper specifications" />
        </Figure>
        <Figure caption="Wizard variants spacing specifications">
          <Image
            src={spacingImage}
            alt="Wizard variants spacing specifications"
          />
        </Figure>
      </>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcText as="p">
          States: <strong>enabled</strong>, <strong>focus</strong>,{" "}
          <strong>selected</strong>, <strong>unvisited</strong> and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Example of the wizard stepper states">
          <Image src={statesImage} alt="Example of the wizard stepper states" />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Figure caption="Wizard component anatomy">
          <Image src={anatomyImage} alt="Wizard component anatomy" />
        </Figure>
        <DxcList type="number">
          <DxcText>Stepper</DxcText>
          <DxcText>Label</DxcText>
          <DxcText>Separator</DxcText>
          <DxcText>
            Helper text <em>(Optional)</em>
          </DxcText>
          <DxcText>
            Step validator <em>(Optional)</em>
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
                  <Code>stepperFontColor</Code>
                </td>
                <td>Stepper text</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedStepperFontColor</Code>
                </td>
                <td>Stepper:selected text</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>unvisitedStepperFontColor</Code>
                </td>
                <td>Stepper:unvisited text</td>
                <td>
                  <Code>color-grey-700</Code>
                </td>
                <td>#666666</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledStepperFontColor</Code>
                </td>
                <td>Stepper:disabled text</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>stepperBackgroundColor</Code>
                </td>
                <td>Stepper background</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedStepperBackgroundColor</Code>
                </td>
                <td>Stepper:selected background</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>unvisitedStepperBackgroundColor</Code>
                </td>
                <td>Stepper:unvisited background</td>
                <td>
                  <Code>color-grey-700</Code>
                </td>
                <td>#666666</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledStepperBackgroundColor</Code>
                </td>
                <td>Stepper:disabled background</td>
                <td>
                  <Code>color-grey-100</Code>
                </td>
                <td>#f2f2f2</td>
              </tr>
              <tr>
                <td>
                  <Code>stepperBorderColor</Code>
                </td>
                <td>Stepper border</td>
                <td>
                  <Code>coor-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedStepperBorderColor</Code>
                </td>
                <td>Stepper:selected border</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>unvisitedStepperBorderColor</Code>
                </td>
                <td>Stepper:unvisited border</td>
                <td>
                  <Code>color-grey-700</Code>
                </td>
                <td>#666666</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledStepperBorderColor</Code>
                </td>
                <td>Stepper:disabled border</td>
                <td>
                  <Code>color-grey-100</Code>
                </td>
                <td>#f2f2f2</td>
              </tr>
              <tr>
                <td>
                  <Code>labelFontColor</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>activeLabelFontColor</Code>
                </td>
                <td>Label:active</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledLabelFontColor</Code>
                </td>
                <td>Label:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>helperTextFontColor</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>helperTextActiveFontColor</Code>
                </td>
                <td>Helper text: active</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>separatorColor</Code>
                </td>
                <td>Separator</td>
                <td>
                  <Code>color-grey-700</Code>
                </td>
                <td>#666666</td>
              </tr>
              <tr>
                <td>
                  <Code>focusColor</Code>
                </td>
                <td>Focus outline</td>
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
          <>
            <DxcText as="p">
              Different values can be applied to each side of the component:
              <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code>,{" "}
              <Code>right</Code>.
            </DxcText>
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
          </>
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
                  <Code>stepperFontSize</Code>
                </td>
                <td>Stepper text</td>
                <td>
                  <Code>font-scale-03</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>stepperFontFamily</Code>
                </td>
                <td>Stepper text</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>Open Sans</td>
              </tr>
              <tr>
                <td>
                  <Code>stepperFontStyle</Code>
                </td>
                <td>Stepper text</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>stepperFontWeight</Code>
                </td>
                <td>Stepper text</td>
                <td>
                  <Code>font-style-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>stepperFontTracking</Code>
                </td>
                <td>Stepper text</td>
                <td>
                  <Code>font-tracking-wide-02</Code>
                </td>
                <td>0.05em</td>
              </tr>
              <tr>
                <td>
                  <Code>labelFontSize</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-scale-03</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>labelFontFamily</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>Open Sans</td>
              </tr>
              <tr>
                <td>
                  <Code>labelFontStyle</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>labelFontWeight</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-style-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>labelFontTracking</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-tracking-normal</Code>
                </td>
                <td>0em</td>
              </tr>
              <tr>
                <td>
                  <Code>helperTextFontSize</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>helperTextFontFamily</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>Open Sans</td>
              </tr>
              <tr>
                <td>
                  <Code>helperTextFontStyle</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>helperTextFontWeight</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-style-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>helperTextFontTracking</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-tracking-normal</Code>
                </td>
                <td>0em</td>
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
                  <Code>stepperBorderStyle</Code>
                </td>
                <td>Stepper border</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
              </tr>
              <tr>
                <td>
                  <Code>stepperBorderWidth</Code>
                </td>
                <td>Stepper border</td>
                <td>
                  <Code>border-width-2</Code>
                </td>
                <td>2px</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedStepperBorderWidth</Code>
                </td>
                <td>Stepper border:selected</td>
                <td>
                  <Code>border-width-2</Code>
                </td>
                <td>2px</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledStepperBorderWidth</Code>
                </td>
                <td>Stepper border:disabled</td>
                <td>
                  <Code>border-width-2</Code>
                </td>
                <td>2px</td>
              </tr>
              <tr>
                <td>
                  <Code>stepperBorderWidth</Code>
                </td>
                <td>Stepper border-radius</td>
                <td>
                  <Code>border-radius-full</Code>
                </td>
                <td>9999px</td>
              </tr>
              <tr>
                <td>
                  <Code>separatorBorderWidth</Code>
                </td>
                <td>Separator</td>
                <td>
                  <Code>border-width-1</Code>
                </td>
                <td>1px</td>
              </tr>
              <tr>
                <td>
                  <Code>separatorBorderStyle</Code>
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
                  <Code>width</Code>
                </td>
                <td>Stepper</td>
                <td>-</td>
                <td>32px</td>
              </tr>
              <tr>
                <td>
                  <Code>height</Code>
                </td>
                <td>Stepper</td>
                <td>-</td>
                <td>32px</td>
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
                  <Code>margin-left</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>spacing-12</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>margin-left</Code>
                </td>
                <td>Step container</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>margin-right</Code>
                </td>
                <td>Step container</td>
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
                  <Code>height</Code>/ <Code>width</Code>
                </td>
                <td>Custom icon</td>
                <td>20/20px</td>
              </tr>
              <tr>
                <td>
                  <Code>height</Code>/ <Code>width</Code>
                </td>
                <td>Validation icon</td>
                <td>18/18px</td>
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
          <DxcList>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships"
                newWindow
              >
                SC 1.3.1: Info and Relationships
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html"
                newWindow
              >
                SC 2.2.1: Timing Adjustable
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html"
                newWindow
              >
                SC 2.2.2: Pause, Stop, Hide
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html"
                newWindow
              >
                SC 3.3.2: Labels or Instructions
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
              Web accessibility tutorials -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/tutorials/forms/multi-page/"
                newWindow
              >
                Multi-page forms
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const WizardSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/wizard/specs/WizardSpecsPage.tsx" />
    </DxcStack>
  );
};

export default WizardSpecsPage;
