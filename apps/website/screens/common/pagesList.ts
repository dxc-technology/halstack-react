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
  { label: "Data visualization", path: "/principles/data-visualization" },
  { label: "Layout", path: "/principles/layout" },
  { label: "Localization", path: "/principles/localization" },
];

const foundationsLinks: LinkDetails[] = [
  { label: "Color", path: "/foundations/color" },
  { label: "Elevation", path: "/foundations/elevation" },
  { label: "Height", path: "/foundations/height" },
  { label: "Iconography", path: "/foundations/iconography" },
  { label: "Spacing", path: "/foundations/spacing" },
  { label: "Typography", path: "/foundations/typography" },
  { label: "Tokens", path: "/foundations/tokens" },
];

const componentsLinks = componentsList as LinkDetails[];

export const LinksSections: LinksSectionDetails[] = [
  { label: "Overview", links: overviewLinks },
  { label: "Principles", links: principlesLinks },
  { label: "Foundations", links: foundationsLinks },
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
  return currentLinkIndex === -1
    ? {}
    : {
        nextLink: currentLinkIndex + 1 < links.length ? links[currentLinkIndex + 1] : undefined,
        previousLink: currentLinkIndex - 1 >= 0 ? links[currentLinkIndex - 1] : undefined,
      };
};
