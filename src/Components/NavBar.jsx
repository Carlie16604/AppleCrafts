import React from "react";
import apple from '../assets/apple.svg';

const NavBar = () => {

    const goTop = () => {
        window.scrollTo({
          top: 0,
        });
      };


    return (
        <>
            <div className='p-0 w-full fixed z-10 shadow-xl min-w-[1200px] backdrop-blur-sm flex justify-center'>
                <div className='px-10 py-2'> 
                    <img className='h-14 w-14 absolute left-[3%] hover:cursor-pointer' src={apple} alt='applecrafts logo' onClick={goTop}/>
                    <div className='flex justify-center'>
                        <ul className='font-medium cursor-pointer text-xl'>
                            <a href='#Home'>
                                <div>Home</div>
                            </a>
                            <a href='#Crafts'>
                                <div>Crafts</div>
                            </a>
                            <a href='#Contact'>
                                <div>Contact</div>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;