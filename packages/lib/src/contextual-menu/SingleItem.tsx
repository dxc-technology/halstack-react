import { useContext, useEffect } from "react";
import ItemAction from "./ItemAction";
import { SingleItemProps } from "./types";
import ContextualMenuContext from "./ContextualMenuContext";

export default function SingleItem({ id, onSelect, selectedByDefault = false, ...props }: SingleItemProps) {
  const { selectedItemId, setSelectedItemId } = useContext(ContextualMenuContext) ?? {};

  const handleClick = () => {
    setSelectedItemId?.(id);
    onSelect?.();
  };

  useEffect(() => {
    if (selectedItemId === -1 && selectedByDefault) {
      setSelectedItemId?.(id);
    }
  }, [selectedItemId, selectedByDefault, id]);

  return (
    <ItemAction
      aria-pressed={selectedItemId === -1 ? selectedByDefault : selectedItemId === id}
      onClick={handleClick}
      selected={selectedItemId === -1 ? selectedByDefault : selectedItemId === id}
      {...props}
    />
  );
}
