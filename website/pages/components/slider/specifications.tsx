import Head from "next/head";
import type { ReactElement } from "react";
import SliderPageLayout from "../../../screens/components/slider/SliderPageLayout";
import SliderSpecsPage from "../../../screens/components/slider/specs/SliderSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Slider Specs — Halstack Design System</title>
      </Head>
      <SliderSpecsPage></SliderSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <SliderPageLayout>{page}</SliderPageLayout>;
};

export default Specifications;
