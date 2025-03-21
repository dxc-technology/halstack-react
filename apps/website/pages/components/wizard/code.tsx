import Head from "next/head";
import type { ReactElement } from "react";
import WizardPageLayout from "screens/components/wizard/WizardPageLayout";
import WizardCodePage from "screens/components/wizard/code/WizardCodePage";

const Code = () => (
  <>
    <Head>
      <title>Wizard code — Halstack Design System</title>
    </Head>
    <WizardCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <WizardPageLayout>{page}</WizardPageLayout>;

export default Code;
