import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [inputText, setInputText] = useState("");
  const [inputSelect, setInputSelect] = useState("Produce");
  const newItem = {
    id: uuid(),
    name: inputText,
    category: inputSelect,
  };

  function handleInputChange(e) {
    setInputText(e.target.value.toLowerCase());
  }
  function handleInputSelect(e) {
    setInputSelect(e.target.value);
  }

  //send the newItem to its ShoppingList parent
  function handleFormSubmitEvent(e) {
    e.preventDefault();
    onItemFormSubmit(newItem);
  }
  return (
    <form className="NewItem" onSubmit={handleFormSubmitEvent}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={inputText}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={inputSelect}
          onChange={handleInputSelect}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
