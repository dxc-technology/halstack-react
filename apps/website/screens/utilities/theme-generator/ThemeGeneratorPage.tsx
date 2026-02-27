import { DxcButton, DxcContainer, DxcFlex, DxcSelect, DxcToggleGroup } from "@dxc-technology/halstack-react";
import { useEffect, useMemo, useState } from "react";
import componentsList from "../../common/componentsList.json";
import { ListOptionType } from "../../../../../packages/lib/src/select/types";
import { componentsRegistry } from "./componentsRegistry";

// JSON Structure type, this should go in the json file or somewhere else

type ComponentItem = {
  label: string;
  icon?: string;
  path?: string;
  status?: string;
  links?: ComponentItem[];
};

/////////////////////////////////////

const mapToSelectGroups = (data: ComponentItem[]) => {
  const collectOptions = (items: ComponentItem[]): ListOptionType[] => {
    return items.flatMap((item) => {
      const current: ListOptionType[] = item.path
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

const ThemeGeneratorPage = () => {
  const [mode, setMode] = useState<"components" | "examples">("components");

  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [selectedExamples, setSelectedExamples] = useState<string[]>([]);

  const componentOptions = useMemo(() => {
    return mapToSelectGroups(componentsList as ComponentItem[]);
  }, []);

  const options = [
    {
      label: "Layout examples",
      options: [
        { label: "Dashboard", value: "dashboard", icon: "dashboard" },
        { label: "Form page", value: "form", icon: "description" },
      ],
    },
  ];
  // TODO: REMOVE, QUICK FIX FOR NOW TO SSR
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  ////////////////////////////////////////

  return (
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
          />
        )}

        {mode === "examples" && (
          <DxcSelect
            placeholder="Select examples"
            options={options}
            multiple
            value={selectedExamples}
            onChange={({ value }) => {
              setSelectedExamples(value);
            }}
            enableSelectAll
          />
        )}
      </DxcFlex>
      {/* TODO: Turn this into a separate componente called PreviewArea or similar */}
      <DxcContainer
        borderRadius="var(--border-radius-l)"
        border={{
          width: "var(--border-width-s)",
          color: "var(--border-color-neutral-medium)",
          style: "var(--border-style-default)",
        }}
        background={{ color: "var(--color-bg-neutral-lightest)" }}
        padding="var(--spacing-padding-s)"
        overflow="auto"
        height="100%"
      >
        <DxcFlex direction="column" gap="1rem">
          <DxcFlex justifyContent="flex-end">
            <DxcButton
              icon="filled_delete"
              size={{ height: "medium" }}
              title="Delete selection"
              onClick={() => {
                if (mode === "components") {
                  setSelectedComponents([]);
                } else {
                  setSelectedExamples([]);
                }
              }}
              mode="secondary"
              semantic="error"
              disabled={mode === "components" ? selectedComponents.length === 0 : selectedExamples.length === 0}
            />
          </DxcFlex>
          <DxcContainer overflow="auto" maxHeight="100%">
            {selectedComponents.map((component) => {
              const ComponentPreview = componentsRegistry[component as keyof typeof componentsRegistry];
              return ComponentPreview ? <ComponentPreview key={component} /> : null;
            })}
          </DxcContainer>
        </DxcFlex>
      </DxcContainer>
    </DxcFlex>
  );
};

export default ThemeGeneratorPage;
