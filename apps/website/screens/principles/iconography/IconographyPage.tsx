import { DxcHeading, DxcParagraph, DxcFlex, DxcLink, DxcBulletedList } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import Link from "next/link";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Image from "@/common/Image";
import iconographyExamples from "./images/iconography_examples.png";
import buttonsWithIcon from "./examples/buttonsWithIcon";
import Example from "@/common/example/Example";
import Code from "@/common/Code";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Icons are used to visually represent commands, common actions, and locations. To facilitate providing users
          with a standardized and more widely adopted icon library, the Halstack Design System leverages the{" "}
          <Link href="https://fonts.google.com/icons" passHref legacyBehavior>
            <DxcLink>Material Symbols</DxcLink>
          </Link>{" "}
          library. This library contains over three thousand open source symbols implemented as an icon font that is
          maintained by Google as part of the{" "}
          <Link href="https://m3.material.io/" passHref legacyBehavior>
            <DxcLink>Material Design System</DxcLink>
          </Link>
          .
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Usage",
    content: (
      <>
        <Image src={iconographyExamples} alt="Halstack Icons" />
        <DxcParagraph>
          Icon sizes may vary depending on the specific use case and the context of the application. Within Halstack
          components, most icons adhere to a 24x24px size, inclusive of any surrounding background or space. However,
          there are instances where 20x20 or 16x16 icon sizes are employed to better align with the visual context of
          the element.
        </DxcParagraph>
        <DxcParagraph>
          At present, the default color of icons is consistently inherited from the parent during implementation. In
          cases where no color is specified, icons default to black, though there are exceptions where the default color
          is purple.
        </DxcParagraph>
        <DxcParagraph>
          Icons are available in both outlined and filled variants, with the current implementation utilizing base
          colors of black or white to maintain visual coherence.
        </DxcParagraph>
        <DxcParagraph>
          While an extensive library of over three thousand icons is available, there may arise situations necessitating
          custom icons—particularly those representing brands, companies, or organizations. In such cases, an SVG
          implementation option is provided. However, it's recommended to limit the use of custom icons to these
          specific scenarios, as adherence to the existing icon set is strongly encouraged for design consistency.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Use icons within the context of commonly used components such as buttons, links, navigation items or status
            indicators.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Do not use icons that fill the entire space allotted for the icon. All icons currently implemented maintain
            a minimum of 1px of space each side (the largest solid icon occupies a maximum of 22px width or height).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Make sure to maintain scaling proportions and aspect ratios when resizing icons.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            When using colors, make sure to consider the context of the icon being used as well as the consistency of
            visual information being presented.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Limit the usage of colors green, red, and blue to common notifications such as success, error, or
            information.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Halstack Users are encouraged to share their own variations of icon usage with the Halstack team so that
            these can be added as references.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "A code example",
    content: (
      <>
        <DxcParagraph>
          Icons are present in most of the Halstack components through the prop <Code>icon</Code>. Below are some
          examples, using the <Code>DxcButton</Code>, representing the possibilities offered by our Design System:
        </DxcParagraph>
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Regular icon</DxcBulletedList.Item>
          <DxcBulletedList.Item>Filled icon</DxcBulletedList.Item>
          <DxcBulletedList.Item>Custom icon</DxcBulletedList.Item>
        </DxcBulletedList>
        <Example example={buttonsWithIcon} />
      </>
    ),
  },
];

export default function IconographyPage() {
  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <DxcHeading level={1} text="Iconography" />
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/principles/iconography/IconographyPage.tsx" />
    </DxcFlex>
  );
}
