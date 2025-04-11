import Head from "next/head";
import type { ReactElement } from "react";
import ButtonPageLayout from "screens/components/button/ButtonPageLayout";
import ButtonCodePage from "screens/components/button/code/ButtonCodePage";

const Code = () => (
  <>
    <Head>
      <title>Button code — Halstack Design System</title>
    </Head>
    <ButtonCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <ButtonPageLayout>{page}</ButtonPageLayout>;

export default Code;
