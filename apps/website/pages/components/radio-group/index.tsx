import Head from "next/head";
import type { ReactElement } from "react";
import RadioGroupPageLayout from "screens/components/radio-group/RadioGroupPageLayout";
import RadioGroupOverviewPage from "screens/components/radio-group/overview/RadioGroupOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Radio group — Halstack Design System</title>
    </Head>
    <RadioGroupOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <RadioGroupPageLayout>{page}</RadioGroupPageLayout>;

export default Index;
