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
      <section id='Home'>
        <img src={BG} alt='img of downtown Denver, CO' rel='norel' 
        className='z-[-1] absolute top-0 left-0 h-[95vh] w-full object-cover brightness-95 sm:min-w-[1200px] sm:w-screen sm:h-[100vh] max-sm:h-[80vh] max-sm:w-auto max-sm:object-center overflow-hidden'/>
        {/* <Fireworks /> */}
        <Sun />
        <div className='container h-[95vh] max-sm:h-[40rem]'>
          <div className='pt-32 flex flex-row-reverse max-sm:justify-center'>
            <div className='flex flex-col my-[13rem] max-sm:my-[8rem] max-sm:mx-4 titleBG'>
              <div className='text-white text-[6rem] font-thin max-sm:text-[3rem] max-sm:text-center '>
                Apple <span className='text-[#f3c143]'>Crafts</span>
              </div>
              <p className='text-[25px] max-sm:text-center max-sm:text-[1rem] max-sm:pb-3 max-sm:px-3'>
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