import { useState } from 'react';
import './input.css';
import NavBar from './Components/NavBar.jsx';
import Fireworks from './Components/Animation/Fireworks.jsx'
import Flower from './Components/Flower.jsx';
import BG from './assets/background.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <section>
        <Fireworks />
        {/* <img src={BG} alt='img of downtown Denver, CO' rel='norel' className='z-0 absolute h-[95vh] overflow-hidden w-screen min-w-[1200px] object-cover'/> */}
        <div className='container'>
          <p className='pt-32 flex justify-center'>test</p>
        </div>
        <div className='py-40'>
          {/* <Flower /> */}
        </div>
      </section>
    </>
  )
}

export default App
