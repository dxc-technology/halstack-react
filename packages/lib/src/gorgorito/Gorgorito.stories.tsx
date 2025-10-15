import { Meta, StoryObj } from "@storybook/react-vite";
import DxcGorgorito from "./Gorgorito";
import DxcFlex from "../flex/Flex";
import Title from "../../.storybook/components/Title";
import ExampleContainer, { PseudoState } from "../../.storybook/components/ExampleContainer";
import GorgoritoPropsType, { Status } from "./types";

export default {
  title: "Gorgorito",
  component: DxcGorgorito,
} satisfies Meta<typeof DxcGorgorito>;

type Story = StoryObj<typeof DxcGorgorito>;

type GroupingKey = "size" | "shape" | "color" | "statusPosition" | "statusMode" | "pseudoState";

type GorgoritoRowProps = {
  sizes?: GorgoritoPropsType["size"][];
  shapes?: GorgoritoPropsType["shape"][];
  colors?: GorgoritoPropsType["color"][];
  icon?: GorgoritoPropsType["icon"];
  statusModes?: Status["mode"][];
  statusPositions?: (Status["position"] | undefined)[];
  pseudoStates?: (PseudoState | undefined)[];
  groupBy?: GroupingKey[];
};

const GorgoritoRow = ({
  sizes = ["medium"],
  shapes = ["circle"],
  colors = ["neutral"],
  icon,
  statusModes,
  statusPositions = [],
  pseudoStates = [],
  groupBy = ["size"],
}: GorgoritoRowProps) => {
  const getValuesForKey = (key?: GroupingKey) => {
    switch (key) {
      case "size":
        return sizes as string[];
      case "shape":
        return shapes as string[];
      case "color":
        return colors as string[];
      case "statusPosition":
        return statusPositions as string[];
      case "statusMode":
        return statusModes as string[];
      case "pseudoState":
        return pseudoStates;
      default:
        return [];
    }
  };

  const renderGroup = (
    level: number,
    filters: {
      size?: GorgoritoPropsType["size"];
      shape?: GorgoritoPropsType["shape"];
      color?: GorgoritoPropsType["color"];
      statusMode?: Status["mode"];
      statusPosition?: Status["position"];
      pseudoState?: PseudoState;
    }
  ): JSX.Element | JSX.Element[] => {
    if (level >= groupBy.length) {
      const sizesToRender = filters.size ? [filters.size] : sizes;
      const colorsToRender = filters.color ? [filters.color] : colors;
      const shapesToRender = filters.shape ? [filters.shape] : shapes;
      const positionsToRender = filters.statusPosition
        ? [filters.statusPosition]
        : statusPositions.length
          ? statusPositions
          : [undefined];
      const modesToRender = filters.statusMode ? [filters.statusMode] : statusModes?.length ? statusModes : [undefined];

      const pseudoStatesEnabled = !!filters.pseudoState;

      return shapesToRender.map((shape) => (
        <DxcFlex
          key={`shape-${shape}-${String(filters.size ?? "all")}-${String(filters.color ?? "all")}`}
          gap="var(--spacing-gap-l)"
          wrap="wrap"
        >
          {sizesToRender.map((size) =>
            colorsToRender.map((color) =>
              positionsToRender.map((position) =>
                modesToRender.map((mode) => (
                  <ExampleContainer
                    key={`${size}-${shape}-${color}-${mode}-${position ?? "none"}`}
                    pseudoState={filters.pseudoState}
                  >
                    <DxcGorgorito
                      size={size}
                      shape={shape}
                      color={color}
                      icon={icon}
                      status={position && mode ? { position, mode: mode } : undefined}
                      onClick={pseudoStatesEnabled ? () => console.log("") : undefined}
                    />
                  </ExampleContainer>
                ))
              )
            )
          )}
        </DxcFlex>
      ));
    }

    const key = groupBy[level];
    const values = getValuesForKey(key);

    return values.map((value) => {
      const newFilters = { ...filters };
      if (key === "size") newFilters.size = value as GorgoritoPropsType["size"];
      else if (key === "shape") newFilters.shape = value as GorgoritoPropsType["shape"];
      else if (key === "color") newFilters.color = value as GorgoritoPropsType["color"];
      else if (key === "statusPosition") newFilters.statusPosition = value as Status["position"];
      else if (key === "statusMode") newFilters.statusMode = value as Status["mode"];
      else if (key === "pseudoState") newFilters.pseudoState = value as PseudoState;

      return (
        <div key={`${key}-${String(value)}`}>
          <Title title={String(value)} theme="light" level={3 + level} />
          {renderGroup(level + 1, newFilters)}
        </div>
      );
    });
  };

  return <>{renderGroup(0, {})}</>;
};

export const Shapes: Story = {
  render: () => (
    <>
      <Title title="Shapes" theme="light" level={2} />
      <GorgoritoRow
        sizes={["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]}
        shapes={["circle", "square"]}
        groupBy={["shape", "size"]}
      />
    </>
  ),
};

export const Colors: Story = {
  render: () => (
    <>
      <Title title="Colors" theme="light" level={2} />
      <GorgoritoRow
        sizes={["medium"]}
        shapes={["circle"]}
        colors={["neutral", "primary", "secondary", "tertiary", "success", "warning", "error", "info", "transparent"]}
        groupBy={["color"]}
      />
    </>
  ),
};

export const Statuses: Story = {
  render: () => (
    <>
      <Title title="Statuses" theme="light" level={2} />
      <GorgoritoRow
        sizes={["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]}
        colors={["neutral", "primary", "secondary", "tertiary", "success", "warning", "error", "info", "transparent"]}
        shapes={["circle"]}
        statusModes={["default", "info", "success", "warning", "error"]}
        statusPositions={["top", "bottom"]}
        groupBy={["statusPosition", "statusMode", "color"]}
      />
    </>
  ),
};

export const PseudoStates: Story = {
  render: () => (
    <>
      <Title title="Pseudo states" theme="light" level={2} />
      <GorgoritoRow
        sizes={["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]}
        shapes={["circle"]}
        statusModes={["success"]}
        statusPositions={[undefined, "top", "bottom"]}
        pseudoStates={[undefined, "pseudo-hover", "pseudo-focus", "pseudo-active"]}
        groupBy={["pseudoState", "size"]}
      />
    </>
  ),
};

export const Types: Story = {
  render: () => (
    <>
      <Title title="Icon (custom)" theme="light" level={2} />
      <GorgoritoRow
        sizes={["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]}
        shapes={["circle"]}
        icon="settings"
        groupBy={["size"]}
      />
      <Title title="Icon (default)" theme="light" level={2} />
      <GorgoritoRow
        sizes={["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]}
        shapes={["circle"]}
        groupBy={["size"]}
      />
    </>
  ),
};
