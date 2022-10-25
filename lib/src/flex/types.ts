type Gap = { rowGap: string; columnGap: string };

type CommonProps = {
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "center"
    | "baseline";
  alignContent?:
    | "normal"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
};

type Props = CommonProps & {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string | Gap;
  order?: number;
  grow?: number;
  shrink?: number;
  basis?: string;
  as?: keyof HTMLElementTagNameMap;
  children: React.ReactNode;
};

export type StyledProps = CommonProps & {
  $direction?: "row" | "row-reverse" | "column" | "column-reverse";
  $wrap?: "nowrap" | "wrap" | "wrap-reverse";
  $gap?: string | Gap;
  $order?: number;
  $grow?: number;
  $shrink?: number;
  $basis?: string;
};

export default Props;
