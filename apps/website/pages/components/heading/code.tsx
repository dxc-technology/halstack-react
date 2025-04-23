import Head from "next/head";
import type { ReactElement } from "react";
import HeadingCodePage from "screens/components/heading/code/HeadingCodePage";
import HeadingPageLayout from "screens/components/heading/HeadingPageLayout";

const Code = () => (
  <>
    <Head>
      <title>Heading code — Halstack Design System</title>
    </Head>
    <HeadingCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <HeadingPageLayout>{page}</HeadingPageLayout>;

export default Code;
