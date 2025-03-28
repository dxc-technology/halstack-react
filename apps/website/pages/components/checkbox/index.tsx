import Head from "next/head";
import type { ReactElement } from "react";
import CheckboxOverviewPage from "screens/components/checkbox/overview/CheckboxOverviewPage";
import CheckboxPageLayout from "screens/components/checkbox/CheckboxPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Checkbox — Halstack Design System</title>
    </Head>
    <CheckboxOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <CheckboxPageLayout>{page}</CheckboxPageLayout>;

export default Index;
