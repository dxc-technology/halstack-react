import { componentsList } from "./componentList";

export type LinkDetails = {
  label: string;
  path: string;
};

export type LinksSectionDetails = {
  label: string;
  links: LinkDetails[];
};

type NavigationLinks = {
  previousLink: LinkDetails | null;
  nextLink: LinkDetails | null;
};

export const themeGeneratorLinks = [
  "/theme-generator/opinionated-theme/",
  "/theme-generator/advanced-theme/",
];

const overviewLinks: LinkDetails[] = [
  { label: "Introduction", path: "/overview/introduction" },
];
const utilitiesLinks: LinkDetails[] = [
  {
    label: "Halstack Provider",
    path: "/utilities/halstack-provider",
  },
];

const principlesLinks: LinkDetails[] = [
  { label: "Color", path: "/principles/color" },
  { label: "Spacing", path: "/principles/spacing" },
  { label: "Typography", path: "/principles/typography" },
  { label: "Layout", path: "/principles/layout" },
  { label: "Themes", path: "/principles/themes" },
  { label: "Localization", path: "/principles/localization" },
];

const componentsLinks: LinkDetails[] = componentsList;

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
  if (currentLinkIndex === -1) {
    return { previousLink: null, nextLink: null };
  }
  const nextLinkIndex = currentLinkIndex + 1;
  const nextLinkExists = nextLinkIndex < links.length;
  const previousLinkIndex = currentLinkIndex - 1;
  const previousLinkExists = previousLinkIndex >= 0;
  return {
    previousLink: previousLinkExists ? links[previousLinkIndex] : null,
    nextLink: nextLinkExists ? links[nextLinkIndex] : null,
  };
};
