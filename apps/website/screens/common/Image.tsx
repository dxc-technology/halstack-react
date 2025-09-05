import NextImage from "next/image";

const customLoader = ({ src }: { src: string }) =>
  process.env.NODE_ENV === "production" ? src.replace("//", "/") : src;

type ImageProps = {
  src: any;
  alt: string;
  width?: number;
  height?: number;
};

const Image = (props: ImageProps) => {
  <NextImage
    style={props.width || props.height ? {} : { width: "100%", height: "auto" }}
    {...props}
    loader={customLoader}
  />;
};

export default Image;
