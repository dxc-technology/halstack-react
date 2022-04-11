// components/Image.js
import NextImage from "next/image";

const customLoader = ({ src }: { src: string }) => {
  return src;
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
