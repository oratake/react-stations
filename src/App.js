// DO NOT DELETE

import React, {useState} from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/bouvier/n02106382_4629.jpg');

  const changeDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json => setDogUrl(json.message));
  };

  return (
    <div>
      <header>header</header>
      <main>
        <h2>Dog picture</h2>
        <button onClick={changeDog}>Change Dog</button>
        <img src={dogUrl}></img>
      </main>
    </div>
  )
}
