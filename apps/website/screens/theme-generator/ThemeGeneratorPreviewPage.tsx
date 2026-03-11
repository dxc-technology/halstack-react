import {
  DxcButton,
  DxcContainer,
  DxcFlex,
  DxcSelect,
  DxcToggleGroup,
  DxcTypography,
  HalstackProvider,
} from "@dxc-technology/halstack-react";
import { ReactNode, SVGProps, useMemo, useState } from "react";
import componentsList from "../common/componentsList.json";
import { componentsRegistry, examplesRegistry } from "screens/utilities/theme-generator/componentsRegistry";
import styled from "@emotion/styled";
import { ComponentItem, Logos } from "./types";

// TODO: Both of these types should be exported by @dxc-technology/halstack-react when they are available
type SVG = ReactNode & SVGProps<SVGSVGElement>;

type ListOptionType = {
  /**
   * Element used as the icon that will be placed before the option label.
   * It can be an inline SVG or Material Symbol name. If the url option
   * is the chosen one, take into account that the component's
   * color styling tokens will not be applied to the image.
   */
  icon?: string | SVG;
  /**
   * Label of the option to be shown in the select's listbox.
   */
  label: string;
  /**
   * Value of the option. It should be unique and
   * not an empty string, which is reserved to the empty option added
   * by optional prop.
   */
  value: string;
};

const informationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      fill="#494949"
    />
  </svg>
);

const exampleOptions = [
  {
    label: "Application example",
    value: "/examples/application",
    icon: "settings",
  },
  {
    label: "Dashboard example",
    value: "/examples/dashboard",
    icon: "dashboard",
  },
  {
    label: "Form example",
    value: "/examples/form",
    icon: "description",
  },
];

const componentsExceptions = [
  "/components/application-layout",
  "/components/bleed",
  "/components/bulleted-list",
  "/components/card",
  "/components/container",
  "/components/dialog",
  "/components/flex",
  "/components/footer",
  "/components/grid",
  "/components/header",
  "/components/heading",
  "/components/image",
  "/components/inset",
  "/components/paragraph",
  "/components/popover",
  "/components/sidenav",
  "/components/typography",
];

const mapToSelectGroups = (data: ComponentItem[]) => {
  const collectOptions = (items: ComponentItem[]): ListOptionType[] => {
    return items.flatMap((item) => {
      const current: ListOptionType[] =
        item.path && !componentsExceptions.includes(item.path)
          ? [
              {
                label: item.label,
                value: item.path,
                icon: item.icon,
              },
            ]
          : [];

      const nested = item.links ? collectOptions(item.links) : [];

      return [...current, ...nested];
    });
  };

  return data.map((category) => ({
    label: category.label,
    options: collectOptions(category.links ?? []),
  }));
};

