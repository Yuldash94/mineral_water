import React from 'react'
import { Menu } from './Menu'
import './Header.css'

export const Header = ({menu}) => {
  return (
    <header>
        <div className='logo'>Эльбрусская Прохлада</div>
        <Menu menu={menu}/>
        <div className='call'>
            <a href='tel:+7 928 076 14 98'> +7 928 076 14 98</a>
            <div className='call_btn'>Заказать обратный звонок</div>
        </div>
    </header>
  )
}