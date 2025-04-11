import Head from "next/head";
import type { ReactElement } from "react";
import TextInputPageLayout from "screens/components/text-input/TextInputPageLayout";
import TextInputCodePage from "screens/components/text-input/code/TextInputCodePage";

const Code = () => (
  <>
    <Head>
      <title>Text input code — Halstack Design System</title>
    </Head>
    <TextInputCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <TextInputPageLayout>{page}</TextInputPageLayout>;

export default Code;
