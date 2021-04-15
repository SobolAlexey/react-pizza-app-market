import React from 'react'
import propTypes from 'prop-types'


export const Categories = React.memo( ({ activeCategory, items, onClickCategory }) => {
 

  const onSelectItem = (index) => {
    onClickCategory(index)
  }
  
  return (
    <div className="categories">
      <ul>
        <li onClick={() => onSelectItem(null)} className={activeCategory === null ? 'active' : ''}>Все</li>
        {items &&
          items.map((i, index) =>
            <li onClick={() => onSelectItem(index)}
              className={activeCategory === index ? 'active' : ''}
              key={`${i}_${index}`}>{i}
            </li>)
        }

      </ul>
    </div>
  )
}) 

Categories.propTypes = {
  activeCategory: propTypes.oneOf(propTypes.number, null).isRequired,
  items: propTypes.arrayOf(propTypes.string).isRequired,
  onClickItem: propTypes.func.isRequired,
}
