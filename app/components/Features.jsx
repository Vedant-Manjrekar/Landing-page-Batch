"use client";
import React, { useState, useEffect } from "react";
import p3 from "../../public/phones/p3.svg";
import elipses from "../../public/elipses.svg";
import star from "../../public/star-b.svg";
import cube from "../../public/cube.svg";
import cube3d from "../../public/cube3d.svg";
import spot from "../../public/spot.svg";
import Image from "next/image";
import fetchData from "../utils";

function Features() {
  const [featuresData, setFeaturesData] = useState();

  useEffect(() => {
    fetchData().then((data) => setFeaturesData(data.features));
  }, []);

  return (
    <div className=' mt-[20rem] flex'>
      <div className='fir'>
        <Image
          className='rotate-[15deg] left-[5rem] z-10 absolute'
          height={300}
          width={400}
          src={p3}
        />
        <Image
          className='rotate-[15deg] left-[-1rem] -z-20 absolute'
          height={300}
          width={400}
          src={spot}
        />
        <Image
          className='absolute left-[2rem] -z-10'
          height={300}
          width={400}
          src={elipses}
        />
      </div>
      <div className='sec flex justify-self-end flex-col right-[5rem] mt-[4rem] absolute font-[Play]'>
        {featuresData && featuresData.features && (
          <>
            <h1 className='w-max text-[#ff5655] font-thin tracking-[4px]'>
              {featuresData.headline.toUpperCase()}
            </h1>
            <Image
              className='rotate-[15deg] right-[-10rem] -z-20 absolute'
              height={300}
              width={400}
              src={spot}
            />
            <h1 className=' w-max capitalize text-[4vw] leading-[3rem]'>
              {featuresData.subheadline}
            </h1>

            <div className='w-[40vw]'>
              {featuresData.points.map((elem) => (
                <>
                  <div className='flex mt-[3vh] gap-2 text-[1.5vw]'>
                    <Image
                      src={
                        (elem == "cube" && cube) ||
                        (elem == "star" && star) ||
                        (elem == "cube3d" && cube3d)
                      }
                      width={20}
                      height={20}
                    />
                    <p className='capitalize'>
                      {featuresData.features[0].head}
                    </p>
                  </div>
                  <p className='mt-[2vh] font-thin text-[#878684]'>
                    {featuresData.features[0].desc}
                  </p>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Features;
