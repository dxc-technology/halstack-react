import { SVG } from "../../../../packages/lib/src/common/utils";
import componentsList from "./componentsList.json";

export type ComponentStatus = "experimental" | "new" | "stable" | "legacy" | "deprecated";

export type LinkDetails = {
  label: string;
  path: string;
  status?: ComponentStatus;
  icon?: string | SVG;
};

export type LinksSectionDetails = {
  label: string;
  links: (LinkDetails | LinksSectionDetails)[];
  icon?: string | SVG;
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
  { label: "Localization", path: "/principles/localization" },
];

const tokensLinks: LinkDetails[] = [
  { label: "Overview", path: "/foundations/tokens" },
  { label: "Core tokens", path: "/foundations/tokens/core" },
  { label: "Alias tokens", path: "/foundations/tokens/alias" },
];

const foundationsLinks: (LinkDetails | LinksSectionDetails)[] = [
  { label: "Color", path: "/foundations/color" },
  { label: "Elevation", path: "/foundations/elevation" },
  { label: "Height", path: "/foundations/height" },
  { label: "Iconography", path: "/foundations/iconography" },
  { label: "Layout", path: "/foundations/layout" },
  { label: "Spacing", path: "/foundations/spacing" },
  { label: "Tokens", links: tokensLinks },
  { label: "Typography", path: "/foundations/typography" },
];

const v16Links: LinkDetails[] = [
  { label: "Component updates", path: "/migration/16/component-updates" },
  { label: "Migrating to Emotion", path: "/migration/16/migrating-to-emotion" },
  { label: "Migrating tokens", path: "/migration/16/migrating-tokens" },
];

const migrationLinks: LinksSectionDetails[] = [{ label: "v16", links: v16Links }];

const componentsLinks = componentsList as (LinkDetails | LinksSectionDetails)[];

export const LinksSections: LinksSectionDetails[] = [
  { label: "Overview", links: overviewLinks },
  { label: "Principles", links: principlesLinks },
  { label: "Foundations", links: foundationsLinks },
  { label: "Migration", links: migrationLinks },
  { label: "Utilities", links: utilitiesLinks },
  { label: "Components", links: componentsLinks },
];

const isNavLink = (item: LinkDetails | LinksSectionDetails): item is LinkDetails => "path" in item;

const flattenLinks = (items: (LinkDetails | LinksSectionDetails)[]): LinkDetails[] =>
  items.flatMap((item) => (isNavLink(item) ? [item] : flattenLinks(item.links)));

const getCurrentLinkIndex = (links: LinkDetails[], currentPath: string) => {
  let current = -1;
  let best = 0;

  links.forEach((link, i) => {
    if (currentPath.startsWith(link.path) && link.path.length > best) {
      current = i;
      best = link.path.length;
    }
  });

  return current;
};

export const getNavigationLinks = (currentPath: string): NavigationLinks => {
  const flatLinks = flattenLinks(LinksSections);

  const index = getCurrentLinkIndex(flatLinks, currentPath);
  if (index === -1) return {};

  return {
    previousLink: flatLinks[index - 1],
    nextLink: flatLinks[index + 1],
  };
};
