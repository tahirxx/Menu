import React, { useState } from 'react';
import './App.css'
import items from './data.jsx';
import Categories from './Categories.jsx';
import Menu from './Menu.jsx';

const allCategories = ['All', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  
  const saleItem = (price) => {
    const itemSale = items.filter((item) => item.price < 15.00)
    setMenuItems(itemSale)
    return;
  }  

  const filterItems = (category) => {
    if(category === 'All') {
      console.log("Setting menuItems to all items:", items);
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems);
  }
   
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} saleItem={saleItem}/>
        <Menu items={menuItems}/>
        </section>
    </main>
  )
}

export default App
