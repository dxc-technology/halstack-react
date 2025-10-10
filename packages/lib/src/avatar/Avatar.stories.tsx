import { Meta, StoryObj } from "@storybook/react-vite";
import DxcAvatar from "./Avatar";
import DxcFlex from "../flex/Flex";
import Title from "../../.storybook/components/Title";
import ExampleContainer, { PseudoState } from "../../.storybook/components/ExampleContainer";
import AvatarPropsType, { Status } from "./types";

export default {
  title: "Avatar",
  component: DxcAvatar,
} satisfies Meta<typeof DxcAvatar>;

type Story = StoryObj<typeof DxcAvatar>;

type GroupingKey = "size" | "shape" | "color" | "statusPosition" | "statusMode" | "pseudoState";

type AvatarRowProps = {
  sizes?: AvatarPropsType["size"][];
  shapes?: AvatarPropsType["shape"][];
  colors?: AvatarPropsType["color"][];
  label?: AvatarPropsType["label"];
  icon?: AvatarPropsType["icon"];
  imageSrc?: AvatarPropsType["imageSrc"];
  statusModes?: Status["mode"][];
  statusPositions?: (Status["position"] | undefined)[];
  pseudoStates?: (PseudoState | undefined)[];
  groupBy?: GroupingKey[];
};

const AvatarRow = ({
  sizes = ["medium"],
  shapes = ["circle"],
  colors = ["neutral"],
  label,
  icon,
  imageSrc,
  statusModes,
  statusPositions = [],
  pseudoStates = [],
  groupBy = ["size"],
}: AvatarRowProps) => {
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
      size?: AvatarPropsType["size"];
      shape?: AvatarPropsType["shape"];
      color?: AvatarPropsType["color"];
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
                    <DxcAvatar
                      size={size}
                      shape={shape}
                      color={color}
                      label={label}
                      icon={icon}
                      imageSrc={imageSrc}
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
      if (key === "size") newFilters.size = value as AvatarPropsType["size"];
      else if (key === "shape") newFilters.shape = value as AvatarPropsType["shape"];
      else if (key === "color") newFilters.color = value as AvatarPropsType["color"];
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
      <AvatarRow
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
      <AvatarRow
        sizes={["medium"]}
        shapes={["circle"]}
        colors={["neutral", "primary", "secondary", "tertiary", "success", "warning", "error", "info"]}
        groupBy={["color"]}
      />
    </>
  ),
};

export const Statuses: Story = {
  render: () => (
    <>
      <Title title="Statuses" theme="light" level={2} />
      <AvatarRow
        sizes={["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]}
        colors={["neutral", "primary", "secondary", "tertiary", "success", "warning", "error", "info"]}
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
      <AvatarRow
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
      <Title title="Label" theme="light" level={2} />
      <AvatarRow
        sizes={["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]}
        shapes={["circle"]}
        label="John Doe"
        groupBy={["size"]}
      />
      <Title title="Image" theme="light" level={2} />
      <AvatarRow
        sizes={["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]}
        shapes={["circle"]}
        imageSrc="https://picsum.photos/id/1022/200/300"
        groupBy={["size"]}
      />
      <Title title="Icon (custom)" theme="light" level={2} />
      <AvatarRow
        sizes={["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]}
        shapes={["circle"]}
        icon="settings"
        groupBy={["size"]}
      />
      <Title title="Icon (default)" theme="light" level={2} />
      <AvatarRow
        sizes={["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]}
        shapes={["circle"]}
        groupBy={["size"]}
      />
    </>
  ),
};
