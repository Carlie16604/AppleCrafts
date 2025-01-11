import React, { useEffect, useState } from "react";
import validator from 'validator';
import anime from "animejs";
import ContactForm from "./Components/ContactForm";
// import mail from './assets/mail.svg';

const Contact = () => {

  useEffect(() => {
    const path = anime.path("#path");

    const timeline = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1000,
      complete: () => {
        anime({
          targets: ".leaf",
          rotate: 40,
          duration: 3000,
          loop: true,
          direction: "alternate",
          easing: "easeInOutQuad",
        });
        anime({
          targets: ".petals",
          scale: 1.05,
          duration: 6000,
          loop: true,
          direction: "alternate",
          easing: "easeInOutQuad",
        });
      },
    });

    timeline.add({
      targets: ".stem",
      scale: [0, 1],
    });

    timeline.add({
      targets: ".leaf",
      rotate: [0, 45],
    });

    timeline.add(
      {
        targets: ".petals",
        scale: [0, 1],
      },
      "-=1000"
    );

    timeline.add(
      {
        targets: "#bee",
        opacity: [0, 1],
      },
      "-=750"
    );

    anime({
      targets: "#bee",
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      loop: true,
      duration: 12500,
      easing: "linear",
    });
  }, []);

  return (
    <>
    <section id='Contact' className=' flowerContainer w-screen '>

        {/* <ContactForm /> */}
        <div className='flex flex-wrap'>
            <div className='flex flex-col gap-4'>
                {/* <div className='bg-[#f3f0ed] p-3 rounded-xl h-auto min-w-[250px] '>
                <p className="text-center font-semibold">Want something different?<br/>We do custom orders!<br/></p>
                </div> */}
                <div className='bg-[#f3f0ed] p-3 rounded-xl h-auto min-w-[250px] text-center'>
                <p className='pb-3'>Let's chat! </p>
                  {/* <svg src={mail} className='z-10 h-10 w-10' /> */}
                    <a href='mailto:applecraftings@gmail.com' className="font-bold hover:text-yellow-500 transition-all duration-[.23s]">applecraftings@gmail.com</a>
                </div>
            </div>
        </div>

        <svg id='flower' xmlns="http://www.w3.org/2000/svg" viewBox="-25 0 150 100" width="150" height="100">
            <defs>
            <mask id="mask-petals">
                <rect width="100" height="100" fill="hsl(0, 0%, 100%)" />
                <g transform="translate(50 40)">
                <g className="petals">
                    <circle r="11" fill="hsl(0, 0%, 0%)" />
                </g>
                </g>
            </mask>
            </defs>
            <g transform="translate(50 98)">
            <g className="stem" transform="scale(1 1)">
                <g fill="currentColor">
                <g className="leaf" transform="rotate(45)">
                    <path d="M 0 0 c 20 -8 15 -32 0 -42 -15 10 -20 34 0 42" />
                </g>
                <g transform="scale(-1 1)">
                    <g className="leaf" transform="rotate(45)">
                    <path d="M 0 0 c 20 -8 15 -32 0 -42 -15 10 -20 34 0 42" />
                    </g>
                </g>
                </g>
            </g>
            </g>

            <g mask="url(#mask-petals)">
            <g transform="translate(50 40)">
                <g fill="currentColor">
                <g className="petals">
                    <circle transform="translate(0 -14)" r="11" />
                    <circle transform="rotate(72) translate(0 -14)" r="11" />
                    <circle transform="rotate(144) translate(0 -14)" r="11" />
                    <circle transform="rotate(216) translate(0 -14)" r="11" />
                    <circle transform="rotate(288) translate(0 -14)" r="11" />
                </g>
                </g>
            </g>
            </g>

            {/* Define the path for the bee's movement */}
            <path
            id="path"
            stroke="none"
            fill="none"
            d="M -25 -20 a 30 30 0 0 0 60 0 30 30 0 0 0 -60 0 30 30 0 0 1 -60 0 30 30 0 0 1 60 0"
            />
        </svg>

        <svg id="bee" className='bee' viewBox="-10.5 -10.5 21 21" style={{ width: "50px", height: "auto" }}>
            <g transform="rotate(90) translate(0 -4)">
            <g stroke="currentColor">
                <circle fill="currentColor" r="4" strokeWidth="2.5" />
                <g fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path transform="rotate(45) translate(0 -4)" d="M 0 0 v -3" />
                <path transform="rotate(-45) translate(0 -4)" d="M 0 0 v -3" />
                <g fill="hsl(200, 80%, 90%)">
                    <path transform="rotate(15)" d="M 0 0 h 7 a 3 3 0 0 1 0 6 q -4 0 -7 -6" />
                    <path transform="scale(-1 1) rotate(15)" d="M 0 0 h 7 a 3 3 0 0 1 0 6 q -4 0 -7 -6" />
                </g>
                <g fill="hsl(50, 80%, 50%)">
                    <path d="M 0 0 c 2 6 8 10 0 12 -8 -2 -2 -6 0 -12" />
                </g>
                </g>
            </g>
            </g>
        </svg>
      </section>
    </>
  );
};

export default Contact;