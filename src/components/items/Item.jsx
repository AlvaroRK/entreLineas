import React from 'react'
import './item.css'

const Item = ({text, subtext}) => {
  return (
    <div className='itemContainer'>
        <p>{text}</p>
        <span>{subtext}</span>
    </div>
  )
}

export default Item