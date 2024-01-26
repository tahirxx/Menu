import React from 'react';

export default function Menu({items}) {

  return (
    <div className='section-center'>
      {items.map((menuItem) => 
      {
        const {id, title, img, desc, price } = menuItem;

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
        )
      }) }
    </div>
  )
}
