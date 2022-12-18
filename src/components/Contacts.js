import React from 'react'
import './Contacts.css'

export const Contacts = () => {
  return (
    <div className='contacts_inner'>
        <h1>Контакты</h1>
        <div className='contacts'>
            <div className='contact'>
                <h3>E-mail:</h3>
                <p>ice-elbrus@mail.ru</p>
            </div>
            <div className='contact'>
                <h3>Адрес:</h3>
                <p>360015, РФ, КБР, г. Нальчик, ул. Кабардинская, 148-б</p>
            </div>
            <div className='contact'>
                <h3>Телефон:</h3>
                <p>+7 (928) 076 14 98</p>
            </div>
        </div>
        <div className='contacts_icons'>
            <img src='./img/contact_icon_1.png' alt='#'/>
            <img src='./img/contact_icon_2.png' alt='#'/>
            <img src='./img/contact_icon_3.png' alt='#'/>
        </div>
    </div>
  )
}
