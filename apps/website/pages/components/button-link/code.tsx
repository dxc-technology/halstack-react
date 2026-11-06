import Head from "next/head";
import type { ReactElement } from "react";
import ButtonLinkPageLayout from "screens/components/button-link/ButtonLinkPageLayout";
import ButtonLinkCodePage from "screens/components/button-link/code/ButtonLinkCodePage";

const Code = () => (
  <>
    <Head>
      <title>Button Link code — Halstack Design System</title>
    </Head>
    <ButtonLinkCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <ButtonLinkPageLayout>{page}</ButtonLinkPageLayout>;

export default Code;
