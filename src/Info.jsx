import React from 'react';
import './input.css';
import Test from './assets/Extra/test.jpg';

const Info = () => {
    return (
        <section id='Info'>
            <div className='container'>
                <div className='flex justify-center pt-16 cursor-default'>
                    <div className='flex gap-20'>
                        <img className='img-about' src={Test} alt='test pic'/> 
                            <div className='flex-wrap'>
                                <h4 className='text-[50px] font-thin pt-12 overflow-hidden py-8'>Shop!</h4>
                                <p className='text-[25px] max-sm:text-center max-sm:text-[1rem] max-sm:pb-3 max-sm:px-3'>As of recent, Apple Crafts has expanded into a boutique located at 
                                    <span className='font-bold text-center max-sm:pb-3 max-sm:px-3'> Grounds for Dismissal </span> 
                                located in Aurora, CO! Feel free to stop by, enjoy some coffee and forage for a new statement piece!</p>
                                {/* <p className='text-about'>I specialize in designing dynamic and captivating interfaces, employing clean and efficient coding practices, and harnessing the latest development tools and methodologies. Additionally, I am a collaborative team player, thriving in cross-functional environments and contributing to the development of outstanding web applications.</p> */}
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info;