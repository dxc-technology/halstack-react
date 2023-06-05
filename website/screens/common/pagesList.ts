import { componentsList } from "./componentList";
type ComponentStatus = "Ready" | "Deprecated" | "Experimental";

export type LinkDetails = {
  label: string;
  path: string;
  status: ComponentStatus;
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
  { label: "Introduction", path: "/overview/introduction", status: "Ready" },
  { label: "Releases", path: "/overview/releases", status: "Ready" },
];
const utilitiesLinks: LinkDetails[] = [
  {
    label: "Halstack Provider",
    path: "/utilities/halstack-provider",
    status: "Ready",
  },
];

const principlesLinks: LinkDetails[] = [
  { label: "Color", path: "/principles/color", status: "Ready" },
  { label: "Spacing", path: "/principles/spacing", status: "Ready" },
  { label: "Typography", path: "/principles/typography", status: "Ready" },
  { label: "Layout", path: "/principles/layout", status: "Ready" },
  { label: "Themes", path: "/principles/themes", status: "Ready" },
  { label: "Localization", path: "/principles/localization", status: "Ready" },
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
