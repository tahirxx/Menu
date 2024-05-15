import PropTypes from 'prop-types';
export default function Categories({ categories, filterItems, saleItem }) {
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

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterItems: PropTypes.func.isRequired,
  saleItem: PropTypes.func.isRequired,
};