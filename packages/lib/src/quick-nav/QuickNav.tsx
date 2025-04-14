import { useContext } from "react";
import slugify from "slugify";
import styled from "styled-components";
import DxcHeading from "../heading/Heading";
import { HalstackLanguageContext } from "../HalstackContext";
import QuickNavTypes from "./types";

const DxcQuickNav = ({ title, links }: QuickNavTypes): JSX.Element => {
  const translatedLabels = useContext(HalstackLanguageContext);

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
    padding: 0;
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
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: var(--height-s);
    width: fit-content;
    max-width: 100%;

    &:hover {
      color: var(--color-fg-primary-strong);
    }
    &:focus {
      border-radius: var(--border-radius-xs);
      outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    }
  `;
  return (
    <QuickNavContainer>
      <DxcHeading level={4} text={title || translatedLabels.quickNav.contentTitle} />
      <ListColumn>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={`#${slugify(link.label, { lower: true })}`}>{link.label}</Link>
            {link.links?.length && (
              <ListSecondColumn>
                {link.links?.map((sublink) => (
                  <li key={sublink.label}>
                    <Link
                      href={`#${slugify(link?.label, { lower: true })}-${slugify(sublink?.label, {
                        lower: true,
                      })}`}
                    >
                      {sublink.label}
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
};

export default DxcQuickNav;
