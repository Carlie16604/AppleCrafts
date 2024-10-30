import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    
    const HomePage = location.pathname === '/';

    const goTop = () => {
        window.scrollTo({
          top: 0,
        });
      };


    return (
        <>
            <div className='p-0 w-full fixed z-100 shadow-xl min-w-[1200px] backdrop-blur-sm flex justify-center'>
                <div className='px-10 py-2'> 
                    <div className='flex justify-center'>
                        <ul className='font-medium cursor-pointer text-xl'>
                            <a href='#About'>
                                <div>About</div>
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