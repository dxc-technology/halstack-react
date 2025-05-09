import { DxcParagraph, DxcFlex, DxcLink } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import Link from "next/link";
import { ReactNode } from "react";

const FooterPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/footer" },
    { label: "Usage", path: "/components/footer/usage" },
    { label: "Specifications", path: "/components/footer/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="Footer" />
          <DxcParagraph>
            Footers are a secondary element in a web page because they usually appear at the bottom and it is the last
            thing that the user interacts with. But the presence of the footer must be designed in every application and
            be part of it (consumer or back-office) as it is a key layout element to the overall experience. It is a
            choice of the designer to either leave the footer visible by default or push it down, depending on the use
            case.
          </DxcParagraph>
          <DxcParagraph>
            The footer is part of the application layout, so it can only be used inside of it. Please check the{" "}
            <Link href="/components/application-layout" passHref legacyBehavior>
              <DxcLink>DxcApplicationLayout</DxcLink>
            </Link>{" "}
            documentation.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default FooterPageHeading;
