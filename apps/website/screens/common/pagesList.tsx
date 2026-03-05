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
  { label: "Introduction", path: "/overview/introduction", icon: "info" },
  { label: "Installation", path: "/overview/installation", icon: "download" },
  { label: "Component lifecycle", path: "/overview/component-lifecycle", icon: "cycle" },
  { label: "Releases", path: "/overview/releases", icon: "deployed_code" },
];

const utilitiesLinks: LinkDetails[] = [
  {
    label: "Halstack provider",
    path: "/utilities/halstack-provider",
    icon: "integration_instructions",
  },
];

const principlesLinks: LinkDetails[] = [
  { label: "Data visualization", path: "/principles/data-visualization", icon: "insert_chart" },
  { label: "Localization", path: "/principles/localization", icon: "language" },
];

const tokensLinks: LinkDetails[] = [
  { label: "Overview", path: "/foundations/tokens" },
  { label: "Core tokens", path: "/foundations/tokens/core" },
  { label: "Alias tokens", path: "/foundations/tokens/alias" },
];

const foundationsLinks: (LinkDetails | LinksSectionDetails)[] = [
  { label: "Color", path: "/foundations/color", icon: "palette" },
  { label: "Elevation", path: "/foundations/elevation", icon: "layers" },
  { label: "Height", path: "/foundations/height", icon: "height" },
  { label: "Iconography", path: "/foundations/iconography", icon: "emoji_symbols" },
  { label: "Layout", path: "/foundations/layout", icon: "grid_on" },
  { label: "Spacing", path: "/foundations/spacing", icon: "space_bar" },
  { label: "Tokens", links: tokensLinks, icon: "token" },
  { label: "Typography", path: "/foundations/typography", icon: "font_download" },
];

const v16Links: LinkDetails[] = [
  { label: "Component updates", path: "/migration/16/component-updates" },
  { label: "Migrating to Emotion", path: "/migration/16/migrating-to-emotion" },
  { label: "Migrating tokens", path: "/migration/16/migrating-tokens" },
];

const migrationLinks: LinksSectionDetails[] = [{ label: "v16", links: v16Links, icon: "deployed_code_update" }];

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
