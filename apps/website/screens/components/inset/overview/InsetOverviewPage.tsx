import { DxcBulletedList, DxcFlex, DxcLink, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The inset component is a container that provides spacing around its content. It can be used to create visual
          separation between elements in a layout.
        </DxcParagraph>
        <DxcParagraph>
          The inset component can be customized with different spacing options, allowing for flexible design choices. It
          is typically used in conjunction with other components to create a cohesive layout.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Use the inset component to create visual separation between elements in a layout.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Choose appropriate spacing values to ensure a balanced and visually appealing design.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Avoid excessive use of the inset component, as it may lead to a cluttered layout.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Use this component in conjunction with other layout components like{" "}
          <Link href="/components/flex" passHref legacyBehavior>
            <DxcLink>flex</DxcLink>
          </Link>{" "}
          and{" "}
          <Link href="/components/grid" passHref legacyBehavior>
            <DxcLink>grid</DxcLink>
          </Link>{" "}
          components to create consistent and semantic layouts.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Whenever possible, <strong>try to use the design tokens</strong> provided by the Halstack Design System, even
          though the component allows any value.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const InsetOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/inset/overview/InsetOverviewPage.tsx" />
  </DxcFlex>
);

export default InsetOverviewPage;
