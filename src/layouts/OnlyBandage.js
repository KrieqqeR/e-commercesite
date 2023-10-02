import React from 'react'

export default function OnlyBandage() {
  return (
    
         <div className="mt-8 w-[90rem] mx-auto">
                <div className="text-black flex justify-between items-center text-center ml-16">
                    <h1 className="text-[1.5rem] font-bold text-[#252B42]">Bandage</h1>
                    <div className="flex gap-5 mr-80 mt-1">
                        <a className="text-[#737373] font-bold" href="#">Home</a>
                        <a className="text-[#737373] font-bold" href="#">Product</a>
                        <a className="text-[#737373] font-bold" href="#">Pricing</a>
                        <a className="text-[#737373] font-bold" href="#">Contact</a>
                    </div>
                    <div className='flex gap-16 items-center text-center justify-center relative'>
                        <h5 className='cursor-pointer text-[#23A6F0] font-semibold'>Login</h5>
                        <button className='py-[0.94rem] px-[2rem] pr-12 rounded-md bg-[#23A6F0] text-[#FFFFFF]'>
                            Become a Member
                        </button>
                        <img src="https://file.rendit.io/n/ojwfStaZGYGdnC7qem2f.svg" className='absolute right-2 w-4 h-4 top-5'/>
                    </div>
                </div>
            </div>
    
  )
}
