type Props = {
  children: React.ReactNode;
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
  type?: "disc" | "circle" | "square" | "number";
};
export default Props;
