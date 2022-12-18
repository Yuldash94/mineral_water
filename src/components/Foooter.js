import React from 'react'
import { Menu } from './Menu'
import './Footer.css'


export const Foooter = ( {menu} ) => {
  return (
    <div className='footer'>
        <div className='footer_inner'>
            <div className='footer_logo'>Эльбрусская Прохлада</div>
            <Menu menu={menu}/>
            <div className='footer_icons'>
                <img src='./img/footer_icon_1.png' alt='#'/>
                <img src='./img/footer_icon_2.png' alt='#'/>
                <img src='./img/footer_icon_3.png' alt='#'/>
            </div>
        </div>
        <div className='footer_copyright'>
            <div className='copyright'>
                <p> «Эльбрусская Прохлада» &copy; © 2018</p>
                <p>Политика Конфиденциальности</p>
            </div>
            <p>Сделано в <b>BorodaDigital</b></p>
        </div>
    </div>
  )
}
