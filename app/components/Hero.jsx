"use client";
import React, { useEffect, useState } from "react";
import fetchData from "../utils";
import elipses from "../../public/elipses.svg";
import p2 from "../../public/phones/p2.svg";
import p3 from "../../public/phones/p3.svg";
import p4 from "../../public/phones/p4.svg";
import p5 from "../../public/p5.svg";
import spot from "../../public/spot.svg";
import strip from "../../public/slip.svg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";

function Hero() {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setHeroData(data.hero));
  }, []);

  return (
    <div className='flex flex-col w-[100%]'>
      <div className='fir w-[50vw]'>
        {heroData && heroData.ctaButtons && heroData.ctaButtons.length > 0 && (
          <>
            <h1 className='headl capitalize w-[50vw] leading-[49px] tracking-tighter mt-[3rem] ml-[5rem]'>
              {heroData.headline}
            </h1>
            <Image
              src={spot}
              className='absolute top-[0rem] rotate-180 w-[20rem] h-[22rem] left-[10rem] -z-10'
            />
            <h2 className='subh ml-[5rem] mt-[1rem] text-[#878684]'>
              {heroData.subheadline}
            </h2>
            <div className='ml-[5rem] py-4 flex gap-3'>
              <button className='bg-black text-white p-3 px-7 rounded-sm flex items-center gap-3'>
                {heroData.ctaButtons[0].text}{" "}
                <FaArrowRightLong fontWeight={50} />
              </button>
              <button className='flex items-center gap-1'>
                {" "}
                <FaRegCirclePlay /> {heroData.ctaButtons[1].text}
              </button>
            </div>
            <Image src={strip} width={400} className='absolute ml-[5rem]' />
          </>
        )}
      </div>
      <div className='sec bottom-[3rem] top-3'>
        <Image
          className={`absolute top-[9rem] right-[-2rem] rotate-[-12deg]`}
          height={300}
          width={300}
          alt='p1'
          src={p5}
        />
        <Image
          className={`absolute top-[7rem] right-[0rem]`}
          height={300}
          width={400}
          alt='p1'
          src={p2}
        />
        <Image
          className={`absolute top-[5rem] right-[5rem]`}
          height={300}
          width={400}
          alt='p1'
          src={p3}
        />

        <Image
          className={`absolute top-[7rem] right-[34px] -z-10`}
          height={300}
          width={400}
          alt='p1'
          src={p4}
        />
        <Image
          className={`absolute top-[3rem] right-5 -z-10`}
          height={300}
          width={400}
          alt='elipses'
          src={elipses}
        />
      </div>
    </div>
  );
}

export default Hero;
