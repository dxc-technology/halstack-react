import Head from "next/head";
import type { ReactElement } from "react";
import ChipOverviewPage from "screens/components/chip/overview/ChipOverviewPage";
import ChipPageLayout from "screens/components/chip/ChipPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Chip — Halstack Design System</title>
      </Head>
      <ChipOverviewPage />
    </>
  );
};

Index.getLayout = (page: ReactElement) => <ChipPageLayout>{page}</ChipPageLayout>;

export default Index;
