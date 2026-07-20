import { useContext, useEffect } from "react";
import ItemAction from "./ItemAction";
import { SingleItemProps } from "./types";
import BaseMenuContext from "./BaseMenuContext";

export default function SingleItem({ id, onSelect, selected = false, ...props }: SingleItemProps) {
  const { selectedItemId, setSelectedItemId, closePopOver } = useContext(BaseMenuContext) ?? {};

  const handleClick = () => {
    setSelectedItemId?.(id);
    onSelect?.();
    closePopOver?.();
  };

  useEffect(() => {
    if (selectedItemId === -1 && selected) {
      setSelectedItemId?.(id);
    }
  }, [selectedItemId, selected, id]);

  return (
    <ItemAction
      onClick={handleClick}
      selected={selectedItemId != null && (selectedItemId === -1 ? (selected ?? false) : selectedItemId === id)}
      {...props}
    />
  );
}
