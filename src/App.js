import './App.css';
import { Head } from './components/Head';
import { Header } from './components/Header';
import { AboutUs } from './components/AboutUs'
import { Products } from './components/Products';
import { Partners } from './components/Partners';
import { Contacts } from './components/Contacts';
import { Foooter } from './components/Foooter';

function App() {
  const menu = [
    {id: '1',
    name: 'Главная',
    href: '#'
    },
    {id: '2',
    name: 'Каталог',
    href: '#'
    },
    {id: '3',
    name: 'Как заказать',
    href: '#'
    },
    {id: '4',
    name: 'Отзывы',
    href: '#'
    },
    {id: '5',
    name: 'О нас',
    href: '#'
    },
    {id: '6',
    name: 'Контакты',
    href: '#'
    },
  ]
  const water = [
    {
      id: 1,
      title: 'Тархун',
      imgUrl: 'tarhun.png',
      isActive: false
    },
    {
      id: 1,
      title: 'Вишня',
      imgUrl: 'cherry.png',
      isActive: true
    },
    {
      id: 1,
      title: 'Минеральная вода',
      imgUrl: 'min_water.png',
      isActive: false
    },
    {
      id: 1,
      title: 'Квас',
      imgUrl: 'kvas.png',
      isActive: false
    }
  ]
  const discount = [
    {
      id: 1,
      text: 'Индивидуальные скидки в зависимости  от объема покупки'  ,
      img: 'discount.png',
      isActive: true
    },
    {
      id: 2,
      text: 'Индивидуальные скидки в зависимости  от объема покупки'  ,
      img: 'discount.png',
      isActive: false
    },
    {
      id: 3,
      text: 'Индивидуальные скидки в зависимости  от объема покупки'  ,
      img: 'discount.png',
      isActive: false
    },
    {
      id: 4,
      text: 'Индивидуальные скидки в зависимости  от объема покупки'  ,
      img: 'discount.png',
      isActive: false
    },
  ]
  const partner = [
    {
      id: 1,
      img: 'partner_1.png',
      title: 'Сделайте заказ на сайте',
    },
    {
      id: 2,
      img: 'partner_2.png',
      title: 'Мы оформим заказ',
    },
    {
      id: 3,
      img: 'partner_3.png',
      title: 'Мы сами доставим его',
    },
    {
      id: 4,
      img: 'partner_4.png',
      title: 'Можете оплатить любым удобным для вас способом',
    }
  ]

  const waterChange = (id) => {

    console.log('change', id);
  }

  return (
    <div className="App">
      <Header menu={menu}/>
      <Head waterChange={waterChange} water={water}/>
      <AboutUs discount={discount}/>
      <Products water={water}/>
      <Partners partner={partner}/>
      <Contacts/>
      <Foooter menu={menu}/>
    </div>
  );
}

export default App;