import { useState } from 'react';
import './input.css';
import NavBar from './Components/NavBar.jsx';
import Fireworks from './Components/Animation/Fireworks.jsx'
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
          <div className='pt-32 flex flex-row-reverse'>
            <div className='flex flex-col my-[13rem]'>
              <div className='text-white text-[6rem] font-thin'>
                Apple <span className='text-[#f3c143]'>Crafts</span>
              </div>
              <p className='text-[25px]'>
                Creating unique pieces locally in Colorado with love
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;