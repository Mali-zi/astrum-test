import React from 'react';
import './Section1.css';

export default function Section1() {
  return (
    <div className='container'>
      <div className='title'>КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</div>
      <div className='subtitle'>
        Побеждайте легко, побеждайте стильно с новыми коллекционными 
        изданиями «Аллодов Онлайн»!
      </div>
      <div>
          <img src={require('./img/logo.png')} alt='logo' className='mafia-сostume-logo' />
        </div>

      <div className='section0-gradient-2' />
      <div className='flex-parent'>
        <div>
          <img
            src={require('./img/mafia-costume-202222-x.png')}
            alt='mafia-costume-202222'
            className='mafia-сostume-img'
          />
        </div>
        <div>
          <img
            src={require('./img/mafia-costume-20223.png')}
            alt='mafia-costume-202223'
            className='mafia-сostume-img'
          />
        </div>
      </div>
      <div>
        <img src={require('./img/glow-1.png')} alt='glow' className='glow' />
      </div>
      <div className='section0-gradient-1' />
    </div>
  );
}
