import Head from "next/head";
import type { ReactElement } from "react";
import ColorCodePage from "../../../screens/principles/color/code/ColorCodePage";
import ColorPageLayout from "../../../screens/principles/color/ColorPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Color — Halstack Design System</title>
      </Head>
      <ColorCodePage />
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <ColorPageLayout>{page}</ColorPageLayout>;
};

export default Index;
