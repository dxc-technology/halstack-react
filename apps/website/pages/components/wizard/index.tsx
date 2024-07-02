import Head from "next/head";
import type { ReactElement } from "react";
import WizardPageLayout from "../../../screens/components/wizard/WizardPageLayout";
import WizardCodePage from "../../../screens/components/wizard/code/WizardCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Wizard — Halstack Design System</title>
      </Head>
      <WizardCodePage></WizardCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <WizardPageLayout>{page}</WizardPageLayout>;
};

export default Index;
