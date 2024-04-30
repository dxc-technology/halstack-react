import React, { useContext, useEffect } from "react";
import { ContextualMenuContext } from "./ContextualMenu";
import ItemAction from "./ItemAction";
import { SingleItemProps } from "./types";

const SingleItem = ({ id, onSelect, selectedByDefault, ...props }: SingleItemProps) => {
  const { selectedItemId, setSelectedItemId } = useContext(ContextualMenuContext);

  const handleClick = () => {
    setSelectedItemId(id);
    onSelect?.();
  };

  useEffect(() => {
    if (selectedItemId === -1 && selectedByDefault) setSelectedItemId(id);
  }, [selectedItemId, selectedByDefault, id]);

  return (
    <ItemAction
      aria-selected={selectedItemId === -1 ? selectedByDefault : selectedItemId === id}
      onClick={handleClick}
      selected={selectedItemId === -1 ? selectedByDefault : selectedItemId === id}
      {...props}
    />
  );
};

export default SingleItem;
