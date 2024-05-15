import { useState } from 'react';
import items from './data.jsx';
import Categories from './Categories.jsx';
import Menu from './Menu.jsx';

const allCategories = ['All', ...new Set(items.map((item) => item.category))];

function MenuPage() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const saleItem = () => {
    const itemSale = items.filter((item) => item.price < 15.00);
    setMenuItems(itemSale);
  };

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

   // Function to update categories
   const updateCategories = (newCategories) => {
    setCategories(newCategories);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} setCategories={updateCategories} filterItems={filterItems} saleItem={saleItem} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MenuPage;