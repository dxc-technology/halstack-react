import Head from "next/head";
import type { ReactElement } from "react";
import ImagePageLayout from "../../../screens/components/image/ImagePageLayout";
import ImageCodePage from "../../../screens/components/image/code/ImageCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Image — Halstack Design System</title>
      </Head>
      <ImageCodePage></ImageCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <ImagePageLayout>{page}</ImagePageLayout>;
};

export default Index;
