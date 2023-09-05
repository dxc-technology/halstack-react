type Props = {
  caption?: string;
  src: string;
  srcSet?: string;
  alt: string;
  lazyLoading?: boolean;
  width?: string;
  height?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  onError?: React.ReactEventHandler<HTMLImageElement>;
};

export type CaptionWrapperProps = {
  condition: boolean;
  wrapper: (children: React.ReactNode) => JSX.Element;
  children: React.ReactNode;
};

export default Props;
