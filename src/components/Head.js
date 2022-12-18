import React from 'react'
import './Head.css'
export const Head = ({water, waterChange}) => {
  return (
    <div className='app_head'>
        <div className='head_title'>
            <h1>Оптовые поставки минеральной воды и безалкогольных напитков</h1>
        </div>
        <div className='head_img'>
            {water.map(item => item.isActive ? <img key={item.id} className='head_img_inner' src={"./img/"+item.imgUrl} alt={item.title}/> : '')}
            <div className='head_img_bottom'>
              {water.map(item => !item.isActive ? <span className='img_bottom_part '></span> : <span className='img_bottom_part img_bottom_part_active'></span>)}
            </div>
        </div>
        <div className='head_btns'>
                {water.map(item => 
                    <div key={item.id} onClick={waterChange} className={item.isActive ? 'head_btn head_btn_active' : 'head_btn'}></div>
                    )}
        </div>
    </div>
  )
}
