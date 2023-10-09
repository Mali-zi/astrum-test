import React from 'react';
import './Section1.css';

const boxes = [
  {
    id: '1',
    img: 'copy-1.png',
    title: 'Игровое время',
    count: '-',
    days: '30 дней',
  },
  {
    id: '2',
    img: 'unnamed-2.png',
    title: 'Запечатанный набор инструментов',
    count: '1',
    days: '1',
  },
  {
    id: '3',
    img: 'unnamed-3.png',
    title: 'Хрупкая чистая руна 10-й ступени',
    count: '1',
    days: '-',
  },
  {
    id: '4',
    img: 'unnamed-4.png',
    title: 'Большой символ изобилия творца',
    count: '10',
    days: '-',
  },
  {
    id: '5',
    img: 'unnamed-5.png',
    title: 'Мана-батарея',
    count: '-',
    days: '20',
  },
  {
    id: '6',
    img: 'unnamed-6.png',
    title: 'Модуль памяти',
    count: '-',
    days: '10',
  },
  {
    id: '7',
    img: 'unnamed-7.png',
    title: 'Помощник Вито',
    count: '1',
    days: '1',
  },
];

export default function Section1() {
  return (
    <div className='container1'>
      <div className='flex-parent1'>
        <div className='vito1 vito1-left'>
          <img src={require('./img/vito-1.png')} alt='vito-1' className='vito-img' />
          <div className='vito1-ellipse '></div>
        </div>
        <div className='vito1'>
          <div className='section1-right'>
            <div className='section1-title'>
              <div className='section1-title-text'>
                НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»
              </div>
            </div>
            <div className='section1-buttons'>
              <button type='button' className='section1-button'>
                Бесплатные сервера
              </button>
              <button type='button' className='section1-button'>
                Подписочный сервер
              </button>
            </div>

            <ul className='section1-table'>
              {boxes.map((box) => {
                return (
                  <li className='row'>
                    <div className='cell-img'>
                      <img src={require(`./img/${box.img}`)} alt={`${box.img}`} />
                    </div>
                    <div className='cell cell-main'>{`${box.title}`}</div>
                    <div className='cell'>{`${box.count}`}</div>
                    <div className='cell'>{`${box.days}`}</div>
                  </li>
                );
              })}
            </ul>
            
            <div className='price'>
              <div className='price-box'>
                <img src={require('./img/box.png')} alt='box' className='box-img' />
              </div>
              <div className='price-box-button'>
                <div className='price-text'>399 ₽</div>
                <button type='button' className='price-button'>
                  ПРИОБРЕСТИ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={require('./img/blueglow-1.png')} alt='blueglow-1' className='blueglow' />
    </div>
  );
}
