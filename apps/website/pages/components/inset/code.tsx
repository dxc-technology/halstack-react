import Head from "next/head";
import type { ReactElement } from "react";
import InsetCodePage from "screens/components/inset/code/InsetCodePage";
import InsetPageLayout from "screens/components/inset/InsetPageLayout";

const Code = () => (
  <>
    <Head>
      <title>Inset code — Halstack Design System</title>
    </Head>
    <InsetCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <InsetPageLayout>{page}</InsetPageLayout>;

export default Code;
