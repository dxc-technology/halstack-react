import Head from "next/head";
import type { ReactElement } from "react";
import WizardPageLayout from "../../../screens/components/wizard/WizardPageLayout";
import WizardSpecsPage from "../../../screens/components/wizard/specs/WizardSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Wizard Specs — Halstack Design System</title>
      </Head>
      <WizardSpecsPage></WizardSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <WizardPageLayout>{page}</WizardPageLayout>;
};

export default Specifications;
