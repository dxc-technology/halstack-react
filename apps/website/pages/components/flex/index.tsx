import Head from "next/head";
import type { ReactElement } from "react";
import FlexPageLayout from "screens/components/flex/FlexPageLayout";
import FlexOverviewPage from "screens/components/flex/overview/FlexOverviewPage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Flex — Halstack Design System</title>
      </Head>
      <FlexOverviewPage />
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <FlexPageLayout>{page}</FlexPageLayout>;
};

export default Index;
