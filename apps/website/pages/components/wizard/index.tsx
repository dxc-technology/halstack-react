import Head from "next/head";
import type { ReactElement } from "react";
import WizardPageLayout from "screens/components/wizard/WizardPageLayout";
import WizardOverviewPage from "screens/components/wizard/overview/WizardOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Wizard — Halstack Design System</title>
    </Head>
    <WizardOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <WizardPageLayout>{page}</WizardPageLayout>;

export default Index;
