import { useState } from 'react';
import './input.css';
import NavBar from './Components/NavBar.jsx';
import Fireworks from './Components/Animation/Fireworks.jsx'
import Flower from './Components/Flower.jsx';
import Sun from './Components/Sun.jsx';
import BG from './assets/background.jpg';

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <section>
        <img src={BG} alt='img of downtown Denver, CO' rel='norel' className='z-[-1] absolute h-[95vh] overflow-hidden w-screen min-w-[1200px] object-cover brightness-95'/>
        {/* <Fireworks /> */}
        <Sun />
        <div className='container h-[95vh]'>
          {/* <Flower /> */}
          <div className='pt-32'>
            <div className='flex flex-row-reverse'>
              <div className='my-[13rem] text-white text-[6rem] font-thin'>
                Apple <span className='text-[#f3c143]'>Crafts</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;