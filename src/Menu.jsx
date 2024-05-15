import './App.css'
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

export default function Menu({ items }) {

  return (
    <div className='section-center'>
      {items.map((menuItem) => 
        <MenuItem key={menuItem.id} {...menuItem} />
      )}
    </div>
  )
}

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};