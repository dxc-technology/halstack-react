import React, { useContext } from "react";
import { ContextualMenuContext } from "./ContextualMenu";
import ItemAction from "./ItemAction";
import { SingleItemProps } from "./types";

const SingleItem = ({
  badge,
  icon,
  id,
  label,
  depthLevel,
  onSelect,
}: SingleItemProps) => {
  const { selectedItemId, setSelectedItemId } = useContext(
    ContextualMenuContext
  );

  const handleClick = () => {
    setSelectedItemId(id);
    onSelect?.();
  };

  return (
    <ItemAction
      aria-selected={selectedItemId === id}
      badge={badge}
      icon={icon}
      label={label}
      depthLevel={depthLevel}
      onClick={handleClick}
      selected={selectedItemId === id}
    />
  );
};

export default SingleItem;
