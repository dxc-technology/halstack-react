import Head from "next/head";
import type { ReactElement } from "react";
import ContextualMenuSpecsPage from "../../../screens/components/contextual-menu/specs/ContextualMenuSpecsPage";
import ContextualMenuPageLayout from "../../../screens/components/contextual-menu/ContextualMenuPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Contextual Menu Specs — Halstack Design System</title>
      </Head>
      <ContextualMenuSpecsPage></ContextualMenuSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <ContextualMenuPageLayout>{page}</ContextualMenuPageLayout>;
};

export default Specifications;
