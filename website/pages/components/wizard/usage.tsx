import Head from "next/head";
import type { ReactElement } from "react";
import WizardPageLayout from "../../../screens/components/wizard/WizardPageLayout";
import WizardUsagePage from "../../../screens/components/wizard/usage/WizardUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Wizard Usage — Halstack Design System</title>
      </Head>
      <WizardUsagePage></WizardUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <WizardPageLayout>{page}</WizardPageLayout>;
};

export default Usage;
