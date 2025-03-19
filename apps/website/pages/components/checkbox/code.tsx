import Head from "next/head";
import type { ReactElement } from "react";
import CheckboxPageLayout from "screens/components/checkbox/CheckboxPageLayout";
import CheckboxCodePage from "screens/components/checkbox/code/CheckboxCodePage";

const Code = () => (
  <>
    <Head>
      <title>Checkbox code — Halstack Design System</title>
    </Head>
    <CheckboxCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <CheckboxPageLayout>{page}</CheckboxPageLayout>;

export default Code;
