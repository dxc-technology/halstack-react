import Head from "next/head";
import type { ReactElement } from "react";
import TypographyPageLayout from "screens/components/typography/TypographyPageLayout";
import TypographyOverviewPage from "screens/components/typography/overview/TypographyOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Typography — Halstack Design System</title>
    </Head>
    <TypographyOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <TypographyPageLayout>{page}</TypographyPageLayout>;

export default Index;
