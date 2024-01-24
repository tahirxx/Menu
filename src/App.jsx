import React, { useState } from 'react';
import './App.css'
import items from './data.jsx';
import Categories from './Categories.jsx';
import Menu from './Menu.jsx';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);


  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
        </div>
        <Categories />
        <Menu items={menuItems}/>
        </section>
    </main>
  )
}

export default App
