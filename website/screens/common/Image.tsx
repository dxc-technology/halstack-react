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
      {...props}
      style={!props.width ? { width: "100%", objectFit: "contain" } : {}}
      loader={customLoader}
    />
  );
}
