import React from 'react'
import './Partners.css'

export const Partners = ( {partner} ) => {
  return (
    <div className='partners_inner'>
        <h1>Как стать партнером?</h1>
        <div className='partners'>
            {partner.map(item => 
                <div className='partner'>
                    <img src={"./img/"+item.img} alt={item.title}/>
                    <p>{item.title}</p>
                </div>
                )}

        </div>
    </div>
  )
}
