import Head from "next/head";
import type { ReactElement } from "react";
import TextareaSpecsPage from "../../../screens/components/textarea/specs/TextareaSpecsPage";
import TextareaPageLayout from "../../../screens/components/textarea/TextareaPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Textarea Specs — Halstack Design System</title>
      </Head>
      <TextareaSpecsPage></TextareaSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <TextareaPageLayout>{page}</TextareaPageLayout>;
};

export default Specifications;
