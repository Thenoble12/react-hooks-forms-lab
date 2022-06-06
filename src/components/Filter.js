import React, { useState } from "react";

function Filter({ onCategoryChange }) {

  const [category, setCategory] = useState('All')

  function handleChange(e) {
    e.preventDefault()
    setCategory(e.target.value)
  }


  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
