import React from 'react';
import './Section0.css';

export default function Section1() {
  return (
    <div className='container0'>
      
      <div className='section0-text'>
        <div className='title0'>КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</div>
        <div className='subtitle0'>
          Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!
        </div>
      </div>
      
      <div>
        <img src={require('./img/logo.png')} alt='logo' className='logo0' />
      </div>

      <div className='section0-gradient-2' />

      <div className='flex-parent0'>
        <div>
          <img
            src={require('./img/mafia-costume-202222-x.png')}
            alt='mafia-costume-202222'
            className='mafia-сostume-img0'
          />
        </div>
        <div>
          <img
            src={require('./img/mafia-costume-20223.png')}
            alt='mafia-costume-20223'
            className='mafia-сostume-img0'
          />
        </div>
      </div>

      <div className='glow0' />

      <div className='section0-gradient-1' />
    </div>
  );
}
