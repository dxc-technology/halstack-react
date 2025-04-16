import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import ReleasesPage from "screens/overview/releases/ReleasesPage";

type Release = {
  body: string;
  name: string;
  published_at: string;
};

export const getStaticProps: GetStaticProps<{
  releases: Release[];
}> = async () => {
  const response = await fetch("https://api.github.com/repos/dxc-technology/halstack-react/releases");
  const releases: Release[] = await response.json();
  return { props: { releases } };
};

const Releases = ({ releases }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Releases — Halstack Design System</title>
    </Head>
    <ReleasesPage releases={releases} />
  </>
);

export default Releases;
