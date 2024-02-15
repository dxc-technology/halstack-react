import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import {
  DxcFlex,
  DxcLink,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import icons from "./images/Halstack_Icons.jpg";
import Link from "next/link";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <Image src={icons} /*objectFit={'contain'}*/ height={"400%"} alt="Halstack Icons" />
        <DxcParagraph>
          Use icons within the context of commonly used components such as
          buttons, links, navigation items, or status indicators.
        </DxcParagraph>
        <DxcParagraph>
          Icon sizes can vary based on use case and application context. The
          icons that are currently used within Halstack components follow a
          24x24px size including the background or space around the icon.
        </DxcParagraph>
        <DxcParagraph>
          Do not use icons that fill the entire space allotted for the icon. All
          icons currently implemented maintain a minimum of 4px padding (the
          largest solid icon occupies a maximum of 20px width or height). Make
          sure to maintain scaling proportions and aspect ratios when resizing
          icons. When using colors, make sure to consider the context of the
          icon being used as well as the consistency of visual information being
          presented. Currently implemented icons use base colors of black or
          white (when implemented on a solid color) for consistency and employ
          green, red, and blue colors that are associated with common
          notifications such as success, error, or information. When adding
          icons to that are not currently implemented as part the design kit,
          refer to the {" "}
          <Link
            href="https://fonts.google.com/icons"
            passHref
            legacyBehavior
          >
            <DxcLink>Material Symbols</DxcLink>
          </Link>{" "}
             icon library and coordinate with the
          Halstack team for alignment and documentation. We can make
          recommendations based on past icon implementations or we can simply
          add them as further references for icons that are currently being used
          alongside Halstack components.
        </DxcParagraph>

      </>
    ),
  },
];
const IconographyUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/principles/iconography/usage/IconographyUsagePage.tsx" />
    </DxcFlex>
  );
};

export default IconographyUsagePage;
