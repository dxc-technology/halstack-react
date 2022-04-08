import Head from "next/head";
import type { ReactElement } from "react";
import PasswordInputSpecsPage from "../../../screens/components/password-input/specs/PasswordInputSpecsPage";
import PasswordInputPageLayout from "../../../screens/components/password-input/PasswordInputPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Password Input Specs — Halstack Design System</title>
      </Head>
      <PasswordInputSpecsPage></PasswordInputSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <PasswordInputPageLayout>{page}</PasswordInputPageLayout>;
};

export default Specifications;
