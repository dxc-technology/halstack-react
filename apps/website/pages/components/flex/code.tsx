import Head from "next/head";
import type { ReactElement } from "react";
import FlexPageLayout from "screens/components/flex/FlexPageLayout";
import FlexCodePage from "screens/components/flex/code/FlexCodePage";

const Code = () => (
  <>
    <Head>
      <title>Flex code — Halstack Design System</title>
    </Head>
    <FlexCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <FlexPageLayout>{page}</FlexPageLayout>;

export default Code;
