import React from 'react'
import './Products.css'


export const Products = ( {water} ) => {
  return (
    <div className='products_inner'>
        <h1>Наши товары</h1>
        <div className='products'>
            {water.map( item => 
                <div key={item.id} className='product'>
                    <img src={"./img/"+item.imgUrl} alt={item.title}/>
                    <p>{item.title}</p>
                </div>
                )}
        </div>
        <button>Весь каталог</button>
    </div>
  )
}
