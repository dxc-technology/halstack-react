import Head from "next/head";
import type { ReactElement } from "react";
import ContainerCodePage from "screens/components/container/code/ContainerCodePage";
import ContainerPageLayout from "screens/components/container/ContainerPageLayout";

const Code = () => (
  <>
    <Head>
      <title>Container code — Halstack Design System</title>
    </Head>
    <ContainerCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <ContainerPageLayout>{page}</ContainerPageLayout>;

export default Code;
