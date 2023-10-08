import React from 'react';

import './Section0.css';

export default function Section0() {
  return (
    <div className='section0-bg'>
          <div className='mafia-сostume-wrapper'>
        <div className='mafia-costume'>flex-item
        </div>
        <div className='mafia-сostume'>flex-item
        </div>
        <div className='mafia-сostume'>flex-item
        </div>
      </div>

      <div className='section0-gradient-2' />

      <div className='mafia-сostume-wrapper'>
        <div className='mafia-costume'>flex-item
          {/* <img
            src={require('./img/mafia-costume-202222-x.png')}
            alt='mafia-costume-202222'
            // className='mafia-сostume-img'
          /> */}
        </div>
        <div className='mafia-сostume'>flex-item
          {/* <img src={require('./img/logo.png')} alt='logo' 
          // className='mafia-сostume-img logo' 

          /> */}
        </div>
        <div className='mafia-сostume'>flex-item
          {/* <img
            src={require('./img/mafia-costume-20223.png')}
            alt='mafia-costume-202223'
            // className='mafia-сostume-img'
          /> */}
        </div>
      </div>
      <div>
        {/* <img src={require('./img/logo.png')} alt='glow' className='logo' /> */}
        <img src={require('./img/glow-1.png')} alt='glow' className='glow' />
      </div>
      <div className='section0-gradient-1' />
      <img src={require('./img/Hue_Saturation_5_1.png')} alt='Hue_Saturation_5_1' className='section0-bg-img' />
    </div>
  );
}
