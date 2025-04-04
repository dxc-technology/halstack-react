import Head from "next/head";
import type { ReactElement } from "react";
import RadioGroupPageLayout from "screens/components/radio-group/RadioGroupPageLayout";
import RadioGroupCodePage from "screens/components/radio-group/code/RadioGroupCodePage";

const Code = () => (
  <>
    <Head>
      <title>Radio group code — Halstack Design System</title>
    </Head>
    <RadioGroupCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <RadioGroupPageLayout>{page}</RadioGroupPageLayout>;

export default Code;
