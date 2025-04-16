import Head from "next/head";
import type { ReactElement } from "react";
import NumberInputCodePage from "screens/components/number-input/code/NumberInputCodePage";
import NumberInputPageLayout from "screens/components/number-input/NumberInputPageLayout";

const Code = () => (
  <>
    <Head>
      <title>Number input code — Halstack Design System</title>
    </Head>
    <NumberInputCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <NumberInputPageLayout>{page}</NumberInputPageLayout>;

export default Code;
