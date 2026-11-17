import Head from "next/head";
import type { ReactElement } from "react";
import AmountInputPageLayout from "screens/components/amount-input/AmountInputPageLayout";
import AmountInputCodePage from "screens/components/amount-input/code/AmountInputCodePage";

const Code = () => (
  <>
    <Head>
      <title>Amount input code — Halstack Design System</title>
    </Head>
    <AmountInputCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <AmountInputPageLayout>{page}</AmountInputPageLayout>;

export default Code;
