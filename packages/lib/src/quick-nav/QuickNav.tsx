import { useContext } from "react";
import slugify from "slugify";
import styled from "@emotion/styled";
import DxcHeading from "../heading/Heading";
import { HalstackLanguageContext } from "../HalstackContext";
import QuickNavTypes from "./types";

const QuickNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-m);
  padding: var(--spacing-padding-xs) var(--spacing-padding-m);
  border-left: var(--border-width-m) var(--border-style-default) var(--border-color-neutral-medium);
`;

const ListColumn = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-s);
  margin: 0;
  padding: var(--spacing-padding-none);
  list-style-type: none;
`;

const ListSecondColumn = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-xs);
  margin-top: var(--spacing-gap-xs);
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  list-style-type: none;
`;

const Link = styled.a`
  text-decoration: none;
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  color: var(--color-fg-neutral-stronger);
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  height: var(--height-s);
  width: fit-content;
  max-width: 100%;
  border-radius: var(--border-radius-xs);

  > span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  &:hover {
    color: var(--color-fg-primary-strong);
  }
  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
  }
`;

export default function DxcQuickNav({ links, title }: QuickNavTypes) {
  const translatedLabels = useContext(HalstackLanguageContext);
  const isHashRouter = (): boolean => {
    if (typeof window === "undefined") return false;
    return window.location.href.includes("/#/");
  };

  return (
    <QuickNavContainer>
      <DxcHeading level={5} text={title ?? translatedLabels.quickNav.contentTitle} />
      <ListColumn>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={`#${slugify(link.label, { lower: true })}`}
              onClick={
                isHashRouter()
                  ? (e) => {
                      e.preventDefault();
                      const id = slugify(link.label, { lower: true });
                      document.getElementById(id)?.scrollIntoView();
                    }
                  : undefined
              }
            >
              <span>{link.label}</span>
            </Link>
            {link.links?.length && (
              <ListSecondColumn>
                {link.links?.map((sublink) => (
                  <li key={sublink.label}>
                    <Link
                      href={`#${slugify(link?.label, { lower: true })}-${slugify(sublink?.label, {
                        lower: true,
                      })}`}
                      onClick={
                        isHashRouter()
                          ? (e) => {
                              e.preventDefault();
                              const id = `${slugify(link.label, { lower: true })}-${slugify(sublink.label, { lower: true })}`;
                              document.getElementById(id)?.scrollIntoView();
                            }
                          : undefined
                      }
                    >
                      <span>{sublink.label}</span>
                    </Link>
                  </li>
                ))}
              </ListSecondColumn>
            )}
          </li>
        ))}
      </ListColumn>
    </QuickNavContainer>
  );
}
