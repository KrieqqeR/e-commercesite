import React from 'react'
import ProductCardLeft from "../assets/ProductCardLeft.jpg"
import PCRA from "../assets/PCRU.jpg"
import PCRU from "../assets/PCRA.jpg"

export default function ShopCards() {
    return (
        <div className='flex mb-40 justify-center gap-12 relative'>
            {/* Sol Taraf */}
            <div>
                <div>
                    <img src={ProductCardLeft} alt='CardLeft' />
                </div>
                <div className='absolute bottom-0 pt-[3.75rem] pr-[9.71rem] pb-[2.625rem] pl-[4.125rem] border-2 border-sky-500 bg-[#2D8BC0BF] bg-opacity-75' >
                    <p className='text-[1.5rem] text-white font-bold'>Top Product Of</p>
                    <p className='text-[1.5rem] text-white font-bold'>the Week</p>
                    <button className='mt-[1.25rem] border text-white font-bold px-[2.5rem] py-[0.94rem]'>EXPLORE ITEMS</button>
                </div>

            </div>
            {/* Sağ Taraf */}
            <div>
                <div>
                    <img src={PCRU} />
                </div>
                <div className='absolute bottom-[17.8rem] pr-[9.71rem] pb-[2.625rem] pl-[4.125rem] border-2 border-sky-500 bg-[#2D8BC0BF] bg-opacity-75 py-4' >
                    <p className='text-[1.25rem] text-white'>Top Product Of the Week</p>
                    <button className='mt-[1.25rem] border text-white font-bold px-[2.5rem] py-[0.94rem]'>EXPLORE ITEMS</button>
                </div>

                <div className='mt-6 relative'>
                    <img src={PCRA} />
                    <div className='absolute bottom-0 left-0 right-[20%] top-[30%] flex flex-col justify-center items-center  border-2 border-sky-500 bg-[#2D8BC0BF] bg-opacity-75' >
                        <p className='text-[1.25rem] text-white'>Top Product Of the Week</p>
                        <button className='mt-[1.25rem] border text-white font-bold px-[2.5rem] py-[0.94rem]'>EXPLORE ITEMS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
