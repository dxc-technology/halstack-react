import { DxcContainer, DxcFlex, DxcSelect, DxcToggleGroup } from "@dxc-technology/halstack-react";
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
    <>
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
          enableSelectAll // Should this be included?
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
          enableSelectAll // Should this be included?
        />
      )}
      {/* TODO: Turn this into a separate componente called PreviewArea or similar */}
      <DxcContainer
        borderRadius="var(--border-radius-l)"
        border={{
          width: "var(--border-width-s)",
          color: "var(--border-color-neutral-medium)",
          style: "var(--border-style-default)",
        }}
        background={{ color: "var(--color-bg-neutral-lightest)" }}
        minHeight="500px"
        padding="var(--spacing-padding-l)"
        overflow="auto"
      >
        <DxcFlex direction="column" gap="1rem">
          {selectedComponents.map((component) => {
            const ComponentPreview = componentsRegistry[component as keyof typeof componentsRegistry];
            return ComponentPreview ? <ComponentPreview key={component} /> : null;
          })}
        </DxcFlex>
      </DxcContainer>
    </>
  );
};

export default ThemeGeneratorPage;
