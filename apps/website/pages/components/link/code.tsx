import Head from "next/head";
import type { ReactElement } from "react";
import LinkPageLayout from "screens/components/link/LinkPageLayout";
import LinkCodePage from "screens/components/link/code/LinkCodePage";

const Code = () => (
  <>
    <Head>
      <title>Link code — Halstack Design System</title>
    </Head>
    <LinkCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <LinkPageLayout>{page}</LinkPageLayout>;

export default Code;
