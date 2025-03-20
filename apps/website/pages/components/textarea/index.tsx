import Head from "next/head";
import type { ReactElement } from "react";
import TextareaOverviewPage from "screens/components/textarea/overview/TextareaOverviewPage";
import TextareaPageLayout from "screens/components/textarea/TextareaPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Textarea — Halstack Design System</title>
    </Head>
    <TextareaOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <TextareaPageLayout>{page}</TextareaPageLayout>;

export default Index;
