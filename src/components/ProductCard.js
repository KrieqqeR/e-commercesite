import React from 'react'
import kızResim from "../assets/KızEnüst.png"
import kucukBeyaz from "../assets/kucukbeyaz.png"
import buyukBeyaz from "../assets/buyukBeyaz.png"

export default function ProductCard() {
    return (
        <div className='flex md:h-[40rem] h-[50rem] bg-gradient-to-br from-[#96E9FB] to-[#ABECD6] rounded-[1.25rem] mt-20 mx-20'>
            {/* İç kısım 2 dive ayırdım... Sol ve Sağ Olarak */}
            <div className='flex w-1/2 h-full'>
                <div className='m-auto'>
                    <div className='w-full'>
                        <h1 className='text-base text-[#2A7CC7] font-bold'>SUMMER 2023</h1>
                        <h1 className='text-[3.625rem] font-bold text-[#252B42]'>NEW COLLECTION</h1>
                        <p className='text-xl font-semibold text-[#737373]'>We know how large objects will act,
                        </p>
                        <p className='text-xl font-semibold text-[#737373]'> 
                        but things on a small scale.
                        </p>
                        <button className="px-[2.5rem] py-[1rem] bg-[#23A6F0] rounded mt-5 text-white font-bold text-[1.5rem]">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap flex-col'>
                <img src={kucukBeyaz} className='md:absolute md:pl-60 hidden'></img>
                <img src={buyukBeyaz} className='md:absolute md:right-12 md:z-1 hidden'></img>
                <img className='md:w-[42.2rem] md:h-[42.2rem] h:[10rem] md:absolute md:right-4 md:top-40 md:z-2  w-[20rem] ' src={kızResim} alt='Resim'></img>
            </div>
        </div>
    )
}
