// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <header>header</header>
      <main>
        <h2>Dog picture</h2>
        <img src="https://dog.ceo/api/breeds/image/random"></img>
      </main>
    </div>
  )
}
