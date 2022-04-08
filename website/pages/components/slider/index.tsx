import Head from "next/head";
import type { ReactElement } from "react";
import SliderPageLayout from "../../../screens/components/slider/SliderPageLayout";
import SliderUsagePage from "../../../screens/components/slider/usage/SliderUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Slider — Halstack Design System</title>
      </Head>
      <SliderUsagePage></SliderUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <SliderPageLayout>{page}</SliderPageLayout>;
};

export default Index;
