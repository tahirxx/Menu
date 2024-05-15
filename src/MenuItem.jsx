import PropTypes from 'prop-types';
import './App.css'

export default function MenuItem({ id, title, img, desc, price }) {
  return (
    
        <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo'/>
            <div className='item-info'>
                <div className='header'>
                   <h4>{title}</h4>
                    <h4 className='price'>{price}</h4>
                 </div>
               
                <p className='item-text'>{desc}</p>
            </div>
        </article>
        );
      
}

MenuItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };