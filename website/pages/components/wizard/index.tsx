import Head from "next/head";
import type { ReactElement } from "react";
import WizardPageLayout from "../../../screens/components/wizard/WizardPageLayout";
import WizardUsagePage from "../../../screens/components/wizard/usage/WizardUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Wizard — Halstack Design System</title>
      </Head>
      <WizardUsagePage></WizardUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <WizardPageLayout>{page}</WizardPageLayout>;
};

export default Index;
