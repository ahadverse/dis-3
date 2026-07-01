import React from "react";
import {
  SiNextdotjs,
  SiShopify,
  SiWix,
  SiWordpress,
  SiReact,
  SiVite,
} from "react-icons/si";

const Logos = () => {
  return (
    <div className='grid grid-cols-2 gap-4 xl:grid-cols-6 sm:grid-cols-3 mt-10 items-center justify-between opacity-80'>
      <SiNextdotjs
        size={48}
        className='text-white transition-colors mx-auto duration-200 hover:opacity-90'
      />
      <SiShopify
        size={56}
        className='text-[#96BF48] transition-colors mx-auto duration-200 hover:opacity-90'
      />
      <SiWix
        size={56}
        className='text-white transition-colors mx-auto duration-200 hover:opacity-90'
      />
      <SiWordpress
        size={60}
        className='text-[#21759B] transition-colors mx-auto duration-200 hover:opacity-90'
      />
      <SiReact
        size={48}
        className='text-[#61DAFB] transition-colors mx-auto duration-200 hover:opacity-90'
      />
      <SiVite
        size={48}
        className='text-[#61DAFB] transition-colors mx-auto duration-200 hover:opacity-90'
      />
    </div>
  );
};

export default Logos;
