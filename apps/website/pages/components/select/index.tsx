import Head from "next/head";
import type { ReactElement } from "react";
import SelectPageLayout from "screens/components/select/SelectPageLayout";
import SelectOverviewPage from "screens/components/select/overview/SelectOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Select — Halstack Design System</title>
    </Head>
    <SelectOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <SelectPageLayout>{page}</SelectPageLayout>;

export default Index;
