import React from 'react'

export default function ({ categories,filterItems,saleItem }) {
  return (
    <div className='btn-container'>
      
     {categories.map((category, index) => {
      return (
      <button 
        type="button" 
        className='filter-btn'
        key={index}
        onClick={() => filterItems(category)}>
      {category}
      </button>
     )
     })}

      <button className='filter-btn' onClick={() => {
        saleItem();
      }}>DISCOUNT</button>
    </div>
  )
}
