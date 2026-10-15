import type { IMenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
  addItem: (item: MenuItemType) => void;
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-lg transition-colors"
      onClick={() => addItem(item)}
    >
      <p className="font-semibold">{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}