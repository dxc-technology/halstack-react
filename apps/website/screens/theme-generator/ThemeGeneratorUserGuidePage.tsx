import Figure from "@/common/Figure";
import Image from "@/common/Image";
import DxcQuickNavContainer from "@/common/QuickNavContainer";
import { DxcContainer, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import step1 from "./images/Step_1.png";
import step2Components from "./images/Step_2_components.png";
import step2Layout from "./images/Step_2_layout.png";
import step3 from "./images/Step_3.png";

const sections = [
  {
    title: "Theme Generator User Guide",
    content: (
      <DxcParagraph>
        Building a custom theme is a simple three-step process. You can navigate between these steps at any time using
        the wizard at the top of the page or the navigation buttons at the bottom.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Step 1: Define your colors",
        content: <DxcParagraph>Start by setting the foundation of your brand.</DxcParagraph>,
        subSections: [
          {
            title: "Core colors and semantic colors",
            content: (
              <DxcParagraph>
                You can select the desired values using the <strong>color picker</strong> or entering the specific{" "}
                <strong>hex values</strong> for your core colors (
                <strong>Primary, Secondary, Tertiary, and Neutral</strong>) along with your semantic colors (
                <strong>Info, Success, Warning, and Error</strong>). These values will be used to generate the list of
                tokens that can be seen applied in the next step. These will be the <strong>base colors</strong> used to
                generate the rest of the tokens, so you can get a good idea of how your theme will look by just setting
                these few values. You can always go back and tweak them if you want to see how a different shade of a
                specific color looks in the preview step.
              </DxcParagraph>
            ),
          },
          {
            title: "Branding details",
            content: (
              <>
                <DxcParagraph>
                  Brand logos can be uploaded to see how they appear within our{" "}
                  <strong>application layout components</strong> and a favicon can also be uploaded. The{" "}
                  <strong>main logo</strong> will be assigned to the Header (or the Sidenav if the Header is not
                  available). The <strong>footer logo</strong> is divided into two (default and reduced footer) one for
                  each mode of the footer, and the final slot is reserved for the favicon.
                </DxcParagraph>
                <DxcParagraph>
                  <strong>Note:</strong> Since we do not host these images, they are{" "}
                  <strong>for visualization purposes only</strong>. They help to see the theme in context, but they will
                  be left as empty strings in the exported theme file to be replaced with the correct asset paths.
                </DxcParagraph>
                <Figure caption="Select your colors and branding details in the first step of the theme generator.">
                  <Image src={step1} alt="Theme generator step 1" />
                </Figure>
              </>
            ),
          },
        ],
      },
      {
        title: "Step 2: Preview your theme",
        content: (
          <>
            <DxcParagraph>
              Once colors are set, you can move to the next step to see your theme in action. By applying the newly
              generated tokens to real <strong>components and layouts</strong>, you will get a clear sense of the look
              and feel of the chosen colors and logos in a live environment.
            </DxcParagraph>
            <DxcParagraph>
              Remember that at any point of the process if a color doesn't look quite right in a specific layout, you
              can jump back to the previous step at any time to tweak your core or semantic color values.
            </DxcParagraph>
          </>
        ),
        subSections: [
          {
            title: "Component preview mode",
            content: (
              <>
                <DxcParagraph>
                  In this mode, you can add <strong>individual components</strong> to the preview area to see how your
                  specific tokens—such as primary button colors or semantic alerts—behave in isolation. Use the
                  selection menu to pick the specific elements you want to inspect.
                </DxcParagraph>
                <Figure caption="Preview your theme by applying the generated tokens to real components.">
                  <Image src={step2Components} alt="Theme generator step 2 components" />
                </Figure>
              </>
            ),
          },
          {
            title: "Layout preview mode",
            content: (
              <>
                <DxcParagraph>
                  This mode allows you to see how your theme looks when applied to different{" "}
                  <strong>layout options</strong>. You can see how the components look in different contexts and get a
                  better sense of the overall feel of your theme. You can switch between the available layouts to see
                  how your theme looks in each of them.
                </DxcParagraph>
                <Figure caption="Preview your theme by applying the generated tokens to different layout examples.">
                  <Image src={step2Layout} alt="Theme generator step 2 layout" />
                </Figure>
              </>
            ),
          },
        ],
      },
      {
        title: "Step 3: Review and export",
        content: (
          <>
            <DxcParagraph>
              In the third and last step, you can perform a <strong>final review</strong> of your configuration.
            </DxcParagraph>
            <DxcParagraph>
              This step displays a full <strong>list of the generated tokens</strong> so you can take a final look and
              review them. They can be <strong>copied</strong> directly to the clipboard or <strong>exported</strong> as
              a file. If you need to make a change after you've exported, you can still go back and keep tweaking the
              configurations.
            </DxcParagraph>
            <Figure caption="Review and export your theme in the third step of the theme generator">
              <Image src={step3} alt="Theme generator step 3" />
            </Figure>
          </>
        ),
      },
    ],
  },
];
const ThemeGeneratorUserGuidePage = () => {
  return (
    <DxcFlex justifyContent="center" alignItems="center">
      <DxcContainer maxWidth="80%" margin={{ top: "80px", bottom: "80px" }}>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <DxcQuickNavContainer sections={sections} startHeadingLevel={1} />
        </DxcFlex>
      </DxcContainer>
    </DxcFlex>
  );
};

export default ThemeGeneratorUserGuidePage;
