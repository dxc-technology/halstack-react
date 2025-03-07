import Head from "next/head";
import type { ReactElement } from "react";
import ToggleGroupPageLayout from "screens/components/toggle-group/ToggleGroupPageLayout";
import ToggleGroupOverviewPage from "screens/components/toggle-group/overview/ToggleGroupOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Toggle Group — Halstack Design System</title>
    </Head>
    <ToggleGroupOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <ToggleGroupPageLayout>{page}</ToggleGroupPageLayout>;

export default Index;
