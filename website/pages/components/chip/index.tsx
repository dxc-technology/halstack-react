import Head from "next/head";
import type { ReactElement } from "react";
import ChipUsagePage from "../../../screens/components/chip/usage/ChipUsagePage";
import ChipPageLayout from "../../../screens/components/chip/ChipPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Chip — Halstack Design System</title>
      </Head>
      <ChipUsagePage></ChipUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ChipPageLayout>{page}</ChipPageLayout>;
};

export default Usage;
