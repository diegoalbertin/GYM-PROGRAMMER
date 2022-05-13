import './Home.css';
import React from 'react';
import gym_training from './img/gym_training.jpg';

function HomePage(props) {
  return (
    <>
    <div>
      <div className='home'>
         <img src={gym_training} alt='error' className='gym-img-background'></img>
       </div>
       <div className='ciao'>
         ciao
        </div>
    </div>
    </>
  )
}

export default HomePage;