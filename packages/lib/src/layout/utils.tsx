import { Children, isValidElement, useState, useEffect } from "react";
import layoutIcons from "./Icons";
import ApplicationLayoutPropsType from "./types";

export const year = new Date().getFullYear();

export const bottomLinks = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    text: "Linkedin",
  },
  {
    href: "https://x.com/dxctechnology",
    text: "X",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    logo: layoutIcons.linkedinLogo,
    title: "Linkedin",
  },
  {
    href: "https://x.com/dxctechnology",
    logo: layoutIcons.xLogo,
    title: "X",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    logo: layoutIcons.facebookLogo,
    title: "Facebook",
  },
];

export const findChildType = (children: ApplicationLayoutPropsType["children"], childType: React.ElementType) =>
  Children.toArray(children).find((child) => isValidElement(child) && child.type === childType);

export const useResponsive = (breakpoint: string) => {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.matchMedia(`(max-width: ${breakpoint}rem)`).matches);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isResponsive;
};
