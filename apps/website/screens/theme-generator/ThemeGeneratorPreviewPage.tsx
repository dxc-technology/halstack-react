import {
  DxcButton,
  DxcContainer,
  DxcFlex,
  DxcSelect,
  DxcToggleGroup,
  DxcTypography,
  HalstackProvider,
} from "@dxc-technology/halstack-react";
import { useMemo, useState } from "react";
import componentsList from "../common/componentsList.json";
import { componentsRegistry, examplesRegistry } from "screens/utilities/theme-generator/componentsRegistry";
import { ListOptionType } from "../../../../packages/lib/src/select/types";
import styled from "@emotion/styled";
import { ComponentItem, Logos } from "./types";

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

  const displayedPreview = useMemo(() => {
    if (mode === "components") {
      return selectedComponents.map((component) => {
        const ComponentPreview = componentsRegistry[component as keyof typeof componentsRegistry];
        return ComponentPreview ? <ComponentPreview key={component} /> : null;
      });
    }

    if (mode === "examples") {
      const ExamplePreview = examplesRegistry[selectedExample as keyof typeof examplesRegistry];
      return ExamplePreview ? <ExamplePreview logos={logos} key={selectedExample} /> : null;
    }

    return null;
  }, [mode, selectedComponents, selectedExample]);

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
            <DxcFlex direction="column" gap="var(--spacing-gap-l)" fullHeight>
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
                <HalstackProvider opinionatedTheme={tokens}>
                  <DxcFlex
                    direction="column"
                    gap="var(--spacing-gap-l)"
                    alignItems={mode === "components" ? "flex-start" : "center"}
                  >
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
