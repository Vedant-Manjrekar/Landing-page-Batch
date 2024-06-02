import React from "react";
import logo from "../../public/symbol.svg";
import text from "../../public/Vectorlogo.svg";
import Image from "next/image";

function Logo() {
  return (
    <div className='flex justify-center items-center gap-1 mr-7'>
      <Image src={logo} alt='logo' height={"30"} width={"30"} />
      <Image src={text} alt='logo' height={"60"} width={"60"} />
    </div>
  );
}

export default Logo;
