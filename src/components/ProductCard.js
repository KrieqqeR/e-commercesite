import React from 'react'
import kızResim from "../assets/KızEnüst.png"
import kucukBeyaz from "../assets/kucukbeyaz.png"
import buyukBeyaz from "../assets/buyukBeyaz.png"

export default function ProductCard() {
    return (
        <div className='flex h-[40rem] bg-gradient-to-br from-[#96E9FB] to-[#ABECD6] rounded-[1.25rem] mt-20 mx-20'>
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
            <div>
                <img src={kucukBeyaz} className='absolute pl-60'></img>
                <img src={buyukBeyaz} className='absolute right-12 z-1'></img>
                <img className='w-[42.2rem] h-[42.2rem] absolute right-4 top-40 z-2' src={kızResim} alt='Resim'></img>
            </div>
        </div>
    )
}
