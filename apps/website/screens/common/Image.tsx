import NextImage from "next/image";

const customLoader = ({ src }: { src: string }) => {
  return process.env.NODE_ENV === "production" ? src.replace("//", "/") : src;
};

type ImageProps = {
  src: any;
  alt: string;
  width?: number;
  height?: number;
};
export default function Image(props: ImageProps) {
  return (
    <NextImage
      style={props.width || props.height ? {} : { width: "100%", height: "auto" }}
      {...props}
      loader={customLoader}
    />
  );
}
