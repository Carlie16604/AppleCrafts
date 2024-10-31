import  React from "react";
import { Link } from 'react-router-dom';
import { classes } from './data/crafts.js';
const Classes = () => {

    const rotateCard = (card) => {
        const cardInner = card.querySelector('.card-inner');
        cardInner.classList.toggle('rotated');
      }

    return (
        <section id='Crafts'>
            <div className='container'>
                    <div className='flex-wrap mb-14 mx-12 relative'>
                        <h1 className='pt-12 text-black text-[65px] flex stroke-black font-light max-sm:pt-20 max-sm:text-[50px]'>What we Offer</h1>
                        <span className='absolute w-[5.5rem] h-[4px] my-[-15px] bg-[#f3c143] max-sm:my-[-5px]'/>
                    </div>
                    <div className='cardContainer pb-12 max-sm:pb-2'>
                        {classes.map((info) => (
                            <div key={info.id} className={info.id % 2 !== 0 ? 'card-deck' : 'card-deck pt-12'}>
                                <div className='card'>
                                    <div className='card-inner'>
                                        <div className='card-front'>
                                            <img className='imgWrap rounded-tl-[100px]' src={info.img} alt={info.name} />
                                            <button onClick={rotateCard} className='book py-3 px-5 w-fit self-center text-black bg-[#D4CFC9] border-2 rounded-[400px] border-[#fff] inline-block text-[14px] tracking-[1px] cursor-pointer shadow-[inset_0_0_0_0_#DFDCD8] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#D4CFC9] hover:text-white z-10'>
                                                <a href='#Contact'>${info.price}</a>
                                            </button>
                                        </div>
                                        <div className='card-back rounded-tr-[100px]'>
                                            <img className='imgWrap flex scale-x-[-1] brightness-50 rounded-tl-[100px]' src={info.img} alt={info.name} />
                                                <div className='overlay pt-[8.5rem] px-[1rem] text-[17px] cursor-default'>
                                                    <p>{info.description}</p><br/>
                                                    <p>{info.price}</p>
                                                </div>
                                    </div>
                                </div>
                                <div className='adjectives'>
                                    {info.adjectives.map((adj, index) => (
                                        <p key={index}>{adj}</p>
                                    ))}
                                </div>
                                    <h3 className='classType'>{info.name}</h3>
                                </div>
                            </div> 
                        ))}
                    </div>
                {/* </div> */}
            </div>
        </section>
    )
}

export default Classes;