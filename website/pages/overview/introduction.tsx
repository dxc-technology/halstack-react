import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import IntroductionPage from "../../screens/overview/introduction/IntroductionPage";

const Introduction = () => {
  const router = useRouter();

  useEffect(() => {
    const { asPath } = router;
    asPath === "/" && router.push("/overview/introduction");
  }, [router]);

  return (
    <>
      <Head>
        <title>Introduction — Halstack Design System</title>
      </Head>
      <IntroductionPage></IntroductionPage>
    </>
  );
};

export default Introduction;
