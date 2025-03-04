import Head from "next/head";
import type { ReactElement } from "react";
import ContextualMenuPageLayout from "screens/components/contextual-menu/ContextualMenuPageLayout";
import ContextualMenuCodePage from "screens/components/contextual-menu/code/ContextualMenuCodePage";

const Code = () => (
  <>
    <Head>
      <title>Contextual Menu Code — Halstack Design System</title>
    </Head>
    <ContextualMenuCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <ContextualMenuPageLayout>{page}</ContextualMenuPageLayout>;

export default Code;
