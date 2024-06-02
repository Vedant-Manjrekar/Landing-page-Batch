"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import p2 from "../../public/phones/p2.svg";
import spot from "../../public/spot.svg";
import elipses from "../../public/elipses.svg";
import bell from "../../public/bell.svg";
import fetchData from "../utils";

function Advantages() {
  const [advantagesData, setAdvantagesData] = useState();

  useEffect(() => {
    fetchData().then((data) => setAdvantagesData(data.advantages));
  }, []);

  return (
    <div className='w-[40vw] mt-[39rem] flex'>
      {advantagesData && advantagesData.headline && (
        <div className='fir w-[40vw] flex justify-self-end flex-col left-[7rem] mt-[4rem] absolute font-[Play]'>
          <h1 className='w-max text-[#ff5655] font-thin tracking-[4px]'>
            {advantagesData.headline.toUpperCase()}
          </h1>
          <h1 className=' w-max capitalize font-bold text-[4vw] leading-[3rem] tracking-[-1px]'>
            {advantagesData.subheadline}
          </h1>
          <div className='flex mt-[3vh] gap-2 text-[2vw]'>
            <Image alt='bell' src={bell} width={30} height={30} />
            <p className='capitalize'>{advantagesData.title}</p>
          </div>
          <p className='mt-[2vh] font-thin text-[#878684]'>
            {advantagesData.desc}
          </p>
        </div>
      )}

      <div className='sec'>
        <Image
          alt='img'
          className='rotate-[15deg] right-[5rem] z-10 absolute'
          height={300}
          width={400}
          src={p2}
        />
        <Image
          alt='img'
          className='rotate-[15deg] right-[9rem] -z-20 absolute'
          height={300}
          width={400}
          src={spot}
        />
        <Image
          alt='img'
          className='absolute right-[8rem] -z-10'
          height={300}
          width={400}
          src={elipses}
        />
      </div>
    </div>
  );
}

export default Advantages;
