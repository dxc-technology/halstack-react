import { useLayoutEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import MenuItem from "../base-menu/MenuItem";
import Section from "../base-menu/Section";
import SubMenu from "../base-menu/SubMenu";
import BaseMenuContext from "../base-menu/BaseMenuContext";
import { ContextualMenuProps } from "./types";
import scrollbarStyles from "../styles/scroll";
import { addIdToItems, isSection } from "../base-menu/utils";
import { BaseGroupItemWithId, BaseItemWithId, BaseSectionWithId } from "../base-menu/types";

const ContextualMenu = styled.div`
  box-sizing: border-box;
  margin: 0;
  border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-lighter);
  border-radius: var(--border-radius-s);
  padding: var(--spacing-padding-m) var(--spacing-padding-xs);
  display: grid;
  gap: var(--spacing-gap-xs);
  min-width: 248px;
  max-height: 100%;
  background-color: var(--color-bg-neutral-lightest);
  overflow-y: auto;
  overflow-x: hidden;
  ${scrollbarStyles}
`;

export default function DxcContextualMenu({ items }: ContextualMenuProps) {
  const [firstUpdate, setFirstUpdate] = useState(true);
  const [selectedItemId, setSelectedItemId] = useState(-1);
  const contextualMenuRef = useRef<HTMLDivElement | null>(null);
  const itemsWithId = useMemo(() => addIdToItems(items), [items]);
  const contextValue = useMemo(() => ({ selectedItemId, setSelectedItemId }), [selectedItemId, setSelectedItemId]);

  useLayoutEffect(() => {
    if (selectedItemId !== -1 && firstUpdate) {
      const contextualMenuEl = contextualMenuRef.current;
      const selectedItemEl = contextualMenuEl?.querySelector("[aria-pressed='true']");
      if (selectedItemEl instanceof HTMLButtonElement) {
        contextualMenuEl?.scrollTo?.({
          top: (selectedItemEl?.offsetTop ?? 0) - (contextualMenuEl?.clientHeight ?? 0) / 2,
        });
      }
      setFirstUpdate(false);
    }
  }, [firstUpdate, selectedItemId]);

  return (
    <ContextualMenu ref={contextualMenuRef}>
      <BaseMenuContext value={contextValue}>
        {itemsWithId[0] && isSection(itemsWithId[0]) ? (
          (itemsWithId as BaseSectionWithId[]).map((item, index) => (
            <Section key={`section-${index}`} section={item} index={index} length={itemsWithId.length} />
          ))
        ) : (
          <SubMenu>
            {(itemsWithId as (BaseGroupItemWithId | BaseItemWithId)[]).map((item, index) => (
              <MenuItem item={item} key={`${item.label}-${index}`} />
            ))}
          </SubMenu>
        )}
      </BaseMenuContext>
    </ContextualMenu>
  );
}
