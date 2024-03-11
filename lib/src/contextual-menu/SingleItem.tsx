import React, { useContext } from "react";
import { ContextualMenuContext } from "./ContextualMenu";
import ItemAction from "./ItemAction";
import { SingleItemProps } from "./types";

const SingleItem = ({ icon, id, label, level, onSelect, slot }: SingleItemProps) => {
  const { selectedItemId, setSelectedItemId } = useContext(ContextualMenuContext);

  const handleClick = () => {
    setSelectedItemId(id);
    onSelect?.();
  };

  return (
    <ItemAction
      aria-selected={selectedItemId === id}
      icon={icon}
      label={label}
      level={level}
      onClick={handleClick}
      selected={selectedItemId === id}
      slot={slot}
    />
  );
};

export default SingleItem;
