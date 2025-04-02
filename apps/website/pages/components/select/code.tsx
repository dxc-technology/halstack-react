import Head from "next/head";
import type { ReactElement } from "react";
import SelectPageLayout from "screens/components/select/SelectPageLayout";
import SelectCodePage from "screens/components/select/code/SelectCodePage";

const Code = () => (
  <>
    <Head>
      <title>Select code — Halstack Design System</title>
    </Head>
    <SelectCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <SelectPageLayout>{page}</SelectPageLayout>;

export default Code;
