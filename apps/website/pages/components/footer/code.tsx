import Head from "next/head";
import type { ReactElement } from "react";
import FooterPageLayout from "screens/components/footer/FooterPageLayout";
import FooterCodePage from "screens/components/footer/code/FooterCodePage";

const Code = () => (
  <>
    <Head>
      <title>Footer code — Halstack Design System</title>
    </Head>
    <FooterCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <FooterPageLayout>{page}</FooterPageLayout>;

export default Code;