const ThemeGeneratorPreviewPage = ({ tokens, logos }: { tokens: Record<string, string>; logos: Logos }) => {
  const [mode, setMode] = useState<"components" | "examples">("components");

  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [selectedExample, setSelectedExample] = useState<string>("");

  const componentOptions = useMemo(() => {
    return mapToSelectGroups(componentsList as ComponentItem[]);
  }, []);

  const getLabelFromValue = (value: string) =>
    componentOptions.flatMap((group) => group.options).find((opt) => opt.value === value)?.label;

  const displayedPreview = useMemo(() => {
    if (mode === "components") {
      return selectedComponents.map((component) => {
        const ComponentPreview = componentsRegistry[component as keyof typeof componentsRegistry];
        return ComponentPreview ? (
          <DxcFlex direction="column" gap="var(--spacing-gap-s)" key={component}>
            <DxcTypography
              color="var(--color-fg-neutral-strongest)"
              fontFamily="var(--typography-font-family)"
              fontSize="var(--typography-title-s)"
              fontWeight="var(--typography-title-bold)"
            >
              {getLabelFromValue(component)}
            </DxcTypography>
            <ComponentPreview key={component} />
          </DxcFlex>
        ) : null;
      });
    }

    if (mode === "examples") {
      const ExamplePreview = examplesRegistry[selectedExample as keyof typeof examplesRegistry];
      return ExamplePreview ? <ExamplePreview logos={logos} key={selectedExample} /> : null;
    }

    return null;
  }, [mode, selectedComponents, selectedExample]);

  const processedLogos = useMemo(() => {
    return {
      mainLogo: logos.mainLogo?.[0]?.preview,
      footerLogo: logos.footerLogo?.[0]?.preview,
      footerReducedLogo: logos.footerReducedLogo?.[0]?.preview,
      favicon: logos.favicon?.[0]?.preview,
    };
  }, [logos]);

  return (
    <DxcContainer width="100%" height="100%">
      <DxcFlex direction="column" gap="var(--spacing-gap-s)" fullHeight>
        <DxcFlex direction="row" justifyContent="space-between" alignItems="center">
          <DxcToggleGroup
            options={[
              { label: "Components", icon: "category", value: 1 },
              { label: "Layout examples", icon: "dashboard", value: 2 },
            ]}
            value={mode === "components" ? 1 : 2}
            onChange={(value: number) => setMode(value === 1 ? "components" : "examples")}
          />
          {mode === "components" && (
            <DxcSelect
              placeholder="Select components"
              options={componentOptions}
              multiple
              value={selectedComponents}
              onChange={({ value }) => {
                setSelectedComponents(value);
              }}
              enableSelectAll
              searchable
              size="small"
            />
          )}

          {mode === "examples" && (
            <DxcSelect
              placeholder="Select examples"
              options={exampleOptions}
              value={selectedExample}
              onChange={({ value }) => {
                setSelectedExample(value);
              }}
              searchable
            />
          )}
        </DxcFlex>
        {mode === "examples" && (
          <DxcFlex gap="var(--spacing-gap-xs)">
            {informationIcon}
            <DxcTypography
              color="var(--color-fg-neutral-strongest)"
              fontSize="var(--typography-label-m)"
              fontWeight="var(--typography-label-regular)"
            >
              Some components are presentational examples. The layouts shown are for demonstration purposes only and do
              not represent actual components.
            </DxcTypography>
          </DxcFlex>
        )}
        {/* TODO: Turn this into a separate componente called PreviewArea or similar? */}
        <DxcContainer
          borderRadius="var(--border-radius-l)"
          border={{
            width: "var(--border-width-s)",
            color: "var(--border-color-neutral-medium)",
            style: "var(--border-style-default)",
          }}
          background={{ color: "var(--color-bg-neutral-lightest)" }}
          padding="var(--spacing-padding-s)"
          height="100%"
        >
          {(mode === "components" && selectedComponents.length > 0) || (mode === "examples" && !!selectedExample) ? (
            <DxcFlex direction="column" gap="var(--spacing-gap-ml)" fullHeight>
              <DxcFlex justifyContent="flex-end">
                <DxcButton
                  icon="filled_delete"
                  size={{ height: "medium" }}
                  title="Delete selection"
                  onClick={() => {
                    if (mode === "components") {
                      setSelectedComponents([]);
                    } else {
                      setSelectedExample("");
                    }
                  }}
                  mode="secondary"
                  semantic="error"
                  disabled={mode === "components" ? selectedComponents.length === 0 : !selectedExample}
                />
              </DxcFlex>
              <PreviewAreaContainer>
                <HalstackProvider opinionatedTheme={{ tokens, logos: processedLogos }}>
                  <DxcFlex direction="column" gap="var(--spacing-gap-l)">
                    {displayedPreview}
                  </DxcFlex>
                </HalstackProvider>
              </PreviewAreaContainer>
            </DxcFlex>
          ) : (
            <DxcFlex alignItems="center" justifyContent="center" fullHeight>
              <DxcTypography
                color="var(--color-fg-neutral-dark)"
                fontFamily="var(--typography-font-family)"
                fontSize="var(--typography-body-s)"
                fontWeight="var(--typography-body-regular)"
              >
                Select {mode === "components" ? "a component" : "an example"} to preview
              </DxcTypography>
            </DxcFlex>
          )}
        </DxcContainer>
      </DxcFlex>
    </DxcContainer>
  );
};

const PreviewAreaContainer = styled.div`
  flex: 1 1 0;
  overflow: auto;
`;

export default ThemeGeneratorPreviewPage;
