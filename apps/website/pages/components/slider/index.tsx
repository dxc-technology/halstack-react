import Head from "next/head";
import type { ReactElement } from "react";
import SliderPageLayout from "screens/components/slider/SliderPageLayout";
import SliderCodePage from "screens/components/slider/code/SliderCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Slider — Halstack Design System</title>
      </Head>
      <SliderCodePage></SliderCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <SliderPageLayout>{page}</SliderPageLayout>;
};

export default Index;
