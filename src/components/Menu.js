import React from 'react'
import './Menu.css'

export const Menu = ({menu}) => {
  return (
    <>
    <nav>
        <ul >
            {menu.map( item => 
                <li key={item.id}>
                    <a href={item.href}>{item.name}</a>
                </li>)}
        </ul>
    </nav>
    </>
  )
}
