import { SingleItemProps } from "./types";
import { useContext } from "react";
import { ContextualMenuContext } from "./ContextualMenu";
import ItemAction from "./ItemAction";

const SingleItem = ({ id, label, level, icon, slot, onSelect }: SingleItemProps) => {
  const { selectedItemId, setSelectedItemId } = useContext(ContextualMenuContext);

  const handleClick = () => {
    setSelectedItemId(id);
    onSelect?.();
  };

  return (
    <ItemAction
      aria-selected={selectedItemId === id}
      selected={selectedItemId === id}
      onClick={handleClick}
      level={level}
      slot={slot}
      label={label}
      icon={icon}
    />
  );
};

export default SingleItem;
