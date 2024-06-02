import React from "react";
import Image from "next/image";
import frame from "../../public/frame1.svg";

function GetStarted() {
  return (
    <div className='absolute mt-[83rem] w-[100vw]'>
      <Image
        className='right-0 left-0 m-auto'
        src={frame}
        width={900}
        height={900}
      />
    </div>
  );
}

export default GetStarted;
