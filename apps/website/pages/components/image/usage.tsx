import Head from "next/head";
import type { ReactElement } from "react";
import ImagePageLayout from "screens/components/image/ImagePageLayout";
import ImageUsagePage from "screens/components/image/usage/ImageUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Image Usage — Halstack Design System</title>
      </Head>
      <ImageUsagePage></ImageUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ImagePageLayout>{page}</ImagePageLayout>;
};

export default Usage;
