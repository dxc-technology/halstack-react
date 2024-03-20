import { componentsList } from "./componentList";
type ComponentStatus = "ready" | "deprecated" | "experimental";

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
  { label: "Introduction", path: "/overview/introduction", status: "ready" },
  { label: "Releases", path: "/overview/releases", status: "ready" },
];
const utilitiesLinks: LinkDetails[] = [
  {
    label: "Halstack Provider",
    path: "/utilities/halstack-provider",
    status: "ready",
  },
];

const principlesLinks: LinkDetails[] = [
  { label: "Color", path: "/principles/color", status: "ready" },
  { label: "Layout", path: "/principles/layout", status: "ready" },
  { label: "Localization", path: "/principles/localization", status: "ready" },
  { label: "Spacing", path: "/principles/spacing", status: "ready" },
  { label: "Themes", path: "/principles/themes", status: "ready" },
  { label: "Typography", path: "/principles/typography", status: "ready" },
  { label: "Iconography", path: "/principles/iconography", status: "ready" },
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
