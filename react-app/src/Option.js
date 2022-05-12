import './App.css';
import React from 'react';
import penguin from './img/penguin.png';

function Option(props) {
  return (
    <>
       <div>
         <img src={penguin} alt={'error'}></img>
       </div>
    </>
  )
}

export default Option;