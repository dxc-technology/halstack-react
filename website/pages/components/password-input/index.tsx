import Head from "next/head";
import type { ReactElement } from "react";
import PasswordInputUsagePage from "../../../screens/components/password-input/usage/PasswordInputUsagePage";
import PasswordInputPageLayout from "../../../screens/components/password-input/PasswordInputPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Password Input — Halstack Design System</title>
      </Head>
      <PasswordInputUsagePage></PasswordInputUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <PasswordInputPageLayout>{page}</PasswordInputPageLayout>;
};

export default Usage;
