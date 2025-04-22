import Head from "next/head";
import type { ReactElement } from "react";
import SwitchPageLayout from "screens/components/switch/SwitchPageLayout";
import SwitchCodePage from "screens/components/switch/code/SwitchCodePage";

const Code = () => (
  <>
    <Head>
      <title>Switch code — Halstack Design System</title>
    </Head>
    <SwitchCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <SwitchPageLayout>{page}</SwitchPageLayout>;

export default Code;
