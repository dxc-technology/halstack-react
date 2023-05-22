import {
  DxcHeading,
  DxcParagraph,
  DxcFlex,
  DxcSpinner,
  DxcGrid,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { useEffect, useState } from "react";
import HalstackMarkdownParser from "@/common/HalstackMarkdownParser";

type Release = {
  name: string;
  body: string;
};

const getSections = (releases: Release[]) => {
  let sections: { title: string; content: React.ReactNode }[] = [];
  releases?.forEach((release) => {
    sections?.push({
      title: release.name,
      content: <HalstackMarkdownParser markdown={release.body} />,
    });
  });
  return sections;
};

const Releases = () => {
  const [releases, setReleases] = useState<Release[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchVersions = async () => {
      const response = await fetch(
        "https://api.github.com/repos/dxc-technology/halstack-react/releases"
      );
      const releases: Release[] = await response.json();
      setReleases(releases);
      setIsLoading(false);
    };

    fetchVersions();
  }, []);

  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <DxcHeading level={1} text="Releases" weight="bold" />
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        {isLoading ? (
          <DxcGrid placeItems="center">
            <DxcSpinner label="Loading..." mode="large" />
          </DxcGrid>
        ) : releases ? (
          <QuickNavContainer
            sections={getSections(releases)}
            startHeadingLevel={2}
          />
        ) : (
          <DxcParagraph>No releases available for the moment.</DxcParagraph>
        )}
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/overview/releases/ReleasesPage.tsx" />
    </DxcFlex>
  );
};

export default Releases;
