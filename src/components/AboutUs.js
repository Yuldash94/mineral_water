import React from 'react'
import './AboutUs.css'

export const AboutUs = ( {discount} ) => {
  return (
    <div className='about_us_inner'>
      <div className='about_us'>
        <div className='about_us_left'>
          <h1>
            Немного о нас
          </h1>
          <p>
          ООО "Эльбрусская прохлада"- отптовые продажи безалкогольных напитков от производителя.Широкий ассортимент лимонадов,минеральной воды,разных сементов.Артезианская питьевая вода,добывается из скважины глубиной 230 м. Автоматизированная система розлива исключает любые загрязнения в процессе производства, а отсутствие поблизости крупных предприятий и сельхозугодий гарантирует чистоту добываемой воды. 
          </p>
        </div>
        <div className='about_us_right'>
            <div className='us_right_nav'>
              <p>2/4</p>
              <div className='right_nav_load'>
                <div className='right_nav_load_full'></div>
              </div>
              <div className='right_nav_btn'>&#8592;</div>
              <div className='right_nav_btn'>&#8594;</div>
            </div>
            <div className='us_right_content'>
              {discount.map( item => 
                  <div className={item.isActive ? 'discount discount_active' : 'discount'}>
                    <img src={'./img/' + item.img} alt='discount'/>
                    <p>{item.text}</p>
                  </div>  
                )}
            </div>
        </div>
      </div>
      <div className='price'>
          <div className='price_title'>
                <h1>Получить оптовый прайс</h1>
                <p>Оставьте заявку и получите прайс на почту</p>
          </div>
          <div className='price_request'>
          <form >
                <input type='text' placeholder='Имя'></input>
                <input type='email' placeholder='E-mail'></input>
                <button>Отправить</button>
          </form>
          </div>
      </div>
    </div>
  )
}
