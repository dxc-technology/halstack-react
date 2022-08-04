import Head from "next/head";
import { ReactElement } from "react";
import ColorUsagePage from "../../../screens/principles/color/usage/ColorUsagePage";
import ColorPageLayout from "../../../screens/principles/color/ColorPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Color Usage — Halstack Design System</title>
      </Head>
      <ColorUsagePage />
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ColorPageLayout>{page}</ColorPageLayout>;
};

export default Usage;
