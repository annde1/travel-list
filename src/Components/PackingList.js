import { useState } from "react";
import Item from "./Item";
const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  //Derived state: sorting the array based on whatever the value of sortBy is and rendering each items based on the sorted array
  if (sortBy === "input") sortedItems = items; //if sortBy is by input then it's just the original items array
  if (sortBy === "description")
    //if by description
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    //if by packed status we need need to convert two bollean values to numbers
    sortedItems = items.sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onClearList()}>Clear list</button>
      </div>
    </div>
  );
};
export default PackingList;
