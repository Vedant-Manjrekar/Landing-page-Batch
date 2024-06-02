"use client";

import React, { useState, useEffect } from "react";
import fetchData from "../utils";

function FAQ() {
  const [faqData, setFaqData] = useState();

  useEffect(() => {
    fetchData().then((data) => setFaqData(data.faq));
  }, []);

  return (
    <div className='mt-[30rem] font-[Play] absolute w-[100vw] leading-[3rem]'>
      {faqData && faqData.headline && (
        <div className='left-[7rem] absolute'>
          <h1 className='w-max text-[#ff5655] font-normal tracking-[4px]'>
            {faqData.headline.toUpperCase()}
          </h1>
          <h1 className='text-[4vw] capitalize w-[40vw]'>
            {faqData.subheadline}
          </h1>

          <div className='grid grid-cols-2 gap-7'>
            {faqData.questElems.map((elem, i) => (
              <div
                className={`${
                  i == 1 || i == 2 || i == 5
                    ? "bg-[white] && text-black"
                    : "bg-[#ff5655] && text-white"
                } w-[40vw] p-5 rounded-md mt-[2rem]`}
              >
                <h1 className='text-[2vw] capitalize leading-[2rem]'>
                  {faqData.quests[0]}
                </h1>
                <p
                  className={`leading-[1rem] font-thin mt-2 ${
                    (i == 1 || i == 2 || i == 5) && "text-[#878684]"
                  }`}
                >
                  {faqData.quests[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FAQ;
