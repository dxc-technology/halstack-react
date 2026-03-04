import PageHeading from "@/common/PageHeading";
import DxcQuickNavContainer from "@/common/QuickNavContainer";
import { DxcContainer, DxcFlex, DxcHeading, DxcParagraph } from "@dxc-technology/halstack-react";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          In order to understand what a theme is, we need to recognize that the definition of colors, sizes, and shapes
          is an intrinsic part of a design system. Because these parameters are essential for guaranteeing accessibility
          and a solid user experience, having the ability to change them must be handled carefully. In simpler terms:
          themes are basically a list of properties that allow you to override fundamental decisions of the design
          system.
        </DxcParagraph>
        <DxcParagraph>
          Color and logos are some fundamental elements of any design system. It communicates brand identity, guides
          user interaction, and establishes visual hierarchy. A well-structured foundation of colors and logos ensures
          consistency across interfaces, reinforces accessibility, and enhances the emotional impact of the product.
        </DxcParagraph>
        <DxcParagraph>
          The Theme Generator is designed to take the manual work out of setting up tokens by allowing you to adapt core
          elements—like colors and logos—without compromising the structural integrity of the design system. Instead of
          picking dozens of individual values by hand, you simply provide your core colors (Primary, Secondary,
          Tertiary, and Neutral) along with your Semantic colors (Info, Success, Warning, and Error), and the tool does
          the rest. It automatically builds a complete list of ready-to-use tokens and provides the ability to configure
          your brand logos.
        </DxcParagraph>
        <DxcParagraph>
          The tool tries to ensure optimal contrast ratios for readability and accessibility, aligning as closely as
          possible with WCAG 2.1 standards. It automatically adjusts the generated tokens to aim for the right contrast
          levels, helping you build interfaces that are inclusive and easy to read for all users.
        </DxcParagraph>
        <DxcParagraph>
          By combining these scalable palettes with a logical naming system, the generator creates a "plug-and-play"
          theme that is easier to implement and maintain.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "How to use the Theme Generator",
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
                You can select your desired values using the color picker or entering the specific hex values for your
                core colors (Primary, Secondary, Tertiary, and Neutral) along with your semantic colors (Info, Success,
                Warning, and Error). These values will be used to generate the list of tokens that can be seen applied
                in the next step.
              </DxcParagraph>
            ),
          },
          {
            title: "Branding details",
            content: (
              <>
                <DxcParagraph>
                  Brand logos can be uploaded to see how they appear within our application layout components and the
                  favicon can also be uploaded. The main logo will be assigned to the Header (or the Sidenav if the
                  Header is not available). The Footer logo is divided into two versions (default and reduced
                  footer),and the final slot is reserved for the favicon.
                </DxcParagraph>
                <DxcParagraph>
                  <strong>Note:</strong> Since we do not host these images, they are for visualization purposes only.
                  They help to see the theme in context, but they will be left as empty in the exported theme file to be
                  replaced with the correct asset paths.
                </DxcParagraph>
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
              Once colors are set, you can move to the next step to see your theme in action. By applying your newly
              generated tokens to actual components and layouts, you can get a good sense of the look and feel of the
              chosen colors and logos in a live environment.
            </DxcParagraph>
            <DxcParagraph>
              In this screen, you can add individual components or choose from premade layout examples to see exactly
              how the theme applies to a live interface. Note that you can visualize either individual components or
              layouts, but not both at the same time. Use the toggle switch to choose your preferred view, and use the
              selection menu to pick the specific elements you want to appear in the preview area. It is also possible
              to clean up the whole preview area using the remove button inside it.
            </DxcParagraph>
            <DxcParagraph>
              At any point of the process if a color doesn't look quite right in a specific layout, you can jump back to
              the previous step at any time to tweak your core or semantic color values.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Step 3: Review and export",
        content: (
          <>
            <DxcParagraph>
              In the third and last step, you can perform a final review of your configuration.
            </DxcParagraph>
            <DxcParagraph>
              This step displays a full list of the generated tokens so you can take a final look and review them. They
              can be copied directly to the clipboard or exported as a file. If you need to make a change after you've
              exported, you can still go back and keep tweaking the configurations.
            </DxcParagraph>
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
          <PageHeading>
            <DxcHeading level={1} text="Theme Generator User Guide" />
          </PageHeading>
          <DxcQuickNavContainer sections={sections} startHeadingLevel={2} />
        </DxcFlex>
      </DxcContainer>
    </DxcFlex>
  );
};

export default ThemeGeneratorUserGuidePage;
