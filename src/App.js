// DO NOT DELETE

import React, {useState} from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/bouvier/n02106382_4629.jpg');

  return (
    <div>
      <header>header</header>
      <main>
        <h2>Dog picture</h2>
        <img src={dogUrl}></img>
      </main>
    </div>
  )
}
