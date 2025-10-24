import { useContext, useEffect } from "react";
import ItemAction from "./ItemAction";
import { SingleItemProps } from "./types";
import ContextualMenuContext from "./ContextualMenuContext";

export default function SingleItem({ id, onSelect, selected = false, ...props }: SingleItemProps) {
  const { selectedItemId, setSelectedItemId } = useContext(ContextualMenuContext) ?? {};

  const handleClick = () => {
    setSelectedItemId?.(id);
    onSelect?.();
  };

  useEffect(() => {
    if (selectedItemId === -1 && selected) {
      setSelectedItemId?.(id);
    }
  }, [selectedItemId, selected, id]);

  return (
    <ItemAction
      aria-pressed={selectedItemId === -1 ? selected : selectedItemId === id}
      onClick={handleClick}
      selected={selectedItemId != null && (selectedItemId === -1 ? (selected ?? false) : selectedItemId === id)}
      {...props}
    />
  );
}
