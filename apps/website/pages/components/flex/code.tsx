import Head from "next/head";
import type { ReactElement } from "react";
import FlexPageLayout from "screens/components/flex/FlexPageLayout";
import FlexCodePage from "screens/components/flex/code/FlexCodePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Flex Code — Halstack Design System</title>
      </Head>
      <FlexCodePage />
    </>
  );
};

Usage.getLayout = (page: ReactElement) => <FlexPageLayout>{page}</FlexPageLayout>;

export default Usage;
