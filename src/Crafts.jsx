import  React from "react";
import { Link } from 'react-router-dom';
import { classes } from './data/crafts.js';
const Classes = () => {

    const rotateCard = (card) => {
        const cardInner = card.querySelector('.card-inner');
        cardInner.classList.toggle('rotated');
      }

    return (
        <section id='#Crafts'>
            <div className='container'>
                    <div className='flex-wrap mb-14 mx-24 relative'>
                        <h1 className='pt-24 text-black text-[65px] flex stroke-black font-medium flex-row-reverse'>What we Offer</h1>
                        <span className='absolute w-[5.5rem] h-[4px] my-[-15px] bg-[#949978] right-0'/>
                    </div>
                    <div className='cardContainer'>
                        {classes.map((info) => (
                            <div key={info.id} className={info.id % 2 !== 0 ? 'card-deck' : 'card-deck pt-24'}>
                                <div className='card'>
                                    <div className='card-inner' onClick={rotateCard}>
                                        <div className='card-front'>
                                            <img className='imgWrap rounded-tl-[100px]' src={info.img} alt={info.name} />
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