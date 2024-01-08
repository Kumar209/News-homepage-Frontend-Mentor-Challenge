// eslint-disable-next-line no-unused-vars
import React from 'react';
import image1 from './assets/images/image-retro-pcs.jpg';
import image2 from './assets/images/image-top-laptops.jpg';
import image3 from './assets/images/image-gaming-growth.jpg';

const Trending = () => {
  return (
    <main role='main' className='flex flex-col flex-wrap gap-x-12 md:flex-row mt-10 px-10 pb-20 w-full justify-between '>

      <div className='flex flex-row gap-5 w-[100%] sm:w-[350px] mb-10 lg:mb-0 md:pr-0'>
        <div className='w-[70%] sm:w-[35%]'>
            <img className='h-full '  src={image1} alt="image1" />
        </div>
        <div className='w-[65%]'>
            <h2 className='font-Inter font-bold text-gray-300 text-4xl mb-2 cursor-pointer'>01</h2>
            <h3 className='font-Inter font-extrabold text-lg cursor-pointer hover:text-SoftRed mb-2'>Reviving Retro PCs</h3>
            <p className='font-Inter text-gray-400 text-sm cursor-pointer'>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>


      <div className='flex flex-row gap-5 w-[100w] sm:w-[350px] mb-10 lg:mb-0  md:pr-0'>
        <div className='w-[70%] sm:w-[35%]'>
            <img className='h-full' src={image2} alt="image2" />
        </div>
        <div className='w-[65%]'>
            <h2 className='font-Inter font-bold text-gray-300 text-4xl mb-2 cursor-pointer'>02</h2>
            <h3 className='font-Inter font-extrabold text-lg cursor-pointer hover:text-SoftRed mb-2'>Top 10 Laptops of 2022</h3>
            <p className='font-Inter text-gray-400 text-sm cursor-pointer'>Our best picks for various needs and budgets.</p>
        </div>
      </div>


      <div className='flex flex-row gap-5 w-[100w] sm:w-[350px] md:pr-0'>
        <div className='w-[70%] sm:w-[35%]'>
            <img className='h-full' src={image3} alt="image3" />
        </div>
        <div className='w-[65%]'>
            <h2 className='font-Inter font-bold text-gray-300 text-4xl mb-2 cursor-pointer'>03</h2>
            <h3 className='font-Inter font-extrabold text-lg cursor-pointer hover:text-SoftRed mb-2'>The Growth of Gaming</h3>
            <p className='font-Inter text-gray-400 text-sm cursor-pointer'>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>


    </main>
  )
}

export default Trending
