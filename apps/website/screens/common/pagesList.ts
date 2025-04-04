import componentsList from "./componentsList.json";

export type ComponentStatus = "experimental" | "new" | "stable" | "legacy" | "deprecated";

type LinkDetails = {
  label: string;
  path: string;
  status?: ComponentStatus;
};

export type LinksSectionDetails = {
  label: string;
  links: LinkDetails[];
};

type NavigationLinks = {
  previousLink?: LinkDetails;
  nextLink?: LinkDetails;
};

export const themeGeneratorLinks = ["/theme-generator/opinionated-theme/", "/theme-generator/advanced-theme/"];

const overviewLinks: LinkDetails[] = [
  { label: "Introduction", path: "/overview/introduction" },
  { label: "Installation", path: "/overview/installation" },
  { label: "Component lifecycle", path: "/overview/component-lifecycle" },
  { label: "Releases", path: "/overview/releases" },
];
const utilitiesLinks: LinkDetails[] = [
  {
    label: "Halstack provider",
    path: "/utilities/halstack-provider",
  },
];

const principlesLinks: LinkDetails[] = [
  { label: "Color", path: "/principles/color" },
  { label: "Data visualization", path: "/principles/data-visualization" },
  { label: "Iconography", path: "/principles/iconography" },
  { label: "Layout", path: "/principles/layout" },
  { label: "Localization", path: "/principles/localization" },
  { label: "Spacing", path: "/principles/spacing" },
  { label: "Themes", path: "/principles/themes" },
  { label: "Typography", path: "/principles/typography" },
];

const componentsLinks = componentsList as LinkDetails[];

export const LinksSections: LinksSectionDetails[] = [
  { label: "Overview", links: overviewLinks },
  { label: "Principles", links: principlesLinks },
  { label: "Utilities", links: utilitiesLinks },
  { label: "Components", links: componentsLinks },
];

const getCurrentLinkIndex = (links: LinkDetails[], currentPath: string) => {
  let currentLinkIndex = -1;
  let matchedWords = 0;
  links.forEach((link, index) => {
    if (currentPath.startsWith(link.path) && link.path.length > matchedWords) {
      currentLinkIndex = index;
      matchedWords = link.path.length;
    }
  });
  return currentLinkIndex;
};

export const getNavigationLinks = (currentPath: string): NavigationLinks => {
  const links = LinksSections.flatMap((section) => section.links);
  const currentLinkIndex = getCurrentLinkIndex(links, currentPath);
  if (currentLinkIndex === -1) return {};
  return {
    previousLink: currentLinkIndex + 1 < links.length ? links[currentLinkIndex + 1] : undefined,
    nextLink: currentLinkIndex - 1 >= 0 ? links[currentLinkIndex - 1] : undefined,
  };
};
