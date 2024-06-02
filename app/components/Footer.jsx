"use client";

import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Image from "next/image";
import mail from "../../public/msg.svg";
import call from "../../public/call.svg";
import fetchData from "../utils";

function Footer() {
  const [footerData, setFooterData] = useState();

  useEffect(() => {
    fetchData().then((data) => setFooterData(data.footer));
  }, []);

  return (
    <footer className='w-[100vw] flex justify-center'>
      {footerData && footerData.links && (
        <>
          <div className='w-[75vw] grid grid-cols-5 justify-items-center fir mt-[115rem] font-[play] absolute'>
            <div className='flex flex-col gap-2 items-start'>
              <Logo />
              <div className='flex gap-2 font-thin'>
                <Image src={mail} />
                {footerData.mail}
              </div>
              <div className='flex gap-2  font-thin'>
                <Image src={call} />
                {footerData.phone}
              </div>
            </div>
            <div className='sec grid'>
              <p className='text-[2.5vw] font-light'>
                {footerData.links.heading}
              </p>
              {footerData.links.content.map((elem, i) => (
                <p key={i} className='font-thin text-[1.3vw] m-1'>
                  {elem}
                </p>
              ))}
            </div>

            <div className='th grid'>
              <p className='text-[2.5vw] font-light'>
                {footerData.Legal.heading}
              </p>
              {footerData.Legal.content.map((elem, i) => (
                <p key={i} className='font-thin m-1 text-[1.3vw]'>
                  {elem}
                </p>
              ))}
            </div>

            <div className='fr grid'>
              <p className='text-[2.5vw] font-light'>
                {footerData.Product.heading}
              </p>
              {footerData.Product.content.map((elem, i) => (
                <p key={i} className='font-thin m-1 text-[1.3vw]'>
                  {elem}
                </p>
              ))}
            </div>

            <div className='fv grid'>
              <p className='text-[2.5vw] font-light'>
                {footerData.Newsletter.heading}
              </p>
              {footerData.Newsletter.content.map((elem, i) => (
                <p key={i} className='font-thin m-1 text-[1.3vw]'>
                  {elem}
                </p>
              ))}
              <div className='flex'>
                <input
                  type='text'
                  className='w-[8vw]'
                  placeholder='Your email'
                  id=''
                />
                <button className='bg-black p-1 px-4 text-white'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className='w-[80vw] text-center absolute mt-[130rem] pb-[3rem] font-[play] font-light'>
            <hr className='mb-[3rem] bg-[#50504f]' />
            {footerData.copyright}
          </div>
        </>
      )}
    </footer>
  );
}

export default Footer;
