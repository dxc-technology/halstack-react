import Head from "next/head";
import type { ReactElement } from "react";
import FlexPageLayout from "screens/components/flex/FlexPageLayout";
import FlexOverviewPage from "screens/components/flex/overview/FlexOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Flex — Halstack Design System</title>
    </Head>
    <FlexOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <FlexPageLayout>{page}</FlexPageLayout>;

export default Index;
