import NextImage from "next/image";

const customLoader = ({ src }: { src: string }) => {
  return process.env.NODE_ENV === "production" ? src.replace("//", "/") : src;
};

type ImageProps = {
  src: any;
  alt: string;
  width?: number | string;
  height?: number | string;
};
export default function Image(props: ImageProps) {
  return <NextImage {...props} loader={customLoader} />;
}
