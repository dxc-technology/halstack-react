type Props = {
  gutter?:
    | "none"
    | "xxxsmall"
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "xxxlarge";
  divider?: boolean;
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  as?: React.ElementType;
  children: React.ReactNode;
};

export default Props;
