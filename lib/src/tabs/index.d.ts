type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  activeTabIndex?: number;
  tabs?: any;
  onTabClick?: void;
  onTabHover?: void;
  iconPosition?: "top" | "left";
  margin?: Space | Margin;
  tabIndex?: number;
};

export default function DxcTabs(props: Props): JSX.Element;
