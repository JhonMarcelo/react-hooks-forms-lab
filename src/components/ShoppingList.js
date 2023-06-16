import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchChange, setSearchChange] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(e) {
    setSearchChange(e.target.value.toLowerCase());
  }

  function getDataFromItemForm(newItem) {
    handleNewItem(newItem);
  }

  const itemsToDisplay = items.filter((item) => {
    if (searchChange != null)
      return item.name.toLowerCase().includes(searchChange);
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={getDataFromItemForm} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
