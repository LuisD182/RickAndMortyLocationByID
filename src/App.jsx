import { useState } from 'react'
import './App.css'
import Residents from './assets/components/Residents'
import ImageHeader from './assets/img/RnM-H1.png'


function App() {


  return (
    <div className="App">
      <div>
          <header>
            <img  className='headerImg' src={ImageHeader} alt=""  />
          </header>
        <Residents/>
      </div>
        
    </div>
  )
}

export default App
