import Head from "next/head";
import type { ReactElement } from "react";
import FlexPageLayout from "../../../screens/components/flex/FlexPageLayout";
import FlexUsagePage from "../../../screens/components/flex/usage/FlexUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Flex Usage — Halstack Design System</title>
      </Head>
      <FlexUsagePage></FlexUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <FlexPageLayout>{page}</FlexPageLayout>;
};

export default Usage;
