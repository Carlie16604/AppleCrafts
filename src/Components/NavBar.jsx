import React, { useState } from "react";
import apple from '../assets/apple.svg';

const NavBar = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const [sticky, setSticky] = useState(false);

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
      };

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

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
                    <div className='flex navChange'>
                    <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
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
                    <div className='hamburger-menu'>
                        <span onClick={toggleMobileNav} className="hamburger-hamb">☰</span>
                    </div>
                        <div className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}>
                            <span onClick={toggleMobileNav} className="x-mobile" alt="Close">x</span>
                            <div className="mobile-links">
                                    <a onClick={toggleMobileNav} href="#Home">Home</a>
                                    <a onClick={toggleMobileNav} href="#Crafts">Crafts</a>
                                    <a onClick={toggleMobileNav} href="#Contact">Contact</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;