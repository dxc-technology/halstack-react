import Head from "next/head";
import type { ReactElement } from "react";
import ContainerOverviewPage from "screens/components/container/overview/ContainerOverviewPage";
import ContainerPageLayout from "screens/components/container/ContainerPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Container — Halstack Design System</title>
    </Head>
    <ContainerOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <ContainerPageLayout>{page}</ContainerPageLayout>;

export default Index;
